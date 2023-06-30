import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called");
  }
  ngOnInit(): void {
    console.log("ngOnInit Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");

  }
}
