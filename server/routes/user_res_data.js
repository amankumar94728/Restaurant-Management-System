

// export default router;
import express from 'express';
import bodyParser from 'body-parser';
import Shop from '../mongoDb/Shop_reg_Schema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle form submission
router.post('/Userreg', async (req, res) => {
  try {
    const shopName =req.body.sname; 
    const ownerName=req.body.Oname;
    const email=req.body.email;
    const phoneNumber = req.body.phoneNo;
    const address = req.body.add;
    const city=req.body.city;
    const state=req.body.state;
    const zipCode=req.body.zipcode;
    const gstNumber=req.body.gstno;
    const country=req.body.country;
    const shopLogoUrl= req.body.img;
    const registrationName=req.body.registration;

    // Create a new user instance
    const newUser = new Shop({
      shopName,
      ownerName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zipCode,
      gstNumber,
      country,
      shopLogoUrl,
      registrationName,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(200).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error saving user' });
  }
});

export default router;


