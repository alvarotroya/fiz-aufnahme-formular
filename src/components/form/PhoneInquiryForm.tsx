import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { phoneInquiryValidationSchema } from '../../utils/validationSchema';
import PersonalInformationSection from './sections/PersonalInformationSection';
import ResidenceStatusSection from './sections/ResidenceStatusSection';
import LanguageSection from './sections/LanguageSection';
import SupportNeedsSection from './sections/SupportNeedsSection';
import AsylumProcedureSection from './sections/AsylumProcedureSection';
import MaritalStatusSection from './sections/MaritalStatusSection';
import ChildrenInformationSection from './sections/ChildrenInformationSection';
import EmploymentSection from './sections/EmploymentSection';
import FormNavigation from './FormNavigation';

interface PhoneInquiryFormProps {
  onSubmit: (data: any) => void;
}

const defaultValues = {
  lastName: '',
  firstName: '',
  aliasName: '',
  placeOfResidence: '',
  phoneNumber: '',
  timeInGermany: '',
  nationality: '',
  residenceStatus: '',
  visaType: '',
  languages: '',
  preferredLanguage: '',
  otherLanguage: '',
  specificSupportNeeds: '',
  acuteThreatSituation: false,
  supportTypes: [] as string[],
  otherSupportType: '',
  asylumProcedureStatus: '',
  asylumProcedureDetails: '',
  maritalStatus: '',
  isMarried: false,
  marriedSince: '',
  partnerResidenceStatus: '',
  hasChildrenInGermany: false,
  numberOfChildren: 0,
  childrenAges: '',
  childrenResidenceStatus: '',
  isWorking: false,
  workingHours: '',
};

const PhoneInquiryForm: React.FC<PhoneInquiryFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const formSections = [
    { component: PersonalInformationSection },
    { component: LanguageSection },
    { component: ResidenceStatusSection },
    { component: AsylumProcedureSection },
    { component: EmploymentSection },
    { component: MaritalStatusSection },
    { component: ChildrenInformationSection },
    { component: SupportNeedsSection },
  ];

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(phoneInquiryValidationSchema) as any,
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    const CurrentSection = formSections[currentStep - 1]?.component;
    return CurrentSection ? <CurrentSection /> : null;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="phone-inquiry-form">
        {renderCurrentStep()}

        <FormNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      </form>
    </FormProvider>
  );
};

export default PhoneInquiryForm;
