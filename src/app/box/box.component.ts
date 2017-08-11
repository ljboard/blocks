import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() boxTitle;
  @Input() description;
  @Input() date;
  @Input() color;
  @Input() width;
  @Input() leftOffset;
  
  constructor() { }

  ngOnInit() {
    if (!this.leftOffset) {
      this.leftOffset = "0px";
    }
  }
}
