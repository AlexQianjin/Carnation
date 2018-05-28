import types from '../ActionTypes';

function fetchAllUsersRequest() {
	return {
		type: types.USERMANAGEMENT_MODULE_FETCH_ALL_ITEMS_REQUEST,
		payload: {}
	};
}

function fetchAllUsersSuccess(users) {
	return {
		type: types.USERMANAGEMENT_MODULE_FETCH_ALL_ITEMS_SUCCESS,
		payload: {
			users: users
		}
	};
}

function fetchAllUsersFailure(ex) {
	return {
		type: types.USERMANAGEMENT_MODULE_FETCH_ALL_ITEMS_FAILURE,
		payload: {
			ex
		}
	};
}

export default {
	fetchAllUsersRequest,
	fetchAllUsersSuccess,
	fetchAllUsersFailure
};
