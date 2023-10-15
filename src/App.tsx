import "./App.css";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/HomePage/HomePage";
import Shop from "./components/Shop/Shop";


const App: FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
