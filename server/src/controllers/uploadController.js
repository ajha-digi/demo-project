import { Page } from "../models/Page";
// import { getFileContentType } from '../util';

export const uploadFile = async (req, res) => {
  try {
    const { title, page, css, html, category } = req.body;
    const user = req.user;

    // Find an existing page with the same content
    const existingPage = await Page.findOne({ page });

    if (existingPage) {
      existingPage.title = title;
      existingPage.css = css;
      existingPage.html = html;
      existingPage.category = category;
      existingPage.page = page;
      existingPage.updatedBy = JSON.stringify(user);
      await existingPage.save();
    } else {
      // Create a new page
      const newPage = new Page({
        title,
        page,
        css,
        html,
        category,
        updatedBy: JSON.stringify(user),
      });
      await newPage.save();
    }

    res.status(200).json({ message: "Dashboard data submitted !!", data: { title, page, css, html, category } });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while Submitting the data" });
  }
};
