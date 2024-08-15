import {
  ref,
  get,
  query,
  orderByKey,
  startAt,
  limitToFirst,
} from 'firebase/database';

import { db } from './firebase-init.js';

export function getDBData() {
  const dbRef = ref(db, 'nanny');

  get(query(dbRef, orderByKey(), startAt('4'), limitToFirst(3))).then(
    snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    }
  );
}
