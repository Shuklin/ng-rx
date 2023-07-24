import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, map} from "rxjs";
import {
  getFeedAction,
} from "../actions/getFeed.action";
import {GetFeedResponseInterface} from "../../types/getFeedResponse.interface";
import {getFeedFailureAction, getFeedSuccessAction} from "../actions/getFeed.action";
import {FeedService} from "../../services/feed.service";

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions,
              private feedService: FeedService) {
  }

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({feed})
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )
}
