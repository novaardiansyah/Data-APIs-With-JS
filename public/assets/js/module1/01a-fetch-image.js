// create function for fetch image
const catchCar = async () => {
  const response = await fetch('/assets/image/my-car-illustration.jpg');
  const blob     = await response.blob();
  
  // attach results to img tag
  document.querySelector('#image').src = URL.createObjectURL(blob); 
};

// run function for fetch image
catchCar();