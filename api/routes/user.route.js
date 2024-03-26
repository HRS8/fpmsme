import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import Remainder from '../models/remainder.model.js';
import twilio from 'twilio';
import dotenv from 'dotenv';
import { env } from 'process';
const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/remainder', async (req, res) => {
  console.log('hii')
    const {email,clientName,phoneNumber,amountOwed,dateDue} = req.body;
    const newRemainder = new Remainder({email,clientName,phoneNumber,amountOwed,dateDue});
    await newRemainder.save();
    const accountSid = process.env.TWILIO_SID;
    const authToken = process.env.TWILIO_AUTH;
    const client = twilio(accountSid, authToken);
    try{
        console.log('sending message');
        client.messages
        .create({
            body: 'This is gentle remainder for the current order due to MSME merchant',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919885133855',
        })
        .then(message => console.log(message.sid))
        .done();
    }catch(error){
        console.log(error);
    }
    res.json(newRemainder);

});
router.get('/sendmessage', async (req, res) => {
});
//
export default router;
