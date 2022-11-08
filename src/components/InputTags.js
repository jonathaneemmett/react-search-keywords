import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import { Box, TextField, Typography } from '@mui/material';
import Tag from './Tag';

const styles = {
	'input-label': {
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		width: '100%',
		color: 'red',
	},

	input: {
		'&::placeholder': {
			textOverflow: 'ellipsis !important',
			color: 'blue',
		},
	},
};

const InputTags = () => {
	const [tags, setTags] = useState([]);

	const inputRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		setTags([...tags, inputRef.current.value]);
		inputRef.current.value = '';
	}

	function handleDelete(tag) {
		const newTags = tags.filter((t) => t !== tag);
		setTags(newTags);
	}

	return (
		<Box sx={{ width: '400px' }}>
			<Typography variant='h6' sx={{ fontSize: '.8rem', display: 'flex', justifyContent: 'center' }}>
				Type keyword and hit enter to add it.
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					inputRef={inputRef}
					fullWidth
					variant='standard'
					size='small'
					sx={{
						margin: '1rem 0',
						background: '#fff',
						padding: '0.5rem',
						background: '#151515',
					}}
					margin='none'
					placeholder='Enter keyword here'
					disabled={tags.length >= 5}
					inputProps={{ style: { color: 'white' } }}
					InputProps={{
						startAdornment: (
							<Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
								{tags.map((tag, index) => (
									<Tag tag={tag} key={index} handleDelete={handleDelete} />
								))}
							</Box>
						),
					}}
				/>
			</form>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'lightgray' }}>
				keywords: [{tags.map((tag, index) => ' ' + tag + ',')}]
			</Box>
		</Box>
	);
};

InputTags.propTypes = {};

export default InputTags;
