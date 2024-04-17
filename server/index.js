import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connect from "./mongoDb/connect.js";
import searchRoutes from "./routes/searchroutes.js";
import testRoute from "./routes/testRoute.js"
import siginRoute from "./routes/siginRoute.js"
import Shop from "./routes/user_res_data.js";
import Shops from "./mongoDb/Shop_reg_Schema.js"
import Transaction from  "./routes/shop_transection.js";
import Feedback from "./routes/feedback_route.js";
import Ingredient from "./routes/ingredient_shop.js";
import MenuItem from "./routes/menu_item_routes.js";
import Order from "./routes/order_item_routes.js";
import Table from "./routes/table_shop_routes.js";
import Reservation from "./routes/reservation_routes.js";
import tests from "./mongoDb/testSchema.js";
import Notification from "./routes/notificationRoutes.js"
import cartRoutes from "./routes/cartRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'100mb'}));

app.use('/api/v1/',testRoute);
app.use('/api/v1/user',siginRoute)
app.use('/api/v1/Userreg',Shop)
app.use('/api/v1/search',searchRoutes);
app.use('/api/v1/transaction',Transaction);
app.use('/api/v1/shopfeedback',Feedback);
app.use('/api/v1/ingredients',Ingredient);
app.use('/api/v1/menuitems',MenuItem);
app.use('/api/v1/orders',Order);
app.use('/api/v1/tables',Table);
app.use('/api/v1/reservations',Reservation);
app.use('/api/v1/notification',Notification);
app.use('/api/v1/cart',cartRoutes);





app.get('/api/v1/shops', async (req, res) => {
    try {
        // Fetch data from MongoDB (example using Mongoose)
        const shops = await Shops.find(); // Assuming Shop is your Mongoose model for shops

        // Send the fetched data as a response
        res.json(shops);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.get('/api/v1/customer', async (req, res) => {
    try {
        // Fetch data from MongoDB (example using Mongoose)
        const customer = await tests.find({role:{$ne:'Admin'}}); 

        // Send the fetched data as a response
        res.json(customer);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});



const startServer = async ()=>{
    try{
        connect(process.env.MONGODB_URI);
        app.listen(process.env.PORT,()=>{
            console.log(`Server started on port ${process.env.PORT}`);
        })
    }catch (error){
        console.log(error)
    }
}
startServer()