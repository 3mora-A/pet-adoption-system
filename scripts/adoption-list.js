console.log('adoptionList', adoptionList);

const adoptionOrders = document.querySelector(".adoption-orders");

adoptionList.forEach(animal => {
  
  console.log('Animal Data:', animal);

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

 
  const adoptedMessage = document.createElement("p");
  adoptedMessage.classList.add('adoptedMessage');
  adoptedMessage.innerHTML = "Adopted";  
  details.appendChild(adoptedMessage);

 
  const order = document.createElement("div");
  order.classList.add("order");
  order.appendChild(imgElement); 
  order.appendChild(details);

  adoptionOrders.appendChild(order);
});
