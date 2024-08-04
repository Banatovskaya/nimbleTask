import React, { useState } from "react";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName && !lastName) {
      setErrors("At least one of the Name fields must be filled");
      console.log("err");
      return;
    }

    console.log("Contact added:", { firstName, lastName, email });
    setFirstName("");
    setLastName("");
    setEmail("");
    setErrors("");
  };

  return (
    <div className="createContact h-[100%] w-[100%] ">
      <h2 className="block text-[20px] font-[500] leading-[30px]">
        Create Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="firstName"
            className="block text-[12px] font-[400] leading-[20px] ml-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-[6px] block w-full border border-custom-gray-dark
                      rounded-[8px] h-[48px] px-[12px] py-[14px] my-[10px]"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-[12px] font-[400] leading-[20px] ml-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-[6px] block w-full border border-custom-gray-dark 
                      rounded-[8px] h-[48px] px-[12px] py-[14px] my-[10px]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[12px] font-[400] leading-[20px] ml-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-[6px] block w-full border border-custom-gray-dark
                      rounded-[8px] h-[48px] px-[12px] py-[14px] my-[10px]"
            required
          />
        </div>
        <button
          type="submit"
          className="block w-full border border-custom-gray-dark
                    rounded-[4px] h-[44px] px-[10px] py-[10px] mt-5 font-[500] text-[16px]"
        >
          Add Contact
        </button>
        {errors && <p className="text-red-700">{errors}</p>}
      </form>
    </div>
  );
};