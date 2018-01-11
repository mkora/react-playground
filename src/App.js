import React, { Component } from 'react';
import Clock from './Clock';
import ClickCounter from './ClickCounter';
import FuturamaList from './list/FuturamaList';
import TemperatureConvert from './TemperatureConvert';
import TicTocGame from './game/TicTocGame';
import TodoList from './todo/TodoList';
import todoData from './todo/data';
import ContactForm from './ContactForm';
import ControlledIronMan from './ControlledIronMan';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <h3>
              <p>Clock Is Ticking</p>
              <span>Playing with State <em>(var <strong>time</strong> changes 
                its value)</em>;<br />
                Life-Cycle Methods <em>(
                <strong>componentDidMount</strong> is called immediately after 
                an instance of a component is being inserted into the 
                DOM; <strong>componentWillUnmount</strong> is called when a component 
                is being removed from the DOM)</em>;<br />
                Stage-2 Class-Field Syntax (see additional 
                info <a target="_blank" rel="noopener noreferrer" 
                  href="http://2ality.com/2017/07/class-fields.html">here</a>).
              </span>
            </h3>            
            <Clock time={new Date().toLocaleString()} />
          </div>
          <div className="column">
            <h3>
              <p>Time to Stop</p>
              <span>Playing with <strong>State</strong> and <strong>Event Handlers</strong>;<br />
                Using <strong>stage-2</strong>, <em>the class-field syntax</em>, for binding.
              </span>
            </h3>            
            <ClickCounter />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>
              <p>If you were one of the Futurama characters, who would it be</p>
              <span>Playing with lists: <strong>ul</strong>,&nbsp;
                <strong>li</strong> and <strong>key</strong> attribute&nbsp;
                <em>(<strong>Keys</strong> help React identify which items 
                have changed, are added, or are removed. 
                Keys should be given to the elements inside the array 
                to give the elements a stable identity; <strong>don’t pass it 
                to your components</strong>)</em>;<br />
                Using <strong>Array.map() / Array.filter()</strong> functions to print data.
              </span>
            </h3>
            <FuturamaList />
          </div>
          <div className="column">
            <h3>
              <p>Convert me!</p>
              <span>
              <strong>Controlled Components</strong>, <em>an input 
                element, whose value is controlled by React
                </em>;<br />
                <strong>Shared State</strong> <em>is accomplished by 
                moving it up to the closest common ancestor</em> of the components
                that need it. It's called <strong>Lifting State Up</strong>.
                The parent can then pass the state back down to the 
                children via <strong>props</strong>.
              </span>
            </h3>
            <TemperatureConvert />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>
              <p>Tic Toc Game</p>
              <span>
                Playing with <strong>State</strong> and <strong>Event Handlers</strong>;
                Passing data through <strong>Props</strong>;<br />
                Making an <strong>interactive component</strong> (<em>by adding
                click handler for 'X'-ing each input</em>); <br />
                <strong>Lifting 
                state up</strong> (check if one player has won the game: 
                added a state to Board component and passed down a function
                from Board to Square).
              </span>
            </h3>
            <TicTocGame />
          </div>
          <div className="column">
            <h3>
              <p>I am Iron Man!</p>
              <span>
                React provides two standard ways to grab values 
                from <strong>form</strong> elements. 
                The first method is to implement what are called <strong>controlled
                components</strong> and the second is to use <strong>React's 
                Ref</strong> property (the general rule of thumb is 
                to <strong>avoid it</strong>).<br />                
                <strong>Controled Elements</strong> (<em>an input 
                element, whose value is controlled by React</em>).
              </span>
            </h3>
            <ControlledIronMan />           
          </div>          
        </div>
        <div className="row">
          <div className="column">
            <h3>
              <p>Don't forget what TODO</p>
              <span><strong>Forms: Controlled Components</strong> <em>(with it, 
                every state mutation will have an associated handler 
                function /<strong>this.handleChange</strong>/ to modify or 
                validate user input; <br />
                /<strong>this.handleSubmit</strong>/ handles 
                the submission of the form and has access to the data 
                that the user entered into the form)</em>; <br />
                <strong>Styled Components</strong>: the simpliest way (./Todo.css)
              </span>
            </h3>            
            <TodoList data={todoData} />
          </div>          
          <div className="column">
            <h3>
              <p>Contact me!</p>
              <span>
                React provides two standard ways to grab values 
                from <strong>form</strong> elements. 
                The first method is to implement what are called <strong>controlled
                components</strong> and the second is to use <strong>React's 
                Ref</strong> property;<br />
                Using <strong>Ref</strong> property of an element 
                (<em>an easier way to grab values from a form</em>), 
                remember that the inputs are DOM elements. <strong>DON'T use them 
                on production</strong> (see babel-plugin-transform-react-remove-prop-types);<br />
                Using <strong>Ref</strong> to get a reference to specific component 
                (see <em>ContactSelect</em> component). There are three occasions 
                where you can use it (bc you have no other choice):<br />
                - Managing focus, text selection, or media playback;<br />
                - Integrating with third-party DOM libraries;<br />
                - Triggering imperative animations;<br />      
                <strong>PropTypes</strong> <em>(<strong>React.PropTypes</strong> has 
                moved into a different package since <strong>React v15.5</strong>,
                use the prop-types library instead), see ContactThankYou</em> component;                
              </span>
              <ContactForm></ContactForm>
            </h3>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
