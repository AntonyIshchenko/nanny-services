import {
  ref,
  get,
  query,
  orderByKey,
  startAt,
  limitToFirst,
} from 'firebase/database';

import { db } from './init.js';

export async function getDBData(limit, startKey = '') {
  const dbRef = ref(db, 'nanny');

  const queryData = startKey
    ? query(dbRef, orderByKey(), startAt(startKey), limitToFirst(limit))
    : query(dbRef, orderByKey(), limitToFirst(limit));

  try {
    const snapshot = await get(queryData);

    const data = [];
    if (snapshot.exists()) {
      const res = snapshot.exportVal();
      for (const [key, value] of Object.entries(res)) {
        data.push({ id: key, ...value });
      }
    }

    return { error: null, data };
  } catch (error) {
    return { error, data: null };
  }
}
