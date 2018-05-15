import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { DemoComponent} from './demo/demo.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component'
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './services/collegue.service';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A

  { path: 'demo', component: DemoComponent }, // /page2 affiche le composant B

  { path: 'collegues/:pseudo', component: DetailCollegueComponent },

  { path: '',   redirectTo: 'accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut

]
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    DetailCollegueComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }