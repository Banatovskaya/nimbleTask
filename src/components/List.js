import { useGetContactsQuery } from "../services/postService";

import contactsList from "../list.json";

export const List = () => {
  // const { data: contactsList = [], isLoading, error } = useGetContactsQuery();
  console.log("vv", contactsList.resources);

  // if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;
  // if (error) return <h1 className="p-10">ERROR</h1>;

  return (
    <div
      className="contactsList bg-slate-10 border border-black
                h-[100%] w-[100%] ">
    </div>
  );
};
