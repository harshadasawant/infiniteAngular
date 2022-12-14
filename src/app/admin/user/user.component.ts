import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  myStyle={
      width:'100px',
      height:'150px',
      background:'red',
      color:'yellow',
      border: '1px'
     };
     addStyles(){
      this.myStyle['color']='white';
      this.myStyle['border']="2px solid black";
     }

    show = true;

    title: string ="Top 10 Movies" ;
    movies: Movie[] =[
        {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
        {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
        {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
        {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    ]

    selectedValue: string= 'One1';

myClasses={
    box:true,
    border:false,
    circle:false
   }
   changeShape(){
    this.myClasses.border = !this.myClasses.border;
    this.myClasses.circle = !this.myClasses.circle;
   }

  argsPass(username: string){
    alert(username);
  }

  name: string = "Angular";

}

class Movie {
  title! : string;
  director! : string;
 cast! : string;
 releaseDate! : string;
  }

