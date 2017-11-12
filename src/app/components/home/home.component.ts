import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SelectItem } from 'primeng/components/common/api';
import { CountryService } from '../../core/country.service';
import { TrackerError } from '../../core/TrackerError';

@Component({
  selector: 'b-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  countries: SelectItem[] | TrackerError;
  selectedCar: string;
  constructor(private title: Title, private countryService: CountryService) {
    this.title.setTitle('Home');
  }
  ngOnInit() {
    this.countryService.getCountries().subscribe(country => { this.countries = country; });
  }
  onChange(data) {
    if (data.value === 'DZ') {
      confirm('Are you sure want to procced ?');
    }
  }
}
