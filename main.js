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
    const studentIds = students.map(student => student.id).sort((a, b) => a - b);
    const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;
    
  if (name === ``) {
    alert('Please add name')
  } else {
    const obj = {
      name,
      house, 
      id,
    }; 
    students.push(obj);
    cardCreated();
  }
    document.querySelector('form').reset();
  };
  
  function cardCreated() {
    let domString = '';
    students.forEach((element) => {
      domString += `<div class="card mb-3" style="width: 18rem;" id=${element.id}>      
        <div class="card-body">
          <p class="card-text">${element.name}</p>
          <p class="card-text">${element.house}</p>
          <button type="button" class="btn btn-danger" id=${element.id}>Expel!</button>
        </div>
        </div>`
    });
    printToDom('#hats', domString);

  };

 const expelStudent = (e) => {
    const targetType = e.target.type;
    const targetId = e.target.id;
if (targetType === 'button') {
    const studentIndex = students.findIndex(student => student.id === targetId);
    students.splice(studentIndex, 1);
 }
 
 cardCreated();
}

const useButton = () => {

  document.querySelector('#start-sort').addEventListener('click', createForm);  
  document.querySelector('#hats').addEventListener('click', expelStudent);
};

const init = () => {
  useButton();

};

init();
