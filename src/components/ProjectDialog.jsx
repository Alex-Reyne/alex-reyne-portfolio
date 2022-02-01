import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProjectDialog(props) {
	const { open, setOpen, dialogContent } = props;
	const { title, description, image } = dialogContent;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth='md'
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
			<DialogActions>
				<Button onClick={handleClose}>GITHUB</Button>
				<Button onClick={handleClose} autoFocus>
					LIVE
				</Button>
			</DialogActions>
		</Dialog>
	);
}
