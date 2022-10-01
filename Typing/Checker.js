const list = [10].map(e => Math.random(0, 20))

const parents = document.querySelector(".Root")

document.getElementById('Uinput').addEventListener('click', (e) => {
    for (let i = 0; i < 30; i++) {
        const words = document.createElement('span')

        words.innerText = "ddd  "
        parents.append(words)
    }

    if (e.keyCode == 32) {

    }
});