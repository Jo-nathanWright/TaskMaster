import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"

class ListsService {
    createList(rawList) {
        debugger
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }
}

export const listsService = new ListsService()