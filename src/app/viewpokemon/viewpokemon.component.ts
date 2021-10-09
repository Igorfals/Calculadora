import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewpokemon',
  templateUrl: './viewpokemon.component.html',
  styleUrls: ['./viewpokemon.component.css']
})
export class ViewpokemonComponent implements OnInit {

  id: any = null
  pokemon: any = {}
  constructor(private service: ApiserviceService,private route: ActivatedRoute ) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id']
    this.getDados()
  }
  getDados(){
    this.service.getPokemonId(this.id).subscribe((result:any)=> {
        this.pokemon = result.pokemon
        console.log(this.pokemon)
    })
  }

}
