import { useState } from "react";

// Styles
import { Container, Tabs, Tab, Info } from "./index.styled";

// https://react.school/ui/tabs ex.
export default function TabGroup(props) {
  const [tab, setTab] = useState(props.data[0]);
  // console.log(tab);

  return (
    <Container>
      <Tabs>
        {props.data.map((item) => {
          const { id, title } = item;

          return (
            <Tab key={id} active={tab.id === id} onClick={() => setTab(item)}>
              {title}
            </Tab>
          );
        })}
      </Tabs>
      <Info>{tab.content}</Info>
    </Container>
  );
}
