import React from 'react';
import '../../styles/FormNavigation.css';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSubmit,
}) => {
  return (
    <div className="form-navigation">
      <div className="navigation-buttons">
        {currentStep > 1 && (
          <button
            type="button"
            className="navigation-button previous-button"
            onClick={onPrevious}
          >
            Previous
          </button>
        )}

        {currentStep < totalSteps ? (
          <button
            type="button"
            className="navigation-button next-button"
            onClick={onNext}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="navigation-button submit-button"
            onClick={onSubmit}
          >
            Submit
          </button>
        )}
      </div>

      <div className="step-indicator">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default FormNavigation;
