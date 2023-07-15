const billBuilder = require('../controller/billController');

module.exports = app => {
    app
        .route('/bill')
        .get(billBuilder.list_all_bill)
        .post(billBuilder.create_a_bill);
    app
        .route('/bill/:billId')
        .get(billBuilder.read_a_bill)    
        .put(billBuilder.update_a_bill)    
        .delete(billBuilder.delete_a_bill);
}