import { useGetContactDataQuery } from "../services/postService";
import React, { useState } from "react";
const firstName = "gffgfg",
  lastName = "khjhkj",
  email = "k.jj@hghj",
  tags = [
    {
        id: "5df60a4c5ac6bf48f1b8cd30/523",
        tag: "523"
    },
    {
        id: "5df60a4c5ac6bf48f1b8cd30/322",
        tag: "322"
    }
    
],
  avatar = "";

export const ContactPage = (id) => {
  const [newTags, setNewTags] = useState("");

  // const {
  //     data: contactData=[],
  //     isLoading,
  //     error
  // } = useGetContactDataQuery(id);
  // console.log(error)

  // if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;
  // if (error) return <h1 className="p-10">ERROR</h1>;

  return (
    <div className="contactPage flex justify-center items-center  ">
      <div className="flex flex-col justify-between mt-[32px] h-[341px] w-[431px] ">
        <div className="flex flex-row text-[16px] mb-5 ">
          <img
            src={avatar}
            alt={`${firstName} ${lastName}`}
            className="w-[83px] h-[83px] rounded-full mr-4"
          />
          <div className="flex flex-col mt-4">
            <h3 className=" text-[16px] font-[500]">
              {firstName} {lastName}
            </h3>
            <p className="text-[16px] font-[500]">{email}</p>
          </div>
        
        </div>
        <div className="text-[16px] font-[500]">Tags</div>
        <div className="tags">
            {tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-block bg-custom-gray-dark min-w-[54px] h-[20px] m-[6px] font-[500] 
                                text-[13px] py-1 px-3 leading-[13.5px] rounded-[4px] mr-2 text-center"
                    >
                      {tag.tag}
                    </span>
            ))}
          </div>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setNewTags(e.target.value)}
          className="mt-[6px] block w-full border border-custom-gray-dark
                      rounded-[4px] h-[48px] px-[12px] py-[14px] text-[12px] "
        />
        <button
          type="submit"
          className="block w-full border border-custom-gray-dark
                    rounded-[4px] h-[44px] px-[10px] py-[10px] mt-5 font-[500] text-[16px]"
        >
          Add Tag
        </button>
      </div>
    </div>
  );
};
