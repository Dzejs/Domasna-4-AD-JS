
let firstOl = document.getElementById("firstOl");
let secondOl = document.getElementById("secondOl");
let thredOl = document.getElementById("thredOl");
let fourthOl = document.getElementById("fourthOl");
let fifthOl = document.getElementById("fifthOl");
let btn = document.getElementById("btn");

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        allStudentsAvrage(data)
    })


function allStudentsAvrage(data) {
    btn.addEventListener("click", () => {
        data.forEach(person => {
            if(person.averageGrade > 3){
                firstOl.innerHTML += `<li style="text-align: center;">${person.firstName} ${person.lastName}</li>`;
            }
            if(person.gender === "Female" && person.averageGrade === 5){
                secondOl.innerHTML += `<li style="text-align: center;">${person.firstName} ${person.lastName}</li>`;
            }
            if(person.gender === "Male" && person.city === "Skopje" && person.age > 18) {
                thredOl.innerHTML += `<li style="text-align: center;">${person.firstName} ${person.lastName}</li>`;
            }
            if(person.gender === "Female" && person.age > 24) {
                fourthOl.innerHTML += `<li style="text-align: center;">${person.firstName} ${person.lastName}</li>`;
            }
            if(person.gender === "Male" && person.firstName[0] === "B" && person.averageGrade > 2) {
                fifthOl.innerHTML += `<li style="text-align: center;">${person.firstName} ${person.lastName}</li>`;
            }
        });  
    });
}



