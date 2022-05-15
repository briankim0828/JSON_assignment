let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Apocalypse Now",
    "picture" : "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    "usedColor" : "#F97525",
    "director" : "Francis Ford Coppola",
    "cast" : ["Marlon Brando", "Martin Sheen", "Robert Duvall", "Dennis Hopper"],
  },
  {
    "title" : "Blade Runner",
    "picture" : "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "usedColor" : "#acb03f",
    "director" : "Ridley Scott",
    "cast" : ["Harrison Ford", "Sean Young", "Rutger Hauer", "Daryl Hannah"],
  },
  {
    "title" : "Collateral",
    "picture" : "https://m.media-amazon.com/images/M/MV5BMjE3NjM5OTMxMV5BMl5BanBnXkFtZTcwOTIzMTQyMw@@._V1_FMjpg_UX1000_.jpg",
    "usedColor" : "#5e6166",
    "director" : "Michael Mann",
    "cast" : ["Tom Cruise", "Jamie Foxx", "Mark Ruffalo", "Jada Pinkett Smith"],
  },
  {
    "title" : "Children of Men",
    "picture" : "https://m.media-amazon.com/images/M/MV5BZjUzY2ZhZDAtZDRlNS00MzEzLTliZjItMzMyYzM2OTdkZGJjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    "usedColor" : "#e0caca",
    "director" : "Alfonso Cauron",
    "cast" : ["Clive Owen", "Julianne Moore", "Michael Caine", "Chiwetel Ejiofor"],
  },
  {
    "title" : "Her",
    "picture" : "https://img.moviepostershop.com/her-movie-poster-2013-1020768994.jpg",
    "usedColor" : "#6983b8",
    "director" : "Spike Jonze",
    "cast" : ["Joaguin Phoenix", "Scarlett Johansson", "Rooney Mara", "Amy Adams"],
  }

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

  function createElementProper(incomingJSON) {

    let newContentElement = document.createElement("div");
    newContentElement.style.backgroundColor = incomingJSON['usedColor'];
    newContentElement.classList.add('contentItem');

    let newContentHeading = document.createElement("H3");
    newContentHeading.classList.add('contentTitle');
    newContentHeading.innerText = incomingJSON['title'];
    newContentElement.appendChild(newContentHeading);

    let newImage = document.createElement("img");
    newImage.classList.add("footerImage");
    newImage.src = incomingJSON['picture'];
    newContentElement.appendChild(newImage);

    let newContentSubhead = document.createElement("H4");
    newContentSubhead.innerText = "Director:\n"+incomingJSON['director'];
    newContentElement.appendChild(newContentSubhead);

    let newContentCastList = document.createElement("UL");
    newContentCastList.innerText = "Cast:"
    newContentElement.appendChild(newContentCastList);

    for (var i = 0; i < incomingJSON['cast'].length; i++) {
      var currentCastString = incomingJSON['cast'][i];
      var newCastItem = document.createElement("LI");
      newCastItem.innerText = currentCastString;
      newContentCastList.appendChild(newCastItem);

      contentGridElement.appendChild(newContentElement);
    }
}
