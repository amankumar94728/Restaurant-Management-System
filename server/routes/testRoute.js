// import express from 'express';
// import bodyParser from 'body-parser';
// import User from '../mongoDb/testSchema.js';

// const router = express.Router();

// // Middleware to parse JSON data in the request body
// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

// // Route to handle form submission
// router.post('/Sgup', async (req, res) => {
//   console.log(req.body); // Log the form data to the console

//   const { name } = req.body;
//   const test = new User({ name });

//   try {
//     await test.save();
//     res.status(200).json({ message: 'User saved successfully' });
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).json({ error: 'Error saving user' });
//   }
// });

// export default router;
import express from 'express';
import bodyParser from 'body-parser';
import User from '../mongoDb/testSchema.js';

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Route to handle form submission
router.post('/Sgup', async (req, res) => {
  try {
    const fName =req.body.fname; 
    const lName=req.body.lname;
    const email=req.body.email;
    const password = req.body.password;
    const role= req.body.role;

    // Create a new user instance
    const newUser = new User({
      fName,
      lName,
      email,
      password,
      role,
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

