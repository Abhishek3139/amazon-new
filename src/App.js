import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants";
import { PageWrapper } from "./PageWrapper";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          {ROUTES.map(({ routeName, Component }) => {
            return (
              <Route
                key={routeName}
                path={routeName}
                element={<Component />}
              ></Route>
            );
          })}
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
