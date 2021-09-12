import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
            <div className="card mt-2" style={{minWidth: "150px"}}>
                <img src={item.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Estado: {item.status}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
