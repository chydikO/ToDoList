import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent   implements OnInit {
  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    console.log(this.tasks);
  }
}
