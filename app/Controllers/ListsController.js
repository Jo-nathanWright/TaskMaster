import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _draw() {
    let template = ''
    ProxyState.lists.forEach(list => {
        template += list.Template
    })
    document.getElementById('listBox').innerHTML = template
}



export default class ListsController {
    constructor() {
        ProxyState.on('lists', _draw)
        _draw()
    }

    createList(event) {
        event.preventDefault()
        let form = event.target
        let rawList = {
            listName: form.listName.value,
            color: form.color.value
        }
        listsService.createList(rawList)
        form.reset()
    }
}