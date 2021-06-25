const getText = async () => {
  const response = await fetch('/assets/text/data.txt');
  const data = await response.text();
  
  document.querySelector('#paragraph').textContent = data;
}

getText();

// ==============================================================================================================================================================================================================================================================