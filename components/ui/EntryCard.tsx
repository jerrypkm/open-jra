import { DragEvent, useContext } from 'react'
import { UIContext } from '@/context/ui'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '@/interfaces'

interface Props {
  entry: Entry
}
const EntryCard = ({entry}: Props) => {

  const {setIsDragging} = useContext(UIContext);
  
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData('text', entry._id)
    setIsDragging(true);
  }

  const onDragEnd = (e: DragEvent) => {
    setIsDragging(false);
  }
  
  return (
    <Card 
      draggable 
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      sx={{marginBottom: 1}}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
          <Typography variant='body2'>hace 30 mins</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard