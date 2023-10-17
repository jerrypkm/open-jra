import { useReducer } from 'react'
import { UIContext, UIReducer } from './'

export interface UIState {
    openSideMenu: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    openSideMenu: false,
    isAddingEntry: false,
    isDragging: false,
}

interface Props {
    children: React.ReactNode,
}

export const UIProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideBar = () => {
        dispatch({type: "UI - OpenSideBar"})
    }

    const closeSideBar = () => {
        dispatch({type: "UI - CloseSideBar"})
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({type: "UI - SetIsAddingEntry", payload: isAdding})
    }

    const setIsDragging = (isDragging: boolean) => {
        dispatch({type: "UI - ToggleDragging", payload: isDragging})
    }

    return (
        <UIContext.Provider value={{
            ...state, 
            openSideBar, 
            closeSideBar,
            setIsAddingEntry,
            setIsDragging,
            }}>
            {children}
        </UIContext.Provider>
    )
}
