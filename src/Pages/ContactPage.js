import { useGetContactDataQuery } from "../services/postService";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePutTagsMutation } from "../services/postService";

const firstName = "гриша",
  lastName = "петров",
  email = "dffddf@gmail.com",
  tags = [
    {
      id: "5df60a4c5ac6bf48f1b8cd30/523",
      tag: "523",
    },
    {
      id: "5df60a4c5ac6bf48f1b8cd30/322",
      tag: "322",
    },
  ],
  avatar =
    "https://live.devnimble.com/api/avatars/5df60a4c5ac6bf48f1b8cd30/66aaaecfadb7be6025442c9f/person/1";

export const ContactPage = () => {
  const id = useParams();
  let newTags = [];
  const [newTagsString, setNewTagsString] = useState("");
  const [sendNewTags, { isError, isLoading, isSuccess }] = usePutTagsMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTagsString.length){
        newTags = newTagsString.split(/[\s,]+/);
        // sendNewTags({newTags});
        // if(isSuccess){ setNewTagsString("");}
        // if (isError) {alert('server err')}
    }
        console.log("tag added:", {'tags':newTags});
  };

    // const {
    //     data: contactData=[],
    //     isLoading: loadingData,
    //     error
    // } = useGetContactDataQuery(id);
    // console.log(error)

    // if (loadingData) return <div className="p-10 text-xs">...LOADING</div>;
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="tags"
            value={newTagsString}
            onChange={(e) => setNewTagsString(e.target.value)}
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
        </form>
      </div>
    </div>
  );
};
