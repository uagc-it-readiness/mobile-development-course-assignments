import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'student',
  templateUrl: `student.component.html`,
})
export class StudentComponent  { 
    name: string;
    email: string;
    pointsScored: number = 7;
    pointsPossible: number = 7;
    percent: number = 7;
    grade: string = "@";
    iName: string;
    iScore: number;
    iScorePossible: number;

    constructor(){
        this.name = 'Aaron Teague';
        this.email = 'aaron.teague@outlook.com'
    }

    addAssignment(): void{
        
    }

    
}

interface Assignment{
    name: string;
    pointsScored: string;
    pointsPossible: number;
}