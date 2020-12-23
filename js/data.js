const listContainer = document.querySelector('#list-container');

fetch('data.json')

    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data.shower)

        listContainer.innerHTML = `
        <div class="input-items input-group mt-1">
            <input type="text" class="form-control" aria-label="Text input with radio button" value="${data.dryClean}">
            <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
        </div> 

        <div class="input-items input-group mt-1">
            <input type="text" class="form-control" aria-label="Text input with radio button" value="${data.vacuum}">
            <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
        </div> 

        <div class="input-items input-group mt-1">
            <input type="text" class="form-control" aria-label="Text input with radio button" value="${data.shopping}">
            <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
        </div> 

        <div class="input-items input-group mt-1">
            <input type="text" class="form-control" aria-label="Text input with radio button" value="${data.shower}">
            <button class="delete-btn btn btn-outline-secondary" type="button" id="button-addon2">✖︎</button>
        </div> 
    `

    }).catch((error) => {
        console.log(error)
    })
