
//Step 1
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter IssacSon',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mocking Jay',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const { title } = library[0];

//Step 4

const libraryJSON = JSON.stringify(library)


console.log(libraryJSON);


