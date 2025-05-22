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
  isMarried: '',
  marriedSince: '',
  partnerResidenceStatus: '',
  hasChildrenInGermany: false,
  numberOfChildren: 0,
  childrenAges: '',
  childrenResidenceStatus: '',
  isWorking: '',
  workingHours: '',
};

const PhoneInquiryForm: React.FC<PhoneInquiryFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const formSections: {
    component: React.FC;
    fields: (keyof typeof defaultValues)[];
  }[] = [
    {
      component: PersonalInformationSection,
      fields: [
        'lastName',
        'firstName',
        'aliasName',
        'placeOfResidence',
        'phoneNumber',
        'nationality',
      ],
    },
    {
      component: LanguageSection,
      fields: ['languages', 'preferredLanguage', 'otherLanguage'],
    },
    {
      component: ResidenceStatusSection,
      fields: ['residenceStatus', 'visaType', 'timeInGermany'],
    },
    {
      component: AsylumProcedureSection,
      fields: ['asylumProcedureStatus', 'asylumProcedureDetails'],
    },
    {
      component: EmploymentSection,
      fields: ['isWorking', 'workingHours'],
    },
    {
      component: MaritalStatusSection,
      fields: [
        'isMarried',
        'maritalStatus',
        'marriedSince',
        'partnerResidenceStatus',
      ],
    },
    {
      component: ChildrenInformationSection,
      fields: [
        'hasChildrenInGermany',
        'numberOfChildren',
        'childrenAges',
        'childrenResidenceStatus',
      ],
    },
    {
      component: SupportNeedsSection,
      fields: [
        'specificSupportNeeds',
        'acuteThreatSituation',
        'supportTypes',
        'otherSupportType',
      ],
    },
  ];

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(phoneInquiryValidationSchema) as any,
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  const handleNext = async () => {
    const currentFields = formSections[currentStep - 1]?.fields;

    if (!currentFields) {
      console.error('No fields found for the current step');
      return;
    }

    const isValid = await methods.trigger(currentFields);
    console.log('Validation result:', isValid);
    console.log('Errors:', methods.formState.errors);

    if (isValid && currentStep < totalSteps) {
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
