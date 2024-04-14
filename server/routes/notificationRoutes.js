import express from "express";
import Notification from "../mongoDb/notificationSchema.js";
import { Types } from "mongoose";

const router = express.Router();
router.get("/get",async (req,res,next)=>{
    try{
        const NotiData = Notification.find({to:"Admin",read:false});
        if(NotiData){
            res.status(200).json({NotiData});
        }else{
            res.status(200).json({flag:false});
        }
    }catch (err){
        console.err(err);
        next(err); 
    }
})

router.post("/set",async (req,res,next)=>{
    try{
        const body = {
            to: req.body.To,
            from: new Types.ObjectId(req.body.from),
            body: req.body.Body,
        }
        const Noti = await Notification(body);
        await Noti.save();
        res.status(201).json({ message: "Notification Sent" });
    }catch (err){
        console.err(err);
        next(err); 
    }
})

export default router;
