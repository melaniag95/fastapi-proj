import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => changeLanguage('it')}>Italiano</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
