const poss_options = [
    "Mentions Otago or scholarships",
    "'Are you alright Georgia'",
    "Warn Asher about his calculator",
    "Harrasses someone (has to mention Korea)",
    "Argues with Jane",
    "Jumps into someone else's conversation",
    "Threatens someone",
    "Argues with Patrick, Heshan, or Aaron",
    "Getting 5+ textbooks for friends",
    "Whips head around",
    "Fidget spinner",
    "Deep sigh",
    "Stay out of it / None of your business",
    "Groans",
    "Fans self intensely"
]
var used_nums = []
const squares = document.getElementsByClassName('square');
var num = 0;

function changeColor() {
    console.log(this.style.backgroundColor);
    if (this.style.backgroundColor == "rgb(101, 0, 224)") {
        this.style.backgroundColor = "#574b66";
    } else {
        this.style.backgroundColor = "#6500e0"
    }
}

function setupGrid() {
    Array.from(squares).forEach(element => {
        if (element.id != "5") {
            do {
                num = Math.floor(Math.random() * 14);
            } while (used_nums.includes(num));
            used_nums.push(num);
            element.children[0].innerHTML = poss_options[num];
        }
    });
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeColor);
}

setupGrid();