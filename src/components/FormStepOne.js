import React from "react";
import { Form, Input, Button, Row, Col} from "antd";

const StepOne = (props) => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    textAlign:'center'
  };

  const validateInput = (e) => {
    e.preventDefault();
    form
      .validateFields()
      .then((values) => {
        console.log("STEP_1", values);
        props.submittedValues(values);
        props.handleNextButton();
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };
  return (
    <div style={{textAlign:'center', width:'60%'}}> 
    <Form
       {...layout}
      form={form}
      initialValues={{
        applicationName: props.applicationName,
        applicationDesc: props.applicationDesc,
      }}
    >
      <Row>
        <Col span={24}>
        <Form.Item
        label="Application Name"
        name="applicationName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
        </Col>
      </Row>
     <Row>
       <Col span={24}>
       <Form.Item
        label="Application Description"
        name="applicationDesc"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
       </Col>
     </Row>
     <Row>
       <Col span={12} push={2}>
       <Form.Item>
        <Button type="primary" onClick={validateInput}>
          Next
        </Button>
      </Form.Item>
       </Col>
     </Row>
     
    </Form>
    </div>
  );
};

export default StepOne;
