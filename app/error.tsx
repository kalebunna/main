"use client";
import React, { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <div className="alert alert-danger flex " role="alert">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            Terjadi Keaslahan pada : <b> {error.message}</b>
          </span>
          <button
            onClick={() => reset}
            className="btn btn-danger text-white ml-2"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
