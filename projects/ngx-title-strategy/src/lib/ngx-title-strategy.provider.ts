import { EnvironmentProviders, Provider } from "@angular/core";
import { NgxTitleStrategyService } from "./ngx-title-strategy.service";
import { TitleStrategy } from "@angular/router";
import { NGX_DEFAULT_TITLE_TEMPLATE, NGX_TITLE_TEMPLATE } from "./ngx-title-strategy.constants";

export const provideTitleStrategy = (titleTemplate: string = NGX_DEFAULT_TITLE_TEMPLATE): Array<Provider | EnvironmentProviders> => {
  return [
    NgxTitleStrategyService,
    {
      provide: TitleStrategy,
      useClass: NgxTitleStrategyService
    },
    {
      provide: NGX_TITLE_TEMPLATE,
      useValue: titleTemplate
    }
  ];
}
