import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {
    createList(rawList) {
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }

    addTask(rawTask) {
        debugger
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    }

    destroy(id) {
        ProxyState.lists = ProxyState.lists.filter(pizza => pizza.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(topping => topping.pizzaId != id)
    }


}

export const listsService = new ListsService()