import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.refresh()
  }, []);
	return (
		<>
			<Router>
			<Route path="/" component={Home} exact />
			</Router>
		</>
	);
}

export default App;
