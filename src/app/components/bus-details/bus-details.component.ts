import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {

  seatAvailabity = 'more';
  busDetails: any;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.busDetails = this.commonService.getCachedData();
    console.log(this.busDetails)
  }

}
