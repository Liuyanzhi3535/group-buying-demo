import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  moduleName;
  constructor() {}

  ngOnInit(): void {}

  setModuleName(outlet: RouterOutlet): void {
    const moduleName = outlet.activatedRouteData.moduleName;
    this.moduleName = moduleName;
  }
}
