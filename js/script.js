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
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catList(cats);


// question 8
function createCats(cats) {
    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;
    }

    return html;
}

const newHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;