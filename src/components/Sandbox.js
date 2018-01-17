import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import '../css/Sandbox.css';

import SandboxHeader from 'SandboxHeader';
import SandboxSideBar from 'SandboxSideBar';
import SandboxMain from 'SandboxMain';

export default () => (
  <Router>
    <div>
      <SandboxHeader>Code. Play. React.</SandboxHeader>
      <SandboxSideBar />
      <SandboxMain />
    </div>
  </Router>
);
