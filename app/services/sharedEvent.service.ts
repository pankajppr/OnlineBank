import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedEventService {
     onMainEvent: EventEmitter<any> = new EventEmitter();

}