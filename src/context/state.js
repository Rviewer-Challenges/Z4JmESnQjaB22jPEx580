import { createContext, useContext, useReducer } from 'react';
import { AppReducer, initialTabs } from './reducer';

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialTabs);

    const AddTab = () => {
        const auxFile = '' + new Date().getTime();
        dispatch({
            type: 'ADD_TAB',
            payload: {
                name: 'index-' + auxFile.slice(-5),
                textEditor: '// Write your code here',
                textConsole: '// Console'
            }
        });
    };
    const ReorderTabs = (tabs) => {
        dispatch({
            type: 'REORDER_TAB',
            payload: tabs
        });
    };

    const CloseTab = (index) => {
        dispatch({
            type: 'CLOSE_TAB',
            payload: index
        });
    };
    const ChangeTabActive = (index) => {
        dispatch({
            type: 'CHANGE_TAB_ACTIVE',
            payload: index
        });
    };
    const ChangeTextEditor = (index, text) => {
        dispatch({
            type: 'CHANGE_TEXT_EDITOR',
            payload: {
                index,
                text
            }
        });
    };

    const ChangeTextConsole = (index, text) => {
        dispatch({
            type: 'CHANGE_TEXT_CONSOLE',
            payload: {
                index,
                text
            }
        });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                AddTab,
                CloseTab,
                ReorderTabs,
                ChangeTabActive,
                ChangeTextConsole,
                ChangeTextEditor
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
