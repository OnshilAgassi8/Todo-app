const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box after adding the task   
    saveData(); // Save the current list to local storage   
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the current list to local storage after removing an item
    }
}, false); // Event delegation to handle clicks on list items and spans

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);//to save the list in local storage.
}

function showTask() {
    listContainer.innerHTML = localStorage.getTtem("data");//to show the list from local storage.
}
showTask(); // Call showTask to display the saved tasks when the page loads
