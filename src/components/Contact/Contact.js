import React, { useState, useRef } from "react";
import { Form, Button, Input, Select } from "antd";
import { UserOutlined, MailOutlined, CheckCircleOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";
import presentationData from "../../data/presentationData";
import servicesData from "../../data/servicesData";
import "./Contact.less";

const MailSent = () => {
  return (
    <div className="mail-sent">
      <CheckCircleOutlined style={{fontSize: '28px', color: 'green', paddingTop: '8px', paddingRight: '8px'}} />
      <h1>Danke für deine Nachricht!</h1>
    </div>
  );
};

const Contact = ({ title, mode, toogleContact }) => {
  const data = mode === "presentation" ? presentationData : servicesData;
  const form = useRef();
  const { TextArea } = Input;
  const { Option } = Select;
  const userId = process.env.EMAIL_JS_USER_ID;
  emailjs.init(userId);

  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    emailjs
      .send("service_km0nukb", "template_2kcug2l", values, userId)
      .then((result) => {
        if (result.status === 200) {
          setEmailSent(true);
          setIsLoading(false);
        }
      });
  };

  return emailSent ? <MailSent /> : (
    <Form
      ref={form}
      name="cf"
      method="post"
      onFinish={handleSubmit}
      layout="vertical"
      style={{ width: 600 }}
      initialValues={{ title: title }}
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
        label={mode === "presentation" ? "Vortrag" : "Dienstleistung"}
        rules={[{ required: true, message: mode === `presentation` ? `Bitte wähle einen Vortrag aus.` : `Bitte wähle eine Dienstleistung aus.` }]}
        name="title"
      >
        <Select
          showSearch
          placeholder = {mode === `presentation` ? `Bitte wähle einen Vortrag aus.` : `Bitte wähle eine Dienstleistung aus.`}
          optionFilterProp="children"
          defaultValue={title}
        >
          {data.map((content) => (
            <Option value={content.title}>{content.title}</Option>
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

      <Form.Item className="action-buttons">
        <Button type="primary" htmlType="submit" disabled={false} loading={isLoading}>
          Senden
        </Button>
        <Button disabled={false} onClick={toogleContact}>
          Schließen
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Contact;
