import React, { useContext, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import { useHistory, Link } from "react-router-dom";
import { Button } from "antd";
// import { logoutFromFirebase, updateUserInfo } from "../actions";
import { requestOrderDetail, getOrderBy, setOrderList } from "../actions";
import { LoadingOutlined } from '@ant-design/icons';
import { StoreContext } from "../store";

export default function OrderListCard() {
  const { state: { orderList: { loading, orders } }, dispatch } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
  // useEffect(() => {
  //   setOrderList(dispatch)
  // }, []);

  return (
    <>
      <div className="orderList-wrap">
        <div className="orderList-title">Your Orders</div>
        {loading ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <div className="order-wrap">
            {orders.length === 0 ? (
              <p className="order-tip">Order is empty</p>
            ) : (
              orders.map(order => (
                <Link to={`/order/${order.id}`}>
                  <div>
                    <p className="order-id">Order ID: {order.id}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
