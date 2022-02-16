import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  h2: {
    textAlign: 'center',
    marginTop: '-1rem',
    fontSize: '40px',
    'text-shadow': '0px 0px 15px #000',
  },
  '& .Mui-disabled': {
    opacity: '90%',
    backgroundColor: '#1d1e1d',
    color: '#f6f6f650',
  },
});

export default function ProjectDialog(props) {
  const { open, setOpen, dialogContent } = props;
  const { title, description, image, github, live, video } = dialogContent;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      sx={useStyles}
      PaperProps={{
        style: {
          borderRadius: '.25rem',
          padding: '1rem',
          color: '#fec859',
          'background-color': '#ffffff09',
          'backdrop-filter': 'blur(5px)',
        },
      }}
      scroll="body"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ fontSize: '40px' }} id="alert-dialog-title" className="fade-in">
        {title}
      </DialogTitle>
      <DialogContent className="fade-in">
        {image && <img src={image} />}
        {video && (
          <>
            <video loop>
              <source src={video} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions className="fade-in" sx={{ justifyContent: 'center' }}>
        <Button
          className="modal-button"
          variant="contained"
          // sx={{ color: '#1d1e1d', backgroundColor: '#fec859' }}
          onClick={() => (github ? window.open(github, '_blank') : null)}
          disabled={!github}
        >
          GITHUB
        </Button>
        <Button
          className="modal-button"
          variant="contained"
          onClick={() => (live ? window.open(live, '_blank') : null)}
          disabled={!live}
        >
          LIVE
        </Button>
        <Button className="modal-button close-button" variant="contained" onClick={handleClose}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
