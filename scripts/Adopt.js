
const resetAdoptionData = () => {
  localStorage.setItem("adoptedCount", 0); 
  localStorage.setItem("adoptionList", JSON.stringify([]));
};


let adoptionList = localStorage.getItem("adoptionList") ? JSON.parse(localStorage.getItem("adoptionList")) : [];


let adoptedCount = localStorage.getItem("adoptedCount") ? parseInt(localStorage.getItem("adoptedCount")) : 0;


resetAdoptionData();


const updateAdoptedListText = () => {
  const adoptionListLink = document.querySelector(".adoption-list");
  let countElement = adoptionListLink.querySelector(".count");

  if (!countElement) {
 
    countElement = document.createElement("span");
    countElement.classList.add("count");
    adoptionListLink.appendChild(countElement);
  }

 
  if (adoptedCount > 0) {
    countElement.textContent = adoptedCount;
    countElement.style.display = "inline-flex";
  } else {
    countElement.style.display = "none";
  }
};


updateAdoptedListText();


const allOfOrders = document.getElementById("all-of-orders");


AnimalDone.forEach((animal, index) => {
  
  const imgElement = document.createElement("img");
  imgElement.src = animal.image;


  imgElement.onerror = () => {
    imgElement.src = 'default-image.jpg';
  };


  const details = document.createElement("div");
  details.classList.add("details");


  const characteristics = document.createElement("p");
  characteristics.classList.add('characteristics');
  characteristics.innerHTML = `<strong>Characteristics:</strong>`;
  details.appendChild(characteristics);


  const nameElement = document.createElement("p");
  nameElement.innerHTML = `<strong>Name:</strong> ${animal.name}`;
  details.appendChild(nameElement);


  const kind = document.createElement("p");
  kind.innerHTML = `<strong>Kind:</strong> ${animal.kind}`;
  details.appendChild(kind);

  const breed = document.createElement("p");
  breed.innerHTML = `<strong>Breed:</strong> ${animal.breed}`;
  details.appendChild(breed);

  
  const birthDate = document.createElement("p");
  birthDate.innerHTML = `<strong>Birth Date:</strong> ${animal.birthDate}`;
  details.appendChild(birthDate);


  const description = document.createElement("p");
  description.innerHTML = `<strong>Description:</strong> ${animal.description}`;
  details.appendChild(description);


  const city = document.createElement("p");
  city.innerHTML = `<strong>City:</strong> ${animal.city}`;
  details.appendChild(city);


  const street = document.createElement("p");
  street.innerHTML = `<strong>Street:</strong> ${animal.street}`;
  details.appendChild(street);


  const gender = document.createElement("p");
  gender.innerHTML = `<strong>Gender:</strong> ${animal.gender}`;
  details.appendChild(gender);



  const medicalRecords = document.createElement("p");
  medicalRecords.classList.add('medicalRecords');
  medicalRecords.innerHTML = `<strong>Medical Records:</strong>`;
  details.appendChild(medicalRecords);


  const descriptionMedecal = document.createElement("p");
  descriptionMedecal.innerHTML = `<strong>Medical Description:</strong> ${animal.descriptionMedecalRecords}`;
  details.appendChild(descriptionMedecal);

 
  const adoptButton = document.createElement("button");
  adoptButton.classList.add("adopt-btn");
  adoptButton.textContent = "Adopt Now";
  adoptButton.setAttribute("data-animal-id", index);


  const adoptedMessage = document.createElement("div");
  adoptedMessage.classList.add("adopted-message", "hidden");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = true;
  checkBox.disabled = true;
  const messageLabel = document.createElement("label");
  messageLabel.textContent = `Has Been Added`;
  adoptedMessage.appendChild(checkBox);
  adoptedMessage.appendChild(messageLabel);


  if (adoptionList.some(adoptedAnimal => adoptedAnimal.name === animal.name)) {
    adoptButton.style.display = "none"; 
    adoptedMessage.classList.remove("hidden");
  }

  
  adoptButton.addEventListener("click", () => {
    adoptButton.style.display = "none"; 
    adoptedMessage.classList.remove("hidden"); 

   
    adoptedCount++;

 
    localStorage.setItem("adoptedCount", adoptedCount);

    
    updateAdoptedListText();

  
    adoptionList.push(animal);


    localStorage.setItem("adoptionList", JSON.stringify(adoptionList));

   
    console.log(adoptionList);


  });


  const order = document.createElement("div");
  order.classList.add("order");
  order.appendChild(imgElement); 
  order.appendChild(details);
  order.appendChild(adoptButton);
  order.appendChild(adoptedMessage); 

  
  allOfOrders.appendChild(order);
});


console.log('befor');
console.log('anemal:',animal);
console.log('AnimalDone:',AnimalDone);
console.log('adoptionList',adoptionList)