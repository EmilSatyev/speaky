import { Route, Routes } from "react-router-dom";
import Layout from "./app/components/Layout/Layout";
import Home from "./app/pages/Home";
import ChildOffline from "./app/pages/ChildOffline";
import ChildOnline from "./app/pages/ChildOnline";
import PublicOffer from "./app/pages/PublicOffer";
import Adult from "./app/pages/Adult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="child_offline" element={<ChildOffline />} />
        <Route path="child_online" element={<ChildOnline />} />
        <Route path="public_offer" element={<PublicOffer />} />
        <Route path="adult" element={<Adult />} />
        <Route path="404" element={<h1>Такой страницы нет 404</h1>} />
        <Route path="*" element={<h1>Такой страницы нет</h1>} />
      </Route>
    </Routes>
    /*<div className="App">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Languages />
        <WhyWe />
        <Booking />
        <For />
        <Smart />
        <Example />
        <LearnPath />
        <Booking />
        <TimeLineBlock/>
      </main>
      <Footer />
    </div>*/
  );
}

export default App;
