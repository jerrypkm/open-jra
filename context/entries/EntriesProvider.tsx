import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, EntriesReducer } from './'
import { Entry } from '@/interfaces'

export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pendiente Entrie description",
            createdAt: Date.now(),
            status: "pending"
        },
        {
            _id: uuidv4(),
            description: "Progreso Entrie description",
            createdAt: Date.now(),
            status: "in-progress"
        },
        {
            _id: uuidv4(),
            description: "Finalizada Entrie description",
            createdAt: Date.now(),
            status: "finished"
        }
    ],
}

interface Props {
    children: React.ReactNode
}

export const EntriesProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}
