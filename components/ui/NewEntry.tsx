import { Box, Button, TextField } from '@mui/material'
import { AddCircleOutline, SaveOutlined } from '@mui/icons-material'
import React from 'react'

const NewEntry = () => {
  return (<Box sx={{marginBottom: 2, paddingX: 2}}>

    <Button
      startIcon={<AddCircleOutline></AddCircleOutline>}
      fullWidth
      variant='outlined'
    >
      Agregar tarea
    </Button>
    <TextField
      fullWidth
      sx={{marginTop: 2, marginBottom: 1}}
      placeholder='Nueva entrada'
      autoFocus
      multiline
      label="Nueva entrada"
      helperText="Ingresa un valor"
    >

    </TextField>
  
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Button 
        variant='text'
      >Cancelar</Button>
      <Button 
        variant='outlined'
        color='secondary'
        endIcon={<SaveOutlined></SaveOutlined>}
      >Guardar</Button>
    </Box>
  </Box>

  )
}

export default NewEntry