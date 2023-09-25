import { ModuleWithProviders, NgModule } from '@angular/core';
import { NGX_DEFAULT_TITLE_TEMPLATE } from './ngx-title-strategy.constants';
import { provideTitleStrategy } from './ngx-title-strategy.provider';

@NgModule()
export class NgxTitleStrategyModule {

  static forRoot(titleTemplate: string = NGX_DEFAULT_TITLE_TEMPLATE): ModuleWithProviders<NgxTitleStrategyModule> {
    return {
      ngModule: NgxTitleStrategyModule,
      providers: [
        provideTitleStrategy(titleTemplate)
      ]
    }
  }

}
