import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';


@NgModule ({
    declarations:[
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class HomeModule{ }

