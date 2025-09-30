import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey = '82a237b161e9ef2415f82e040f7c2bbb'
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
constructor() { }
  buscarInfoClimaCidadeAtual () {

    const urlCompleta =
    this.apiUrl +'?q=Dois%20Vizinhos&appid='+this.apiKey + '&lang=pt-br&units=metrics'

    console.log(urlCompleta)
  }
}
