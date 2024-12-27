const adoptionOrders = document.querySelector(".adoption-orders");

// إضافة الحيوانات إلى الصفحة
adoptionList.forEach(animal => {
  // إنشاء صورة الحيوان
  const imgElement = document.createElement("img");
  imgElement.src = animal.image;


  // إنشاء الحاوية لتفاصيل الحيوان
  const details = document.createElement("div");
  details.classList.add("details");

  // الخصائص
  const characteristics = document.createElement("p");
  characteristics.classList.add('characteristics');
  characteristics.innerHTML = `<strong>Characteristics:</strong>`;
  details.appendChild(characteristics);

  // الاسم
  const nameElement = document.createElement("p");
  nameElement.innerHTML = `<strong>Name:</strong> ${animal.name}`;
  details.appendChild(nameElement);

  // النوع
  const kind = document.createElement("p");
  kind.innerHTML = `<strong>Kind:</strong> ${animal.kind}`;
  details.appendChild(kind);

  // السلالة
  const breed = document.createElement("p");
  breed.innerHTML = `<strong>Breed:</strong> ${animal.breed}`;
  details.appendChild(breed);

  // تاريخ الميلاد
  const birthDate = document.createElement("p");
  birthDate.innerHTML = `<strong>Birth Date:</strong> ${animal.birthDate}`;
  details.appendChild(birthDate);

  // الوصف
  const description = document.createElement("p");
  description.innerHTML = `<strong>Description:</strong> ${animal.description}`;
  details.appendChild(description);

  // المدينة
  const city = document.createElement("p");
  city.innerHTML = `<strong>City:</strong> ${animal.city}`;
  details.appendChild(city);

  // الشارع
  const street = document.createElement("p");
  street.innerHTML = `<strong>Street:</strong> ${animal.street}`;
  details.appendChild(street);

  // الجنس
  const gender = document.createElement("p");
  gender.innerHTML = `<strong>Gender:</strong> ${animal.gender}`;
  details.appendChild(gender);


  // السجلات الطبية
  const medicalRecords = document.createElement("p");
  medicalRecords.classList.add('medicalRecords');
  medicalRecords.innerHTML = `<strong>Medical Records:</strong>`;
  details.appendChild(medicalRecords);

  // وصف السجلات الطبية
  const descriptionMedecal = document.createElement("p");
  descriptionMedecal.innerHTML = `<strong>Medical Description:</strong> ${animal.descriptionMedecalRecords}`;
  details.appendChild(descriptionMedecal);
  // رسالة التبني
  const adoptedMessage = document.createElement("p");
  adoptedMessage.classList.add('adoptedMessage');
  adoptedMessage.innerHTML = "Adopted"; // أو قم بتغيير الحالة بناءً على الطلبات
  details.appendChild(adoptedMessage);

  // إنشاء الحاوية الكاملة للبطاقة
  const order = document.createElement("div");
  order.classList.add("order");
  order.appendChild(imgElement);  // إضافة الصورة
  order.appendChild(details);     // إضافة التفاصيل

  // إضافة البطاقة إلى العنصر الأساسي في الصفحة
  adoptionOrders.appendChild(order);
});
