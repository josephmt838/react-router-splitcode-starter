import React from "react";
import DynamicImport from "../components/DynamicImport";
import { Spinner } from "reactstrap";

const splits = {
  Four0Four: (props) => (
    <DynamicImport load={() => import("../containers/Four0Four")}>
      {(Component) =>
        Component === null ? <Spinner /> : <Component {...props} />
      }
    </DynamicImport>
  ),
  Landing: (props) => (
    <DynamicImport load={() => import("../containers/Landing")}>
      {(Component) =>
        Component === null ? <Spinner /> : <Component {...props} />
      }
    </DynamicImport>
  )
};

export default splits;
