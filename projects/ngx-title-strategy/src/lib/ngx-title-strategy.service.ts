import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { NGX_TITLE_TEMPLATE } from './ngx-title-strategy.constants';

@Injectable()
export class NgxTitleStrategyService extends TitleStrategy {

  /**
     * Constructor
     */
  constructor(
    private readonly _title: Title,
    @Inject(NGX_TITLE_TEMPLATE) private readonly _titleTemplate: string
  ) {
    super();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Update title
   *
   * ```ts
   * const regexp = /{{[\s\t]*\w+[\s\t]*}}/g;
   * ```
   *
   * @param snapshot
   */
  override updateTitle(snapshot: RouterStateSnapshot): void {

    const title = this.buildTitle(snapshot);

    // If route has a custom title, set title according to template
    if (title !== undefined) {
      const regexp = /{{[\s\t]*\w+[\s\t]*}}/g;
      this._title.setTitle(this._titleTemplate.replaceAll(regexp, title))
    }
  }
}
