import {Injectable} from '@angular/core';


export class Lap {
    public startMs: number;
    public endMs: number;

    constructor(startMs: number) {
        this.startMs = startMs;
        this.endMs = 0;
    }

    stop(timeMs: number) {
        this.endMs = timeMs;
    }
}


