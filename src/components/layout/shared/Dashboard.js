import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Form,
  Pagination,
} from "react-bootstrap-v5";
import Layout from "../../Component/Layout";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Pie, Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const Dashboard = () => {
  const data1 = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 24, 3, 5],
        backgroundColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderWidth: 1,
      },
    ],
  };
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderColor: ["#002e5b", "#256aad", "#45b6fe", "#00004d"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data3 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 100),
        borderColor: "#002e5b",
        backgroundColor: "#002e5b",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 100),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <>
      <Layout>
        <section className="outer-dash-section">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="dashboard-white-box">
                  <div className="w-100">
                    <h2 className="inner-page-heading">Dashboard</h2>
                    <Row>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>Total Token Purchased</p>
                          <h4>YUSE 0.00</h4>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>BNB</p>

                          <h4>BNB 0.00</h4>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>BUSD</p>

                          <h4>BUSD 0.0000</h4>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={6} xs={12}>
                        <div className="shadow-box-dash">
                          <p>ETH</p>

                          <h4>ETH 0.00</h4>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg={4}>
                        <div className="chart-box shadow-box-main">
                          <h3>Doughnut</h3>
                          <Doughnut data={data1} />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="chart-box shadow-box-main">
                          <h3>Pie Chart</h3>
                          <Pie data={data2} />
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div className="chart-box shadow-box-main">
                          <h3>Pie Chart</h3>
                          <Pie data={data} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chart-box shadow-box-main">
                          <h3>Line Chart</h3>
                          <Line options={options} data={data3} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="chart-box shadow-box-main">
                          <h3>Line Chart</h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Dashboard;
