import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openlayers',
  templateUrl: './openlayers.component.html',
  styleUrls: ['./openlayers.component.scss']
})
export class OpenlayersComponent implements OnInit {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;

  constructor() { }

  ngOnInit() {
  }
  
  increaseZoom() {
    this.zoom  = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom  = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseOpacity() {
    this.opacity  = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity  = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }

}
