import React from "react";

const AdminOnly = (props) => {
  return (
    <div className="container-item attention" style={{ borderColor: "tomato" }}>
      <center>
        <div style={{ margin: "17px" }}>
          <h1>{props.page}</h1>
        </div>
        <p>Accès administrateur uniquement.</p>
      </center>
    </div>
  );
};

export default AdminOnly;
