import React from 'react';
import TextField from '../../common/TextField';
import { useTranslation } from 'react-i18next';

const PersonalInformationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="form-section">
      <h2>{t('title')}</h2>

      <div className="form-row">
        <TextField
          name="lastName"
          label={t('lastNameLabel')}
          required
          placeholder={t('lastNamePlaceholder')}
        />
        <TextField
          name="firstName"
          label={t('firstNameLabel')}
          required
          placeholder={t('firstNamePlaceholder')}
        />
      </div>

      <div className="form-row">
        <TextField
          name="aliasName"
          label={t('aliasLabel')}
          placeholder={t('aliasPlaceholder')}
        />
      </div>

      <div className="form-row">
        <TextField
          name="placeOfResidence"
          label={t('placeOfResidenceLabel')}
          required
          placeholder={t('placeOfResidencePlaceholder')}
        />
      </div>

      <div className="form-row">
        <TextField
          name="phoneNumber"
          label={t('phoneNumberLabel')}
          type="tel"
          required
          placeholder={t('phoneNumberPlaceholder')}
        />
      </div>

      <div className="form-row">
        <TextField
          name="nationality"
          label={t('nationalityLabel')}
          required
          placeholder={t('nationalityPlaceholder')}
        />
      </div>
    </div>
  );
};

export default PersonalInformationSection;
