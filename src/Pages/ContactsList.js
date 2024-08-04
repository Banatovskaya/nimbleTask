import { List } from "../components/List";
import { ContactForm } from "../components/ContactForm";


export const ContactsList = () => {
  return (
    <div
      className="contactsList-wrap container min-w-[400px]
                    flex justify-around flex-col
                    md:flex-row md:pt-[16px] px-[14px]
                    lg:pt-[36px]
                    xl:px-[174px] xl:justify-between
                    "
    >
      <div
        className="createContact-Wrap
                      h-[360px] 
                       md:w-[30%] 
                      lg:w-[280px]  "
      >
        <ContactForm></ContactForm>
      </div>
      <div
        className="contactsList-Wrap
                      h-[386px] overflow-y-auto scroll-hide
                      md:w-[50%] 
                      lg:w-[558px] "
      >
        <List></List>
      </div>
      
    </div>
  );
};
