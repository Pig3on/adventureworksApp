import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {Form,Input,Button} from 'antd'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/thunks';

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const smth =  {
    display: "flex",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
}
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function RegisterScreen() {
    const dispatch = useDispatch();
    const onFinish = values => {
        dispatch(registerUser(values));
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div style={smth}>
        <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item  label="Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item  label="Email" name="username" rules={[{ required: true, message: 'Please input your username!' },{pattern: emailCheck, message:"Email not valid"}]}>
            <Input />
          </Form.Item>
          <Form.Item  label="Password" secure name="password" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input.Password/>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
         </Form.Item>
        </Form>
        </div>
    )
}

export default RegisterScreen
