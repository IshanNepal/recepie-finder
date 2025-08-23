import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";

const App = () => {
  return (
    <>
    <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
        style: {
          background: "#ffffff", // White
          color: "#fffff",      // Black
          borderRadius: "8px",
          padding: "8px 16px",
          },
        }}
      />
        <Routes>
            <Route element={<Layout />} >
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App;