import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }       from '@angular/common';

import { SceneComponent } from './scene.component';


@NgModule({
  imports:      [ RouterModule,
                  CommonModule ],
  declarations: [ SceneComponent ],
  exports: [ SceneComponent ]
})

export class SceneModule {}
