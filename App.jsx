import Header from "./components/header";
import Hero from "./components/hero";
import Internships from "./components/internships/Internships";
import Govt from "./components/govt";
import Footer from "./components/footer";
function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Internships/>
      <Govt/>
      <Footer/>
    </div>
  );
}

export default App;
