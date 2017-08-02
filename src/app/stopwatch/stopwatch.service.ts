import {Injectable} from '@angular/core';


import {Lap} from './lap';

@Injectable()
export class StopwatchService {
    public laps: Lap[];

    private startAt: number;
    private lapTime: number;

    constructor() {
        this.reset();
    }

    lap() {
        const timeMs = this.startAt ? this.lapTime + this.now() - this.startAt : this.lapTime;
        this.laps[this.laps.length - 1].stop(timeMs);
        this.laps.push(new Lap(timeMs));
    }

    now(): number {
        return Date.now();
    }

    reset() {
        this.startAt = 0;
        this.lapTime = 0;

        this.laps = new Array<Lap>();
        this.laps.push(new Lap(0));
    }

    start() {
        this.startAt = this.startAt ? this.startAt : this.now();
    }
    stop() {
        const timeMs = this.startAt
            ? this.lapTime + this.now() - this.startAt
            : this.lapTime;

        this.lapTime = timeMs;
        this.laps[this.laps.length - 1].stop(timeMs);

        this.startAt = 0;
    }

    time() {
        return this.lapTime + (this.startAt ? this.now() - this.startAt : 0);
    }

    previousLap(): any {
        if (this.laps.length) {
            return this.laps[this.laps.length - 1].endMs;
        }
    }
}
