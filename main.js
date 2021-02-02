//console.log('Connected');
const hat = [
  {
    name: 'Chris',
    house: 'Gryffindor',
    values: ['bravery ', 'daring ', 'nerve ', 'chivarly'],
    animal: 'Lion',
    colors: 'Scarlet and Gold',
  },
  {
    name: 'Jackson',
    house: 'Hufflepuff',
    values: ['hard work ', 'dedication ', 'patience ', 'loyalty ', 'fair play'],
    animal: 'Badger',
    colors: 'Yellow and Black',
  },
  {
    name: 'Eliza',
    house: 'Ravenclaw',
    values: ['intelligence ', 'knowledge ', 'curiosity ', 'creativity ', 'wit'],
    animal: 'Eagle',
    colors: 'Blue and Bronze',
  },
  {
    name: 'Kacie',
    house: 'Slytherin',
    values: ['ambition ', 'leadership ', 'self-preservation ', 'cunning ', 'resourcefulness'],
    animal: 'Serpent',
    colors: 'Emerald Green and Silver', 
  }
];

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
    document.querySelector('#sort1').addEventListener('click', cardCreated);
    
  };

  
  
  function cardCreated() {
    let domString = '';
    hat.forEach((element, i) => {
      domString += `<div class="card mb-3" style="width: 18rem;" id=${i}>      
        <div class="card-body">
          <p class="card-text">${element.name}</p>
          <p class="card-text">${element.values}</p>
          <p class="card-text">${element.animal}</p>
          <p class="card-text">${element.colors}</p>
          <button type="button" class="btn btn-danger" id="${i}">Expel!</button>
        </div>
        </div>`
    });
    printToDom('#hats', domString);
    
  }


const formInfo = (e) => {
  e.preventDefault();  

  const name = document.querySelector('#student').value;

  const newHouse = Math.floor(Math.random() * hats.length);
  const house = hats[newhats];








const useButton = (e) => {

  document.querySelector('#start-sort').addEventListener('click', createForm);  
  
};

const init = () => {
  useButton();
};

init();
