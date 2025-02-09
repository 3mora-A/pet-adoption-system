const animal = [
  {
    image: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    kind: "cat",
    name: "meme",
    description: "lovely mixed",
    city: "New York",
    street: "5th Avenue",
    breed: "Domestic Shorthair",
    birthDate: "2023-06-07",
    gender: "male",
    descriptionMedecalRecords: "Has received all core vaccinations, no surgeries or known medical conditions."
  },
  {
    image: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    kind: "dog",
    name: "jon",
    description: "Guarding",
    city: "Los Angeles",
    street: "Sunset Boulevard",
    breed: "German Shepherd",
    birthDate: "2024-01-07",
    gender: "male",
    descriptionMedecalRecords: "No medical records available yet, but scheduled for first vaccinations."
  },
  {
    image: "https://media.istockphoto.com/id/1254477516/photo/dag-adopt-rescue-animal.jpg?s=612x612&w=0&k=20&c=z6MW6i8-DV_f321lLZrO4ufI8APNeJf6qBnF1zmmzWg=",
    kind: "dog",
    name: "max",
    description: "Playful",
    city: "Irvine",
    street: "Laguna Canyon Road",
    breed: "Labrador Retriever",
    birthDate: "2021-06-01",
    gender: "male",
    descriptionMedecalRecords: "Underwent neutering surgery, vaccinated and in good health."
  },
  {
    image: "https://www.cityofirvine.org/sites/default/files/2022-Animal%20Care-Webpage-%20-Page%20Icon%20(Cats).jpg",
    kind: "cat",
    name: "whiskers",
    description: "Calm",
    city: "Irvine",
    street: "University Drive",
    breed: "Persian",
    birthDate: "2022-06-15",
    gender: "female",
    descriptionMedecalRecords: "Has been treated for a minor ear infection, fully vaccinated."
  },
  {
    image: "https://i.pinimg.com/736x/ab/5b/59/ab5b59c2bec162678aa68716eb23781d.jpg",
    kind: "cat",
    name: "bella",
    description: "Friendly",
    city: "New York",
    street: "Broadway Street",
    breed: "Maine Coon",
    birthDate: "2024-02-15",
    gender: "female",
    descriptionMedecalRecords: "Vaccination records pending, no known medical issues."
  },
  {
    image: "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2019/03/rabbit-475261_0.jpg?h=c855054e&itok=8wBMy7-t",
    kind: "rabbit",
    name: "bunny",
    description: "Playful",
    city: "San Francisco",
    street: "Mission Street",
    breed: "Himalayan",
    birthDate: "2023-05-01",
    gender: "female",
    descriptionMedecalRecords: "Has received all necessary vaccinations, no surgery or medical conditions."
  },
  {
    image: "https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg",
    kind: "rabbit",
    name: "snowball",
    description: "Fluffy",
    city: "Los Angeles",
    street: "Hollywood Boulevard",
    breed: "Angora",
    birthDate: "2022-03-21",
    gender: "male",
    descriptionMedecalRecords: "In good health, no vaccinations or medical treatments yet."
  },
  {
    image: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/74085019/1/?bust=1733645025&width=300",
    kind: "rabbit",
    name: "rocky",
    description: "Strong",
    city: "Chicago",
    street: "Wacker Drive",
    breed: "Mini Rex",
    birthDate: "2019-09-10",
    gender: "male",
    descriptionMedecalRecords: "Neutered, vaccinated, and healthy."
  },
  {
    image: "https://nirvanaridge.org/wp-content/uploads/2019/10/bighdr.jpg",
    kind: "ferret",
    name: "fuzz",
    description: "Curious",
    city: "San Francisco",
    street: "Geary Boulevard",
    breed: "Polecat",
    birthDate: "2022-08-13",
    gender: "female",
    descriptionMedecalRecords: "Vaccinated, no surgeries or medical conditions reported."
  },
  {
    image: "https://pethelpful.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk3MDkzMDk4NTcwOTE3MTgz/are-ferrets-hypoallergenic.jpg",
    kind: "ferret",
    name: "whiskers",
    description: "Playful",
    city: "Los Angeles",
    street: "Melrose Avenue",
    breed: "European Ferret",
    birthDate: "2023-06-12",
    gender: "male",
    descriptionMedecalRecords: "Healthy, no known issues."
  },
  {
    image: "https://lollypop.org/wp-content/uploads/2023/05/DSC_0873-2_1920.jpg",
    kind: "bird",
    name: "flappy",
    description: "Colorful",
    city: "San Francisco",
    street: "California Street",
    breed: "Budgerigar",
    birthDate: "2023-07-08",
    gender: "female",
    descriptionMedecalRecords: "Regular vet checkups, fully vaccinated."
  },
  {
    image: "https://thumbs.dreamstime.com/b/tropical-parrot-portrait-cute-colored-30422280.jpg",
    kind: "parrot",
    name: "polly",
    description: "Talkative",
    city: "Los Angeles",
    street: "Sunset Strip",
    breed: "Macaw",
    birthDate: "2022-01-01",
    gender: "male",
    descriptionMedecalRecords: "Vaccinated, no medical conditions."
  },
  {
    image: "https://ontariospca.ca/wp-content/uploads/2019/05/animal-blurred-background-brown-939478-1200x797.jpg",
    kind: "squirrel",
    name: "nutsy",
    description: "Curious",
    city: "Ontario",
    street: "King Street",
    breed: "Eastern Gray Squirrel",
    birthDate: "2023-10-10",
    gender: "male",
    descriptionMedecalRecords: "No known health issues, awaiting vaccinations."
  },
  {
    image: "https://images.saymedia-content.com/.image/t_share/MTc0NDYyMjQ0NTMxMjE3NzY4/types-of-squirrels-people-keep-as-pets.jpg",
    kind: "squirrel",
    name: "chip",
    description: "Energetic",
    city: "California",
    street: "Pacific Coast Highway",
    breed: "Fox Squirrel",
    birthDate: "2022-12-05",
    gender: "female",
    descriptionMedecalRecords: "Healthy, vaccinated and in good condition."
  }


  
];




