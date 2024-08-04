export const ContactListItem = ({
  id,
  firstName,
  lastName,
  email,
  tags,
  avatar,
}) => {
  return (
    <div
      className="contactsList relative bg-custom-gray-light mb-4
                  h-auto w-[100%] p-4"
    >
      <div className="flex">
        <img
          src={avatar}
          alt={`${firstName} ${lastName}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex-grow text-[16px]">
            <h3 className=" ">
              {firstName} {lastName}
            </h3>
            <p className="">{email}</p>
            <div className="mt-2">
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
          </div>
        </div>
        <div className="closeIcon absolute top-2 right-3 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
