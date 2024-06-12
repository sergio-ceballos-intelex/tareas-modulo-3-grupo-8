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

const anyUser = users[1].personId


function getPerson(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
        const findPerson = persons.find(person => person.personId === user)
        if (findPerson) {
            resolve(findPerson)
        }
    }, 5000);
  });
}


const userInfo = getPerson(anyUser)

Promise.all(userInfo)
.then(userInfo => {console.log(userInfo)})