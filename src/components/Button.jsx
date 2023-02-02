import React from "react";

const Button = ({ type, children, onClick }) => {
  const onClickHandler = (ev) => {
    ev.preventDefault();
    onClick();
  };
  if (type === "submit") {
    return (
      <button
        type="submit"
        className="bg-moderateblue py-2 px-4 text-white rounded-md cursor-pointer"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="button text-moderateblue font-bold flex justify-center items-center gap-2 cursor-pointer"
        onClick={onClickHandler}
      >
        {children}
      </button>
    );
  }
};

export default Button;
