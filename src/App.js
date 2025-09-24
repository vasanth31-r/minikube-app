import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React App Deployed on Minikube</h1>
        <p>Successfully deployed using Jenkins Pipeline</p>
        
        <div className="info-card">
          <h2>Deployment Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>Containerized with:</strong> Docker
            </div>
            <div className="info-item">
              <strong>Orchestrated with:</strong> Kubernetes
            </div>
            <div className="info-item">
              <strong>CI/CD:</strong> Jenkins Pipeline
            </div>
            <div className="info-item">
              <strong>Code Quality:</strong> SonarQube
            </div>
          </div>
        </div>

        <div className="status-card">
          <h3>✅ Application Status: Running</h3>
          <p>Build Number: {process.env.REACT_APP_BUILD_NUMBER || 'Local'}</p>
          <p>Environment: {process.env.NODE_ENV || 'development'}</p>
        </div>

        <button 
          className="action-button"
          onClick={() => alert('🎉 Congratulations! Your React app is running on Minikube!')}
        >
          Click to Test
        </button>
      </header>
    </div>
  );
}

export default App;