import Data from "./data.js"
import Ui from "./ui.js"

class UserInputForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.listContainer = document.querySelector('#list-container');
        this.input = document.querySelector('#todo-input');

        this.form.addEventListener('submit', this.addListItems.bind(this));
        this.listContainer.addEventListener('click', this.deleteBtn.bind(this));
    }

    addListItems(e) {
        e.preventDefault();

        const inputValue = this.input.value;

        if (inputValue == '') {
            alert('Enter a text!');
        } else {
            Ui.listItems(this.input)
            this.input.value = '';
        }
    }

    deleteBtn(e) {
        if (e.target.classList.contains('delete-btn')) {
            const inputItem = e.target.parentElement;
            this.listContainer.removeChild(inputItem);
        }
    }

}
Data.api();
const ui = new UserInputForm();



