import Counter from "./components/Counter";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Jane Doe" age="28" bio="Loves traveling and food." />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;