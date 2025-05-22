import './App.css';
import './styles/form.css';
import './i18n.js';
import PhoneInquiryForm from './components/form/PhoneInquiryForm';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const handleSubmit = (data: any) => {
    console.log('Form submitted with data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div className="App">
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}>
        Switch Language
      </button>
      <PhoneInquiryForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
