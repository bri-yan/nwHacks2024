import React from 'react';
import { PlusOutlined, MinusOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import './style.scss';

const { Meta } = Card;

const CardComponent = (props) => {
  return (
    <div className="card">
      <Card
    style={{ width: '10vw' }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <MinusOutlined key="minus" />,
      <PlusOutlined key="plus" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={props.item}
      description={'0'}
    />
  </Card>
    </div>
  );
};

export default CardComponent;