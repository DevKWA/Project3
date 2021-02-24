import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Assassins () {
  const [assassins, setAssassins] = useState(null);
  async function getAssassins() {
    try {
      const res = await axios.get('https://lit-crag-71121.herokuapp.com/assassin');
      setAssassins(res.data);
    } catch(e) {
      console.error(e, e.message);
    }
  }
  useEffect(() => {
    getAssassins();
  }, [])
  const [form, setForm] = useState(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createAssassin();
  }
  async function createAssassin() {
    try {
      const res = await axios.post('https://lit-crag-71121.herokuapp.com/assassin', form);
      setAssassins([...assassins, res.data]);
    } catch(e) {
      console.error(e, e.message);
    }
  }
  const [selectedAssassin, setSelectedAssassin] = useState(null);
  function selectAssassin(assassin) {
    setSelectedAssassin(assassin)
  }
  function handleEditChange(e) {
    const { name, value } = e.target;
    setSelectedAssassin({ ...selectedAssassin, [name]: value });
  }
  async function handleEditSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.patch('https://lit-crag-71121.herokuapp.com/assassin', selectedAssassin);
      console.log(res.data);
      getAssassins();
    } catch(e) {
      console.error(e, e.message);
    }
  }
  return(
    <div>
      { assassins && assassins.map(assassin => <Assassin assassin={ assassin } selectedAssassin={ selectAssassin } />)}
      <div>
        <h2> Recruit An Assassin </h2>
        <form
          onChange={ (e) => handleChange(e) }
          onSubmit={ (e) => handleSubmit(e) }>
          <label>
            Assassin's Name:
            <input type="text" name="name" />
          </label>
          <label>
            Assassin's Quote:
            <input type="text" name="quote" />
          </label>
          <label>
            Assassin's Birth:
            <input type="text" name="birth" />
          </label>
          <label>
            Assassin's Death:
            <input type="text" name="death" />
          </label>
          <label>
            Assassin's Country:
            <input type="text" name="country" />
          </label>
          <label>
              Recruit Assassin
          <input type="submit" value="" />
          </label>
        </form>
        { selectedAssassin && <form
          onChange={ (e) => handleEditChange(e) }
          onSubmit={ (e) => handleEditSubmit(e) }>
          <label>
            Assassin's Name:
            <input type="text" name="name" defaultValue={ selectedAssassin.name } />
          </label>
          <label>
            Assassin's Quote:
            <input type="text" name="quote" defaultValue={ selectedAssassin.quote } />
          </label>
          <label>
            Assassin's Birth:
            <input type="text" name="birth" defaultValue={ selectedAssassin.birth } />
          </label>
          <label>
            Assassin's Death:
            <input type="text" name="death" defaultValue={ selectedAssassin.death } />
          </label>
          <label>
            Assassin's Country:
            <input type="text" name="country" defaultValue={ selectedAssassin.country } />
          </label>
          <input type="submit" value="Edit Assassin's Information" />
        </form> }
      </div>
    </div>
  )
}
function Assassin({ assassin, selectAssassin}) {
  return (
    <div className="assassin" key={ assassin.id }>
      <h3> { assassin.name } { assassin.quote }</h3>
      <h6> { assassin.birth }</h6>
      <button onClick={ () => selectAssassin(assassin) }>Edit Assassin</button>
    </div>
  )
}
export default Assassins;
