const userBuilder = require('../controller/userController');

module.exports = app => {
    app
        .route('/user')
        .get(userBuilder.list_all_user)
        .post(userBuilder.create_a_user);
    app
        .route('/user/:userId')
        .get(userBuilder.read_a_user)    
        .put(userBuilder.update_a_user)    
        .delete(userBuilder.delete_a_user);
}