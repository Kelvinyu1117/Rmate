import actionTypes from './actionTypes'

export function addEvent(event) {
    return {
        type: actionTypes.ADD_PERSON,
        event: event
    }
}