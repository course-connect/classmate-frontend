import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function BasicInput({ name, label, rules, size }) {
	const { control } = useFormContext();
	const CssTextField = styled(TextField)({
		'& label': {
			color: '#788473',
		},
		'& label.Mui-focused': {
			color: '#D0A13D',
		},
		'& label.Mui-error': {
			color: '#d32f2f',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#B0B4B0 ',
			},
			'&:hover fieldset': {
				borderColor: '#788473',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#D0A13D',
			},
			'&.Mui-error fieldset': {
				borderColor: '#d32f2f',
			},
		},
		'& .MuiOutlinedInput-input': {
			color: '#788473',
		},
	});

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			size={size}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<CssTextField
					helperText={error ? error.message : null}
					size={size}
					error={!!error}
					onChange={onChange}
					value={value}
					label={label}
					fullWidth
					variant='outlined'
				/>
			)}
		/>
	);
}
