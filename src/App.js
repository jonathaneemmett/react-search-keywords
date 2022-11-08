import logo from './logo.svg';
import './App.css';

// Components
import { Box } from '@mui/material';
import InputTags from './components/InputTags';

function App() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				height: '100vh',
				width: '100vw',
				background: '#151515',
				color: '#fff',
			}}>
			<h1>Keyword Demo Idea!</h1>
			<InputTags />
		</Box>
	);
}

export default App;
