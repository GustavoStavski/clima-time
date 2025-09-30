import {Routes} from "@angular/router"
import { ClimaComponent } from "./clima.component"

export const climaRoutes : Routes = [
  {
    path: '',
    loadComponent: () => import('./clima.component').then(r => ClimaComponent)
  }
]
