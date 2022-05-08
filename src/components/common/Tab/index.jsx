import { useState } from "react";

// Styles
import { Container, Tabs, Tab, Info } from "./index.styled";

// https://react.school/ui/tabs ex.
export default function TabGroup({ data }) {
  const [tab, setTab] = useState(data[0]);
  // console.log(tab);

  return (
    <Container>
      <Tabs>
        {data.map((item) => {
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
