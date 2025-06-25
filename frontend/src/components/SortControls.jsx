import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function SortControls({ sortBy, sortOrder, onSortByChange, onSortOrderChange }) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '1rem' }}>
        <label>
            {t('sort_by')}
        </label>
        <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
          <option value="">{t('none')}</option>
          <option value="Anno">{t('year')}</option>
          <option value="Regione">{t('region')}</option>
          <option value="Percentuale">{t('percentage')}</option>
        </select>
    
        <label>
            {t('order')}
        </label>
        <select value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
          <option value="asc">{t('ascending')}</option>
          <option value="desc">{t('descending')}</option>
        </select>
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  onSortOrderChange: PropTypes.func.isRequired,
};

export default SortControls;
