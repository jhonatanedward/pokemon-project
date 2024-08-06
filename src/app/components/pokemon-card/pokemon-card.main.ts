import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "src/environments/environment.development";
import { PokemonCardModule } from "./pokemon-card.module";

if (environment.production){
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(PokemonCardModule);

bootstrap().catch((error) => console.error(error))