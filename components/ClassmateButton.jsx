import Button from '@mui/material/Button';

export default function ClassmateButton({
	text,
	variant,
	children,
	styles,
	size,
	callback,
}) {
	let sizeStyles = '';
	switch (size) {
		case 'small':
			sizeStyles = 'w-28 h-9 text-sm';
			break;
		case 'large':
			sizeStyles = 'w-40 h-11 text-base';
			break;
		case 'small-full':
			sizeStyles = 'w-full h-9 text-sm';
			break;
		case 'large-full':
			sizeStyles = 'w-full h-11 text-base';
			break;
		default:
		// code block
	}

	let variantStyles = '';
	switch (variant) {
		case 'contained':
			variantStyles =
				'font-classmate-bold whitespace-nowrap rounded-md antialiased shadow-none';
			break;
		case 'outlined':
			variantStyles =
				'font-classmate-bold whitespace-nowrap rounded-md antialiased hover:bg-transparent';
			break;
		default:
			variantStyles = 'hover:bg-transparent p-0 min-w-fit';
	}

	return (
		<Button
			onClick={callback}
			className={`${variantStyles} ${sizeStyles} ${styles} capitalize`}
			variant={variant}>
			{children}
		</Button>
	);
}
