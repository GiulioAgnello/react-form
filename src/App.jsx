import { useState } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// funzioni

export default function App() {
  const [titleList, setTitleList] = useState([]);
  const [newsTitle, setNewtitle] = useState("");
  // const [clicke, setClicked] = useState(newListTitle);
  function handelchange(e) {
    setNewtitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newListTitle = [...titleList, newsTitle];
    console.log(newListTitle);
    setTitleList(newListTitle);
  }
  function removeTask(i) {
    const updateTitleList = titleList.filter((title, index) => {
      return index !== i;
    });
    setTitleList(updateTitleList);
  }

  return (
    <>
      <h1 className="d-flex justify-content-center p-4">FORM</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handelchange} type="text" value={newsTitle} />
        <div className="card mt-3">
          <ul>
            {titleList.map((title, i) => {
              return (
                title && (
                  <>
                    <li key={i}>
                      <span>{title}</span>
                      <button
                        key={i}
                        onClick={() => removeTask(i)}
                        className="btn btn-danger p-1 m-4 "
                      >
                        Elimina
                      </button>
                    </li>
                  </>
                )
              );
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
