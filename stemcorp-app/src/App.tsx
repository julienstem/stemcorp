import "./App.css";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AppRoutes } from "./AppRoute.tsx";

function App() {
  return (
    <main>
      <Header />
      <AppRoutes />
      <Footer />
    </main>
  );
}

export default App;
