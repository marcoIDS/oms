import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OsmServiceService } from '../osm-service.service';
declare var ol: any;

@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.scss']
})
export class OsmComponent implements OnInit {
  latitude: number = 20.6179076;
  longitude: number = -100.3884927;

  map: any;
  searchFormGroup: FormGroup ;
  constructor(
    private formBuilder: FormBuilder,
    private api: OsmServiceService,

  ) { }

  ngOnInit() {
    this.searchFormGroup = this.formBuilder.group({
      "query":[""],
    })
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-100.3884927,20.6179076]), //lng,lat
        zoom: 10
      })
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(10);
  }

  search(){
    this.api.search(this.searchFormGroup.get("query").value).subscribe(response => {
        console.log(response)
    })
  }

}
