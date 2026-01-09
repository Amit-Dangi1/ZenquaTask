import React, { useState } from "react";
import "./DealPage.css";

const DATA = [
  {
    stage: "Negotiating",
    color: "#fdecef",
    total: 12000,
    deals: [
      {
        client: "Chandan Katla",
        deal: "Chandan Deal",
        budget: 5000,
        assignee: "MS",
        date: "2026-03-15",
      },
      {
        client: "michael speed",
        deal: "some deal 4",
        budget: 7000,
        assignee: "MS",
        date: "2028-08-20",
      },
    ],
  },
  {
    stage: "Kickback",
    color: "#fff6da",
    total: 50000,
    deals: [
      {
        client: "Kiosk Black",
        deal: "Kiosk Project",
        budget: 50000,
        assignee: "VS",
        date: "2028-10-10",
      },
    ],
  },
];

const DealsBoard = () => {
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState("2025-01-01");
  const [to, setTo] = useState("2028-12-31");

const filterDeals = (deal) => {
  const dealTime = new Date(deal.date + "T00:00:00").getTime();
  const fromTime = new Date(from + "T00:00:00").getTime();
  const toTime = new Date(to + "T23:59:59").getTime();

  const matchText =
    deal.client.toLowerCase().includes(search.toLowerCase()) ||
    deal.deal.toLowerCase().includes(search.toLowerCase());

  return matchText && dealTime >= fromTime && dealTime <= toTime;
};

  return (
    <div className="shadow-lg  rounded-5 container p-3 ">
     
    <div className="bg-white p-3 rounded">
  <div className="row g-2 align-items-center">

  
    <div className="col-12 col-lg-7">
      <div className="d-flex flex-wrap align-items-center gap-2">

        <button className="btn btn-primary btn-sm">
          ▤ Pipeline
        </button>

        <button className="btn btn-outline-secondary btn-sm">
          ☰ List
        </button>

      <div className="col-12 col-lg-auto mt-2 mt-lg-0">
  <div className="fw-semibold">
    Total Deals: <strong>3</strong>&nbsp;&nbsp;
    Total Revenue in Pipeline: <strong>$62,000</strong>
  </div>
</div>

      </div>
    </div>
 
    <div className="col-12 col-lg-5">
      <div className="d-flex flex-wrap justify-content-lg-end gap-2">

        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search..."
          style={{ maxWidth: "150px" }}
          onChange={(e) => setSearch(e.target.value)}
        />

     <div className="border rounded p-1">
  <div className="row g-1 align-items-center">
    <div className="col-auto">
      <small className="text-muted">From</small>
    </div>

    <div className="col-auto">
      <input
        type="date"
        className="form-control form-control-sm"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
    </div>

    <div className="col-auto">
      <small className="text-muted">To</small>
    </div>

    <div className="col-auto">
      <input
        type="date"
        className="form-control form-control-sm"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
    </div>
  </div>
</div>

 

      </div>
    </div>

  </div>
</div>

 
      <div className="table-head">
        <div>CLIENT</div>
        <div>DEAL NAME</div>
        <div>DEAL BUDGET</div>
        <div>ASSIGNEE</div>
        <div></div>
      </div>

     
      {DATA.map((group) => {
        const visibleDeals = group.deals.filter(filterDeals);
        if (!visibleDeals.length) return null;

        return (
          <div key={group.stage}>
            <div
              className="stage-row"
              style={{ background: group.color }}
            >
              <b>{group.stage}</b>
              <span>{visibleDeals.length}</span>
              <span>${group.total.toLocaleString()}</span>
              <span className="arrow">▲</span>
            </div>

            {visibleDeals.map((d, i) => (
              <div className="deal-row" key={i}>
                <div className="client">
                  <div className="avatar4">{d.client[0]}</div>
                  <div>
                    <b>{d.client}</b>
                    <div className="sub">michael</div>
                  </div>
                </div>
                <div>{d.deal}</div>
                <div>${d.budget.toLocaleString()}</div>
                <div className="assignee">{d.assignee}</div>
                
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DealsBoard;
