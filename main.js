const hat = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const students = [];

const gryff = "https://images-na.ssl-images-amazon.com/images/I/61y4iV2FaVL._AC_SY741_.jpg";
const huff = "https://m.media-amazon.com/images/I/61Bpauebd4L._AC_SY879_.jpg";
const raven = "https://images-na.ssl-images-amazon.com/images/I/61eu9agxwbL._AC_SL1031_.jpg";
const sly = "https://images-na.ssl-images-amazon.com/images/I/61M7XjS3GqL._AC_SY741_.jpg";

const printToDom = (divId, textToPrint) => {
  const selectDiv = document.querySelector(divId);
  selectDiv.innerHTML = textToPrint;
};

const createForm = () => {
  let form = `<form class="text-center">
    <div class="mb-3">
    <label for="student" class="form-label" style="color: whitesmoke">ENTER FIRST YEAR'S NAME</label>
    <input type="text" class="form-control" id="student" required>
    </div>
    <button type="submit" class="btn btn-light" id="sort1">Sort!</button>
    </form>`;
  printToDom("#form", form);
  document.querySelector("#sort1").addEventListener("click", formInfo);
};

const formInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector("#student").value;
  const house = hat[Math.floor(Math.random() * hat.length)];
  const crest = '';
  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);
  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  if (name === ``) {
    alert("Please add name");
  } else {
    const obj = {
      name,
      house,
      crest,
      id,
    };

    if (house === 'Gryffindor') {
      obj.crest = gryff;
      } else if (house === 'Hufflepuff') {
      obj.crest = huff;
      } else if (house === 'Ravenclaw') {
      obj.crest = raven;
      } else if (house === 'Slytherin') {
      obj.crest = sly;
      }


    students.push(obj);
    cardCreated();
  }

  document.querySelector("form").reset();
};

function cardCreated() {
  let domString = "";
  students.forEach((element) => {
    domString += `<div class="card mb-3" style="width: 18rem;" id=${element.id}>
          <div class="card-body text-center">
          <h2 class="card-text">${element.name}</h2>
          <h5 class="card-text">${element.house}</h5>
          <img class="card-img-top" src="${element.crest}" alt="House Crest">
          <button type="button" class="btn btn-danger" id=${element.id}>Expel!</button>
        </div>
        </div>`;
  });
  printToDom("#hats", domString);
}

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);
  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    students.splice(studentIndex, 1);
  }

  cardCreated();
};

const useButton = () => {
  document.querySelector("#start-sort").addEventListener("click", createForm);
  document.querySelector("#hats").addEventListener("click", expelStudent);
};

const init = () => {
  useButton();
};

init();
