const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // rfq_number: String,
    // rfq_date: Date,
    // rfq_desc: String,
    // rfq_condition: String,
    // rfq_date_close: Date,
    // rfq_item_id: String,
    // rfq_item_amount: String,
    // rfq_item_desc: String,
    // employee_name: String,

    rfq_number:{
        type:String
    },
    rfq_date:{
        type: Date
    },
    rfq_desc:{
        type: String
    },
    rfq_condition:{
        type: String
    },
    rfq_date_close:{
        type: Date
    },
    rfq_item_id:{
        type: String
    },
    rfq_item_amount:{
        type: Number
    },
    rfq_item_desc:{
        type: String
    },
    employee_name:{
        type: String
    },
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;