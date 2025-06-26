import styles from "./LanguageSwitcher.module.css";
import Button from "../Button/Button";
import { useTranslation } from 'react-i18next';


function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitcher}>
      <Button
        onClick={() => changeLanguage('it')}
        label={t("lang_it")}
        ariaLabel={t("switch_to_it")}
      />
      <Button
        onClick={() => changeLanguage('en')}
        label={t("lang_en")}
        ariaLabel={t("switch_to_en")}
      />
    </div>
  );
}

export default LanguageSwitcher;
