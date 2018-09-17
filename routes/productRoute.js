const router = require('express').Router();
const { create,update,remove,read,search } = require('../controllers/productController');

router.post('/',create);
router.put('/:id',update);
router.patch('/:id',update);
router.delete('/:id',remove);
router.get('/',read);
router.post('/search',search);


module.exports = router;