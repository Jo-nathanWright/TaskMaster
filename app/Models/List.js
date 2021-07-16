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
                                    <button type="button" class="btn">❌</button>
                                </div>
                                <p class="pt-1"><b>${this.listName}</b></p>
                                <p>2/2</p>
                            </div>
                        </div>
                    </div>

                    <!--Is the Items in the list-->

                    <div class="row py-2">
                        <div class="mx-2">
                            <div class="d-flex flex-row justify-content-between pb-2">
                                <div class="col-5">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            RaceCar
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <p><i class="mdi mdi-delete"></i></p>
                                </div>
                            </div>

                            <div class="d-flex flex-row justify-content-between">
                                <div class="col-5">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            FireTruck
                                        </label>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <p><i class="mdi mdi-delete"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--This sets up New Items in the list-->
                    <div class="row d-flex flex-row">
                        <div class="form-group col-md-8 mb-1 mx-1">
                            <label for="newItem"></label>
                            <input type="text" name="newItem" id="${this.id}" class="form-control"
                                placeholder="Add Task..." minlength="3" maxlength="50">
                        </div>
                        <div class="col-md-1 align-self-end mb-1">
                            <button type="button" class="btn btn-${this.color}">➕</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    get ItemTemplate() {
        return ``
    }
}