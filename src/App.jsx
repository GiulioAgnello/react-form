import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// funzioni

export default function App() {
  const [titleList, setTitleList] = useState([]);
  const [newsTitle, setNewtitle] = useState("");

  function handelchange(e) {
    setNewtitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newListTitle = [...titleList, newsTitle];
    console.log(newListTitle);
    setTitleList(newListTitle);
  }

  return (
    <>
      <h1 className="d-flex justify-content-center p-4">FORM</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handelchange} type="text" value={newsTitle} />
        <div className="card mt-3">
          <ul>
            {titleList.map((title, i) => {
              return <li key={i}>{title}</li>;
            })}
          </ul>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary">invo</button>
        </div>
      </form>
    </>
  );
}
