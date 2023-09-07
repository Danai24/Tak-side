const searchString = new URLSearchParams(window.location.search)



// const headingName = document.querySelector(".headingName")
// headingName.innerText = searchString.get("name")

// const messageText = document.querySelector(".messageText")
// messageText.innerText = searchString.get("message")

// const email = document.querySelector(".emailText")
// emailText.innerText = searchString.get("email")

// const tilte = document.querySelector("title")
// tilte.innerText += searchString.get("name")

// function changeTheThings(element, string) {
//     const thing = document.querySelector(element)
//     thing.innerText += string
// }

function changeTheThings(element, string) {
    document.querySelector(element).innerText += string
}

changeTheThings(".headingText", searchString.get("name"))
changeTheThings(".messageText", searchString.get("message"))
changeTheThings(".emailText", searchString.get("email"))
changeTheThings("title", searchString.get("name"))