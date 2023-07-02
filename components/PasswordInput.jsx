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

export default function PasswordInput({ name, label, rules }) {
	const [showPassword, setShowPassword] = useState(false);
	const { control } = useFormContext();

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
				<FormControl variant='outlined' fullWidth size='small'>
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
				</FormControl>
			)}
		/>
	);
}
