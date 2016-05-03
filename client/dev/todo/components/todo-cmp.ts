import {Component, Inject , Input} from 'angular2/core';
import {SearchComponent} from '../components/search';
import {CmsComponent} from '../components/cms'
import {MenuComponent} from '../components/menu'
import {TodoService} from '../services/todo-service';





@Component({
    selector: 'body-cmp',
    templateUrl: 'client/dev/todo/templates/body.html',
    styleUrls: ['client/dev/todo/styles/todo.css'],
    providers: [TodoService],
    directives: [SearchComponent, CmsComponent, MenuComponent]
})

export class TodoCmp{
    
    




}

