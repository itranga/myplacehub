import {Component, Input , OnInit , Inject} from 'angular2/core';
import {TodoService} from '../services/todo-service';

@Component({
  selector: 'menu-cmp',
  templateUrl: 'client/dev/todo/templates/menu.html',
})


export class MenuComponent implements OnInit{
    
    todos: Todo[] = [];

    constructor( @Inject(TodoService) private _todoService: TodoService) {

    }

    ngOnInit() {
        this._getAll();
    }

    private _getAll(): void {
        this._todoService
            .getAll()
            .subscribe((todos) => {
                this.todos = todos;
                console.log(this.todos);
               
            });
    }




}



