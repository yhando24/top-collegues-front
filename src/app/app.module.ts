import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { CompteurVoteComponent } from './compteur-vote/compteur-vote.component';
import { FormsModule } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdCarouselBasicComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponentComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    CompteurVoteComponent,
    NouveauCollegueTemplateFormComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
