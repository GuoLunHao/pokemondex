import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    NzTableModule,
  ]
})
export class PokemonListModule { }
