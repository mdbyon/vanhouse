import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button/Button";

export const LoginModal = () =>{

  return (
    <Dialog
    open={true}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Login to Vanhouse</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Password"
        type="password"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={this.handleClose} color="primary">
        Subscribe
      </Button>
    </DialogActions>
  </Dialog>
  )
}


