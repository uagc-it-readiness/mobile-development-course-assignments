import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'student',
  templateUrl: 'student.component.html'
})
export class StudentComponent {
  name: string;
  email: string;

  assignmentList: assignment[];

  tPoints: number = 0;
  tPointsPossible: number = 0;
  tGrade: number = 0;
  tLetterGrade: string = "F";

  iAssignmentName: string;
  iPointsPossible: number;
  iPointsScored: number;


  constructor() {
    this.name = 'Aaron Teague';
    this.email = "aaron.teague@outlook.com";


    this.assignmentList = [];



    
  }

  addAssignment(): void {
   let a = {name: this.iAssignmentName,
        pointsScored: this.iPointsScored, 
        pointsPossible: this.iPointsPossible,
        percent: this.iPointsScored / this.iPointsPossible,
        letterGrade: this.getLetterGrade(this.iPointsScored / this.iPointsPossible)
    }
    this.assignmentList.push(a);


   
   this.iAssignmentName = "";
   this.iPointsScored = 0;
   this.iPointsPossible = 0;
   
   

   this.tPoints = this.assignmentList.reduce(this.getPointsScored, 0);
   this.tPointsPossible = this.assignmentList.reduce(this.getPointsPossible, 0);
   this.tGrade = this.tPoints / this.tPointsPossible;
   this.tLetterGrade = this.getLetterGrade(this.tGrade);
  }



  getPointsPossible(total: number, a: assignment): number {
    return total += a.pointsPossible;
  }

  getPointsScored(total: number, a:assignment): number {
    return total += a.pointsScored;
  }

  removeAssignment(index: number){
      this.assignmentList.splice(index, 1);
  }

 

 // getPercent(): string{
   // return (this.getPointsScored() / this.getPointsPossible() * 100).toFixed(0) + "%";
 // }

  getLetterGrade(grade: number): string{
    
    if(grade >= 0.9)
      return "A";
    else if(grade >= 0.8)
      return "B";
    else if(grade >= 0.7)
      return "C";
    else if(grade >= 0.6)
      return "D";
    else
      return "F";
  }
}

interface assignment {
  name: string,
  pointsScored: number,
  pointsPossible: number,
  percent: number,
  letterGrade: string
}