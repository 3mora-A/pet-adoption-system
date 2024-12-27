// محاولة استرجاع البيانات المخزنة في localStorage
const AnimalDone = JSON.parse(localStorage.getItem('AnimalDone')) || [];




// دالة لإضافة حيوان جديد
function addPet() {
    // جمع البيانات من الحقول
    let petData = {
        image: document.getElementById('photoURL').value,
        kind: document.getElementById('Kind').value,
        name: document.getElementById('PetName').value,
        description: document.getElementById('Description').value,
        city: document.getElementById('City').value,   // استبدال Location بـ City
        street: document.getElementById('Street').value, // استبدال Location بـ Street
        breed: document.getElementById('Breed').value,   // إضافة السلالة
        birthDate: document.getElementById('Birthdate').value,
        gender: document.getElementById('Gender').value,
        descriptionMedecalRecords: document.getElementById('MedicalDescription').value
    };

    // التحقق من أن جميع الحقول ليست فارغة
    for (let key in petData) {
        if (!petData[key]) {
            
            return;
        }
    }

    // إضافة البيانات إلى المصفوفة
    AnimalDone.push(petData);

    // حفظ المصفوفة في localStorage
    localStorage.setItem('AnimalDone', JSON.stringify(AnimalDone));

    // مسح الحقول بعد الإرسال
    document.getElementById('petForm').reset();

    // عرض رسالة النجاح
    alert('The pet has been successfully added!');

    // إعادة التوجيه إلى صفحة adopt.html
    window.location.href = 'Adopt.html';

    // طباعة المصفوفة في console
    console.log('Updated AnimalDone array:', AnimalDone);
}

// طباعة البيانات السابقة في console
console.log('Before adding pet');
console.log('AnimalDone:', AnimalDone);
