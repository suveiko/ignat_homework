type ChangeThemeCType = ReturnType<typeof changeThemeC>

const initState = {
    newTheme: ''
};

export const themeReducer = (state: typeof initState = initState, action: ChangeThemeCType): typeof initState => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, newTheme: action.theme}
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => ({type: "CHANGE-THEME", theme} as const);