const groupController = require('../controllers/GroupController.js');
const authController = require('../controllers/AuthController');

module.exports = (app) => {
    app.route('/v1/group/api/create')
        .post(groupController.create);

    app.route('/v1/auth/api/user/register')
        .post(authController.register);

    app.route('/v1/auth/api/user/signin')
        .post(authController.signin);
}