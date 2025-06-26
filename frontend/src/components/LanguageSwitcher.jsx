import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => changeLanguage('it')} aria-label={t("switch_to_it")}>Italiano</button>
      <button onClick={() => changeLanguage('en')} aria-label={t("switch_to_en")}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
