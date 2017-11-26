import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneComponent } from './shared/components/scene/scene.component';

const routes: Routes = [
  { path: '', component: SceneComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);