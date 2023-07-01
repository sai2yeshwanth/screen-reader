import { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import './App.css'
import questionAndAnswersData from "./configData/questionAndAnswersData.json"
import PlainTextScreenReader from './components/PlainTextScreenReader'
import onClickScreenReader from './components/onClickScreenReader'
import { BUTTON, INPUTFIELD, INPUTFIELDVALUE } from './configData/onClickTypes'

function App() {
  //to stop speechSynthesis which is already running
  window.speechSynthesis.cancel()

  const [userName, setUserName] = useState("")
  const [showUserName, setShowUserName] = useState(false)
  const onChangeuserName = (event: any) => {
    //send this parametres text and type to this funation to read the text
    onClickScreenReader(event.target.value, INPUTFIELDVALUE)

    setUserName(event.target.value)
  }
  const onClickSubmit = () => {
    //send this parametres text and type to this funation to read the text
    onClickScreenReader("Submit", BUTTON)
    setShowUserName(true)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
        <TextField id="outlined-basic"
          label="User Name"
          variant="outlined"
          size='small' sx={{ width: '100%', mr: 1 }}
          onChange={onChangeuserName}
          value={userName}
          onClick={
            () =>
              //send this parametres text and type to this funation to read the text
              onClickScreenReader("User Name", INPUTFIELD)
          }
        />
        <Button variant="contained" onClick={onClickSubmit}>Submit</Button>

      </Box>
      {
        showUserName ? <p>
          {/* send text props PlainTextScreenReader component to read the text */}
          <PlainTextScreenReader item={`Hi ${userName}`} />
        </p> : ""
      }
      <Box>
        <Typography variant="h5" gutterBottom>


          <b>
            {/* send text props PlainTextScreenReader component to read the text */}
            <PlainTextScreenReader item="Questions" />
          </b>
        </Typography>
        <Box>
          {
            questionAndAnswersData.map((item: any) => (
              <>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', justifyContent: "flex-start" }}>
                  <b>
                    {/* send text props PlainTextScreenReader component to read the text */}
                    <PlainTextScreenReader item={item.question} />
                  </b>
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ display: 'flex', justifyContent: "flex-start", alignContent: 'start' }}>
                  {/* send text props PlainTextScreenReader component to read the text */}
                  <PlainTextScreenReader item={item.answers} />
                </Typography>
              </>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default App
