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
    setTimeout(() =>{
      if(isLogged){
        resolve(users)
      } else{
        reject("No estas logueado dentro de la app")
      }
    }, 2000);
  });
}

function getPerson(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const personas = persons.find(personas => personas.personId === user.personId)
      resolve(personas);
    },5000);
  });
}

getUsers()
  .then(users => {
    console.log("Usuarios obtenidos:", users);
    return Promise.all(users.map(user => getPerson(user)));
  })
  .then(persons => {
    console.log("Información de personas asociadas a los usuarios:", persons);
  })
  .catch(error => {
    console.error("Error:", error);
  });