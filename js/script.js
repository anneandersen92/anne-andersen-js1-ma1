// question 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();


// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// question 3
heading.style.fontSize = "2em";


// question 4
heading.classList.add("subheading");


// question 5
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "yellow";


// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list) {
    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}

catList();


// question 8
const container = document.querySelector(".cat-container");

let html = "";

function createCats(cats) {
    for (let i = 0; i < cats.length; i++) {

        let noAge = "Age unknown";

        if (cats[i].age) {
            noAge = cats[i].age;
        }

        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${noAge}</p>
                </div>`;

        return html;
    }
}

createCats();

container.innerHTML = html;