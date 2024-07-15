const mongoose = require('mongoose');
const Outcome=require('../models/Outcome.js');

const getProductFromOutcome=async(req,res)=>{
    try {
        const outcomeName = decodeURIComponent(req.params.outcomeName);
        const outcome = await Outcome.findOne({ outcome: outcomeName });
        console.log(outcomeName);
        if (!outcome || !outcomeName) {
          return res.status(404).json({ message: 'Outcome not found' });
        }
        res.json(outcome);
      } catch (error) {
        console.error('Error fetching outcome:', error);
        res.status(500).json({ message: 'Server error' });
      }
    };



module.exports={
getProductFromOutcome
}