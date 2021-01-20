import constants from '../../constants';
const initialState = {
	todos: ['build this app']
};
const main = (state = initialState, { type }) => {
	switch (type) {
		case constants.DUMMY_ACTION:
			return state;
	}
	return state;
};

export default main;
