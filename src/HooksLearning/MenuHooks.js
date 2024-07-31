import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuHooks = () => {
  const navigate = useNavigate();

  function handleUseState() {
    navigate('/use-state');
  }

  function handleUseEffect() {
    navigate('/use-effect');
  }

  function handleUseContext() {
    navigate('/use-context');
  }

  return (
    <div>
      <h1>HOOKS CONCEPT LEARNING</h1>
      <button className="btn btn-primary" onClick={handleUseState}>
        USE STATE
      </button>
      <button className="btn btn-primary" onClick={handleUseEffect}>
        USE EFFECT
      </button>
      <button className="btn btn-primary" onClick={handleUseContext}>
        USE CONTEXT
      </button>
    </div>
  );
};

export default MenuHooks;
