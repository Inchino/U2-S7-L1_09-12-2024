/*------ FORM USER------*/
class User{
    constructor(_firstName, _lastName, _age, _location){
        this.name = _firstName
        this.surname = _lastName
        this.age = _age
        this.location = _location
    }
};

const User_1 = new User('Alessandro', 'Incalza', 22, 'Toscana');
console.log(User_1);
const User_2 = new User('Dario', 'Del Vecchio', 54, 'Lazio');
console.log(User_2);
const User_3 = new User('Alessia', 'Di Gennaro', 30, 'Piemonte');
console.log(User_3);

function checkAge(anotherUser){
    if(this.age > anotherUser.age){
        return  `${this.name} ${this.surname} è più vecchio di ${anotherUser.name} ${anotherUser.surname}`;
    }else if(this.age === anotherUser.age){
        return  `${this.name} ${this.surname} e ${anotherUser.name} ${anotherUser.surname} sono coetanei.`;
    }else{
        return `${anotherUser.name} ${anotherUser.surname} è più vecchio di ${this.name} ${this.surname}`;
    }
};

console.log(User_1.checkAge(User_2));
console.log(User_1.checkAge(User_3));
console.log(User_2.checkAge(User_3));

/*------FORM ANIMALI------*/

const btnAdd = document.getElementById('add');
const pets = [];
let newPet;
class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

    checkOwner(anotherPet) {
        if (this.ownerName === anotherPet.ownerName) {
          return true
        } else {
          return false
        }
    }
};

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;

    newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);
    console.log(pets);
    printPets();
});

const printPets = () => {
    let listAnimals = document.getElementById('listAnimals');
    listAnimals.innerHTML = '';

    pets.forEach(pet => {
        let column1 = document.createElement('td');
        column1.innerText = `${pet.petName}`;
        let column2 = document.createElement('td');
        column2.innerText = `${pet.ownerName}`;
        let column3 = document.createElement('td');
        column3.innerText = `${pet.species}`;
        let column4 = document.createElement('td');
        column4.innerText = `${pet.breed}`;
        
        let newRow = document.createElement('tr');
        newRow.append(column1, column2, column3, column4);
        listAnimals.appendChild(newRow);
    });
    let addPet = document.getElementById('addPet');
    addPet.reset();
}