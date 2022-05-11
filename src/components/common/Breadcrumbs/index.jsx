import React from "react";
import { useLocation, Link } from "react-router-dom";

import { Container } from "./index.styled";
import Wrapper from "../../../layout/Wrapper";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length > 0) {
    return (
      <Wrapper>
        <Container>
          <Link to="/">HOME</Link>
          {pathnames.map((item, i) => {
            const title = item.toUpperCase().replace(/-/g, " ");

            return (
              <React.Fragment key={i}>
                <span>/</span>
                {i === pathnames.length - 1 ? (
                  <div className="endCrumb">{title}</div>
                ) : (
                  <Link key={i} to={"/" + item}>
                    {title}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </Container>
      </Wrapper>
    );
  }
}
