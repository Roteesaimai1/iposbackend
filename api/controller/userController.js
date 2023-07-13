const mongoose = require('mongoose');
const user = mongoose.model('user');

exports.list_all_user = async (req, res) =>{
    try {
        const users = await user.find({});
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
}; 

exports.create_a_user = (req, res) => {
    const newUser = new user(req.body);
    newUser.save()
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  

exports.read_a_user = (req, res) => {
    user.findById(req.params.userId)
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.update_a_user = (req, res) => {
    user.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.delete_a_user = (req, res) => {
    user.deleteOne({ _id: req.params.userId })
      .then(() => {
        res.json({
          message: 'user successfully deleted',
          _id: req.params.userId
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  