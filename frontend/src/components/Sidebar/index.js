import { MenuOutlined } from '@ant-design/icons';
import { Carousel, Progress } from 'antd';
import React, {useState, useEffect} from 'react';
import CardComponent from '../Card';

import foodPNG from '../../assets/heritage.png';
import donationPNG from '../../assets/ubc.png';
import shelterPNG from '../../assets/equiflora.png';
import mobilePNG from '../../assets/lulu.png';

import applePNG from '../../assets/apple.png';
import cornPNG from '../../assets/corn.png';
import potatoPNG from '../../assets/potato.png';
import carrotPNG from '../../assets/carrot.png';
import pepperPNG from '../../assets/pepper.png';
import tomatoPNG from '../../assets/tomato.png';
import eggPNG from '../../assets/egg.png';
import blueberryPNG from '../../assets/blueberry.png';
import grapePNG from '../../assets/grape.png';
import honeyPNG from '../../assets/honey.png';

import './style.scss';

const cards1 = (props) => {
  return (
    <div key={1} className="bar-3">
      <div className="cards" style={{ marginRight: props.sideBarVis ? '0vw' : '10vw', transition: 'margin-right 0.5s ease-in-out'}}> 
        <CardComponent item={'Yukon Gold'}
        image={potatoPNG}/>
        <CardComponent item={'Ambrosia Apples'}
        image={applePNG}/>
        <CardComponent item={'Sweet Corn'}
        image={cornPNG}/>
        <CardComponent item={'Carrots'}
        image={carrotPNG}/>
        <CardComponent item={'Bell Peppers'}
        image={pepperPNG}/>
        <CardComponent item={'Tomatoes'}
        image={tomatoPNG}/>
      </div>
      <div className="side-button">Confirm Order</div>
    </div>
  )
}

const cards2 = (props) => {
  return (
    <div key={2} className="bar-3">
      <div className="cards" style={{ marginRight: props.sideBarVis ? '0vw' : '10vw', transition: 'margin-right 0.5s ease-in-out'}}> 
        <CardComponent item={'Free-range Eggs'}
        image={eggPNG}/>
        <CardComponent item={'Sweet Corn'}
        image={cornPNG}/>
        <CardComponent item={'Blueberries'}
        image={blueberryPNG}/>
        <CardComponent item={'Tomatoes'}
        image={tomatoPNG}/>
        <CardComponent item={'Okanagan Grapes'}
        image={grapePNG}/>
        <CardComponent item={'Carrots'}
        image={carrotPNG}/>
      </div>
      <div className="side-button">Confirm Order</div>
    </div>
  )
}

const cards3 = (props) => {
  return (
    <div key={3} className="bar-3">
      <div className="cards" style={{ marginRight: props.sideBarVis ? '0vw' : '10vw', transition: 'margin-right 0.5s ease-in-out'}}> 
        <CardComponent item={'Honey'}
        image={honeyPNG}/>
      </div>
      <div className="side-button">Confirm Order</div>
    </div>
  )
}

const cards4 = (props) => {
  return (
    <div key={3} className="bar-3">
      <div className="cards" style={{ marginRight: props.sideBarVis ? '0vw' : '10vw', transition: 'margin-right 0.5s ease-in-out'}}> 
        <CardComponent item={'Okanagan Grapes'}
        image={grapePNG}/>
        <CardComponent item={'Free-range Eggs'}
        image={eggPNG}/>
        <CardComponent item={'Blueberries'}
        image={blueberryPNG}/>
      </div>
      <div className="side-button">Confirm Order</div>
    </div>
  )
}

const cards = [cards1, cards2, cards3, cards4];

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
    const left = props.sideBarVis ? '0' : '-34vw';

    const [shelterName, setShelterName] = useState(props.ranking[0][0]);
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState(props.ranking[0][2]);
  
    const confirmDonation = () => {
      // props.donateItems(shelterName, props.items);
      // props.toggleThankYouModal();
    }
  
    const carouselChange = (from, to) => {
      const name = props.ranking[to][0];
      setShelterName(name); 
      setIndex(to);
      props.toggleCoords([props.shelters[name].long, props.shelters[name].lat]);
      props.toggleUpdateMap();
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
              props.toggleSideBar(!props.sideBarVis);
            }}
          />
        </div>
        <div className="bar-2" style={{
                    opacity: props.sideBarVis ? 1 : 0,
                    transition: 'opacity 0.3  s ease-in-out',
                  }}>
          <div className="title">
            <h1>{shelterName}</h1>
            <h2>{address}</h2>
            <p>{index + 1} of {props.ranking.length}</p>
          </div>
          <Carousel {...settings} beforeChange={carouselChange} style={{
                    opacity: props.sideBarVis ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}>
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
          </Carousel >
        </div>
        {cards[index](props)}
      </div>
    );
};

export default SidebarComponent;