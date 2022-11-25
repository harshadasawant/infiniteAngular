import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  exportAs: 'courselist'

})
export class CourselistComponent {

  @Output() onRegister = new EventEmitter<string>();

  register(courseName: string) {
    this.onRegister.emit(courseName);
  }

  courses = [
    { courseId: 1, courseName: 'Node JS' },
    { courseId: 2, courseName: 'Typescript' },
    { courseId: 3, courseName: 'Angular' },
    { courseId: 4, courseName: 'React JS' }
  ];
  course!: any[];
  @Input() set cName(name: string) {

    this.course = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].courseName === name) {
        this.course.push(this.courses[i]);
      }
    }
  }
}
