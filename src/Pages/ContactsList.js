import { List } from "../components/List";
import { ContactForm } from "../components/ContactForm";


export const ContactsList = () => {
  return (
    <div           //width 400px-container padding 12+12
      className="contactsList-wrap container min-w-[376px] 
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
                      h-[386px] scroll-hide
                      md:w-[50%] md:overflow-y-auto 
                      lg:w-[558px] "
      >
        <List></List>
      </div>
      
    </div>
  );
};
