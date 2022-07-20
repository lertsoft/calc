import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.scss']
})
export class ServiceUpdateComponent implements OnInit {
  public result = []
  results!: string[];
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.results = this.dataService.results
  }

}
