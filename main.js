//console.log('Connected');
const hat = [
  'Gryffindor',
  'Hufflepuff',
  'Ravenclaw',
  'Slytherin', 
];
const students = [];

const printToDom = (divId, textToPrint) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = textToPrint;
};

const createForm = () => {
  let form = `<form>
    <div class="mb-3">
    <label for="student" class="form-label">Student</label>
    <input type="text" class="form-control" id="student" required>
    </div>
    <button type="submit" class="btn btn-info" id="sort1">Sort!</button>
    </form>`
    printToDom('#form', form);
    document.querySelector('#sort1').addEventListener('click', formInfo);
    
  };

  const formInfo = (e) => {
    e.preventDefault();  
    
  
    const name = document.querySelector('#student').value;
    const house = hat[Math.floor(Math.random() * hat.length)];
    
  if (name === ``) {
    alert('Please add name')
  } else {
    const obj = {
      name,
      house, 
      
    };
    cardCreated(students.push(obj));
  }
  //document.querySelector('#sort1').reset
  };
  
  
  
  function cardCreated() {
    let domString = '';
    students.forEach((element, i) => {
      domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div class="card-body">
          <p class="card-text">${element.name}</p>
          <p class="card-text">${element.house}</p>
          <button type="button" class="btn btn-danger" id="${i}">Expel!</button>
        </div>
        </div>`
    });
    printToDom('#hats', domString);
    
  };









const useButton = (e) => {

  document.querySelector('#start-sort').addEventListener('click', createForm);  
  
};

const init = () => {
  useButton();

};

init();
