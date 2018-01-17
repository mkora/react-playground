import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';

import todoData from '../mock/todo-data';
import futuramaData from '../mock/futurama-data';
import Clock from 'Clock';
import ClickCounter from 'ClickCounter';
import FilteredList from 'FilteredList';
import TemperatureConvert from 'TemperatureConvert';
import TicTocGame from 'TicTocGame';
import TodoList from 'TodoList';
import ContactForm from 'ContactForm';
import ControlledIronMan from 'ControlledIronMan';
import ExplanatoryText from 'ExplanatoryText';

const routes = [
  { 
    key: 'home',
    path: '/',
    exact: true,
    component: () => (
      <h3>
        Hello, Nomad. Welcome to my frontier!
      </h3>
    ),
  },
  {
    key: 'clock',
    path: '/clock',
    component: () => (
      <div>
        <ExplanatoryText title="Clock Is Ticking">
          Playing with State <em>(var <strong>time</strong> changes 
          its value)</em>;<br />
          Life-Cycle Methods <em>(
          <strong>componentDidMount</strong> is called immediately after 
          an instance of a component is being inserted into the 
          DOM; <strong>componentWillUnmount</strong> is called when a component 
          is being removed from the DOM)</em>;<br />
          Stage-2 Class-Field Syntax (see additional 
          info <a target="_blank" rel="noopener noreferrer" 
            href="http://2ality.com/2017/07/class-fields.html">here</a>).
        </ExplanatoryText>
        <Clock time={new Date().toLocaleString()} />
      </div>
    ),
  },
  {
    key: 'counter',
    path: '/counter',
    component: () => (
      <div>
        <ExplanatoryText title="Time to Stop">
          Playing with <strong>State</strong> and <strong>Event Handlers</strong>;<br />
          Using <strong>stage-2</strong>, <em>the class-field syntax</em>, for binding.
        </ExplanatoryText>
        <ClickCounter limit={20} />        
      </div>
    ),
  },
  {
    key: 'futurama',
    path: '/futurama',
    component: () => (
      <div>
        <ExplanatoryText title="If you were one of the Futurama characters, who would it be">
          Playing with lists: <strong>ul</strong>,&nbsp;
          <strong>li</strong> and <strong>key</strong> attribute&nbsp;
          <em>(<strong>Keys</strong> help React identify which items 
          have changed, are added, or are removed. 
          Keys should be given to the elements inside the array 
          to give the elements a stable identity; <strong>don’t pass it 
          to your components</strong>)</em>;<br />
          Using <strong>Array.map() / Array.filter()</strong> functions to print data.
        </ExplanatoryText>
        <FilteredList data={futuramaData} />        
        </div>
    ),
  },
  {
    key: 'temperature',
    path: '/temperature',
    component: () => (
      <div>
        <ExplanatoryText title="Convert me!">
          <strong>Controlled Components</strong>, <em>an input 
          element, whose value is controlled by React
          </em>;<br />
          <strong>Shared State</strong> <em>is accomplished by 
          moving it up to the closest common ancestor</em> of the components
          that need it. It's called <strong>Lifting State Up</strong>.
          The parent can then pass the state back down to the 
          children via <strong>props</strong>.
        </ExplanatoryText>
        <TemperatureConvert />        
      </div>
    ),
  },
  {
    key: 'tic-toc',
    path: '/tic-toc',
    component: () => (
      <div>
        <ExplanatoryText title="Tic Toc Game">
          Playing with <strong>State</strong> and <strong>Event Handlers</strong>;
          Passing data through <strong>Props</strong>;<br />
          Making an <strong>interactive component</strong> (<em>by adding
          click handler for 'X'-ing each input</em>); <br />
          <strong>Lifting 
          state up</strong> (check if one player has won the game: 
          added a state to Board component and passed down a function
          from Board to Square).
        </ExplanatoryText>
        <TicTocGame />        
      </div>
    ),
  },
  {
    key: 'iron-man',
    path: '/iron-man',
    component: () => (
      <div>
        <ExplanatoryText title="I am Iron Man!">
          React provides two standard ways to grab values 
          from <strong>form</strong> elements. 
          The first method is to implement what are called <strong>controlled
          components</strong> and the second is to use <strong>React's 
          Ref</strong> property (the general rule of thumb is 
          to <strong>avoid it</strong>).<br />                
          <strong>Controled Elements</strong> (<em>an input 
          element, whose value is controlled by React</em>).
        </ExplanatoryText>
        <ControlledIronMan />        
      </div>
    ),
  },
  {
    key: 'todo',
    path: '/todo',
    component: () => (
      <div>
        <ExplanatoryText title="Don't forget what TODO">
          <strong>Forms: Controlled Components</strong> <em>(with it, 
          every state mutation will have an associated handler 
          function /<strong>this.handleChange</strong>/ to modify or 
          validate user input; <br />
          /<strong>this.handleSubmit</strong>/ handles 
          the submission of the form and has access to the data 
          that the user entered into the form)</em>; <br />
          <strong>Styled Components</strong>: the simpliest way (./Todo.css).
        </ExplanatoryText>         
        <TodoList data={todoData} />        
      </div>
    ),
  },
  {
    key: 'contact',
    path: '/contact',
    component: () => (
      <div>
        <ExplanatoryText title="Contact me!">
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
          use the prop-types library instead), see ContactThankYou</em> component.
        </ExplanatoryText>
        <ContactForm />        
      </div>
    ),
  }, 
];

export default (props) => (
  <div className="main">
    <Switch>
      {routes.map((route) => 
        <Route {...route} />
      )}
    </Switch>
  </div>
);
