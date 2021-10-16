import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const DialogBox = (props) => {
    return ( 
    <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle><br/>
        <DialogContent>
          <DialogContentText>
            {props.children}
          </DialogContentText>
        </DialogContent>
    </Dialog>
     );
}
 
export default DialogBox;