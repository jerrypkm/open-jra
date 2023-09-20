import { EntriesState } from './';

type EntriesActionType = 
    | { type: '[Entries] - changeActions' }


export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch(action.type){
        case '[Entries] - changeActions':
            return{
                ...state,
            }

        default:
            return state;
    }
}