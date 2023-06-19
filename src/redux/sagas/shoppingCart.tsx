import { takeEvery, put, call } from 'redux-saga/effects';

import { getProducts } from 'services/products.services';
import { ActionTypes, addProducts } from 'redux/actions/shoppingCartAction';

function* getAllProducts(): any {
  const data = yield call(getProducts);
  yield put(addProducts(data));
}

function* productSaga() {
  yield takeEvery(ActionTypes.GET_PRODUCTS, getAllProducts);
}

export default productSaga;
