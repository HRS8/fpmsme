import express from 'express';
import {
  test,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import Remainder from '../models/remainder.model.js';
import twilio from 'twilio';
const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/remainder', async (req, res) => {
  try{
    const {email,clientName,phoneNumber,amountOwed,dateDue} = req.body;
    const newRemainder = new Remainder({email,clientName,phoneNumber,amountOwed,dateDue});
    await newRemainder.save();
    const accountSid = 'AC0c0aceb3d9fe7174566912bb9a7cfde7';
    const authToken = 'a6a7bd7dda1bf26f35b38cc9c1aadf3e';
    const client = twilio(accountSid, authToken);
//30 dya first remainder msg: first remiander amound owed
//due date
//following every day
    try{
        client.messages
        .create({
            body: 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/',
            sendAt: new Date(Date.now() + 1000 * 60 * 15),
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919963670263',
        })
        .then(message => console.log(message.sid))
        .done();
    }catch(error){
        console.log(error);
    }
    res.json(newRemainder);
  }catch(error){
    res.json({message:error.message});
  }

});
router.get('/sendmessage', async (req, res) => {
});
//
export default router;
