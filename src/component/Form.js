import React,{ Component } from 'react';

class Form extends Component {
    render(){
        return(
           <form onSubmit={this.props.getWeather}>
               
               <input type="text" name="city" placeholder="City...."/>
               <input type="text" name="country" placeholder="Country...."/>
<br/>
<br/>

         <p>      <button variant="outline-info" size="sm">Get Weather </button> </p>
           </form>
        );
    }
};
export default Form;