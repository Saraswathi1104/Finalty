// filepath: c:\Users\USER\Desktop\finality\finality\src\pages\root.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../Router/Rouths";
import { ROUTH_PATH } from "../Router/RouthPath";
import Home from "../pages/Home";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={ROUTH_PATH.HOME} element={<Home/>}></Route> */}
        {routes.map(({ path, element, children }, index) => (
          <Route key={index} path={path} element={element}>
            {children?.map(({path,element},childIndex) => (
              <Route key={childIndex} path={path} element={element}/>
            ))} 
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

{/* Optional: fallback route */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}