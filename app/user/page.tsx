"use client";
import React, { useState } from "react";
import HasilPencarian from "./hasilPencarian";

export default function User() {
  const [query, setQuery] = useState("");
  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQ = e.target[0].value;
    setQuery(inputQ);
  };
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h6>Cari Orang</h6>
            </div>
            <div className="card-body">
              <form action="" onSubmit={onSearch}>
                <div className="row">
                  <div className="col-9">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-3">
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-warning btn-block"
                      >
                        Cari
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* berguna untuk pengecekan null */}
      {query && <HasilPencarian query={query} />}
      {/* <h1>{"Data Yang Akan Dicari Adalah : " + query}</h1> */}
    </div>
  );
}
