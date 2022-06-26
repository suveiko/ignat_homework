type LoadingAT = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingAT): typeof state => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: !state.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: 'LOADING', loading} as const
}