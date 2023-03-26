const router = require('express').Router();
const membroController = require('../controllers/membro');


router.get('/membro', membroController.read)
router.post('/membro' , membroController.insert)

module.exports = router;