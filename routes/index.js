const router = require('express').Router();
const { register,login,auth,checkout } = require('../controllers/userController');

router.post('/register',register);
router.post('/login',login);
router.get('/auth',auth);
router.post('/checkout',checkout);



module.exports = router;