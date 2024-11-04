import React from "react";
import {
  Search,
  CircleNotifications,
  ExpandMore,
  MoreVert,
  TrendingUp,
  TrendingDown,
} from "@mui/icons-material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import charity from "../images/charity.png";
import morenikeji from "../images/morenikeji.png";
import oreoluwa from "../images/oreoluwa.png";
import boy from "../images/boy.png";
import logo from "../images/logo.jpg";

const Mainpage = () => {
  const Items = [
    {
      Title: "Profit Total",
      Amount: "50,215",
      MonthyText: "vs las month 47,32",
      Icon: <TrendingUp />,
      Percentage: "25%",
    },
    {
      Title: "Expense Total",
      Amount: "12,2331",
      MonthyText: "vs las month 15,125",
      Icon: <TrendingDown />,
      Percentage: "22%",
    },
    {
      Title: "New Customers",
      Amount: "658",
      MonthyText: "vs las month 510",
      Icon: <TrendingUp />,
      Percentage: "25%",
    },
    {
      Title: "Running Projects",
      Amount: "25",
      MonthyText: "vs las month 18",
      Icon: <TrendingDown />,
      Percentage: "12%",
    },
  ];

  const Months = [
    {
      Name: "January",
    },
    {
      Name: "Febuary",
    },
    {
      Name: "March",
    },
    {
      Name: "April",
    },
    {
      Name: "May",
    },
    {
      Name: "June",
    },
    {
      Name: "July",
    },
    {
      Name: "August",
    },
    {
      Name: "Sepetmber",
    },
    {
      Name: "October",
    },
    {
      Name: "November",
    },
    {
      Name: "December",
    },
  ];

  const Users = [
    {
      Image: charity,
      Name: "Erute Charity",
      Minutes: "42 minutes Ago",
      Price: "+$98.00",
    },
    {
      Image: morenikeji,
      Name: "Obafemi Morenikeji",
      Minutes: "50 minutes Ago",
      Price: "+$87.00",
    },
    {
      Image: oreoluwa,
      Name: "Oreoluwa Ayanfe",
      Minutes: "24 minutes Ago",
      Price: "+$49.00",
    },
    {
      Image: boy,
      Name: "Adam Samson",
      Minutes: "18 minutes Ago",
      Price: "+$58.00",
    },
  ];

  return (
    <div className="mainpage_container">
      <div className="mainpage_header">
        <h1>Dashboard</h1>
        <div className="search_and_admin_field">
          <div className="mainpage_search">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header_icon">
            <CircleNotifications />
          </div>
          <div>
            <h3>Erute Charity</h3>
            <h4>Super Admin</h4>
          </div>
          <div>
            <img className="my_image" src={charity} alt="" />
          </div>
          <ExpandMore />
        </div>
        <i class="fa-solid fa-bars header_icon_two"></i>
      </div>

      <div className="mainpage_content">
        <div className="box_house">
          {Items.map((item, index) => (
            <div className="box_one" key={index}>
              <div className="box_title">
                <h1>{item.Title}</h1>
                <MoreVert />
              </div>
              <div className="amount_fields">
                <div>
                  <h2>{item?.Amount}</h2>
                  <p>
                    <span>{item?.MonthyText}</span>
                  </p>
                </div>
                <div className="percentage_fields">
                  <p className="percentage">
                    {item?.Icon}
                    <span className="main_percentage">{item?.Percentage}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="chart_sales_field">
          <div className="chart_fields">
            <div className="chart_header">
              <h1>Revenue Updates</h1>
              <select className="chart_selector">
                <option value="">Choose Month</option>
                {Months.map((item, index) => (
                  <option value="January">{item?.Name}</option>
                ))}
              </select>
            </div>
            <BarChart
              series={[
                { data: [4, 2, 5, 4, 1], stack: "A" },
                { data: [2, 8, 1, 3, 1], stack: "A" },
                { data: [14, 6, 5, 8, 9] },
              ]}
              barLabel={(item, context) => {
                if ((item.value ?? 0) > 10) {
                  return "High";
                }
                return context.bar.height < 60 ? null : item.value?.toString();
              }}
              width={900}
              height={300}
            />
          </div>
          <div className="sales_fields">
            <div className="sales_header">
              <h1>Recents Sales</h1>
              <button className="sales_buttons">See All</button>
            </div>
            {Users.map((item, index) => (
              <div key={index} className="sales_body">
                <div className="sales_admin">
                  <img className="sales_image" src={item?.Image} alt="" />
                  <div>
                    <h2>{item?.Name}</h2>
                    <p>
                      <span>{item?.Minutes}</span>
                    </p>
                  </div>
                </div>
                <h3>{item?.Price}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="table_and_total_fields">
          <div className="table_field">
            <table>
              <thead>
                <tr className="table_head">
                  <div className="head_one">
                    <th>Home</th>
                    <div>
                      <ExpandMore />
                    </div>
                  </div>

                  <th>
                    Item
                    <ExpandMore />
                  </th>
                  <th>
                    Date
                    <ExpandMore />
                  </th>
                  <th>
                    Stats
                    <ExpandMore />
                  </th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="table_body">
                <tr>
                  <div className="image_container">
                    <td>
                      <div>
                        <img className="table_image" src={oreoluwa} alt="" />
                      </div>
                    </td>
                    <td>Oreoluwa Ayanfe</td>
                  </div>
                  <td>All Max 75</td>
                  <td>17-08-2023</td>
                  <td>
                    <button className="tableBtn green">Succes</button>
                  </td>
                  <td>
                    <MoreVert />
                  </td>
                </tr>

                <tr>
                  <div className="image_container">
                    <td>
                      <div>
                        <img className="table_image" src={morenikeji} alt="" />
                      </div>
                    </td>
                    <td>Summer Cano</td>
                  </div>
                  <td> Max 78</td>
                  <td>12-09-2023</td>
                  <td>
                    <button className="tableBtn red">Succes</button>
                  </td>
                  <td>
                    <MoreVert />
                  </td>
                </tr>

                <tr>
                  <div className="image_container">
                    <td>
                      <div>
                        <img className="table_image" src={boy} alt="" />
                      </div>
                    </td>
                    <td>Ayanfe Tosin</td>
                  </div>
                  <td>Pro 58</td>
                  <td>17-08-2023</td>
                  <td>
                    <button className="tableBtn green">Succes</button>
                  </td>
                  <td>
                    <MoreVert />
                  </td>
                </tr>

                <tr>
                  <div className="image_container">
                    <td>
                      <div>
                        <img className="table_image" src={charity} alt="" />
                      </div>
                    </td>
                    <td>Erute Charity</td>
                  </div>
                  <td> Max 45</td>
                  <td>15-08-2023</td>
                  <td>
                    <button className="tableBtn red">Succes</button>
                  </td>
                  <td>
                    <MoreVert />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="total_fields">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
