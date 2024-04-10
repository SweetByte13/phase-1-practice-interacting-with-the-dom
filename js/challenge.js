//timer increment every second once Dom loads//
//update dom with new time//
//listen for minus button //
//increment time when button clicked//
//listen for plus button//
//decrement time when button clicked//
//listen for heart button click//
//update dom with number that was liked
//listen for pause button//
//pause counter when pause button is clicked//
//disable all buttons when pause button is clicked//
//switch label on button from pause to resume//
//listen for click on the newly labled resume button//
//have button restart the counter//
//reenable the buttons when resume is clicked//
//leave comments on the gameplay "wow, what a fun game."


let hearted = document.querySelector('likes')

document.addEventListener("DOMContentLoaded", (e) => {
    const counter = document.getElementById("counter");
    let intervalId = setInterval(function (e) {
        counter.textContent = parseInt(counter.textContent)
        counter.textContent++

    }, 1000)

    const pause = document.getElementById("pause");

    pause.addEventListener('click', (e) => {
        if (pause.textContent === "Resume") {
            pause.textContent = "Pause"

            plus.removeAttribute("disabled", "");
            minus.removeAttribute("disabled", "");
            heart.removeAttribute("disabled", "");
            formSubmit.removeAttribute("disabled", "")

            intervalId = setInterval(function (e) {
                const counter = document.getElementById("counter");
                counter.textContent = parseInt(counter.textContent)
                counter.textContent++

            }, 1000)
        }
        else {
            pause.textContent = "Resume";
            plus.setAttribute("disabled", "");
            minus.setAttribute("disabled", "");
            heart.setAttribute("disabled", "");
            formSubmit.setAttribute("disabled", "");

            clearInterval(intervalId);
        }
    })
    const numberAndLikes = {

    }

    const likeElement = {
        likes: 0,
        uiElement: ""
    }
    let heart = document.getElementById("heart")
    heart.addEventListener('click', (e) => {
        let number = parseInt(counter.textContent);
        if (number in numberAndLikes) {
            //v1
            numberAndLikes[number]++;

            //v2
            // numberAndLikes[number].likes++;
        }
        else {
            //v1
            numberAndLikes[number] = 1;
            //v2
            // numberAndLikes[number] = {
            //     likes: 1,
            //     uiElement: document.createElement('li')
        }
    

        let ul = document.querySelector('ul')
        ul.innerHTML = "";

    Object.keys(numberAndLikes).forEach(num => {
        let li = document.createElement('li')
        li.textContent = (" " + `${num}` + " was liked " + `${numberAndLikes[num]}` + " of times");
        ul.appendChild(li)

    })
    })

const minus = document.getElementById("minus")
minus.addEventListener('click', (e) => {
    counter.textContent--
})

const plus = document.getElementById("plus")
plus.addEventListener('click', (e) => {
    counter.textContent++
})

const form = document.getElementById("comment-form");
const formInput = document.getElementById("comment-input");
const formSubmit = document.getElementById("submit");
const div = document.getElementById("list");
const commentList = document.createElement("div")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const comment = document.createElement('h5')
    div.appendChild(commentList)
    commentList.appendChild(comment)
    comment.textContent = formInput.value

})

})

