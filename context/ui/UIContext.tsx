import { createContext } from 'react';

interface ContexProps {
    openSideMenu: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    openSideBar: () => void,
    closeSideBar: () => void,
    setIsAddingEntry: (isAdding: boolean) => void;
    setIsDragging: (isDragging: boolean) => void;
}

export const UIContext = createContext({} as ContexProps);