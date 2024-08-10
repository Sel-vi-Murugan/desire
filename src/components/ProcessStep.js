import React from 'react';
import '../styles/ProcessSteps.css';

const steps = [
  { imageUrl: 'https://img.freepik.com/free-vector/magnifying-glass-searching-talent-illustration_23-2147984803.jpg?ga=GA1.1.1552438517.1722702017', text: 'Identify talented artisans' },
  { imageUrl: 'https://img.freepik.com/premium-vector/group-friends-working-together_961875-368044.jpg?ga=GA1.1.1552438517.1722702017&semt=ais_hybrid', text: 'Collaborate on unique designs' },
  { imageUrl: 'https://img.freepik.com/premium-vector/sign-best-quality-emblem-with-thumb-up_554888-690.jpg?ga=GA1.1.1552438517.1722702017', text: 'Create pieces of superior quality' },
  { imageUrl: 'https://img.freepik.com/free-vector/landing-page-concept_23-2147776352.jpg?ga=GA1.1.1552438517.1722702017&semt=ais_hybrid', text: 'Bring handicrafts to the discerning customer' },
  { imageUrl: 'https://img.freepik.com/free-vector/teamwork-concept-with-hands_23-2147772183.jpg?ga=GA1.1.1552438517.1722702017&semt=ais_hybrid', text: 'Help in sustaining the craft and the rural artisan communities' }
];

const ProcessSteps = () => {
  return (
    <div className="process-steps">
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.imageUrl} alt={`Step ${index + 1}`} />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
      <div className="footer-text">
        Support handmade. Help in sustaining an artisan and his craft!
      </div>
    </div>
  );
};

export default ProcessSteps;
