import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { SpinnerType } from './shared/spinner/SpinnerType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'appAdministrador';

  @ViewChild(SpinnerComponent) spinner!: SpinnerComponent;

  ngAfterViewInit() {

  }
}
