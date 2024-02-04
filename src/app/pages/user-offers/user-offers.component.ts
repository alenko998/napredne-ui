import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css']
})
export class UserOffersComponent implements OnInit{
  offers:any;
  houseId:any;
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.houseId = params.get('houseId');
    })
    this.getOffersByHouseId();
  }

  getOffersByHouseId(){
    this.offerService.getOffersByHouseId(this.houseId).subscribe(
      (response)=>{
        console.log(response);
        this.offers = response;
        
      },
      (error)=> {
        console.log(error);
        
      }
    )
  }

}
