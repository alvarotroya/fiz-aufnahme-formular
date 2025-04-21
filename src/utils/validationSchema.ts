import * as yup from 'yup';

export const phoneInquiryValidationSchema = yup.object({
  // Personal Information
  inquiryDate: yup.string().required('Date of inquiry is required'),
  lastName: yup.string().required('Last name is required'),
  firstName: yup.string().required('First name is required'),
  aliasName: yup.string(),
  placeOfResidence: yup.string().required('Place of residence is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  timeInGermany: yup.string().required('Time in Germany is required'),
  nationality: yup.string().required('Nationality is required'),

  // Residence Status
  residenceStatus: yup.string().required('Residence status is required'),
  visaType: yup.string().when('residenceStatus', {
    is: 'residencePermit',
    then: (schema) => schema.required('Please specify the residence permit details')
  }),

  // Languages
  languages: yup.string().required('Languages spoken is required'),
  preferredLanguage: yup.string().required('Preferred language for consultation is required'),
  otherLanguage: yup.string().when('preferredLanguage', {
    is: 'other',
    then: (schema) => schema.required('Please specify the other language')
  }),

  // Support Needs
  specificSupportNeeds: yup.string().required('Support needs description is required'),
  acuteThreatSituation: yup.boolean(),
  supportTypes: yup.array().of(yup.string()),
  otherSupportType: yup.string().when('supportTypes', {
    is: (val: string[]) => val && val.includes('other'),
    then: (schema) => schema.required('Please specify the other support type')
  }),

  // Asylum Procedure
  asylumProcedureStatus: yup.string(),
  asylumProcedureDetails: yup.string(),

  // Marital Status
  maritalStatus: yup.string().required('Marital status is required'),
  isMarried: yup.boolean(),
  marriedSince: yup.string().when('isMarried', {
    is: true,
    then: (schema) => schema.required('Please specify when you got married')
  }),
  partnerResidenceStatus: yup.string().when('isMarried', {
    is: true,
    then: (schema) => schema.required("Please specify partner's residence status")
  }),

  // Children Information
  hasChildrenInGermany: yup.boolean(),
  numberOfChildren: yup.number().when('hasChildrenInGermany', {
    is: true,
    then: (schema) => schema.required('Please specify number of children').min(1, 'Number must be at least 1')
  }),
  childrenAges: yup.string().when('hasChildrenInGermany', {
    is: true,
    then: (schema) => schema.required('Please specify ages of children')
  }),
  childrenResidenceStatus: yup.string().when('hasChildrenInGermany', {
    is: true,
    then: (schema) => schema.required("Please specify children's residence status")
  }),

  // Employment
  isWorking: yup.boolean(),
  workingHours: yup.string().when('isWorking', {
    is: true,
    then: (schema) => schema.required('Please specify working hours')
  })
});
