import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy  {
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

data = 'Angular';
    ngOnInit() {
        console.log('Init');
    }
    ngDoCheck(): void {
        console.log('Change detected');
    }
    ngAfterContentInit(): void {
      console.log('After content init');
  }
  ngAfterContentChecked(): void {
      console.log('After content checked');
  }
  ngAfterViewInit(): void {
      console.log('After view init');
  }
  ngAfterViewChecked(): void {
      console.log('After view checked');
  }
  ngOnDestroy(): void {
      console.log('Destroy');
  }

}
