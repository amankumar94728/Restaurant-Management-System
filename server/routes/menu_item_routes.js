import express from 'express';
import multer from 'multer';
import fs from 'fs';
import MenuItem from '../mongoDb/menu_item_schema.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to add a new menu item
router.post('/menu-items', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, category, availability , quantity} = req.body;

        const newItem = new MenuItem({
            name,
            description,
            price,
            category,
            availability, 
            quantity,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
        });

        await newItem.save();

        res.status(201).json({ message: 'Menu item added successfully' });
    } catch (error) {
        console.error('Error adding menu item:', error);
        res.status(500).json({ error: 'Error adding menu item' });
    }
});

// Route to update a menu item
router.patch('/menu-items/:id', upload.single('image'), async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const { name, description, price, category, availability, quantity } = req.body;

        const updatedItem = {
            name,
            description,
            price,
            category,
            availability,
            quantity,
        };

        const updatedMenuItem = await MenuItem.findByIdAndUpdate(
            menuItemId,
            { $set: updatedItem },
            { new: true }
        );

        if (!updatedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json({ message: 'Menu item updated successfully', menuItem: updatedMenuItem });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Error updating menu item' });
    }
});

// Route to delete a menu item
router.delete('/menu-items/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const deletedMenuItem = await MenuItem.findByIdAndDelete(menuItemId);

        if (!deletedMenuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Error deleting menu item' });
    }
});

// Route to get all menu items
router.get('/menu-items', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Error fetching menu items' });
    }
});

export default router;

