import { MenuOutlined } from '@ant-design/icons';
import { Carousel, Progress } from 'antd';
import React, {useState, useEffect} from 'react';
import CardComponent from '../Card';

import foodPNG from '../../assets/food.png';
import donationPNG from '../../assets/donation.png';
import shelterPNG from '../../assets/shelter.png';
import mobilePNG from '../../assets/mobile.png';

import './style.scss';

const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '0',
  };

  
const SidebarComponent = (props) => {
    const left = props.sideBarVis ? '0' : '-40vw';

    const [shelterName, setShelterName] = useState(props.ranking[0][0]);
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState(props.ranking[0][2]);
  
    const confirmDonation = () => {
      props.donateItems(shelterName, props.items);
      props.toggleThankYouModal();
    }
  
    const carouselChange = (from, to) => {
      const name = props.ranking[to][0];
      setShelterName(name); 
      setIndex(to);
      props.toggleCoords([props.shelters[name].long, props.shelters[name].lat]);
      window.map.flyTo({
        center: [
          props.shelters[name].long,
          props.shelters[name].lat,
        ],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
      })
      if (props.shelters[name].address) {
    setAddress(props.shelters[name].address.slice(0,25));
      }
      else {
        setAddress('');
      }
    }
  
    return (
      <div className="side-bar" style={{ left: left }}>
        <div className="bar-1">
          <MenuOutlined
            onClick={() => {
              props.toggleSideBar(false);
            }}
          />
        </div>
        <div className="bar-2">
          <div className="title">
            <h1>{shelterName}</h1>
            <p>{index + 1} of {props.ranking.length}</p>
          </div>
          <Carousel {...settings} beforeChange={carouselChange}>
            {props.ranking.map((shelter,index) => {
              let src;
              if (shelter[1] === 'donation-shelter') {
                src = donationPNG;
              }
              if (shelter[1] === 'food-bank') {
                src = foodPNG;
              }
              if (shelter[1] === 'mobile-pantry') {
                src = mobilePNG;
              }
              if (shelter[1] === 'homeless-shelter') {
                src = shelterPNG;
              }
              return (
              <div key={index} className="bcontainer">
                <img
                  src={src}
                  alt="building"
                  className="buildingtype"
                />
              </div>)
            })}
          </Carousel>
          <div className="location">
            <h1>{shelterName.slice(0,25)}</h1>
          <h2>{address}</h2>
          </div>
        </div>
        <div className="bar-3">
          <div className="cards">
            <CardComponent item={'Apple'}/>
            <CardComponent item={'Orange'}/>
            <CardComponent item={'Banana'}/>
            <CardComponent item={'Orange'}/>
            <CardComponent item={'Banana'}/>
            <CardComponent item={'Banana'}/>
            <CardComponent item={'Orange'}/>
            <CardComponent item={'Banana'}/>
          </div>
          <div className="side-button" onClick={confirmDonation}>Confirm Order</div>
        </div>
      </div>
    );
};

export default SidebarComponent;