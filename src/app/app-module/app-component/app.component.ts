import { Component, ViewChild, ContentChild, OnInit, AfterContentChecked, ViewContainerRef, ViewChildren } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'application';

  @ViewChild('appFooter', {read: '', static: true}) appFooter: FooterComponent;

  ngOnInit() {
    console.log('app Footer', this.appFooter.footerVar1);
    this.appFooter.footerVar1 = 'updated new footer content';
  }

  ngAfterContentChecked() {
    //
  }
}
