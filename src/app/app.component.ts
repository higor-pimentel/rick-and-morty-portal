import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rick and Morty Portal';
  supportLanguages = ['en', 'pt'];
  selectedLang: string;
  formGroup: FormGroup;

  constructor(
    private translateService: TranslateService,
    private formBuilder: FormBuilder
  ) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

    this.selectedLang = !!localStorage.getItem('language')
      ? (localStorage.getItem('language') as string)
      : (this.translateService.getBrowserLang() as string);

    this.translateService.use(this.selectedLang as string);
    this.formGroup = this.formBuilder.group({
      selectLanguage: [''],
    });
    this.formGroup.patchValue({
      selectLanguage: this.selectedLang,
    });
  }

  selectLanguage(language: any) {
    localStorage.setItem('language', language.value);
    this.translateService.use(language.value);
  }
}
