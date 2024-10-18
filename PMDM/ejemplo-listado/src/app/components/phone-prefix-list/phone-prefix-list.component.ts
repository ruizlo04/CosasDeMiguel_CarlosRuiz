import { Component } from '@angular/core';

export interface CountryPhone{
  nombre: string;
  flag: string;
  prefix: number[];
}

const COUNTRY_PREFIXES: CountryPhone[] = [
  { nombre: 'Spain', flag: 'spain-flag-png-large.png', prefix: [34] },
  { nombre: 'France', flag: 'france-flag-png-large.png', prefix: [33] },
];

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})

export class PhonePrefixListComponent {
  countryPrefixes = COUNTRY_PREFIXES;

  getFlagImage(flag: string): string {
    return `assets/flags/${flag}`;

  }
}
