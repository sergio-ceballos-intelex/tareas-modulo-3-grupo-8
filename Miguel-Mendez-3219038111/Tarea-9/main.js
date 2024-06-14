const isLogged = true;

const users = [
  {
    id: 1,
    role: 'USER',
    personId: 10
  },
  {
    id: 2,
    role: 'USER',
    personId: 11
  }
];

const persons = [
  {
    personId: 10,
    name: 'Rodrigo',
    lastname: 'Lopez'
  },
  {
    personId: 11,
    name: 'Jaime',
    lastname: 'Diaz'
  },
  {
    personId: 15,
    name: 'Leonardo',
    lastname: 'Benitez'
  },
];

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        resolve(users);
      } else {
        reject("No estás logueado dentro de la app");
      }
    }, 2000);
  });
}

function getPerson(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(person => person.personId === user.personId);
      if (person) {
        resolve(person);
      } else {
        reject("No se encontró la persona correspondiente al usuario");
      }
    }, 5000);
  });
}
getUsers()
  .then(users => {
    return Promise.all(users.map(user => getPerson(user)));
  })
  .then(persons  => {
    console.log(persons);
  })
  .catch(err => {
    console.error(err);
  });