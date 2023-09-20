import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '@/interfaces'

interface Props {
  entry: Entry
}
const EntryCard = ({entry}: Props) => {
  return (
    <Card sx={{marginBottom: 1}}>
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