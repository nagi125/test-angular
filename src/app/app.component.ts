import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "test-app";

  tasks = [
    {title: '牛乳を買う', done: false},
    {title: '可燃ゴミを出す', done: true},
    {title: '銀行に行く', done: false},
  ];

  newTaskTitle = 'test';

  result = {};


  addTask(): void {
    this.tasks.push({title: this.newTaskTitle, done: false});
    this.newTaskTitle = '';
  }
}
