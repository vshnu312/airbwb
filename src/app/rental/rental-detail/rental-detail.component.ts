import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  // rental: Rental;
  currentId: string;
  rental: Rental;

  constructor(private route:ActivatedRoute,
    private rentalService:RentalService ) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
      //  console.log(params);
      //  debugger
      this.currentId = params['rentalId'];
      this.getRental(params['rentalId']);
      })
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      });
  }
}
