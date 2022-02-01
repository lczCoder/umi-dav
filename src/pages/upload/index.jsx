import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Space, Card } from 'antd';

const Upload = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const submitHandler = () => {
    axios
      .post('http://localhost:5050/people/boy', {
        name,
        address,
      })
      .then((res) => {
        console.log('res', res);
      });
  };

  return (
    <div>
      <h3>后台接口上传</h3>
      <Space direction="vertical">
        <Card title="后端JSON接口通讯">
          <Input
            style={{ width: '300px' }}
            placeholder="姓名"
            onChange={(v) => setName(v.target.value)}
          />
          <Input
            style={{ width: '300px' }}
            placeholder="地址"
            onChange={(v) => setAddress(v.target.value)}
          />
          <Button type="primary" onClick={submitHandler}>
            提交
          </Button>
        </Card>
        <Card title="Card">
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </div>
  );
};

export default Upload;
