import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

const middleware = [reduxThunk];

const store = createStore(
    // reducer,   <-------don't forget to replace with rootReducer
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        //add store enhancers if any
    )
);

export default store;

//4. go to 'redux-devtools-extension' github step 1.3, copy paste first example here
//5. import 'rootReducer' and replace 'reducer' with rootReducer in createStore()
//6. import redux-thunk and apply middleware
//7. export default store
// GOTO ../index.js