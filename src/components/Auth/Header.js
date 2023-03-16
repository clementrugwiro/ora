import React from "react";

import { Link } from "react-router-dom";

const Header = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center" />
      <h1 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
        ORA.
      </h1>
      <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className=" text-center text-sm text-gray-600 mt-5">
        {paragraph}
        <Link
          to={linkUrl}
          className="font-medium text-yellow-600 hover:text-yellow-500"
        >
          {linkName}
        </Link>
      </p>
      <div className="spinner" />
    </div>
  );
};

export default Header;
