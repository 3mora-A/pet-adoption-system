
const AnimalDone = JSON.parse(localStorage.getItem('AnimalDone')) || [];





function addPet() {
  
    let petData = {
        image: document.getElementById('photoURL').value,
        kind: document.getElementById('Kind').value,
        name: document.getElementById('PetName').value,
        description: document.getElementById('Description').value,
        city: document.getElementById('City').value,   
        street: document.getElementById('Street').value, 
        breed: document.getElementById('Breed').value,  
        birthDate: document.getElementById('Birthdate').value,
        gender: document.getElementById('Gender').value,
        descriptionMedecalRecords: document.getElementById('MedicalDescription').value
    };

   
    for (let key in petData) {
        if (!petData[key]) {
            
            return;
        }
    }

   
    AnimalDone.push(petData);

    
    localStorage.setItem('AnimalDone', JSON.stringify(AnimalDone));

   
    document.getElementById('petForm').reset();

    
    alert('The pet has been successfully added!');

    
    window.location.href = 'Adopt.html';

    
    console.log('Updated AnimalDone array:', AnimalDone);
}


console.log('Before adding pet');
console.log('AnimalDone:', AnimalDone);
