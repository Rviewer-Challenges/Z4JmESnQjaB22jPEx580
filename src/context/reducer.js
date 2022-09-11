export const initialTabs = {
    Tabs: [
        {
            name: 'index.js',
            textEditor: '// Write your code here',
            textConsole: '// Console'
        }
    ],
    IndexTabActive: 0
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TAB':
            return { ...state, Tabs: [...state.Tabs, action.payload] };
        case 'CLOSE_TAB':
            return {
                ...state,
                Tabs: Tabs.filter((tab, index) => index !== action.payload)
            };
        case 'REORDER_TAB':
            return { ...state, Tabs: action.payload };
        case 'CHANGE_TAB_ACTIVE':
            return { ...state, IndexTabActive: action.payload };
        case 'CHANGE_TEXT_EDITOR':
            return {
                ...state,
                Tabs: state.Tabs.map((tab, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...tab,
                            textEditor: action.payload.text
                        };
                    }
                    return tab;
                })
            };
        case 'CHANGE_TEXT_CONSOLE':
            console.warn(action.payload);

            return {
                ...state,
                Tabs: state.Tabs.map((tab, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...tab,
                            textConsole: action.payload.text
                        };
                    }
                    return tab;
                })
            };
        default:
            return state;
    }
};
