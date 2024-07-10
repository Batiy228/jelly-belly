import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import HistorySlider from "./pages/HistorySlider/HistorySlider";
import MainLayout from "./layouts/MainLayout";
import Recipes from "./pages/Recipes/Recipes";
import Combination from "./pages/Combination/Combination";
import FullBean from "./pages/FullBean/FullBean";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="history" element={<HistorySlider />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="combination" element={<Combination />} />
        <Route path="bean/:id" element={<FullBean />} />
        <Route path="combination/bean/:id" element={<FullBean />} />
      </Route>
    </Routes>
  );
};

export default App;
