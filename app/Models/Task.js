import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({ taskName, listId, id = generateId() }) {
        this.id = id
        this.listId = listId
        this.taskName = taskName
    }

    get Template() {
        return `
            <div class="d-flex flex-row justify-content-between">
                <div class="col-7 align-self-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
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