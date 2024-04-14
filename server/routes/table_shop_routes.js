
import express from 'express';
//import bodyParser from 'body-parser';
import Table from '../mongoDb/table_schema.js'
const router = express.Router();

// Route to get all tables
router.get('/tables', async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to create a new table
router.post('/tables', async (req, res) => {
    const table = new Table({
        tableNumber: req.body.tableNumber,
        capacity: req.body.capacity,
    });

    try {
        const newTable = await table.save();
        res.status(201).json(newTable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update table status
router.patch('/tables/:id', async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (table == null) {
            return res.status(404).json({ message: 'Table not found' });
        }

        if (req.body.status != null) {
            table.status = req.body.status;
        }

        const updatedTable = await table.save();
        res.json(updatedTable);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a table
router.delete('/tables/:id', async (req, res) => {
    try {
        const table = await Table.findById(req.params.id);
        if (table == null) {
            return res.status(404).json({ message: 'Table not found' });
        }

        await table.remove();
        res.json({ message: 'Table deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
