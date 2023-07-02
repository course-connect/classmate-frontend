import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function BasicInput({ name, label, rules }) {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					size='small'
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
