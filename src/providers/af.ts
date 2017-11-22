import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AF {
  constructor(public af: AngularFireAuth) {}

  loginWithEmail(email, password) {
    return new Promise((resolve, reject) => {
      this.af.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  logout() {
    return this.af.auth.signOut();
  }
}
