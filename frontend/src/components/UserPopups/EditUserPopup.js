import React, { Component } from 'react';
import { firestore } from '../../firebase/utils';
import { doc, updateDoc } from 'firebase/firestore';

class EditUserPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.user.displayName,
      address: this.props.user.address,
      dietPreference: this.props.user.dietPreference
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getCoords = async (address) => {
    //calculate lattitude and longitude
    let latitude = 0;
    let longitude = 0;
    console.log(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    return fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const location = data[0];
          latitude = location.lat;
          longitude = location.lon;
        } else {
          console.log("No results found");
        }
        return { latitude, longitude }; // Always return an object with latitude and longitude properties
      })
      .catch(error => {
        console.error(error);
        return { latitude, longitude }; // Always return an object with latitude and longitude properties
      });  
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { userId } = this.props;
    const { displayName, address, dietPreference } = this.state;

    let {latitude, longitude} = await this.getCoords(address);
    console.log(latitude);
    console.log(longitude);

    try {
      await updateDoc(doc(firestore, 'users', userId), {
        displayName,
        address,
        dietPreference,
        latitude,
        longitude,
      });

      this.props.onInfoSubmit({ displayName, address, dietPreference });
      this.props.closePopup(); // Call to close the popup
    } catch (error) {
      console.error('Error updating profile: ', error);
    }
  };

  render() {
    return (
      <div className="modal-backdrop">
        <div className='modal'>
        <h2>Editing user info</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="displayName">Name:</label>
            <input
              type="text"
              id="displayName"
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
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="dietPreference">Diet Preference:</label>
            <select
              id="dietPreference"
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
          <button type="submit">Save Changes</button>
        </form>
        <button onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

export default EditUserPopup;