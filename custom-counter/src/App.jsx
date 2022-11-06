import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Error404Page from "./components/Error404Page";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import UseReducerCounter from "./hooks/UseReducerCounter";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/useReducerCounter" element={<UseReducerCounter />} />
        <Route path="/errorBoundary" element={<ErrorBoundary />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    
    </>
  );
}

export default App;
