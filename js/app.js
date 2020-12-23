import GetData from "./data.js"

class UserInputForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.listContainer = document.querySelector('#list-container');
        this.todoInput = document.querySelector('#todo-input');

        this.form.addEventListener('submit', this.addListItems.bind(this));
        this.listContainer.addEventListener('click', this.deleteBtn.bind(this));
    }

    addListItems(e) {
        e.preventDefault();

        const inputValue = this.todoInput.value;

        if (inputValue == '') {
            alert('Enter a text!');
        } else {
            this.listContainer.innerHTML += `
                <div class="input-group mt-1">
                    <div class="input-group-text">
                        <input class="form-check-input" type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" value="${inputValue}">
                    <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
                </div>
                `
            this.todoInput.value = '';
        }
    }

    deleteBtn(e) {
        if (e.target.classList.contains('delete-btn')) {
            const inputItem = e.target.parentElement;
            this.listContainer.removeChild(inputItem);
        }
    }

}

const ui = new UserInputForm();
GetData()

