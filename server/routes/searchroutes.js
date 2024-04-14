import express from 'express';
import Shop from '../mongoDb/Shop_reg_Schema.js';
const router = express.Router();

router.post('/shopName',async (req,res)=>{
    const name = req.body.name;
    const result = Shop.findOne({registrationName:name})
    if(result){
        res.json({result})
    }else{
        res.json({"message":false});
    }
})

export default router;