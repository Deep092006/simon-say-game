// Set up the initial game sequences, level, and UI elements
let gameseq = [];
let usrseq = [];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let allbtn = ["red", "yellow", "green", "purple"];
let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");
let score = document.createElement("h4");

// Begin the game when a key is pressed for the first time
document.addEventListener("keydown", function () {
  if (started == false) {
    started = true;
    levelup(); // Start the first level
  }
});

// Animate the button flip when it's clicked
function flip(btn) {
  btn.classList.add("flip");
  setTimeout(function () {
    btn.classList.remove("flip");
  }, 500);
}

// Add a new color to the sequence and move to the next level
function levelup() {
  level++;
  h2.innerText = `level ${level}`;
  randidx = Math.floor(Math.random() * 4);
  let randclr = allbtn[randidx];
  gameseq.push(randclr);
  let btn = `.${randclr}`;
  let btns = document.querySelector(btn);
  flip(btns); // Show the new color in the sequence
  usrseq = []; // Reset the user's sequence for this level
}

// Check if the user's input matches the game sequence
function check(idx) {
  if (usrseq[idx] === gameseq[idx]) {
    if (usrseq.length == gameseq.length) {
      setTimeout(levelup, 1000); // Move to the next level if correct
    }
  } else {
    reset(); // Reset the game if the sequence is incorrect
  }
}

// Handle the user's button click and check if their sequence is correct
function btnpress() {
  if (!started) return;
  let id = this.getAttribute("id");
  flip(this);
  usrseq.push(id);
  check(usrseq.length - 1);
}

// Attach event listeners to all buttons so the user can interact with them
for (btn of btns) {
  btn.addEventListener("click", btnpress);
}

// Reset the game if the user makes a mistake
function reset() {
  level = 0;
  started = false;
  h2.innerText = "game over press any key to start";
  body.classList.a// Initialize game sequences, level, and UI elements
  let gameseq = [];
  let usrseq = [];
  let h2 = document.querySelector("h2");
  let started = false;
  let level = 0;
  let allbtn = ["red", "yellow", "green", "purple"];
  let btns = document.querySelectorAll(".btn");
  let body = document.querySelector("body");
  let score = document.createElement("h4");
  
  // Start game on key press
  document.addEventListener("keydown", function () {
    if (started == false) {
      started = true;
      levelup(); // Begin the first level
    }
  });
  
  // Flip button animation
  function flip(btn) {
    btn.classList.add("flip");
    setTimeout(function () {
      btn.classList.remove("flip");
    }, 500);
  }
  
  // Move to next level by adding a new color to the sequence
  function levelup() {
    level++;
    h2.innerText = `level ${level}`;
    randidx = Math.floor(Math.random() * 4);
    let randclr = allbtn[randidx];
    gameseq.push(randclr);
    let btn = `.${randclr}`;
    let btns = document.querySelector(btn);
    flip(btns); // Show the new color in the sequence
    usrseq = []; // Reset user sequence for this level
  }
  
  // Check if user's sequence matches the game sequence
  function check(idx) {
    if (usrseq[idx] === gameseq[idx]) {
      if (usrseq.length == gameseq.length) {
        setTimeout(levelup, 1000); // If correct, proceed to next level
      }
    } else {
      reset(); // Reset game if user's sequence is incorrect
    }
  }
  
  // Handle user button press and check if the sequence is correct
  function btnpress() {
    if (!started) return;
    let id = this.getAttribute("id");
    flip(this);
    usrseq.push(id);
    check(usrseq.length - 1);
  }
  
  // Add event listener to each button for user input
  for (btn of btns) {
    btn.addEventListener("click", btnpress);
  }
  
  // Reset game when user makes a mistake
  function reset() {
    level = 0;
    started = false;
    h2.innerText = "game over press any key to start";
    body.classList.add("deep");
    score.innerText = `your score is ${level}`;
    h2.appendChild(score);
    setTimeout(function () {
      body.classList.remove("deep");
    }, 400);
  }
  dd("deep");
  score.innerText = `your score is ${level}`;
  h2.appendChild(score);
  setTimeout(function () {
    body.classList.remove("deep");
  }, 400);
}
