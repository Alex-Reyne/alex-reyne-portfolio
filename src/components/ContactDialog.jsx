import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/ContactDialog.scss';

export default function ContactDialog(props) {
	const { live, setOpen, open, github } = props;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			id='contact-dialog'
			open={open}
			onClose={handleClose}
			maxWidth='md'
			scroll='body'
			sx={{
				'& .MuiDialog-paper': {
					borderRadius: '.25rem',
					padding: '1rem',
					color: '#fec859',
					'background-color': '#ffffff09',
					'backdrop-filter': 'blur(5px)',
				},
				h2: {
					textAlign: 'center',
					marginTop: '-1rem',
					fontSize: '40px',
					'text-shadow': '0px 0px 15px #000',
				},
				'& .MuiButton-root': {
					backgroundColor: '#fec859',
					color: '#1d1e1d',
					borderRadius: '.25rem',
				},
				'.MuiButton-root:hover': {
					backgroundColor: '#3a616f',
					color: '#fec859',
				},
				// $white: #f6f6f6;
				// $black: #1d1e1d;
				// $slate: #3a616f;
				// $pink: #f16979;
				// $yellow: #fec859;
				'& .Mui-disabled': {
					opacity: '90%',
					backgroundColor: '#1d1e1d',
					color: '#f6f6f650',
				},
			}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title' className='fade-in'>
				Contact Me
			</DialogTitle>
			<DialogContent className='fade-in'>
				<img src='images/alex-reyne.jpeg' />
				<DialogContentText id='alert-dialog-description'>
					306.821.3553
				</DialogContentText>
				<DialogContentText id='alert-dialog-description'>
					creativereyne@gmail.com
				</DialogContentText>
			</DialogContent>
			<DialogActions className='fade-in' sx={{ justifyContent: 'center' }}>
				<Button variant='contained' onClick={handleClose}>
					close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
