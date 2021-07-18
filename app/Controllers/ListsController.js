import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

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
        ProxyState.on('tasks', _draw)
        ProxyState.on('lists', saveState)
        _draw()
        loadState()

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

    destroy(id) {
        listsService.destroy(id)
    }

    addTask(listId, event) {
        debugger
        event.preventDefault()
        let form = event.target
        let rawTask = {
            listId,
            taskName: form.taskName.value
        }
        listsService.addTask(rawTask)
        form.reset()
    }
}