import React/*, { UseState }*/ from 'react'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const contact = () => {

  // const [formState, setFormState] = UseState({
  //   name:'',
  //   email:'',
  //   message:'',
  //   nameNeeded: false
  // })

  // const handleInputChange = ({ target: { name, value } }) => {
  //   setFormState({ ...formState, [name]: value })
  // }

  // const handleNameBlur = () => {
  //   if(formState.name === '') {
  //     setFormState({...formState, nameNeeded: true})
  //   }
  // }

  // const handleMessageBlur = () => {
  //   if(formState.message==='') {
  //     setFormState({...formState, messageNeeded: true, nameNeeded: false})
  //   }
  // }

  // const handleEmailBlur = () => {
  //   if(validateEmail(formState.email)===true){
  //   console.log('valid email')
  // } else {
  //   setFormState([...formState, invalidEmail: true],messageNeeded: false)
  // }
  // }

  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: '5vh'}}>
        <Grid item>
          <h1>Contact</h1>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={3} padding={3} sx={{ height: '73vh'}}>

        <Grid item xs={12} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <Input
              name="name"
              // onChange={handleInputChange}
              aria-describedby="my-helper-text"
            // onBlur={handleNameBlur}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Email Address</InputLabel>
            <Input
              name="email"
              // onChange={handleInputChange}
              aria-describedby="my-helper-text" />
            {/* onBlur={handleEmailBlur} */}
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <TextField
            label="Message"
            multiline
            minRows={4}
            maxRows={8}
            fullWidth
            name="message"
          // onchange={handleInputChange}
          // onBlur={handleMessageBlur}
          />
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            <Button>Submit</Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='center'>
          {/* {
            formState.nameNeeded? <p>Name is required</p> : ''
        }
        {
          formState.messageNeeded? <p> name is required! </p> : ''
        } 
        {
          formState.invalidEmail? <p> email is required! </p> : ''
        }  */}
        </Grid>
      </Grid>
    </>
  )
}

export default contact