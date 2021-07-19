import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ taskName, listId, id = generateId() }) {
        this.id = id
        this.listId = listId
        this.taskName = taskName
        this.taskTotal = 1
        this.compeleted = false //Use a turnarry on the checkbox
    }

    get Template() {
        let check = ""
        if (this.compeleted == true) {
            check = "checked"
        } else {
            check = ""
        }
        return `
            <div class="d-flex flex-row justify-content-between">
                <div class="col-7 align-self-center">
                    <div class="form-check" id="${this.taskName}">
                        <input type="checkbox" class="form-check-input" onchange="app.listsController.check(${this.compeleted})" ${check}>
                        <label class="form-check-label" for="${this.taskName}">
                            ${this.taskName}
                        </label>
                    </div>
                </div>
                <div class="col-1">
                    <button type="submit" class="btn" onclick="app.listsController.deleteTask('${this.id}')"> <i class="mdi mdi-delete"></i> </button>
                </div>
            </div>
        `
    }
}