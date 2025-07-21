import Contact from "../models/contactModel.js";

export const SubmitContactForm = async (req, res, next) => {
  try {
    const { name, email, contact } = req.body;


    if (!name || !email || !contact) {
      const error = new Error("All fields are required.");
      error.statusCode = 400;
      return next(error);
    }

   

    const newContact = await Contact.create({ name, email, message:contact });

    console.log("New contact form submission:", newContact);
    
    res.status(200).json({
      message: "Thank you for contacting us!",
      data: newContact,
    });
  } catch (error) {
    next(error);
  }
};