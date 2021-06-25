module.exports.fetchImage = (req, res) => {
  res.render('module1/01a-fetch-image/index', {
    title: 'Fetch Image'
  });
};

module.exports.fetchArrayExercise = (req, res) => {
  res.render('module1/01b-fetch-array-exercise/index', {
    title: 'Fetch Array | Exercise'
  });
};

module.exports.fetchTextExercise = (req, res) => {
  res.render('module1/01c-fetch-text-exercise/index', {
    title: 'Fetch Text | Exercise'
  });
};

module.exports.fetchCSV = (req, res) => {
  res.render('module1/02a-fetch-csv/index', {
    title: 'Fetch CSV | Zonal Annual Means'
  });
};

module.exports.fetchMultipleCSV = (req, res) => {
  res.render('module1/02b-fetch-multiple-csv-exercise/index', {
    title: 'Fetch CSV | Global Average Temperatures'
  });
};

module.exports.fetchJSON = (req, res) => {
  res.render('module1/03a-fetch-json-ISS-API/index', {
    title: 'Fetch JSON | Where The ISS at?'
  });
};

// ==============================================================================================================================================================================================================================================================