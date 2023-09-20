import { Entry } from '@/interfaces';
import { createContext } from 'react';

interface ContexProps {
    entries: Entry[];
}

export const EntriesContext = createContext({} as ContexProps);