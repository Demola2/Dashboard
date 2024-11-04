import React, { useState } from "react";
import logo from "../images/logo.jpg";

import { Home, CalendarMonth, Layers } from "@mui/icons-material";

const Sidebar = () => {
  const [show, setshow] = useState("home");

  return (
    <div className="sidebar_container">
      <div className="container">
        <div className="company_logo_name">
          <img className="sidebar_image" src={logo} alt="" />
          <p>
            <span className="company_name">Ademola Company</span>
          </p>
        </div>

        <div className="button_container">
          <div
            onClick={() => {
              setshow("home");
            }}
          >
            <button className={`sidebar_btn ${show === "home" ? "key" : ""}`}>
              <Home />
              Home
            </button>
          </div>

          <div
            onClick={() => {
              setshow("stocks");
            }}
          >
            <button className={`sidebar_btn ${show === "stocks" ? "key" : ""}`}>
              <i class="fa-brands fa-facebook-messenger"></i>
              Stocks
            </button>
          </div>

          <div
            onClick={() => {
              setshow("auction");
            }}
          >
            <button
              className={`sidebar_btn ${show === "auction" ? "key" : ""}`}
            >
              <i class="fa-solid fa-chart-simple"></i>
              Auctions
            </button>
          </div>

          <div
            onClick={() => {
              setshow("calendar");
            }}
          >
            <button
              className={`sidebar_btn ${show === "calendar" ? "key" : ""}`}
            >
              <CalendarMonth />
              Calendar
            </button>
          </div>

          <div
            onClick={() => {
              setshow("score");
            }}
          >
            <button className={`sidebar_btn ${show === "score" ? "key" : ""}`}>
              <i class="fa-solid fa-divide"></i>
              Score
            </button>
          </div>

          <div
            onClick={() => {
              setshow("integration");
            }}
          >
            <button
              className={`sidebar_btn ${show === "integration" ? "key" : ""}`}
            >
              <Layers />
              Integrations
            </button>
          </div>

          <div
            onClick={() => {
              setshow("Stocks");
            }}
          >
            <button className={`sidebar_btn ${show === "Stocks" ? "key" : ""}`}>
              <i class="fa-brands fa-facebook-messenger"></i>
              Stocks
            </button>
          </div>
        </div>

        {/* <div className="admin_profile">
          <img className="admin_image" src={charity} alt="" />
          <div>
            <h3>Go premium now!</h3>
            <p>
              <span className="admin_advice">
                Upgrade to pro for unlinited Features
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
