import { Grid, Typography, Card, CardHeader } from "@material-ui/core";
import React, { PureComponent } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

const dataLineChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataAreaChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataSimpleBarChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataStackBarChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class GraphCom extends PureComponent {
  render() {
    return (
      //   <ResponsiveContainer width="100%" height="100%">
      <>
        <Card>
          <CardHeader
            title={
              <Typography
                style={{ color: "red" }}
                style={{ textAlign: "center" }}
                variant="h1"
                component="h1"
                gutterBottom
                color="primary"
              >
                Graph Components
              </Typography>
            }
          ></CardHeader>

          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <div className="grpah">
                <Grid container spacing={2}>
                  <Grid item lg={4} md={4} xs={12} sm={12}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h5"
                      component="h5"
                    >
                      Pie Chart
                    </Typography>
                    <PieChart
                      width={400}
                      height={400}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Pie
                        data={data01}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                      />
                      <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                      />
                    </PieChart>
                  </Grid>
                  <Grid item lg={4} md={4} xs={12} sm={12}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h5"
                      component="h5"
                    >
                      Line Chart
                    </Typography>
                    <LineChart
                      width={500}
                      height={400}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      data={dataLineChart}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </Grid>

                  <Grid item lg={4} md={4} xs={12} sm={12}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h5"
                      component="h5"
                    >
                      Area Chart
                    </Typography>
                    <AreaChart
                      width={500}
                      height={400}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      data={dataAreaChart}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <div className="grpah">
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} xs={12} sm={12}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h5"
                      component="h5"
                    >
                      Bar Chart
                    </Typography>
                    <BarChart
                      width={700}
                      height={400}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      data={dataSimpleBarChart}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12} sm={12}>
                    <Typography
                      style={{ textAlign: "center" }}
                      variant="h5"
                      component="h5"
                    >
                      Stacked Bar Chart
                    </Typography>
                    <BarChart
                      width={700}
                      height={400}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                      data={dataStackBarChart}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                    </BarChart>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Card>

        <Card style={{ marginTop: 20 }}>
          <CardHeader
            title={
              <Typography
                style={{ color: "red" }}
                style={{ textAlign: "center" }}
                variant="h1"
                component="h1"
                gutterBottom
                color="primary"
              >
                Lazy Loading Component
              </Typography>
            }
          ></CardHeader>
        </Card>
      </>
    );
  }
}
