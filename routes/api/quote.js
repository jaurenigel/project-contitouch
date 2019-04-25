const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

// quote model
const Quote = require('../../models/Quote');

router.get('/quote', (req, res) => {
    Quote.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/quote', (req, res) => {
   const {
    rfq_number,
    rfq_date,
    rfq_desc,
    rfq_condition,
    rfq_date_close,
    rfq_item_id,
    rfq_item_amount,
    rfq_item_desc,
    employee_name } = req.body
    
    const quote = new Quote({
        _id: new mongoose.Types.ObjectId(),
        rfq_number:rfq_number,
        rfq_date: rfq_date,
        rfq_desc: rfq_desc,
        rfq_condition: rfq_condition,
        rfq_date_close: rfq_date_close,
        rfq_item_id: rfq_item_id,
        rfq_item_amount: rfq_item_amount,
        rfq_item_desc: rfq_item_desc,
        employee_name:employee_name
    });
    quote.save()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.get('/quote/:quoteId', (req, res) => {
    const id = req.params.quoteId;
    Quote.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

router.patch('/quote/:quoteId', (req, res) => {
    const id = req.params.quoteId;
    const updateOperation = {};

    for (const operation of req.body){
        updateOperation[operation.propName] = operation.value;
    }

    Quote.update({_id:id}, {$set: updateOperation})
    .exec()
    .then(result => {;
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});

router.delete('/quote/:quoteId', (req, res) => {
    const id = req.params.quoteId;
    Quote.deleteOne({_id:id})
        .exec()
        .then(result => {;
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

module.exports = router;