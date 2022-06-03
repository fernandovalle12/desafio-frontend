import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule { }
