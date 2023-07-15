const mongoose = require('mongoose');
const bill = mongoose.model('bill'); //s

exports.list_all_bill = async (req, res) =>{
    try {
        const bills = await bill.find({});
        res.json(bills);
    } catch (error) {
        res.status(500).send(error);
    }
}; 

exports.create_a_bill = (req, res) => {
    const newBill = new bill(req.body);
    newBill.save()
      .then((bill) => {
        res.json(bill);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  

exports.read_a_bill = (req, res) => {
    bill.findById(req.params.billId)
      .then((bill) => {
        res.json(bill);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.update_a_bill = (req, res) => {
    bill.findOneAndUpdate({ _id: req.params.billId }, req.body, { new: true })
      .then((bill) => {
        res.json(bill);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.delete_a_bill = (req, res) => {
    bill.deleteOne({ _id: req.params.billId })
      .then(() => {
        res.json({
          message: 'bill successfully deleted',
          _id: req.params.billId
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  