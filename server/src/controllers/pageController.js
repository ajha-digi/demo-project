import { Page } from '../models/Page';

export const getAllPagesByRoute = async (req, res) => {
  try {
    const route = req.params.route;
    const pages = await Page.find({ page: route });

    // const defaultContentType = 'image/jpeg';

    // Modify the pages to customize the response format
    const modifiedPages = pages.map((page) => ({
      title: page.title,
      page: page.page,
      css: page.css,
      html: page.html,
      category: page.category,
      updatedBy: JSON.parse(page.updatedBy),


    //  imageDataUrl: `data:${page.imageType || defaultContentType};base64,${Buffer.from(page.imageData).toString('base64')}`

      // imageDataUrl: `data:image/jpeg;base64,${page.imageData.toString('base64')}`,
      // imageDataUrl: `data:${page.imageType ? page.imageType: defaultContentType};base64,${encodeURIComponent(page.imageData.toString('base64'))}`,
    }));

    res.status(200).json(modifiedPages);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching pages' });
  }
};
