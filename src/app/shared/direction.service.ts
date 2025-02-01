import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private translate: TranslateService) {}

  getDirection(): string {
    const lang = localStorage.getItem('language') || this.translate.getDefaultLang();
    return lang === 'ar' ? 'rtl-direction' : 'ltr-direction';
  }

  getButtonAlignment(): string {
    const lang = localStorage.getItem('language') || this.translate.getDefaultLang();
    return lang === 'ar' ? 'rtl-align-button' : 'ltr-align-button';
  }
  getIconeAlignment():string{
    const lang = localStorage.getItem('language') || this.translate.getDefaultLang();
    return lang === 'ar' ? 'ltr-align-button' : 'rtl-align-button';

  }
}
