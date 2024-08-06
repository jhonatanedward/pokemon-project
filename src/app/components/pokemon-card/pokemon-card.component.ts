import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PokemonCardComponent implements OnInit{

  @Output('onPokemonLoad') onPokemonLoad: EventEmitter<any> = new EventEmitter();
  
  @Input('pokemon') pokemonName!: string;

  public pokemon$!: Observable<any>;

  constructor(private _pokemon: PokemonService) {

  }

  ngOnInit(): void {
    this.pokemon$ = this._pokemon.getPokemon(this.pokemonName);
    this.onPokemonLoad.emit(true);
  }
}
