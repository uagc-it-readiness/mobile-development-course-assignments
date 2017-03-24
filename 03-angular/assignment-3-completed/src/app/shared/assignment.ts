export class Assignment {

    constructor(public name: string, public points: number, public points_possible: number, public id?: number) {
    }

    get percent() : number {
        return this.points / this.points_possible;
    }

    get grade() : string {
        let percent = this.percent;

        if (percent >= 0.9)
            return 'A';
        else if (percent >= .8 )
            return 'B';
        else if (percent >= .7 )
            return 'C';
        else if (percent >= .6 )
            return 'D';
        else 
            return 'F';
    }
}