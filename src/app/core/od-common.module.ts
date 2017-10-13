import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: []
})
export class ODCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ODCommonModule,
      providers: [
      ]
    };
  }
}