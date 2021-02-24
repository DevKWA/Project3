import React from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';


import img from './Altair_Ibn.webp';
import img2 from './Ezio_Auditore.webp';
import img3 from './Connor-Kenway.webp';
import img4 from './Aveline_Grandpré.webp';
import img5 from './Edward_Kenway.webp';
import img6 from './Adewale.webp';
import img7 from './Arno_Dorian.webp';
import img8 from './Shao_Jun.webp';
import img9 from './Evie_Frie.webp';
import img10 from './Jacob_Frye.webp';
import img11 from './Bayek_Siwa.webp';
import img12 from './Amunet.webp';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const AC_URL = "https://lit-crag-71121.herokuapp.com/assassin"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {} }
    render(){
      return(
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/" class="TG">The Guild</Link>
              </li>
              <br>
              </br>
              <li>
                <Link to="/Assassins-Creed-Characters" class= "AI">Assassin's Info</Link>
              </li>
            </ul>
            <Switch>
              <Route path ="/Assassins-Creed-Characters">
                <Assassins />
              </Route>
              <Route path ="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
  }

  class Home extends React.Component{
    render(){
      return(
        <div>
        <h1> the Assassin's Guild </h1>
        <h2> 
          <div>
          
             <img src = {img} class="img" height= "375px" alt="assassin"></img>
              
              <img src = {img2} class="img2" height ="375px" alt= "assassin2"></img>
              
              <img src = {img3} class="img3" height ="375px" alt= "assassin3"></img> 
              
              <img src = {img4} class="img4" height ="375px" alt= "assassin4"></img> 
              
              <img src = {img5} class="img5" height ="375px" alt= "assassin5"></img> 
              
              <img src = {img6} class="img6"height ="375px" alt= "assassin6"></img> 
              
              <img src = {img7} class="img7" height ="375px" alt= "assassin7"></img> 
              
              <img src = {img8} class="img8" height ="375px" alt= "assassin8"></img> 
              
              <img src = {img9} class="img9" height ="375px" alt= "assassin9"></img> 

              <img src = {img10} class="img10" height ="375px" alt= "assassin10"></img> 
              
              <img src = {img11} class="img11" height ="375px" alt= "assassin11"></img> 
              
              <img src = {img12} class="img12" height ="375px" alt= "assassin12"></img> 
              
              
          
        </div>
               </h2>
        </div>
        
      )
    }
  }

  class Assassins extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.selectAssassin = this.selectAssassin.bind(this);
      this.editAssassin = this.editAssassin.bind(this);
      this.submitEditedAssassin = this.submitEditedAssassin.bind(this);
    }
    async getAssassins() {
      try {
        const res = await axios.get(AC_URL);
        this.setState({ assassins: res.data });
      } catch(e) {
        console.error(e);
        
      }
    }
  
    componentDidMount() {
      this.getAssassins();
    }
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value })
    }
  
    async handleSubmit(e) {
      e.preventDefault();
      const {assassinName, quote, birth, death, country} = this.state;
      const assassin = {assassinName, quote, birth, death, country};
  
      try {
      const res = await axios.post(AC_URL, assassin);
      console.log(res.data);
  
      const updateRes = await axios.get(AC_URL);
      this.setState({assassins: updateRes.data});
    } catch(e){
      console.error(e.message);
    }
  }
  
    async handleDelete (id)  {
      console.log(AC_URL + id);
      try {
        const res = await axios.delete(AC_URL + id); // target assassin id
        console.log(res.data);
  
        const updateRes = await axios.get(AC_URL);
        this.setState({ assassins: updateRes.data });
      } catch(e) {
        console.error(e.message)
      }
    }
  
  
  selectAssassin(selectedAssassin){
    this.setState({ selectedAssassin});
  }
  
  editAssassin(e){
    const {name, value } = e.target;
    this.setState({...this.state, selectedAssassin:{
  ...this.state.selectedAssassin,[name]: value}})
  }
  
  async submitEditedAssassin(e){
    e.preventDefault();
    try{
      const editedAssassin = this.state.selectedAssassin;
      console.log(editedAssassin)
      const focusAssassin = AC_URL + editedAssassin.id
      //eslint-disable-next-line
      const res = await axios.patch(focusAssassin, editedAssassin);
      const resRefresh = await axios.get(AC_URL);
      this.setState({ assassins: resRefresh.data});
    } catch(e){
      console.log(e);
    }
  }
  
    render() {
      return (
        <div className="Assassins-Creed-Characters">
          <ul>
            {/* render info */}
            {
              this.state.assassins && this.state.assassins.map(assassin => <li key = {assassin.id}> <br></br> 
              
              <ul><button className="deleteB" onClick={ () => this.handleDelete(assassin.id)}>Delete Assassin</button> <br></br><br></br>
              <button className ="editB" onClick={ () => this.selectAssassin(assassin)}>Edit Assassin</button> </ul> <br></br> <br></br> 
              
              <div className ="assassinNames"> {assassin.assassinName} <br></br> <br></br> </div> 
              <div className= "assassinQuotes"> {assassin.quote} <br></br><br></br> </div>
              <div className="assassinBirths">{assassin.birth} <br></br> <br></br> </div> 
              <div className="assassinDeaths">{assassin.death} <br></br> <br></br> </div> 
              <div className="assassinCountries"> {assassin.country} <br></br><br></br> </div>
        
              </li>    
                )
            } 
    
          </ul>
          <form className="new-assassin-form"
            onChange={ this.handleChange }
            onSubmit={ this.handleSubmit }>
            <label class="labelName">
              Assassin's Name:
              <input type="text" name="assassinName" />
            </label>
            <label class="labelQuote">
              Assassin's Quote:
              <input type="text" name="quote" />
            </label>
            <label class="labelBirth">
              Assassin's Birth:
              <input type="text" name="birth" />
            </label>
            <label class="labelDeath">
              Assassin's Death:
              <input type="text" name="death" />
            </label>
            <label class ='labelCountry'>
               Assassin's Country:
              <input type="text" name="country" />
            </label>
                    </form>  
                      <hr></hr>
  {
                  this.state.selectedAssassin && <form className ="assassin-edit-form"
                  onChange = { this.editAssassin }
                  onSubmit = { this.submitEditedAssassin}>
  
                <label> <br></br> <div class ="editFormTitle">Edit Form </div> <br></br> <br></br>
                                             
                Assassin Names:
                <input type="text" name="assassinName" defaultValue={ this.state.selectedAssassin.assassinName } />
              </label>
              <label>
                Assassin's Quote:
                <input type="text" name="quote" defaultValue={ this.state.selectedAssassin.quote } />
              </label>
              <label>
                Assassin's Birth:
                <input type="text" name="birth" defaultValue={ this.state.selectedAssassin.birth } />
              </label>
              <label>
                Assassin's Death:
                <input type="text" name="death" defaultValue={ this.state.selectedAssassin.death } />
              </label>
              <label>
                Assassin's Country:
                <input type="text" name="country" defaultValue={ this.state.selectedAssassin.country } />
              </label>
              <label><input type="submit" class="submitB" /></label>
          </form>
    }
        </div>
      )
    }
  }
 


 
export default App;
