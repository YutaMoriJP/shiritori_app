import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"What is `Shiritori`?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Shiritori is a Japanese word game in which the starting player picks
            a word of their choosing and the competing player picks a word that
            begins with the ending character from the preceding player.
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="alert-dialog-title">{"Learn the Rules"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1) Two Players take turns to play and the first player chooses a
            word of their liking that doesn't end with <strong>N</strong>.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            2) The following player must choose a word that starts with the last
            character from the previous word. For example, if player A's word is{" "}
            <strong>Amazing</strong> then player B must find a word that starts
            with <strong>G</strong>, like <strong>Gender</strong>.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            3) The word also must be a standalone word, so you are not allowed
            to use multiple words. So <strong>Elephant</strong>is valid but{" "}
            <strong>An Elephant</strong> is invalid.
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            4) Finally, players must come up with the rule-abiding word within{" "}
            <strong>30 seconds</strong>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
