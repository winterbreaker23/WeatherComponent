import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[] = [];
  filteredData: data | null = null;
  cityName: string = '';

  ngOnInit() {}

  onCityNameChange(city: string) {
    this.cityName = city.trim().toLowerCase();
    this.filteredData = this.weatherData.find(
      (data) => data.name.toLowerCase() === this.cityName
    ) || null;
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
