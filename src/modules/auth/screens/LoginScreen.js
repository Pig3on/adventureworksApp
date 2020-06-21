import React from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/thunks';

import { errorSelector, isLoadingSelector } from '../redux/selectors';
import { withRouter } from 'react-router-dom';
import { useNavigateAfterAction } from '../../../shared/Utils/navigateAfterActon';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const smth = {
  display: "flex",
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}


const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function LoginScreen() {
  const dispatch = useDispatch();

  const [isSent, setIsSent] = useNavigateAfterAction(isLoadingSelector, errorSelector, '/')
  const isLoading = useSelector(isLoadingSelector);

  const onFinish = (values) => {
    const user = {
      username: values.username,
      password: values.password,
    }
    dispatch(loginUser(user));
    setIsSent(true);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if(isLoading) {
    return (
      <Spin/>
    )
  }

  return (
    <div style={smth}>
      <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Email" name="username" rules={[{ required: true, message: 'Please input your username!' }, { pattern: emailCheck, message: "Email not valid" }]}>
          <Input value={''} />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input.Password value={''} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
            </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default withRouter(LoginScreen)
