import { Header } from "./components/header/Header";
import "./App.css";
import { Total } from "./components/total/Total";
import { Buttons } from "./components/buttons/Buttons";
import { Filter } from "./components/filter/Filter";
import { Table } from "./components/table/Table";
import { getInfoByName } from "./selectors/getInfoByName";
import {useMemo, useState } from "react";

function App() {

  const [dataName, setDataName] = useState('septiembre');
  const data = useMemo( () => getInfoByName( dataName ), [ dataName ] );
  const {name,ventas} = data;
  return (
    <div className="App">
      <Header/>
      <div className="container mt-5">
        <div className="columns">
          <div className="column is-4">
            <Total name={name} ventas={ventas}/>
          </div>
          <div className="column is-8">
            <Buttons setDataName={setDataName}/>
            <div className="btn-end">
              <Filter />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Table name={name} ventas={ventas}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
