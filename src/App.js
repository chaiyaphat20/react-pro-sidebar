import  { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./layout/Sidebar";
import { Dashboard } from "@mui/icons-material";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar isSidebar={isSidebar} />
        <main className="content">
          <HeaderBar setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
              <Routes>
                <Route path="/admin" element={<Dashboard />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;