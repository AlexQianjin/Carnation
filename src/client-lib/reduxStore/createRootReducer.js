import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

function createRootReducer(modules, config) {
	let reducerMap = {};

	modules.forEach(module => {
		reducerMap[module.NAME] = module.createReducer(config);
	});

	reducerMap.form = formReducer;

	return combineReducers(reducerMap);
}

export default createRootReducer;
