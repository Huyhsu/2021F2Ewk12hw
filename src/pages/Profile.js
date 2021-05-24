import { Layout } from "antd";
import React, { useContext, useEffect } from "react";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import OrderListCard from "../components/OrderListCard";
import { setOrderList } from "../actions"
import { StoreContext } from "../store";
import { Row, Col, Spin } from "antd";

const { Header, Content, Footer } = Layout;

// state: { userSignin: { userInfo } },

function Profile() {
  const { dispatch } = useContext(StoreContext);
  useEffect(() => {
    setOrderList(dispatch)
  }, []);
  return (
    <Layout className="container main-layout">
      <Layout className="bg-gray main-area">
        <Header className="layout-header">
          <AppHeader title="Profile Page" />
        </Header>
        <Content className="layout-content">
          <Row gutter={[32, 32]} justify="space-around">
            <Col lg={{ span: 8 }}>
              <ProfileCard />
            </Col>
            <Col lg={{ span: 8 }}>
              <OrderListCard />
            </Col>
          </Row>
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Profile;
