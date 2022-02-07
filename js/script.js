const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// What happens when start button is clicked. It should show the info box
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

// What happens when exit button is clicked. This hides the info box
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

// What happens when continue button is clicked. This proceeds to the quiz section
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
}