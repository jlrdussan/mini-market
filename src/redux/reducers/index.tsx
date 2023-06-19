import { combineReducers } from 'redux';

import { shoppingReducer } from './shoppingCartReducer';

const reducer = combineReducers({
  shoppingReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
