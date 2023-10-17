import React, { useContext, useMemo, DragEvent } from 'react'
import styles from './EntryList.module.css';
import { List, Paper } from '@mui/material'
import EntryCard from './EntryCard'
import { EntryStatus } from '@/interfaces'

import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'

interface Props {
  status: EntryStatus
}

const EntryList = ({status}: Props) => {

  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, setIsDragging } = useContext(UIContext)
  const entriesByStatus = useMemo(() => entries.filter(entry=>entry.status == status), [entries]);
  
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {

    setIsDragging(false);

    const id = e.dataTransfer.getData('text');
    const entry = entries.find(e => e._id === id);

    if(entry){
      entry.status = status;
      updateEntry(entry);
    }
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={`${isDragging ? styles.dragging : ''}`}
    >
      <Paper sx={{height: 'calc(100vh - 180px)', 
        overflow: 'auto', 
        backgroundColor: 'transparent',
        padding: '1px 5px'}}>
        <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s'}}>
          {entriesByStatus.map(entry=><EntryCard entry={entry} key={entry._id}></EntryCard>)}
        </List>
      </Paper>
    </div>
  )
}

export default EntryList