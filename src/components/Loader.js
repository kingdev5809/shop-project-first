import React from "react";

function Loader() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}

export default Loader;
