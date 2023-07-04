import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

export default function PasswordInput({ name, label, rules, size }) {
	const [showPassword, setShowPassword] = useState(false);
	const { control } = useFormContext();

	const CssFormControl = styled(FormControl)({
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

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<CssFormControl variant='outlined' fullWidth size={size}>
					<InputLabel htmlFor='outlined-adornment-password' error={!!error}>
						{label}
					</InputLabel>
					<OutlinedInput
						error={!!error}
						value={value}
						onChange={onChange}
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? (
										<VisibilityOff style={{ color: '#788473' }} />
									) : (
										<Visibility style={{ color: '#788473' }} />
									)}
								</IconButton>
							</InputAdornment>
						}
						label={label}
					/>
					<FormHelperText id='standard-weight-helper-text' error={!!error}>
						{error ? error.message : null}
					</FormHelperText>
				</CssFormControl>
			)}
		/>
	);
}
