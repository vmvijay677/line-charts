import React from "react";
import "./TaskComponent.css";
import CloseIcon from "@mui/icons-material/Close";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import Graph from "./Graph.jpg";

const TaskComponent = () => {
  return (
    <div className="task_component">
      <p className="close-button">
        <CloseIcon />
      </p>

      <div className="title-flex">
        <div>
          <p className="title">Binance (BNB)</p>
          <p className="price">$432.09</p>
          <p className="gain-loss">
            Gain/loss 24hr:
            <span style={{ color: "rgba(48, 175, 154, 1)", fontWeight: "600" }}>
              &nbsp; +7.12%
            </span>
          </p>
        </div>

        <div className="time-flex">
          <p>15M</p>
          <p>1H</p>
          <p>4H</p>
          <p style={{ color: "black", fontWeight: "700" }}>24H</p>
          <p>1W</p>
        </div>
      </div>

      <div className="graph">
        <div className="graph-time">
          <p style={{ textAlign: "center", fontSize: "14px" }}>14 May 2022</p>
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "600" }}
          >
            3:16 pm
          </p>
        </div>

        <img src={Graph} alt="graph" className="graph-image"></img>
      </div>

      <div className="hl">{""}</div>

      <div className="market-flex">
        <div>
          <p style={{ fontSize: "20px" }}>Market Cap</p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <span id="market-cap">
              <ChangeHistoryIcon fontSize="small" />
            </span>
            $94.22B
          </p>
        </div>

        <div className="vl">{""}</div>

        <div>
          <p style={{ fontSize: "20px" }}>Market Cap Rank</p>
          <p
            style={{ fontSize: "20px", fontWeight: "700", textAlign: "center" }}
          >
            #8
          </p>
        </div>

        <div className="vl">{""}</div>

        <div>
          <p style={{ fontSize: "20px" }}>24 hr Volume</p>
          <p
            style={{ fontSize: "20px", fontWeight: "700", textAlign: "center" }}
          >
            $324.22M
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
