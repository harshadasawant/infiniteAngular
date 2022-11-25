import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Infinite_Angular';
  courseName = "Angular";
  colspanValue: string ="3";
  changeName() {
    this.courseName = "TypeScript";
}

isValid=true;
show!: boolean;
name! : string;
message!: string;
courseReg(courseName: any) {
  this.message = `Your registration for ${courseName} is successful`;
}

}
