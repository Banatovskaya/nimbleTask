import { useGetContactsQuery } from "../services/postService";

export const ContactsList = () => {

    const {
        data: contactsList=[],
        isLoading,
        error
    } = useGetContactsQuery();
    console.log(error)

    if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;
    if (error) return <h1 className="p-10">ERROR</h1>; 
    

    return(
        <h1>{contactsList}</h1>
    )
}