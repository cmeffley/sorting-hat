# Hogwarts Sorting Hat
This site allows you to enter your name and be randomly assigned to a Hogwarts house!

[Find App Here](https://cm-sorting-hat.netlify.app/)

![2021-02-05](https://user-images.githubusercontent.com/76795299/107106286-cdf70380-67f8-11eb-9b22-2abfb1bf72ae.png)


## Get Started
```
$ git@github.com:cmeffley/sorting-hat.git
$ cd sorting-hat
```


## About the User
- The ideal user is a group of friends that thoroughly enjoy Harry Potter
- They want to see which Hogwarts house they are in without taking a quiz

## Features
- An entry form is created when clicking the 'Let's Sort' button
- The name entered in the for is added to an object array and then a card is created on the DOM that shows which house the name has been randomly assign to
- Each house has a crest associated with it


## Project Board:
https://github.com/cmeffley/sorting-hat/projects/1

## Video Walkthrough of Sorting Hat App:
https://www.loom.com/share/6fb9f124949f449f9428b2f863d2d21a

## Code Snippet
```Javascript
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
```

## Contributors
- [Chris Meffley](https://github.com/cmeffley)
