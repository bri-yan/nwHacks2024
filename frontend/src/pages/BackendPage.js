import React, { useState, useEffect } from 'react';
import { GoogleBlueButton, LogoutButton } from '../components/GoogleLoginButton';
import { auth, handleUserProfile } from '../firebase/utils';
import NewUserPopup from '../components/NewUserPopup'; // Import the new user popup component

const initialState = {
  current_user: null
};
class BackendPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      isNewUser: false,
      showUserInfo: false,
      showClosestFarm: false
    };
    console.log(String(this.state.current_user))
  }

  authListener = null;

  toggleUserInfo = () => {
    this.setState(prevState => ({
      showUserInfo: !prevState.showUserInfo
    }));
  }

  toggleClosestFarm = () => {
    this.setState(prevState => ({
      showClosestFarm: !prevState.showClosestFarm
    }));
  }

  componentDidMount() {
    console.log("User Authentication mounted")
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const { userRef, isNewUser, userData } = await handleUserProfile(userAuth);
        console.log(String(userData))
        this.setState({
          current_user: {
            id: userAuth.uid,
            ...userData // Spread the user data
          },
          isNewUser: isNewUser
        });
      } else {
        this.setState({ current_user: null, isNewUser: false });
      }
    });
  }

  componentWillUnmount() {
    this.authListener && this.authListener();
  }

  handleNewUserInfo = (userInfo) => {
    this.setState({
      current_user: {
        ...this.state.current_user,
        ...userInfo
      },
      isNewUser: false
    });
  }

  render() {
    const { isNewUser, current_user, showUserInfo, showClosestFarm } = this.state;
  
    return (
      <div className="backend">
        <img src="https://foodb.ca/system/foods/pictures/395/thumb/395.png" alt="food" />
        
        {isNewUser && <NewUserPopup userId={current_user.id} onInfoSubmit={this.handleNewUserInfo} />}
        {current_user ? <LogoutButton/> : <GoogleBlueButton buttonText="Login with Google"/>}
        {current_user && <div>Welcome, {current_user.displayName}</div>}

        <button onClick={this.toggleUserInfo}>
          {showUserInfo ? 'Hide User Info' : 'Show User Info'}
        </button>

        <button onClick={this.toggleUserInfo}>
          {showClosestFarm ? 'Show Closest Farms' : 'Show Closest Farms'}
        </button>

        {showUserInfo && current_user && (
          <div>
            <div>Welcome, {current_user.displayName}</div>
            <div>{JSON.stringify(current_user)}</div>
            <div>Is New User: {String(isNewUser)}</div>
          </div>
        )}

        {showClosestFarm && current_user && (
          <div>
            <div>Welcome, {current_user.displayName}</div>
            <div>{JSON.stringify(current_user)}</div>
            <div>Is New User: {String(isNewUser)}</div>
          </div>
        )}

      </div>
    );
  }
  
}

export default BackendPage;