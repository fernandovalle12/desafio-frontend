import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        NavbarComponentComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NavbarComponentComponent
    ]
})
export class SharedModule { }
