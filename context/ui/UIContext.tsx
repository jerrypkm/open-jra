import { createContext } from 'react';

interface ContexProps {
    openSideMenu: boolean;
    openSideBar: () => void,
    closeSideBar: () => void
}

export const UIContext = createContext({} as ContexProps);