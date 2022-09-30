import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  searchResults: any = [
    {
      id: '0',
      name: 'Ecallantide injection',
      state: 'Available',
      type: 'medicament',
      color: 'code_green',
    },
    {
      id: '0',
      name: 'Ecallantide injection',
      state: 'Unavailable',
      type: 'medicament',
      color: 'code_red',
    },
    {
      id: '0',
      name: 'Ecallantide injection',
      state: 'Shortage',
      type: 'medicament',
      color: 'code_yellow',
    },
  ];
  constructor() {
    return;
  }

  ngOnInit(): void {
    return;
  }
  onSearch() {
    console.log('searching...');
    this.searchResults = [
      {
        id: '0',
        name: 'Pharmacie ',
        state: 'Ouverte',
        type: 'pharmacie',
        color: 'code_green',
      },
      {
        id: '1',
        name: 'Paracitamol injection',
        state: 'Shortage',
        type: 'dci',
        color: 'code_yellow',
      },
      {
        id: '3',
        name: 'Pharmacy de nuit',
        state: 'Fermze',
        type: 'medicament',
        color: 'code_red',
      },
    ];
  }
}
