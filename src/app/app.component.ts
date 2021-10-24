import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslationService } from './modules/i18n/translation.service';
// language list
import { locale as enLang } from './modules/i18n/vocabs/en';
import { locale as arLang } from './modules/i18n/vocabs/ar';
// import { locale as chLang } from './modules/i18n/vocabs/ch';
// import { locale as esLang } from './modules/i18n/vocabs/es';
// import { locale as jpLang } from './modules/i18n/vocabs/jp';
// import { locale as deLang } from './modules/i18n/vocabs/de';
// import { locale as frLang } from './modules/i18n/vocabs/fr';
// import { SplashScreenService } from './_metronic/partials/layout/splash-screen/splash-screen.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { TableExtendedService } from './_metronic/shared/crud-table';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private translationService: TranslationService,
    // private splashScreenService: SplashScreenService,
    private router: Router,
    private tableService: TableExtendedService
  ) {
    // register translations
    this.translationService.loadTranslations(
      enLang,
      arLang,
      // chLang,
      // esLang,
      // jpLang,
      // deLang,
      // frLang
    );
  }

  ngOnInit() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // clear filtration paginations and others
        this.tableService.setDefaults();
        // hide splash screen
        // this.splashScreenService.hide();

        // scroll to top on every route change
        window.scrollTo(0, 0);

        // to display back the body content
        setTimeout(() => {
          document.body.classList.add('page-loaded');
        }, 500);
      }
    });
    this.unsubscribe.push(routerSubscription);
    this.setHtmlDirection(this.translationService.getSelectedLanguage());
  }

  setHtmlDirection(lang: string) {
    let htmlTag = document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    htmlTag.lang = lang;
    htmlTag.classList.add(lang === "ar" ? "rtl" : "ltr");
    this.importRtlCss(lang);
 }

 importRtlCss(lang: string) {
   if(lang !== "ar") return false;
    let newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.href = "./assets/sass/style.angular.rtl.css";
    document.head.appendChild(newLink);
}

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
