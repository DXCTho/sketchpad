
var addValueButton = document.getElementById('button');
addValueButton.addEventListener('click', function(e) {
  gridContainer.innerHTML = "";
  let count = document.getElementById('gridno').value;
  if (isNaN(count)) {
    alert("Sorry that wasn't a number. Please enter a number");
  };
  const gridInt = Number(count);
  createGrid(gridInt);
  initListeners();
  console.log(gridInt);
});







