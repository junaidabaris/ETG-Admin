import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSingleEmailConfig,
  loadAllEmailConfig,
} from "../../../../redux/rtk/features/crm/email/emailConfigSlice";
import UserPrivateComponent from "../../../PrivateRoutes/UserPrivateComponent";

export default function CreateEmailSetupForm({ onClose }) {
  const { loading: contactLoading } = useSelector((state) => state.contact);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllEmailConfig());
  }, [dispatch]);

  const onFinish = async (values) => {
    const formData = {
      ...values,

      emailPort: parseInt(values.emailPort),
    };

    console.log(formData);

    const resp = await dispatch(addSingleEmailConfig(formData));
    if (resp.payload.message === "success") {
      form.resetFields();
      dispatch(loadAllEmailConfig());
      onClose();
    }
  };

  const onCancel = () => {
    form.resetFields();
    onClose();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className='flex justify-center mt-5'>
      <UserPrivateComponent permission='create-contact'>
        <Form
          className='w-4/5'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          colon={false}
          layout='vertical'
          form={form}
        >
          <Form.Item
            style={{ width: "100%" }}
            label='Config Name'
            name='emailConfigName'
            rules={[{ required: true, message: "ConfigName is Required." }]}
          >
            <Input placeholder='Config Name' />
          </Form.Item>

          <Form.Item
            label='Host'
            name='emailHost'
            rules={[{ required: true, message: "Host is Required." }]}
          >
            <Input placeholder='mail.google.com' />
          </Form.Item>

          <Form.Item
            label='Port'
            name='emailPort'
            rules={[{ required: true, message: "Port is Required." }]}
          >
            <Input placeholder='465' />
          </Form.Item>

          <Form.Item
            label='User Email'
            name='emailUser'
            rules={[{ required: true, message: "User is Required." }]}
          >
            <Input placeholder='example@email.com' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='emailPass'
            rules={[{ required: true, message: "Password is Required." }]}
          >
            <Input.Password placeholder='Enter your password' />
          </Form.Item>
          <Form.Item label=''>
            <div className='flex items-center gap-2'>
              <Button size={"large"} htmlType='submit' type='primary'>
                Create
              </Button>

              <Button
                loading={contactLoading}
                size={"large"}
                htmlType='submit'
                type='danger'
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </Form.Item>
        </Form>
      </UserPrivateComponent>
    </div>
  );
}
