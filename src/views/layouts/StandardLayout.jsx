import React from "react";

import Header from "../../components/Header/Header";

import { Main } from "./StandardLayout.style";

const StandardLayout = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default StandardLayout;
