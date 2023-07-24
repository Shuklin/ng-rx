import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, map} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../../shared/services/persistance.service";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistanceService: PersistanceService
  ) {
  }

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = this.persistanceService.get('accessToken');
      console.log(token)
      if (!token) {
        console.log(1)
        return of(getCurrentUserFailureAction())
      }

      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          this.persistanceService.set('accessToken', currentUser.token);
          return getCurrentUserSuccessAction({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          console.log(2, errorResponse)
          return of(getCurrentUserFailureAction())
        })
      )
    })
  ))
}
