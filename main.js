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
}
