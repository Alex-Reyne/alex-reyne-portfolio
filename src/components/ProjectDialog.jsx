import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProjectDialog(props) {
	const { open, setOpen, dialogContent } = props;
	const { title, description, image, github, live } = dialogContent;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
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
					alignSelf: 'center',
					marginTop: '-1rem',
					fontSize: '40px',
					'text-shadow': '0px 0px 15px #000',
				},
				'& .MuiButton-root': {
					backgroundColor: '#fec859',
					color: '#1d1e1d',
				},
				'& .Mui-disabled': {
					opacity: '90%',
					backgroundColor: '#1d1e1d',
					color: '#f6f6f650',
				},
			}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				<img src={image} />
				<DialogContentText id='alert-dialog-description'>
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions sx={{ justifyContent: 'center' }}>
				<Button
					className='modal-button'
					variant='contained'
					// sx={{ color: '#1d1e1d', backgroundColor: '#fec859' }}
					onClick={() => (github ? window.open(github, '_blank') : null)}
					disabled={!github}
				>
					GITHUB
				</Button>
				<Button
					variant='contained'
					onClick={() => (live ? window.open(live, '_blank') : null)}
					disabled={!live}
				>
					LIVE
				</Button>
			</DialogActions>
		</Dialog>
	);
}
