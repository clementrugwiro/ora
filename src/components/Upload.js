/* eslint-disable consistent-return */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { loginFields } from "../constants/formFields";
import { login } from "../redux/actions/auth.action";
import Input from "./Auth/Input";
import Alert from "./Auth/Alert";
import FormAction from "./Auth/FormAction";
import Sidebar from "./Sidebar";

const fields = loginFields;
const fieldsState = {};

fields.forEach((field) => {
  fieldsState[field.id] = "";
});

const Upload = () => {
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
            <div className="bg-white mt-24 ml-72 max-w-xl min-h-fit w-full  space-y-4 border p-6 py-6 rounded shadow-lg">
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                  {/* {error && (
              <Alert message={error.payload} heading="Error" variant="error" />
            )} */}

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper align-middle">
                        <label className="-mt-4">Template with content</label>{" "}
                        <br />
                        <button
                          style={
                            isDragging ? { color: "text-red-500" } : undefined
                          }
                          onClick={onImageUpload}
                          className="group mr-2 relative w-auto justify-center py-2 px-2 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                        {/* <button
                    onClick={onImageRemoveAll}
                    className="group relative w-1/3  justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 -mt-8"
                  >
                    Remove all images
                  </button> */}
                        <div className="flex">
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item mt-2">
                              <img
                                src={image["data_url"]}
                                alt=""
                                width="100"
                                className="shadow-md rounded w-5/12 md:w-2/3"
                              />
                              <div className="image-item__btn-wrapper">
                                <button
                                  className="group mt-2 mr-1 relative  justify-center p-1 border border-transparent text-sm font-normal rounded-md text-white bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Update
                                </button>
                                <button onClick={() => onImageRemove(index)}>
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                  <ImageUploading
                    multiple
                    value={images2}
                    onChange={onChange2}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <label className="-mt-4">Empty template</label> <br />
                        <button
                          style={
                            isDragging ? { color: "text-red-500" } : undefined
                          }
                          onClick={onImageUpload}
                          className="group mr-2 relative w-auto justify-center py-2 px-2 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                        {/* <button
                    onClick={onImageRemoveAll}
                    className="group relative w-1/3  justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#f8d90f] hover:bg-[#dfc30d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 -mt-8"
                  >
                    Remove all images
                  </button> */}
                        <div className="flex">
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item mt-2">
                              <img
                                src={image["data_url"]}
                                alt=""
                                width="100"
                                className="shadow-md rounded w-5/12 md:w-2/3"
                              />
                              <div className="image-item__btn-wrapper">
                                <button
                                  className="group mt-2 mr-1 relative  justify-center p-1 border border-transparent text-sm font-normal rounded-md text-white bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Update
                                </button>
                                <button onClick={() => onImageRemove(index)}>
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </div>
                <hr className="border shadow" />
                <FormAction
                  handleSubmit={handleSubmit}
                  text="Upload"
                  customClass="border py-2 px-1  border-yellow-500 hover:border-transparent shadow text-lg font-medium rounded-md text-yellow-500 bg-white hover:bg-[#dfc30d] hover:text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
