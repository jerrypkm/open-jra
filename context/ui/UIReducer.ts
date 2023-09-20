import { FamilyRestroomRounded } from '@mui/icons-material';
import { UIState } from './';

type UIActionType = 
    | { type: 'UI - OpenSideBar' }
    | { type: 'UI - CloseSideBar' }


export const UIReducer = (state: UIState, action: UIActionType): UIState => {
    switch(action.type){
        case 'UI - OpenSideBar':
            return{
                ...state,
                openSideMenu: true,
            }
        case 'UI - CloseSideBar':
            return{
                ...state,
                openSideMenu: false,
            }
        default:
            return state;
    }
}