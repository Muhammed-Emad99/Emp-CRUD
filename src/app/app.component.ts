import { Component, NgModule } from '@angular/core';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';
import { concatMap } from 'rxjs/operators';
import { PreloaderService } from './Services/preloader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'Employees-CRUD';
  loading$ = this.loader.loading$;

  constructor(public loader: PreloaderService, private http: HttpClient) { }

}
