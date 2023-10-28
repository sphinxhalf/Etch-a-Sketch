document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const resetButton = document.getElementById("reset-button");
  const eraseButton = document.getElementById("erase-button");
  resetButton.addEventListener("click", function () {
    const squareNumber = prompt("Enter the number of square per side: ");
    if (squareNumber && !isNaN(squareNumber) && squareNumber < 64) {
      createGrid(squareNumber);
    } else {
      alert("Number must less than 64");
    }
  });
  eraseButton.addEventListener("click", function () {
    const gridSquareList = document.querySelectorAll(".grid-square");
    gridSquareList.forEach(function (square) {
      square.style.backgroundColor = "#fff";
    })
  })

  function createGrid(squareNumber) {
    container.innerHTML = "";
    const containerSize = 600;
    const squareSize = containerSize / squareNumber;
    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";
    for (let i = 0; i < squareNumber * squareNumber; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.width = squareSize + "px";
      gridSquare.style.height = squareSize + "px";
      container.appendChild(gridSquare);
    }
    const gridSquareList = document.querySelectorAll(".grid-square");
    let isMouseDown = false;
    document.addEventListener("mousedown", function (e) {
      e.preventDefault();
      isMouseDown = true;

      // gridSquare.style.backgroundColor = "red"; // Change color on hover
    });
    document.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
    gridSquareList.forEach(function (gridSquare) {

      gridSquare.addEventListener("mouseover", function () {
        if (isMouseDown) {
          let randomRed = Math.floor(Math.random() * 256);
          let randomGreen = Math.floor(Math.random() * 256);
          let randomBlue = Math.floor(Math.random() * 256);
          gridSquare.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        }
      });

      gridSquare.addEventListener("click", function () {
        let randomRed = Math.floor(Math.random() * 256);
        let randomGreen = Math.floor(Math.random() * 256);
        let randomBlue = Math.floor(Math.random() * 256);
        gridSquare.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      })
    });
  }

  createGrid(20);
});
