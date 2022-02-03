import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Space, Card } from 'antd';

const Upload = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  const submitHandler1 = () => {
    axios
      .post('http://localhost:5050/people/boy', {
        name,
        address,
      })
      .then((res) => {
        console.log('res', res);
      });
  };

  const submitHandler2 = () => {
    console.log('zzz', age);
    let formData = new FormData();
    formData.append('age', age);
    // 发送 POST 请求
    axios({
      method: 'post',
      url: 'http://localhost:5050/people/girl',
      data: formData,
    });
  };

  return (
    <div>
      <h3>后台接口上传</h3>
      <Space direction="vertical">
        <Card title="后端JSON接口通讯--JSON">
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
          <Button type="primary" onClick={submitHandler1}>
            提交
          </Button>
        </Card>
        <Card title="后端JSON接口通讯--FormData">
          <Input
            type="text"
            style={{ width: '300px' }}
            placeholder="formData"
            onChange={(v) => setAge(v.target.value)}
          />
          <Button type="primary" onClick={submitHandler2}>
            提交
          </Button>
        </Card>
      </Space>
    </div>
  );
};

export default Upload;
