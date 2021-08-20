import React from "react";

const Input = (props) => {
  return (
    <div
      className={`Input field ${props.className || ""} ${
        props.error ? "error" : ""
      }`}
    >
      <p>{props.label}</p>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder || ""}
        value={props.value || ""}
        onChange={props.onChange}
      />
      
      {props.error ? (
        <div style={{ color: "#9a3f38" }}>{props.error}</div>
      ) : null}

      {props.type === "text" ? (<p>{props.city}</p>) : (
          <div className={props.dateButton}>
              <button onClick={props.removeDays}>Prev</button>
              <button onClick={props.addDays}>Next</button>
          </div>
      )}
    </div>
  );
};

export default Input;
