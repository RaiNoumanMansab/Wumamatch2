import { useState } from 'react';

export function useFormStep(initialStep = 1, totalSteps = 2) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === totalSteps,
  };
}
