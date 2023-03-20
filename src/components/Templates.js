/* eslint-disable consistent-return */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { loginFields } from "../constants/formFields";
import { login } from "../redux/actions/auth.action";
import Alert from "./Auth/Alert";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid";
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
    return dispatch(login({ email, password }));
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
    { Header: "First Name", accessor: "firstname" },
    { Header: "Last Name", accessor: "lastname" },
    { Header: "Email", accessor: "email" },
    { Header: "Phone Number", accessor: "phoneNumber" },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <div className=" items-center flex">
          <PencilAltIcon
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
