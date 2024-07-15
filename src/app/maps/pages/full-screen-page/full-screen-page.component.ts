import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from 'src/environments/environment';




@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      // center: [-61.96885, -33.74556], // starting position [lng, lat]
      center: [-64.00287303908173, -31.286984242448504],
      zoom: 9, // starting zoom
    });

  }
  




}
