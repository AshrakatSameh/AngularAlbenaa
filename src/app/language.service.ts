import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('ar');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.updateDirection(language);
  }

  private updateDirection(language: string) {
    // const dir = language === 'ar' ? 'rtl' : 'ltr';
    // document.documentElement.setAttribute('dir', dir);
  }
}
