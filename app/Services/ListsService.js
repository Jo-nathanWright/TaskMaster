import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {
    createList(rawList) {
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }

    addTask(rawTask) {
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    }

    destroy(id) {
        if (confirm("Confirm Delete? This cannot be undone.")) {
            ProxyState.lists = ProxyState.lists.filter(lists => lists.id != id)
            ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listsId != id)
        }

    }

    deleteTask(id) {
        if (confirm("Delete Task? This cannot be undone.")) {
            ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.id != id)
        }
    }


}

export const listsService = new ListsService()