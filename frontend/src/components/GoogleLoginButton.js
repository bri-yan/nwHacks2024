import React from 'react';
import { SignInWithGoogle } from '../firebase/utils';

const GoogleBlueButton = ({ buttonText }) => {
  return (
    <button style={{backgroundColor: '#4285F4', color: 'white', border: 'none', padding: '10px 20px'}} onClick={SignInWithGoogle}>
      {buttonText}
    </button>
  );
}

export default GoogleBlueButton;