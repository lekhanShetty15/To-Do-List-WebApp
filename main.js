




function addTask() {
    const input = document.getElementById("input").value;
    const description = document.getElementById("description").value;

    if (input && description) {
        let taskOutput = document.getElementById("display");
        taskOutput.innerHTML += `
        <div class="task">
        <div class="titleDiv">${input}</div>
        <div class="descDiv">${description}</div>
        <button class="deleteDiv" onclick="removeTask(this.parentNode)"><img class="delete" src="./icon/pngwing.com.png" alt=""></button>
    </div>
        `;

        document.getElementById("input").value = "";
        document.getElementById("description").value = "";
        saveData();
    } else {
        alert("Please enter all the fields");
    }
    

}

function removeTask(del){
    del.remove()
    saveData()
}

function saveData(){
    localStorage.setItem("data", display.innerHTML)
}

function showData(){
    display.innerHTML = localStorage.getItem("data");
   
}
showData();















