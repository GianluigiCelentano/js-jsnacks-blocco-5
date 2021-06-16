var students = [
    {
        name: "Girino",
        surname: "Giacorino",
        age: 80,
        description:""
    },
    {
        name: "Givino",
        surname: "Giacovino",
        age: 80,
        description:""
    },
    {
        name: "Gipino",
        surname: "Giacopino",
        age: 80,
        description:""
    }
]
for (grs=0; grs < students.length; grs++) {
    students.description += prompt("Descrivi lo studente")
} console.log(students)