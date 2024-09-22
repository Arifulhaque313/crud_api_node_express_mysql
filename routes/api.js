const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

//Create
router.post('/', PostController.create);

//read 
router.get('/', PostController.index);

//Read single
router.get('/:id', PostController.show);

//update
router.put('/:id', PostController.update);

//delete
router.delete('/:id', PostController.delete);

module.exports = router;