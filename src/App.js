import React, { Component } from 'react';
import Clock from './Clock';
import ClickCounter from './ClickCounter';
import FuturamaList from './list/FuturamaList';
import futuramaData from './list/futurama';
import TemperatureConvert from './TemperatureConvert';
import TicTocGame from './game/TicTocGame';
import TodoList from './todo/TodoList';
import todoData from './todo/data';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <h3>
              <p>Clock Is Ticking</p>
              <span>Playing with State <em>(variable <strong>time</strong> changes 
                its value)</em>, Life-Cycle Methods <em>(
                <strong>componentDidMount</strong> is called immediately after 
                an instance of a component is being inserted into the 
                DOM; <strong>componentWillUnmount</strong> is called when a component 
                is being removed from the DOM)</em> and Stage-2 Class-Field Syntax
              </span>
            </h3>            
            <Clock time={new Date().toLocaleString()} />
          </div>
          <div className="column">
            <h3>
              <p>Time to Stop</p>
              <span>Playin with <strong>State</strong> and 
              <strong>Event Handlers</strong>. Using <strong>stage-2</strong>,&nbsp; 
                <em>the class-field syntax</em>, for binding.
              </span>
            </h3>            
            <ClickCounter />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>
              <p>If you were one of the Futurama characters, who would it be</p>
              <span>Playing with lists: UL, LI and 'key' attribute&nbsp;
                <em>(<strong>Keys</strong> help React identify which items 
                have changed, are added, or are removed. 
                Keys should be given to the elements inside the array 
                to give the elements a stable identity; <strong>don’t get passed 
                to your components</strong>)</em>. Using&nbsp;
                <strong>Array.map()</strong> function to get LI elements work.
              </span>
            </h3>
            <FuturamaList data={futuramaData}/>
          </div>
          <div className="column">
            <h3>
              <p>Convert me!</p>
              <span>
              <strong>Controlled Components</strong>, <em>an input 
                element, whose value is controlled by React
                </em> and <strong>Shared State</strong> <em>is accomplished by 
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
              <span>Passing data through <strong>props</strong>; making 
                an <strong>interactive component</strong> (<em>by adding
                click handler for 'X'-ing each input</em>); <strong>Lifting 
                state up</strong> (check if one player has won the game: 
                added a state to Board component and passed down a function
                from Board to Square)
              </span>
            </h3>
            <TicTocGame />
          </div>
          <div className="column">
            <h3>
              <p>Don't forget what TODO</p>
              <span><strong>Forms: Controlled Components</strong> <em>(with it, 
                every state mutation will have an associated handler 
                function /<strong>this.handleChange</strong>/ to modify or 
                validate user input; /<strong>this.handleSubmit</strong>/ handles 
                the submission of the form and has access to the data 
                that the user entered into the form)</em> and <strong>Styled 
                Components</strong>
              </span>
            </h3>            
            <TodoList data={todoData} />
          </div>          
        </div>
        <div className="row">
          <div className="column">
          <h3>
              <p>Contact me!</p>
              <span><strong>PropTypes</strong> <em>(<strong>React.PropTypes</strong> has 
                moved into a different package since <strong>React v15.5</strong>,
                use the prop-types library instead)</em>, Using <strong>Ref</strong> property 
                of an element (<em>an easier way to grab values from a form</em>), 
                remember that the inputs are DOM elements.
              </span>
              <ContactForm></ContactForm>
            </h3>
          </div>
          <div className="column">
          <h3>
              <p>I am Iron Man!</p>
              <span>Controled Elements</span>
            </h3>
          </div>          
        </div>        
      </div>
    );
  }
}

export default App;
