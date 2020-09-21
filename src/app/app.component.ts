import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fromEventRxjs';

  constructor() {}

  ngOnInit(): void {
    const el = document.getElementById('elemento');

    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove.subscribe((e: MouseEvent) => {
      console.log(`Coords: X: ${e.clientX}, Y: ${e.clientY}`);
    });
  }
}
