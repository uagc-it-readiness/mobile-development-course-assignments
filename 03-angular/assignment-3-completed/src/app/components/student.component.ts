import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service'
import { Assignment } from '../shared/assignment'

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    providers: [AssignmentService]
})
export class StudentComponent implements OnInit {
    studentName: string;
    studentEmail: string;
    pointsScored: number;
    pointsPossible: number;
    percent: number;
    grade: string;
    iName: string;
    iScoredPoints: number;
    iPossiblePoints: number;
    assignmentList: Assignment[];

    constructor(private assignmentService: AssignmentService) {
        this.studentName = "Bob Smith";
        this.studentEmail = "bobsmith@gmail.com"
        this.pointsScored = 0;
        this.pointsPossible = 0;
        this.percent = 0;
        this.grade = 'N/A';
        this.assignmentList = [];
    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.assignmentService.getAll().then(
            assignments => {
                this.assignmentList = assignments;
                this.updatePerformance();
            }
        );
    }

    addAssignment(): void {
        let assignment: Assignment;

        assignment = new Assignment(this.iName, this.iScoredPoints, this.iPossiblePoints);

        this.assignmentService.add(assignment).then(
            () => { this.refresh(); }
        )
    }

    deleteAssignment(assignment: Assignment): void {
        this.assignmentService.delete(assignment).then(
            () => { this.refresh(); }
        )
    }

    updatePerformance() {
        if (this.assignmentList.length === 0) {
            this.pointsPossible = 0;
            this.pointsScored = 0;
            this.percent = 0;
            this.grade = 'N/A';
        }
        else {
            this.pointsPossible = this.assignmentList.reduce(this.addPointsPossible, 0);
            this.pointsScored = this.assignmentList.reduce(this.addPointsScored, 0);
            this.percent = this.pointsScored / this.pointsPossible;
            this.grade = this.getGrade(this.percent);
        }
    }

    private getGrade(percent: number): string {
        if (percent >= 0.9)
            return 'A';
        else if (percent >= .8)
            return 'B';
        else if (percent >= .7)
            return 'C';
        else if (percent >= .6)
            return 'D';
        else
            return 'F';
    }

    private addPointsPossible(tally: number, assignment: Assignment) {
        return tally + assignment.points_possible;
    }

    private addPointsScored(tally: number, assignment: Assignment) {
        return tally + assignment.points;
    }
}
