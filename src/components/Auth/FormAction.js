import React from "react";

const FormAction = ({ handleSubmit, action, text }) => {
  return (
    <>
      <button
        type={action !== "button" ? action : "button"}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
        onSubmit={handleSubmit}
      >
        {text}
      </button>
    </>
  );
};

export default FormAction;
