import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
    time: string;

    constructor() {
        this.getTime();
    }

    ngOnInit() {
    }

    getTime() {
        const self = this;
        setInterval(() => {
            const date = new Date();
            self.time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        }, 1000);
    }
}
