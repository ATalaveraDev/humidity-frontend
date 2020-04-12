import { Component } from '@angular/core';

import { AppPresenter } from './app.presenter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private presenter: AppPresenter) { }

  onChange(event): void {
    event.checked ? this.presenter.startRandomDataGeneration() : this.presenter.stopRandomDataGeneration();
  }
}
