import {Component, OnInit} from '@angular/core';
import {StopwatchService} from './stopwatch.service';

@Component({
    selector: 'app-stopwatch',
    templateUrl: './stopwatch.component.html',
    styleUrls: ['./stopwatch.component.css'],
    providers:[StopwatchService]
})
export class StopwatchComponent {
    public started: boolean;
    public stopwatchService: StopwatchService;
    public time: number;
    private timer: any;

    constructor(stopwatchService: StopwatchService) {
        this.stopwatchService = stopwatchService;
        this.time = 0;
        this.started = false;
    }

    formatTime(timeMs: number) {
        let minutes: string,
            seconds: string;

        minutes = Math.floor(timeMs / 60000).toString();
        seconds = ((timeMs % 60000) / 1000).toFixed(3);
        return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
    }

    getUpdate() {
        const self = this;

        return () => {
            self.time = this.stopwatchService.time();
        };
    }

    lap() {
        this.update();
        if (this.time) {
            this.stopwatchService.lap();
        }
    }

    reset() {
        this.stopwatchService.reset();
        this.started = false;
        this.update();
    }

    start() {
        this.timer = setInterval(this.getUpdate(), 1);
        this.stopwatchService.start();
    }

    stop() {
        clearInterval(this.timer);
        this.stopwatchService.stop();
    }

    toggle() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }

        this.started = !this.started;
    }

    update() {
        this.time = this.stopwatchService.time();
    }

}
