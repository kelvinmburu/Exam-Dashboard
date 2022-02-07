const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");

const option_list = document.querySelector(".option_list");

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
    showQuestions(0);
    queCounter(1);
    startTimer(15);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;


const next_btn = document.querySelector(".next_btn")


// This section highligts what happens when Next Button is clicked

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
    } else {
        console.log("Quiz Completed");
    }
}

// This section extracts the questions from the array above and adds them to the new array.

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[1] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[2] + '<span></span></div>' +
        '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Correct answer");
        answer.insertAdjacentHTML("beforeend", tickIcon)
    } else {
        answer.classList.add("incorrect");
        console.log("Wrong answer");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // This section adds the functionality when a user clicks on a wrong answer

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }

    // This sections highlights all the disabled options

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");

    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
    }
}


function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}