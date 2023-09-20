import { useReducer } from 'react'
import { UIContext, UIReducer } from './'
import { type } from 'os'

export interface UIState {
    openSideMenu: boolean
}

const UI_INITIAL_STATE: UIState = {
    openSideMenu: false,
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

    return (
        <UIContext.Provider value={{...state, openSideBar, closeSideBar}}>
            {children}
        </UIContext.Provider>
    )
}
