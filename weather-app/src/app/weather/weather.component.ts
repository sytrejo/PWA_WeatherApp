import { Component, OnInit } from '@angular/core';
import { Weather } from '../../weather';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  weather: Weather | undefined;
  
  constructor(private weatherService: WeatherService){ }

  ngOnInit(): void {
    
  }

  //method subscribes to the getWeather method of WeatherService and assigns the result to the weather component property.
  search(city: string){
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }

}
