import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Box, Stack, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const Tag = ({ tag, handleDelete }) => {
	return (
		<Box
			sx={{
				background: 'teal',
				height: '100%',
				display: 'flex',
				padding: '0.4rem',
				margin: '0 0.5rem 0 0',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#fff',
			}}>
			<Stack direction='row' gap={1}>
				<Typography>{tag}</Typography>
				<CancelIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(tag)} />
			</Stack>
		</Box>
	);
};

Tag.propTypes = {
	tag: PropTypes.string.isRequired,
};

export default Tag;
