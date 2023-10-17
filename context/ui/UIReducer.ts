import { FamilyRestroomRounded } from '@mui/icons-material';
import { UIState } from './';

type UIActionType = 
    | { type: 'UI - OpenSideBar' }
    | { type: 'UI - CloseSideBar' }
    | { type: 'UI - SetIsAddingEntry', payload: boolean}
    | { type: 'UI - ToggleDragging', payload: boolean }


export const UIReducer = (state: UIState, action: UIActionType): UIState => {
    switch(action.type){
        case 'UI - OpenSideBar':
            return {
                ...state,
                openSideMenu: true,
            }
        case 'UI - CloseSideBar':
            return {
                ...state,
                openSideMenu: false,
            }
        case 'UI - SetIsAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        case 'UI - ToggleDragging':
            return {
                ...state,
                isDragging: action.payload
            }
        default:
            return state;
    }
}