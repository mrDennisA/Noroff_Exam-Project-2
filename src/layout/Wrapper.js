import { forwardRef } from "react";

const Wrapper = forwardRef((props, ref) => (
  <div className="bgC50">
    <div className="container">
      <div className="wrapper" ref={ref}>
        {props.children}
      </div>
    </div>
  </div>
));

export default Wrapper;
