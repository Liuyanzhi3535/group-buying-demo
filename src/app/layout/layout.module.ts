import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [LayoutComponent, NavComponent],
})
export class LayoutModule {}
