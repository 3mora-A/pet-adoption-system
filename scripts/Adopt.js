// إعادة تعيين العداد والمصفوفة في التخزين المحلي عند تحميل الصفحة
const resetAdoptionData = () => {
  localStorage.setItem("adoptedCount", 0);  // إعادة تعيين العداد إلى 0
  localStorage.setItem("adoptionList", JSON.stringify([])); // إعادة تعيين المصفوفة إلى مصفوفة فارغة
};

// استرجاع adoptionList من التخزين المحلي أو تهيئتها كمصفوفة فارغة
let adoptionList = localStorage.getItem("adoptionList") ? JSON.parse(localStorage.getItem("adoptionList")) : [];

// استرجاع العداد من التخزين المحلي أو تهيئته إلى 0
let adoptedCount = localStorage.getItem("adoptedCount") ? parseInt(localStorage.getItem("adoptedCount")) : 0;

// إذا كنت ترغب في إعادة تعيين البيانات عند تحديث الصفحة، يمكنك استدعاء resetAdoptionData هنا:
resetAdoptionData(); // ستقوم هذه الدالة بإعادة تعيين العداد والمصفوفة إلى 0

// تحديث النص في الرابط بناءً على العداد (إخفاء إذا كان العدد صفر)
const updateAdoptedListText = () => {
  const adoptionListLink = document.querySelector(".adoption-list");
  let countElement = adoptionListLink.querySelector(".count");

  if (!countElement) {
    // إذا لم يكن هناك عنصر عددي، نقوم بإنشائه
    countElement = document.createElement("span");
    countElement.classList.add("count");
    adoptionListLink.appendChild(countElement);
  }

  // إظهار أو إخفاء الدائرة بناءً على قيمة العداد
  if (adoptedCount > 0) {
    countElement.textContent = adoptedCount; // تعيين العدد داخل الدائرة
    countElement.style.display = "inline-flex"; // إظهار الدائرة
  } else {
    countElement.style.display = "none"; // إخفاء الدائرة إذا كان العدد صفر
  }
};

// تحديث النص عند تحميل الصفحة
updateAdoptedListText();

// استرجاع العنصر حيث ستتم إضافة جميع الحيوانات
const allOfOrders = document.getElementById("all-of-orders");

// إضافة الحيوانات إلى الصفحة
AnimalDone.forEach((animal, index) => {
  // إنشاء صورة الحيوان
  const imgElement = document.createElement("img");
  imgElement.src = animal.image;

  // معالجة خطأ في الصورة
  imgElement.onerror = () => {
    imgElement.src = 'default-image.jpg'; // صورة افتراضية
  };

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

  // إنشاء زر "Adopt Now"
  const adoptButton = document.createElement("button");
  adoptButton.classList.add("adopt-btn");
  adoptButton.textContent = "Adopt Now";
  adoptButton.setAttribute("data-animal-id", index);

  // إنشاء رسالة تأكيد
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

  // التحقق إذا تم تبني الحيوان مسبقًا
  if (adoptionList.some(adoptedAnimal => adoptedAnimal.name === animal.name)) {
    adoptButton.style.display = "none"; // إخفاء الزر إذا تم تبني الحيوان
    adoptedMessage.classList.remove("hidden"); // إظهار رسالة "تم التبني"
  }

  // عند النقر على الزر "Adopt Now"
  adoptButton.addEventListener("click", () => {
    adoptButton.style.display = "none"; // إخفاء الزر بعد النقر
    adoptedMessage.classList.remove("hidden"); // إظهار رسالة الإضافة

    // زيادة العداد
    adoptedCount++;

    // تخزين العداد في التخزين المحلي
    localStorage.setItem("adoptedCount", adoptedCount);

    // تحديث النص في الرابط
    updateAdoptedListText();

    // إضافة الحيوان إلى adoptionList باستخدام index
    adoptionList.push(animal); // إضافة الحيوان إلى المصفوفة

    // تخزين المصفوفة في التخزين المحلي
    localStorage.setItem("adoptionList", JSON.stringify(adoptionList));

    // تسجيل adoptionList في وحدة التحكم
    console.log(adoptionList);


  });

  // إنشاء الحاوية الكاملة للبطاقة
  const order = document.createElement("div");
  order.classList.add("order");
  order.appendChild(imgElement); // إضافة الصورة
  order.appendChild(details); // إضافة تفاصيل الحيوان
  order.appendChild(adoptButton); // إضافة الزر
  order.appendChild(adoptedMessage); // إضافة رسالة التأكيد

  // إضافة البطاقة إلى العنصر الأساسي في الصفحة
  allOfOrders.appendChild(order);
});


console.log('befor');
console.log('anemal:',animal);
console.log('AnimalDone:',AnimalDone);