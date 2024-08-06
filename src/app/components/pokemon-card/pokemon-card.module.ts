import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonCardComponent } from "./pokemon-card.component";
import { PokemonStatComponent } from "./pokemon-stat/pokemon-stat.component";
import { PokemonService } from "./pokemon.service";
import { createCustomElement } from "@angular/elements";

@NgModule({
    imports: [CommonModule, BrowserModule, HttpClientModule],
    exports: [PokemonCardComponent],
    declarations: [PokemonCardComponent, PokemonStatComponent],
    providers: [PokemonService]
})
export class PokemonCardModule implements DoBootstrap {

    constructor(private injector: Injector){}

    ngDoBootstrap(): void {
        const pokemonCardElement = createCustomElement(PokemonCardComponent, { injector: this.injector})
        customElements.define('pokemon-card', pokemonCardElement);
    }
    
}