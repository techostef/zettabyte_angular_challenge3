import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class AppComponent implements AfterViewInit {
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort; // For sort
  }
}

