import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import registerReducer from './register';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    register: registerReducer,
    router: connectRouter(history),
});

export default rootReducer;
