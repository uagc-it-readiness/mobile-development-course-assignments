"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('./data.service');
// import * as express from "express";
// import {Server, Path, GET, PathParam } from "typescript-rest";
var StudentComponent = (function () {
    function StudentComponent(data) {
        this.data = data;
        this.tPoints = 0;
        this.tPointsPossible = 0;
        this.tGrade = 0;
        this.tLetterGrade = "F";
        this.name = 'Aaron Teague';
        this.email = "aaron.teague@outlook.com";
        this.assignmentList = [];
    }
    StudentComponent.prototype.updatePerformance = function () {
        this.tPoints = this.assignmentList.reduce(this.getPointsScored, 0);
        this.tPointsPossible = this.assignmentList.reduce(this.getPointsPossible, 0);
        this.tGrade = this.tPoints / this.tPointsPossible;
        this.tLetterGrade = this.getLetterGrade(this.tGrade);
    };
    StudentComponent.prototype.refresh = function () {
        var _this = this;
        this.data.getAllAssignments().then(function (res) { _this.assignmentList = res; _this.updatePerformance(); }).catch(function (res) { return console.log("error getting all data"); });
    };
    StudentComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    StudentComponent.prototype.addAssignment = function () {
        var a = { name: this.iAssignmentName,
            pointsScored: this.iPointsScored,
            pointsPossible: this.iPointsPossible,
            percent: this.iPointsScored / this.iPointsPossible,
            letterGrade: this.getLetterGrade(this.iPointsScored / this.iPointsPossible),
            id: Math.random()
        };
        // this.assignmentList.push(a);
        this.iAssignmentName = "";
        this.iPointsScored = 0;
        this.iPointsPossible = 0;
        this.data.addAssignment(a);
        this.refresh();
    };
    StudentComponent.prototype.getPointsPossible = function (total, a) {
        return total += a.pointsPossible;
    };
    StudentComponent.prototype.getPointsScored = function (total, a) {
        return total += a.pointsScored;
    };
    StudentComponent.prototype.removeAssignment = function (index) {
        var _this = this;
        this.data.deleteAssignment(this.assignmentList[index]).then(function (res) { return _this.refresh(); });
        //  this.assignmentList.splice(index, 1);
        //   this.refresh();
    };
    StudentComponent.prototype.getLetterGrade = function (grade) {
        if (grade >= 0.9)
            return "A";
        else if (grade >= 0.8)
            return "B";
        else if (grade >= 0.7)
            return "C";
        else if (grade >= 0.6)
            return "D";
        else
            return "F";
    };
    StudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'student',
            templateUrl: "student.component.html",
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
// let app: express.Application = express();
// Server.buildServices(app);
// app.listen(300, function() {
//   console.log('Rest Server listening on port 3000!');
// }) 
//# sourceMappingURL=student.component.js.map