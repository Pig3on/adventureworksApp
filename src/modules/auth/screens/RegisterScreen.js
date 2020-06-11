import React, { useState, useEffect } from 'react'

import { Form, Input, Button, Upload, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, updateUser } from '../redux/thunks';
import { getCurrentUserSelector, isLoadingSelector, errorSelector } from '../redux/selectors';
import { withRouter, useHistory } from 'react-router-dom';
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

/* 
name: "safd"
username: "sfsad@sfdf.com"
password: "pass1"
avatar: "C:\fakepath\Screen Shot 2020-03-27 at 6.37.52 PM.png"
__proto__: Object

*/

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function RegisterScreen({ edit }) {
  let currentUser = useSelector(getCurrentUserSelector);
  const [imageUrl, setImageUrl] = useState(currentUser ? currentUser.img : null);
  const [isSent, setIsSent] = useNavigateAfterAction(isLoadingSelector, errorSelector, '/')
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const user = {
      name: values.name,
      username: values.username,
      password: values.password,
      img: imageUrl,
    }
    if (edit) {
      user.id = currentUser.id;
      dispatch(updateUser(user));
    } else {
      dispatch(registerUser(user));
    }
    setIsSent(true);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const onUploadChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setImageUrl(imageUrl)
      );
    }
  }
  if (!currentUser) {
    currentUser = {}
  }

  return (
    <div style={smth}>
      <Form {...layout} initialValues={{ name: currentUser.name || '', username: currentUser.username || '', password: currentUser.password || '' }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Required!', }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="username" rules={[{ required: true, message: 'Required!', }, { pattern: emailCheck, message: "Email not valid" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" >
          <Input.Password />
        </Form.Item>
        <Upload
          customRequest={dummyRequest}
          name="avatar"

          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={onUploadChange}
        >
          {imageUrl || currentUser ? <img src={currentUser.img || imageUrl} alt="avatar" style={{ width: '100%' }} /> :
            <div>
              <div className="ant-upload-text">Upload</div>
            </div>
          }
        </Upload>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {edit ? "Update" : "Register"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default withRouter(RegisterScreen);
