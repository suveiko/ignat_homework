import {UserType} from "../HW8";

export type SortAction = {
    type: 'sort',
    payload: 'up' | 'down'
}
export type CheckAction = {
    type: 'check'
    payload: number
}
export type ActionType = SortAction | CheckAction

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => b.age - a.age)]
            }
            return state
        }
        case 'check': {
            return state.filter(s => s.age > 18)
        }
        default:
            return state
    }
}