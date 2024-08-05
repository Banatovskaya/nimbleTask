import { useGetContactsQuery } from "../services/postService";
import { ContactListItem } from "./contactListItem";

export const List = () => {
  const { data: list = {}, isLoading, error } = useGetContactsQuery();
  const contactsList = list.resources;

  if (isLoading) return <div className="p-10 text-xs">...LOADING</div>;
  if (error) return <h1 className="p-10">ERROR</h1>;
  
  return (
    <div
      className="contactsList bg-slate-10 
                h-[100%] w-[100%] "
    >
      {contactsList.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          firstName={contact.fields["first name"]?.[0]?.value || ''}
          lastName={contact.fields["last name"]?.[0]?.value || ''}
          email={contact.fields.email[0].value}
          tags={contact.tags}
          avatar={contact.avatar_url}
        />
      ))}
    </div>
  );
};
