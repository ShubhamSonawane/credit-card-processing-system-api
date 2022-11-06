const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    let creditCards = req.app.db.get('creditCards').value();

    return res.send({ status: "200", cards: creditCards});

});


router.post('/add-card', async (req,res) => {

    const { body } = req
    const card = {
        id:nanoid(idLength),
        balance: 0,
        ...body
    };

    try {

        await req.app.db.get("creditCards").push(card).write();
        
        return res.send({ status: "201", message: "Card added successfully"});

    }catch(error){

        return res.sendStatus(500).send(error);
    }
});

module.exports = router;