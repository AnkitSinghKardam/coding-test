import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { FilterContainerComponent } from './components/container/filter-container/filter-container.component';
import { LaunchYearComponent } from './components/container/filter-container/launch-year/launch-year.component';
import { SuccessfulLaunchComponent } from './components/container/filter-container/successful-launch/successful-launch.component';
import { SuccessfulLandingComponent } from './components/container/filter-container/successful-landing/successful-landing.component';
import { ResultContainerComponent } from './components/container/result-container/result-container.component';
import { ResultItemsComponent } from './components/container//result-container/result-items/result-items.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterContainerComponent,
    LaunchYearComponent,
    SuccessfulLaunchComponent,
    SuccessfulLandingComponent,
    ResultContainerComponent,
    ResultItemsComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
