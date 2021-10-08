import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  abrirPokemon() {
    this.route.navigate(
      ["/viewpokemon"]
    )
  }

}
