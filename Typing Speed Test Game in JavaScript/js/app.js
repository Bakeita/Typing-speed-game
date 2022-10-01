const typingText = document.querySelector(".typing-text p"),
    input = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span");
input.value = ""
let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0,
    corrects = 0;


function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split(" ").forEach(words => {
        let span = `<span>${words}</span> `
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => input.focus());
    typingText.addEventListener("click", () => input.focus());
}
let temp = ""
input.addEventListener('keydown', (e) => {
    let characters = typingText.querySelectorAll("span")

    if (characters.length >= charIndex) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (e.keyCode == 32) {
            temp = input.value
            if (characters[charIndex].innerText.trim().localeCompare(temp.trim()) == 0) {
                characters[charIndex].classList.add("correct");
                temp = ""
                    ++charIndex
                    ++corrects
                console.log(corrects)
                input.value = ""
                wpmTag.innerText = corrects;

            } else {
                temp = ""
                    ++mistakes;
                characters[charIndex].classList.add("incorrect");
                ++charIndex;
                input.value = ""
                mistakeTag.innerText = mistakes;
            }

        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        console.log(input.value)
    } else {
        characters.forEach(span => span.classList.remove("active"));
    }
})


function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    input.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        typingText.querySelectorAll("span").forEach(span => span.remove())
        input.value = ""
        clearInterval(timer);
    }
}

loadParagraph()
btn_try.addEventListener("click", resetGame);