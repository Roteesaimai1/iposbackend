const menuBuilder = require('../controller/menuController');

module.exports = app => {
    app
        .route('/menu')
        .get(menuBuilder.list_all_menu)
        .post(menuBuilder.create_a_menu);
    app
        .route('/menu/:menuId')
        .get(menuBuilder.read_a_menu)    
        .put(menuBuilder.update_a_menu)    
        .delete(menuBuilder.delete_a_menu);
}