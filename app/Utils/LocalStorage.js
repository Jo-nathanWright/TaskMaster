import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

export function saveState() {
    localStorage.setItem('List', JSON.stringify({
        lists: ProxyState.lists
    }))
    console.log('saved state', ProxyState)
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('List'))
    console.log(data)
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
    }

}