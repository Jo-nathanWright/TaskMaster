import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({ listName, color, id = generateId() }) {
        this.listName = listName
        this.color = color.split(' ')[0].toLowerCase()
        this.id = id
    }

    get Template() {
        return `
        <div class="col-md-3 col-sm-2 mt-3">
                <div class="shadow">

                    <!--Sets up the List Title-->

                    <div class="list bg-${this.color} lighten-10">
                        <div class="p-1">
                            <div class="text-center">
                                <div class="text-right">
                                    <button type="button" class="btn" onclick="app.listsController.destroy('${this.id}')">❌</button>
                                </div>
                                <p class="pt-1"><b>${this.listName}</b></p>
                                ${this.TaskTotal}
                            </div>
                        </div>
                    </div>

                    <!--Is the Items in the list-->

                    <div class="row py-2">
                        <div class="mx-3">
                            <div class="d-flex flex-column">
                                ${this.TaskTemplate}
                            </div>
                        </div>
                    </div>

                    <!--This sets up New Items in the list-->

                    <div class="row mb-3">
                        <div class="d-flex flex-row justify-content-between">
                            <form onsubmit="app.listsController.addTask('${this.id}', event)">
                                <div class="form-group col-7 mb-1 mx-1">
                                    <label for="taskName"></label>
                                    <input type="text" name="taskName" class="form-control"
                                        placeholder="Add Task..." minlength="3" maxlength="50" required>
                                </div>
                                <div class="col-1 align-self-end mb-1">
                                    <button type="submit" class="btn">➕</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    get TaskTotal() {
        let template = ''
        let cTaskTotal = 0
        let taskTotal = 0
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
        tasks.forEach(t => {
            taskTotal += t.taskTotal
        })
        if (!template) {
            template += `
            <p>${cTaskTotal}/${taskTotal}</p>
            `
        }
        return template
    }

    get TaskTemplate() {
        let template = ''
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
        tasks.forEach(t => {
            template += t.Template
        })
        if (!template) {
            template += `
            <div class ="col ml-5">
                <p>Add some Tasks!</p>
            </div>
            `
        }
        return template
    }
}