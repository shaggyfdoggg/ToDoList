import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  toDoList:Todo[] = [
    {
      task: "Exercise",
      completed: true
    },
    {
      task: "Eat breakfast",
      completed: true
    },
    {
      task: "Go to class",
      completed: false
    },
    {
      task: "Eat lunch",
      completed: true
    },
    {
      task: "Watch tV",
      completed: false
    },
    {
      task: "Eat dinner",
      completed: false
    },
    {
      task: "Play video games",
      completed: false
    }
  ] 
  //allTasks:Todo[] = [];
  newTask:Todo = {} as Todo;

  completeTask(completedTask:Todo):void{
    let index = this.toDoList.findIndex((t:Todo) => t == completedTask);
    completedTask.completed = true;
  }

  
  addTask():void{
    console.log(this.newTask);
    let result:Todo = {
      task: this.newTask.task,
      completed: false
      // completed: this.newTask.completed
    }
    this.toDoList.push(result);
    this.newTask = {} as Todo;
  }

  // taskDone():string{
  //   if(this.newTask.completed == true)
  //   {
  //     return "yes";
  //   }
  //   else{
  //     return "no";
  //   }
  //}
}
