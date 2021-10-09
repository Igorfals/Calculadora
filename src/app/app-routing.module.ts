import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ViewpokemonComponent } from './viewpokemon/viewpokemon.component';

const routes: Routes = [
  //Calculadora
  {
      path: '',
      component: CalculadoraComponent 
  },
  //Pokedex
  {
      path: 'pokedex',
      component: PokedexComponent
      
  },
  {
    path: 'viewpokemon/:id',
    component: ViewpokemonComponent
    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
