import { React, useState } from 'react';
import { PlusOutlined, MinusOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import './style.scss';

const { Meta } = Card;



const CardComponent = (props) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => { 
        setCount(Math.max(count - 1, 0));
    }


  return (
    <div className="card">
      <Card
    style={{ width: '10vw' }}
    cover={
      <img
        alt="example"
        src={props.image}
      />
    }
    actions={[
      <MinusOutlined onClick={decrementCount} key="minus" />,
      <PlusOutlined onClick={incrementCount} key="plus" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={props.item}
      description={count + ''}
    />
  </Card>
    </div>
  );
};

export default CardComponent;