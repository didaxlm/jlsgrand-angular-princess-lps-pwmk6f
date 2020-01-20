import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PrincessListComponent } from "./princess-list/princess-list.component";
import { PrincessDetailsComponent } from "./princess-details/princess-details.component";
import { PrincessScriptComponent } from "./princess-script/princess-script.component";
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: PrincessListComponent },
      { path: 'script/:princessId', component: PrincessScriptComponent },
      { path: '**', component: FourOFourComponent },
    ])
  ],
  declarations: [
    AppComponent,
    PrincessListComponent,
    PrincessDetailsComponent,
    PrincessScriptComponent,
    FourOFourComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
