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


function getUsers(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (usuario) {
            resolve(users)
        }else {
            reject("No estas logueado dentro de la app")
        }
    }, 2000);
  });
}

getUsers(isLogged)
.then(res => console.log(res))
.catch(err => console.log(err))


// segundo punto

const anyUser = users.map(user => user.personId);

function getPerson(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findPerson = persons.find(person => person.personId === user.personId);
      if (findPerson) {
        resolve(findPerson);
      } else {
        reject("No se encontró la persona");
      }
    }, 5000);
  });
}

Promise.all(users.map(user => getPerson(user)))
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.err(err);
  });

