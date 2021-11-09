import React, { useState, useRef } from "react";
import { Form, Button, Input, Select } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import presentationData from "../data/presentationData";

const Contact = ({ presentationTitle }) => {
  const form = useRef();
  const { TextArea } = Input;
  const { Option } = Select;

  emailjs.init("user_GdhTdd3gmWLtdartmfCpX");

  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (values) => {
    emailjs
      .send(
        "service_km0nukb",
        "template_2kcug2l",
        values, 
        "user_GdhTdd3gmWLtdartmfCpX"
      )
      .then((result) => {
        if (result.status === 200) {
          setEmailSent(true);
        }
      });
  };

  return (
    <Form
      ref={form}
      name="cf"
      method="post"
      onFinish={handleSubmit}
      layout="vertical"
      style={{ width: 600 }}
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: `Bitte gib deinen Namen ein.` }]}
        name="name"
      >
        <Input
          placeholder="Name"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        label="E-Mail"
        rules={[
          {
            required: true,
            type: `email`,
            message: `Bitte gib deine E-Mail-Adresse ein.`,
          },
        ]}
        name="email"
      >
        <Input
          placeholder="Deine E-Mail-Adresse"
          prefix={<MailOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        label="Vortrag"
        rules={[{ required: true, message: `Bitte wähle einen Vortrag aus.` }]}
        name="lecture"
      >
        <Select
          showSearch
          placeholder="Wähle einen Vortrag"
          optionFilterProp="children"
          defaultValue={presentationTitle}
        >
          {presentationData.map((presentation) => (
            <Option value={presentation.title}>{presentation.title}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Nachricht"
        rules={[{ required: true, message: `Bitte gib eine Nachricht ein.` }]}
        name="message"
      >
        <TextArea placeholder="Deine Nachricht an Bitlingo" rows={5} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={false}>
          Senden
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
