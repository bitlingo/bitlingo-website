import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { init } from "emailjs-com";
init("user_GdhTdd3gmWLtdartmfCpX");

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [emailSent, setEmailSent] = useState(false);

const handleSubmit = () => {};

const Contact = () => (
  <Layout>
    <Seo title="Konaktiere uns" />
    <div className={"container"}>
      <Form name="cf" method="post" onFinish={handleSubmit} layout="vertical">
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
          label="Email"
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
          label="Message"
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
    </div>
  </Layout>
);

export default Contact;
