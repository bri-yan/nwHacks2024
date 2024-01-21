import React, { Component } from 'react';
import { firestore } from '../../firebase/utils';
import { doc, setDoc} from 'firebase/firestore';

class NewUserPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      address: '',
      dietPreference: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userId } = this.props; 
    const { displayName, address, dietPreference } = this.state;
  
    if (!userId) {
      console.error('Error: userId is undefined or null');
      return;
    }
  
    try {
      const userDocRef = doc(firestore, 'users', userId);
      await setDoc(userDocRef, {
        displayName,
        address,
        dietPreference,
        createdAt: new Date()
      });
      alert('Profile updated successfully!');
      this.props.onInfoSubmit({ displayName, address, dietPreference });
    } catch (error) {
      console.error('Error updating profile: ', error);
      alert('Error updating profile. Please try again.');
    }
  };

  render() {
    return (
      <div className="modal-backdrop">
        <div className='modal'>
        <h2>Welcome New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="displayName">Name:</label>
            <input
              type="text"
              className="displayName"
              name="displayName"
              value={this.state.displayName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              className="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="dietPreference">Diet Preference:</label>
            <select
              className="dietPreference"
              name="dietPreference"
              value={this.state.dietPreference}
              onChange={this.handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="none">None</option>
            </select>
          </div>
          <button type="submit">Save Profile</button>
        </form>
      </div>
      </div>
    );
  }
}

export default NewUserPopup;
