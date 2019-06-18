import React from "react";
import DynamicImport from "../components/DynamicImport";
import { Spinner } from "reactstrap";

const WrappedSpinner = (Spin) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    <Spin
      style={{ width: "200px", height: "200px" }}
      type="grow"
      color="primary"
    />
  </div>
);

const splits = {
  Four0Four: (props) => (
    <DynamicImport load={() => import("../containers/Four0Four")}>
      {(Component) =>
        Component === null ? WrappedSpinner(Spinner) : <Component {...props} />
      }
    </DynamicImport>
  ),
  Landing: (props) => (
    <DynamicImport load={() => import("../containers/Landing")}>
      {(Component) =>
        Component === null ? WrappedSpinner(Spinner) : <Component {...props} />
      }
    </DynamicImport>
  )
};

export default splits;
