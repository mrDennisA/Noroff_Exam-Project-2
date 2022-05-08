import { useRef } from "react";

// Component
import Heading from "../../components/Heading";
import ContactForm from "../../components/Form/ContactForm";

// Styles
import { Section, Line, ContactInfo } from "./index.styled";

// Hooks
import { useFetch } from "../../hooks/useFetch";

// API URL
import { CONTACT_PAGE_URL, POPULATE_URL } from "../../services/API";

const url = CONTACT_PAGE_URL + POPULATE_URL;

export default function Contact() {
  // Fetch Data
  const isComponentMounted = useRef(true);
  const { data, loading, error } = useFetch(url, isComponentMounted, []);

  if (error) {
    console.log(error);
  }

  if (!loading) {
    const pageTitle = data.data.attributes.pageTitle;
    const text = data.data.attributes.text;
    const contact = data.data.attributes.contact;

    // console.log(contact);

    return (
      <>
        <div className="container">
          <div className="wrapper">
            <Section>
              <div>
                <Heading>{pageTitle}</Heading>
                <p>{text}</p>
              </div>
              <ContactForm />
              <Line />
              <ContactInfo>
                {contact.map((item) => {
                  // console.log(item);
                  return (
                    <div key={item.id}>
                      <span>{item.title}</span>
                      <span>{item.content}</span>
                    </div>
                  );
                })}
              </ContactInfo>
            </Section>
          </div>
        </div>
      </>
    );
  }
}
