import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: any = [];
  page:number = 1
  constructor(private route: Router, private service: ApiserviceService) { }

  ngOnInit(): void {
    this.getDados()
  }

  abrirPokemon(id:any) {
    this.route.navigate(
      [`/viewpokemon/${id}`]
    )
  }

  getDados() {
    this.service.getPokemons().subscribe((result: any) => {
      this.pokemons = result.pokemons;
      console.log(this.pokemons)
    })
  }

}
