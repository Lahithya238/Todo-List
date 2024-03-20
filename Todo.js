const inputBox = document.getElementById("list-input");
const listAll = document.getElementById("listItems");

function addTask() {
    if (inputBox.value === "") {
        alert("must enter any item");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listAll.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}
listAll.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false)

function saveData() {
    localStorage.setItem("data", listItems.innerHTML);
}
function showData() {
    listAll.innerHTML = localStorage.getItem("data");
}
showData();