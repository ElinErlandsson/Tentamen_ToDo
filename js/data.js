
class Data {

    static api() {

        fetch('data.json')
            .then((response) => {
                return response.json()
            }).then((data) => {

                for (let i = 0; i < data.tasks.length; i++) {
                    const listContainer = document.querySelector('#list-container');
                    listContainer.innerHTML += `
                <div class="input-group mt-1">
                    <div class="input-group-text">
                        <input class="form-check-input" type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox" value="${data.tasks[i]}">
                    <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
                </div>
                `
                }

            }).catch((error) => {
                console.log(error)
            })

    }
}

export default Data;
