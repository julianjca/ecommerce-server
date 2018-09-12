const router = require('express').Router();
const { create,update,remove,read,findById } = require('../controllers/categoryController');

router.post('/',create);
router.put('/:id',update);
router.patch('/:id',update);
router.delete('/:id',remove);
router.get('/',read);
router.get('/:id',findById);


module.exports = router;