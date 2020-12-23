

class Ui {
    constructor() {
        this.form = document.querySelector('#form');
        this.listContainer = document.querySelector('#list-container');
        this.todoInput = document.querySelector('#todo-input');
        this.form.addEventListener('submit', this.addTasks.bind(this));
        this.listContainer.addEventListener('click', this.deleteBtn.bind(this));
    }

    addTasks(e) {
        e.preventDefault();

        this.inputValue = todoInput.value;

        if (this.forminputValue == '') {
            alert('Enter a text!');
        } else {
            this.listContainer.innerHTML += `
                <div class="input-items input-group mt-1">
                    <input type="text" class="form-control" aria-label="Text input with radio button" value="${inputValue}">
                    <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
                </div> 
            `
            this.todoInput.value = '';
        }
    }


    deleteBtn(e) {

        if (e.target.classList.contains('delete-btn')) {
            const inputItem = e.target.parentElement;
            listContainer.removeChild(inputItem);
        }

    }

}


const ui = new Ui();
