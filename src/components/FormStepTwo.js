import React from "react";
import { Form, Input, Button, Row, Col, Divider, InputNumber } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const StepTwo = (props) => {
  const [form] = Form.useForm();

  const validateInput = (e) => {
    e.preventDefault();
    form.validateFields().then((values) => {
      props.submittedValues(values);
      props.handleNextButton();
    });
  };

  const storeValues = () => {
    const values = form.getFieldsValue();
    console.log("Values", values);
    props.submittedValues(values);
    props.handleBackButton();
  };

  const rules = [{ required: true }];

  console.log("props.data", props.data);
  return (
    <div style={{ textAlign: "center" }}>
      <Form
        form={form}
        initialValues={{ users: props.users, userName: props.userName }}
        layout="horizontal"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="User Name"
              name="userName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="left">Dynamic Fields</Divider>
        <Form.List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Row key={field.key}>
                    <Col span={6}>
                      <Form.Item
                        name={[field.name, "lastName"]}
                        fieldKey={[field.fieldKey, "lastName"]}
                        rules={rules}
                        label="last name"
                      >
                        <Input placeholder="last name" />
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        name={[field.name, "firstName"]}
                        fieldKey={[field.fieldKey, "firstName"]}
                        rules={rules}
                        label="first name"
                      >
                        <Input placeholder="first name" />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        name={[field.name, "age"]}
                        fieldKey={[field.fieldKey, "age"]}
                        rules={rules}
                        label="age"
                      >
                        <InputNumber placeholder="age"  />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: "50%" }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Form.Item>
          <Button type="primary" onClick={validateInput}>
            Next
          </Button>
          <Button type="default" onClick={storeValues}>
            Back
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepTwo;
