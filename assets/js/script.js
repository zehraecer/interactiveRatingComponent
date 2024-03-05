const dialog = document.querySelector(".dialog")
const submit = document.querySelector(".submit")


submit.addEventListener("click", myFunction)

function myFunction(e){
    e.preventDefault();
    dialog.showModal();
}