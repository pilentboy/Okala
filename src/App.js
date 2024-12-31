import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Purchases from "./Pages/Purchese";
import Shop from "./Pages/Shop";
import Auth from "./Pages/Auth";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
