import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const StepFinal = (props) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    textAlign:'center'
  };

  const validateInput = (e) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      props.handleConfirmButton(values);
    });
  };
  const storeValues = () => {
    const values = form.getFieldsValue();
    props.submittedValues(values);
    props.handleBackButton();
  };
  return (
    <div style={{ textAlign: "center", width: "60%" }}>
      <Form
         {...layout}
        form={form}
        initialValues={{
          fatherName: props.fatherName,
          motherName: props.motherName,
        }}
      >
        <Form.Item
          label="Father's name"
          name="fatherName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mother's Name"
          name="motherName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={8} push={16}> 
              <Button type="primary" onClick={validateInput}>
                Confirm
              </Button>
              <Button type="default" onClick={storeValues}>
                Back
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepFinal;
