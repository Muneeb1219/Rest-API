import React from 'react';
import './App.css';
import UserForm from "./components/UserForm";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

//https://api.github.com/users/john


class App extends React.Component {

state ={
  demoData:[]

}

  getUser = () => {
    // e.preventDefault();
    // const user = e.target.username.value;
    axios.get(`https://api.github.com/users`).
      then((res) => {
        console.log(res.data);
this.setState({
  demoData:res.data


})
  
        
      }
      )

  }
  render() {
    this.getUser();
   let cd = this.state.demoData.map(items =>{
    return (
      
          
      <div class="card-body">
  <img class="card-img-top" src="https://avatars1.githubusercontent.com/u/1668?v=4" alt="Card image cap" />
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{items.name}</p>
    <p class="card-text">{items.company}</p>
    <p class="card-text">{items.url}</p>
    <p class="card-text">{items.blog}</p>
    <p class="card-text">{items.location}</p>
    <p class="card-text">{items.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

    );
    })

    
    return (
      <div className="App">
        <header className="App-header">
    <h1 className="App-title">HTTP Calls In React: {this.state.demoData.followers_url}</h1>  

          
        </header>

        <div class="card" style={{width: "18rem"}} >
          
{cd}
</div>

        
        
        <UserForm getUser={this.getUser} />
      </div >
    );
  }
}

export default App;
