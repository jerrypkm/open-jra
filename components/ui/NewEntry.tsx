import React, { useState, ChangeEvent, useContext, useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { AddCircleOutline, SaveOutlined } from '@mui/icons-material'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'

const NewEntry = () => {

  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const { addNewEntry } = useContext(EntriesContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onSave = () => {
    if(inputValue.length == 0)
      return

    addNewEntry(inputValue)
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
  }

  useEffect(() => {
    setTouched(false)
  }, [isAddingEntry])

  return (
  <Box sx={{marginBottom: 2, paddingX: 2}}>
    {
      isAddingEntry ? <>
      <TextField
        fullWidth
        sx={{marginTop: 2, marginBottom: 1}}
        placeholder='Nueva entrada'
        autoFocus
        multiline
        value={inputValue}
        onBlur={() => setTouched(true)}
        onChange={onTextFieldChange}
        error={inputValue.length <=0 && touched}
        label="Nueva entrada"
        helperText={inputValue.length<=0 && touched && "Ingresa un valor"}
      />
    
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button 
          variant='text'
          onClick={() => setIsAddingEntry(false)}
        >Cancelar</Button>
        <Button 
          variant='outlined'
          color='secondary'
          onClick={onSave}
          endIcon={<SaveOutlined></SaveOutlined>}
        >Guardar</Button>
      </Box>
      </>

      :
      <Button
        startIcon={<AddCircleOutline></AddCircleOutline>}
        fullWidth
        onClick={() => setIsAddingEntry(true)}
        variant='outlined'
      >
        Agregar tarea
      </Button>
    }



  </Box>

  )
}

export default NewEntry