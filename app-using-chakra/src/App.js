
import './App.css';
import { InputForm } from './InputForm';
import { useState } from 'react';

function App() {
  const [textColorChange, setTextColorChange] = useState('Welcome to our Page')
  const countryNames = ["Argentina", "Belgium", "Canada", "Djouti", "Ethiopia"]
  const [searchFilter, setSearchFilter] = useState(countryNames)

  const handleColorChange = (e) => {
    document.getElementById("myDiv").style.color = "green"
    setTextColorChange(e.target.value)
  }
  if (textColorChange.length === 0) {
    setTextColorChange("Type anything")
  }

  const handleSearchFilter = (e) => {
    const typedValue = e.target.value
    const filteredValues = countryNames.filter((item) => { return item.toLowerCase().indexOf(typedValue.toLowerCase()) !== -1 });
    setSearchFilter(filteredValues);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="myDiv" style={{ color: 'red' }}>{textColorChange}</div>
        <InputForm colorChange={handleColorChange} />


        Search Items:<input type="text" style={{ margin: "20px" }} onChange={handleSearchFilter}></input>
        <div id="countryStyle">  {searchFilter && searchFilter.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )}</div>


      </header>
    </div>
  );
}

export default App;

