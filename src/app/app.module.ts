import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { routing }       from './app.routes';

import { WindowRef } from './shared/services/window.service';
import { SceneModule } from './shared/components/scene/scene.module';

@NgModule({

    imports: [ BrowserModule,
               BrowserAnimationsModule,
               CommonModule,
               HttpClientModule,
               SceneModule,
               routing],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ WindowRef ]
})

export class AppModule {}
