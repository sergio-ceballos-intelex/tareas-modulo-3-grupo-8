//Promises, Then and Catch ************************************************************************************************************************

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
    id: 10,
    name: 'Rodrigo',
    lastname: 'Lopez'
  },
  {
    id: 11,
    name: 'Jaime',
    lastname: 'Diaz'
  },
  {
    id: 15,
    name: 'Leonardo',
    lastname: 'Benitez'
  },
];

function getUsers() {
    return new Promise((resolve, reject) => {
      if (!isLogged) {
          reject('No estas logueado dentro de la app');
          return;
      }
  
      setTimeout(() => resolve(users), 2000);
    });
  }
  
  function getPerson(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
          const person = persons.find(person => person.id === user.personId);
          resolve(person);
      }, 5000);
    });
  }
  
  getUsers(users)
      .then(usuarios => {
          // [ Promise { id: 1, nombre: 'persona 1', lastname: '...'}, Promise {...} ]
          const personPromises = usuarios.map(usuario => {
              const person = getPerson(usuario);
              return person;
          });
          
          return Promise.all(personPromises);
      })
      .then(personas => console.log(personas))
      .catch(err => console.log(err));