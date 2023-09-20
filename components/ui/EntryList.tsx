import React, { useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries'

interface Props {
  status: EntryStatus
}

const EntryList = ({status}: Props) => {

  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter(entry=>entry.status == status), [entries]);
  
  return (
    <div>
      <Paper sx={{height: 'calc(100vh - 180px)', 
      overflow: 'auto', 
      backgroundColor: 'transparent',
      padding: '1px 5px'}}>
        {/* Cambiará dependiendo si estoy haciendo drop o no */}
        <List sx={{opacity: 1}}>
          {entriesByStatus.map(entry=><EntryCard entry={entry} key={entry._id}></EntryCard>)}
        </List>
      </Paper>
    </div>
  )
}

export default EntryList