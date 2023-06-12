import React from 'react';
import { signIn, signOut } from '../store/actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SignIn({ signIn, signOut }) {
	return (
		<div className='mx-64'>
			<button onClick={signIn}>Sign In</button>
			<button onClick={signOut}>Sign Out</button>
		</div>
	);
}

SignIn.propTypes = {
	signIn: PropTypes.func.isRequired,
	signOut: PropTypes.func.isRequired,
};

export default connect(null, { signIn, signOut })(SignIn);
