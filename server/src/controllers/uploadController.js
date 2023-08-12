import { Page } from '../models/Page';
import { getFileContentType } from '../util';

export const uploadFile = async (req, res) => {
  try {
    const { title, page, flag } = req.body;
    const imageData = req.file.buffer; // The actual image data
    const user = req.user;

      // Extract the file extension from the original filename
      const originalFilename = req.file.originalname;
      const fileExtension = originalFilename.split('.').pop().toLowerCase(); // Get the extension in lowercase
  
      // Determine the content type based on the file extension
      const contentType = getFileContentType(fileExtension);

    // Find an existing page with the same content
    const existingPage = await Page.findOne({ page });

    if (existingPage) {
      // Update the existing page with the new data
      existingPage.title = title; // Update the title if needed
      existingPage.flag = flag;
      existingPage.imageData = imageData;
      existingPage.imageType = fileExtension;
      existingPage.updatedBy = JSON.stringify(user); 
      await existingPage.save();
    } else {
      // Create a new page
      const newPage = new Page({
        title,
        page,
        flag,
        imageData,
        imageType: fileExtension, 
        updatedBy: JSON.stringify(user),
      });
      await newPage.save();
    }

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while uploading the file' });
  }
};
