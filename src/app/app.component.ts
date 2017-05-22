import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';
  todos = ['整理房間', '聚餐', '繳卡費', '運動'];

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  addTodo(value: string) {
    if (value && value.trim())
      this.todos.push(value);
  }

}
