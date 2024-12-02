document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector("#add_Button");
    let removeAllButton = this.querySelector("#remove_all")
    let inputField = document.getElementById("space_list");

    function addItem() {
        let inputValue = inputField.value;
        if (inputValue.trim() !== "") {
            let newItem = document.createElement("li");
            newItem.textContent = inputValue;

            let removeButton = document.createElement("button")
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", function() {
                newItem.remove();
            });

            newItem.appendChild(removeButton);


            let todo_list = document.getElementById("todo_list");
            todo_list.appendChild(newItem);

            inputField.value = "";
        }
    }

    removeAllButton.addEventListener("click", function() {
        let todo_list = document.getElementById("todo_list");
        todo_list.innerHTML = "";
    });

    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    botao.addEventListener("click", function() {
        addItem();
    });
});
