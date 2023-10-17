import { useEffect, useReducer } from 'react'
import { EntriesContext, EntriesReducer } from './'
import { Entry } from '@/interfaces'
import { entriesApi } from '@/apis';

export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface Props {
    children: React.ReactNode
}

export const EntriesProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = async (description: string) => {
        const {data} = await entriesApi.post<Entry>('/entries', {description})
        dispatch({type: '[Entry] Add-Entry', payload: data})
    }

    const updateEntry = async ( {_id, description, status}: Entry ) => {
        try{
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {description: description, status: status} )
            dispatch({type: "[Entry] Entry-Updated", payload: data})
        }
        catch(err){
            console.log({err})
        }
    }

    const refreshEntries = async () => {
        const {data} = await entriesApi.get<Entry[]>('/entries');
        dispatch({type: '[Entry] Refresh Data', payload: data})
    }

    useEffect(() => {
        refreshEntries()
    }, [])
    

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}
