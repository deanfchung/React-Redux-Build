import * as constants from '../constants'

export const dummyAction = (payload) => {
	return {
		type: constants.DUMMY_ACTION,
		payload
	}
}
