import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FeedComponent} from "./components/feed.component";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {FeedService} from "./services/feed.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {LoadingModule} from "../loading/loading.module";
import {PaginationModule} from "../pagination/pagination.module";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})

export class FeedModule {

}
