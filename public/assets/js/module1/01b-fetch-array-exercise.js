const filenames = [
  'amit-gaur-YSbvqo9YLHA-unsplash.jpg',
  'bernd-dittrich-k0Y2U9JwADk-unsplash.jpg',
  'gabriella-clare-marino-mxTx53tPQKI-unsplash.jpg',
  'outlook-photography-and-studio-CvvF9lPJy6U-unsplash.jpg'
];

const catchArray = async () => {
  for (let filename of filenames) {
    const response = await fetch(`/assets/image/${filename}`);
    const data     = await response.blob();
    
    const img = document.createElement('img');
    img.src   = URL.createObjectURL(data);
    img.width = "300";
    
    document.querySelector('h4.text-capitalize').append(img);
  }
};

catchArray();