const { Router } = require('express');
const module1    = require('../controllers/module1Controller');

router = Router();

router.get('/module1/01a-fetch-image', module1.fetchImage);
router.get('/module1/01b-fetch-array-exercise', module1.fetchArrayExercise);
router.get('/module1/01c-fetch-text-exercise', module1.fetchTextExercise);
router.get('/module1/02a-fetch-csv', module1.fetchCSV);
router.get('/module1/02b-fetch-multiple-csv-exercise', module1.fetchMultipleCSV);
router.get('/module1/03a-fetch-json-ISS-API', module1.fetchJSON);

module.exports = router;

// ==============================================================================================================================================================================================================================================================