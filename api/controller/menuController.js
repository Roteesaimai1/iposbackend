const mongoose = require('mongoose');
const menu = mongoose.model('menu');

exports.list_all_menu = async (req, res) =>{
    try {
        const menus = await menu.find({});
        res.json(menus);
    } catch (error) {
        res.status(500).send(error);
    }
}; 

exports.create_a_menu = (req, res) => {
    const newMenu = new menu(req.body);
    newMenu.save()
      .then((menu) => {
        res.json(menu);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  

exports.read_a_menu = (req, res) => {
    menu.findById(req.params.menuId)
      .then((menu) => {
        res.json(menu);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.update_a_menu = (req, res) => {
    menu.findOneAndUpdate({ _id: req.params.menuId }, req.body, { new: true })
      .then((menu) => {
        res.json(menu);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
exports.delete_a_menu = (req, res) => {
    menu.deleteOne({ _id: req.params.menuId })
      .then(() => {
        res.json({
          message: 'Menu successfully deleted',
          _id: req.params.menuId
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
};
  
  