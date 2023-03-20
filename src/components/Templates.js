/* eslint-disable consistent-return */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { loginFields } from "../constants/formFields";
import Alert from "./Auth/Alert";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";
import { PencilIcon, XCircleIcon, PlusIcon } from "@heroicons/react/solid";
const fields = loginFields;
const fieldsState = {};

fields.forEach((field) => {
  fieldsState[field.id] = "";
});

const Templates = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuth } = useSelector((state) => state.login);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) return navigate("../dashboard");
    }, 300);
  }, [isAuth]);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginState;
    return;
  };

  const [images, setImages] = React.useState([]);
  const [images2, setImages2] = React.useState([]);

  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const onChange2 = (imageList2, addUpdateIndex2) => {
    // data for submit
    console.log(imageList2, addUpdateIndex2);
    setImages2(imageList2);
  };
  const handleClick = () => setNav(!nav);
  const dummy = [
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "joefrazer",
      phoneNumber: "0234234234",
    },
    {
      firstname: "joe",
      lastname: "frazer",
      email: "tyson",
      phoneNumber: "0234234234",
    },
  ];

  const columns = [
    { Header: "Template", accessor: "firstname" },
    { Header: "Empty Template", accessor: "lastname" },
    { Header: "Category", accessor: "email" },
    { Header: "Phone Number", accessor: "phoneNumber" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <div className=" items-center flex">
          <PencilIcon
            className="mr-2 text-primary"
            width="25"
            height="25"
            cursor="pointer"
            onClick={() => {}}
          />
          <XCircleIcon
            width="30"
            height="30"
            cursor="pointer"
            className="text-red-500"
            onClick={() => {}}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Sidebar
            toggle={handleClick}
            style="hidden lg:flex"
            className="mt-72"
          />
          <div className="w-full min-h-screen bg-[#F9F9FB] mt-20">
            <div className="flex items-left px-5 lg:px-60 pt-8 pb-8">
              <div className="space-x-8 lg:ml-7">
                <Link to="/dashboard/add">
                  <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ">
                    <PlusIcon className="text-white w-6 mt-1 -ml-2" /> Add New
                    Template
                  </button>
                </Link>
              </div>
            </div>
            <div className=" m-6 md:m-3 mt-10">
              <DataTable
                data={dummy}
                columns={columns}
                title="Templates"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
