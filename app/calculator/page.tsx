"use client";
import React, { useState } from "react";

export default function Calculator() {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, SetHasil] = useState(0);

  const cekAngka = () => {
    const akhir = angka1 / angka2;
    console.log(akhir);

    if (!isNaN(akhir)) {
      SetHasil(akhir);
    } else {
      throw new Error("Bukan Angka");
    }
  };
  return (
    <div>
      <h5>Client Side Rendering</h5>
      <div className="card w-50">
        <div className="card-header">
          <strong> Calculator</strong>
        </div>

        <div className="card-body">
          <form action="">
            <label htmlFor="">Angka Pertama</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAngka1(Number(e.target.value))}
            />
            <label htmlFor="">Angka Kedua</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAngka2(Number(e.target.value))}
            />
            <div className=" mt-3 d-flex align-items-center">
              <button
                type="button"
                className=" btn btn-primary"
                onClick={cekAngka}
              >
                Hitung
              </button>
              <span className="mx-4">Hasilnya Adalah</span> :{" "}
              <h5 className="m-0">{hasil}</h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
