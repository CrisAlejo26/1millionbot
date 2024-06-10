import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PageComponent } from './page/page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../materialAngular/material.module';
import { SeccionDemoComponent } from './seccion-demo/seccion-demo.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { CardSliderComponent } from './card-slider/card-slider.component';


@NgModule({
    declarations: [
        PageComponent,
        NavBarComponent,
        SeccionDemoComponent,
        ChatBotComponent,
        CardSliderComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule
    ]
})
export class HomeModule { }
