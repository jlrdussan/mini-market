import { fork, all } from 'redux-saga/effects';

import productSaga from './shoppingCart';

export default function* root() {
  yield all([fork(productSaga)]);
}
