import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenlayersComponent } from './openlayers/openlayers.component';
import { OsmComponent } from './osm/osm.component';


const routes: Routes = [
 { path: '', redirectTo: 'openlayers', pathMatch: 'full' },
 { path: 'openlayers', component: OpenlayersComponent },
 { path: 'osm', component: OsmComponent },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
