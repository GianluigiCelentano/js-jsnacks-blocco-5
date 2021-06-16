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
for(var grs = 0; grs < students.length; grs++) {
    students[grs].description = prompt("Descrivi lo studente")
    for(var o in students[grs]) {
        document.getElementById("list").innerHTML += " " + [o] + " " + students[grs][o] + "<br>" 
    }
}