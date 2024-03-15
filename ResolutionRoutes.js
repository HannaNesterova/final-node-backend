const {Router} = require('express');
const { getResolution, saveResolution, deleteResolution, editResolution } = require('./ResolutionController');
const router = Router();

router.get('/', getResolution);
router.post('/saveResolution', saveResolution)
router.post('/deleteResolution', deleteResolution)
router.post('/editResolution', editResolution)

module.exports = router;