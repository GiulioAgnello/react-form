import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
// funzioni
const newsTitle = "titolo primo";
const handelchange = (e) => {
  e.preventDefault();
  console.log(e);
};

export default function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center p-4">FORM</h1>
      <form>
        <input onChange={handelchange} type="text" value={newsTitle} />
        <div className="card mt-3">
          <ul>
            <li>testo</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary">invo</button>
        </div>
      </form>
    </>
  );
}
