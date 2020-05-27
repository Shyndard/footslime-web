import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'footslime-web';
  cookieMessage =
    'En cliquant sur ”J’ai compris”, vous acceptez l’utilisation des cookies. Si vous supprimez ou désactivez nos cookies, vous pourriez rencontrer des interruptions ou des problèmes d’accès au site.';
  cookieDismiss = "J'ai compris !";
  cookieLinkText = "Pour + d'infos";
  redirectLaw = 'https://gdpr.eu/cookies/';

  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#164969',
        },
        button: {
          background: '#ffe000',
          text: '#164969',
        },
      },
      theme: 'classic',
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        href: this.redirectLaw,
      },
    });
  }
}
