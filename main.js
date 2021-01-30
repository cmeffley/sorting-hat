//console.log('Connected');

const hat = [
  {
    name: 'Gryffindor',
    values: ['bravery ', 'daring ', 'nerve ', 'chivarly'],
    animal: 'Lion',
    colors: 'Scarlet and Gold',
  },
  {
    name: 'Hufflepuff',
    values: ['hard work ', 'dedication ', 'patience ', 'loyalty ', 'fair play'],
    animal: 'Badger',
    colors: 'Yellow and Black',
  },
  {
    name: 'Ravenclaw',
    values: ['intelligence ', 'knowledge ', 'curiosity ', 'creativity ', 'wit'],
    animal: 'Eagle',
    colors: 'Blue and Bronze',
  },
  {
    name: 'Slytherin',
    values: ['ambition ', 'leadership ', 'self-preservation ', 'cunning ', 'resourcefulness'],
    animal: 'Serpent',
    colors: 'Emerald Green and Silver', 
  }
];

const printToDom = (divId, textToPrint) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = textToPrint;
};

const createForm = (domString) => {
    `<form>
    <div class="mb-3">
    <label for="student" class="form-label">Student</label>
    <input type="text" class="form-control" id="student" required>
    </div>
    <button type="submit" class="btn btn-primary" id="sort1">Sort!</button>
    </form>`
  };
  printToDom(domString);

  
  
  function cardCreated(hatArr) {
  let domString = '';

  hatArr.forEach((element, i) => {
    domString += `< class="card mb-3" style="width: 18rem;" id=${i}>      
      <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.values}</p>
        <p class="card-text">${element.animal}</p>
        <p class="card-text">${element.colors}</p>
        <button type="button" class="btn btn-danger" id="${i}">Expel!</button>
      </div>`;
  });
  printToDom('#hats', domString);
}






const useButton = (e) => {
  const buttonId = e.target.id;

  document.querySelector('#start-sort').addEventListener('click', createForm);
  document.querySelector('#start1').addEventListener('click', cardCreated);
};

const init = () => {
createForm();
cardCreated(hat);
};

init();
