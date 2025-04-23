export interface PhoneInquiryFormData {
  // Personal Information
  inquiryDate: string;
  lastName: string;
  firstName: string;
  aliasName?: string;
  placeOfResidence: string;
  phoneNumber: string;
  timeInGermany: string;
  nationality: string;

  // Residence Status
  residenceStatus: string;
  visaType?: string;

  // Languages
  languages: string;
  preferredLanguage: string;
  otherLanguage?: string;

  // Support Needs
  specificSupportNeeds: string;
  acuteThreatSituation?: boolean;
  supportTypes: string[];
  otherSupportType?: string;

  // Asylum Procedure
  asylumProcedureStatus?: string;
  asylumProcedureDetails?: string;

  // Marital Status
  maritalStatus: string;
  isMarried: boolean;
  marriedSince?: string;
  partnerResidenceStatus?: string;

  // Children Information
  hasChildrenInGermany: boolean;
  numberOfChildren?: number;
  childrenAges?: string;
  childrenResidenceStatus?: string;

  // Employment
  isWorking: boolean;
  workingHours?: string;
}

export type SupportType = 
  | 'humanTrafficking'
  | 'forcedProstitution'
  | 'criminalIssues'
  | 'insecureResidenceTitle'
  | 'laborExploitation'
  | 'fgm'
  | 'domesticViolence'
  | 'separationAndDivorce'
  | 'psychologicalStress'
  | 'sexualViolence'
  | 'asylum'
  | 'other';

export type ResidenceStatus = 
  | 'illegal'
  | 'toleration'
  | 'temporaryResidencePermit'
  | 'residencePermit'
  | 'settlementPermit';

export type PreferredLanguage = 
  | 'german'
  | 'spanish'
  | 'english'
  | 'french'
  | 'other';

export type AsylumProcedureStatus = 
  | 'dublinProcedure'
  | 'nationalProcedure'
  | 'appealProcedure';
