import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlumnosComponent } from "./SG/pages/alumnos/alumnos.component";
import { CarrerasComponent } from "./SG/pages/carreras/carreras.component";
import { MaestrosComponent } from "./SG/pages/maestros/maestros.component";
import { MateriasComponent } from "./SG/pages/materias/materias.component";


const routes: Routes=[
    {
        path:'alumnos',
        component:AlumnosComponent,
        pathMatch:'full'
    },
    {
        path:'carreras',
        component:CarrerasComponent
    },
    {
        path:'maestros',
        component:MaestrosComponent
    },
    {
        path:'materias',
        component:MateriasComponent
    },
    {
        path:'**',
        redirectTo :'' 
    }


]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}