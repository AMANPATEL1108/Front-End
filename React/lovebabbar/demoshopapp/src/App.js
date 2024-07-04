import logo from "./logo.svg";
import "./App.css";
import Item from "./components/item";
import itemdate from "./components/itemdate";
import Card from "./components/Card";
function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "202",
      itemyear: "1568",
      itemmonth: "12",
    },
    {
      itemName: "add",
      itemDate: "2002",
      itemmonth: "12",
      itemyear: "15d68",
    },
    {
      itemName: "df",
      itemDate: "456",
      itemyear: "dfg",
      itemmonth: "12",
    },
  ];
  return (
    <div>
      <Item name={response[0].itemDate}></Item>
      <itemDate
        day={response[0].itemDate}
        month={response[0].itemmonth}
        year={response[0].itemyear}
      ></itemDate>

      <Item name={response[1].itemDate}></Item>
      <itemDate
        day={response[1].itemDate}
        month={response[1].itemmonth}
        year={response[1].itemyear}
      ></itemDate>

      <Item name={response[2].itemDate}></Item>
      <itemDate
        day={response[2].itemDate}
        month={response[2].itemmonth}
        year={response[2].itemyear}
      ></itemDate>

      <div className="App">hello</div>
    </div>
  );
}

export default App;
