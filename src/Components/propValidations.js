import PropTypes from 'prop-types';

// Prop type validation for MedicineView
export const MedicineViewPropTypes = {
  medicationRecord: PropTypes.object.isRequired,
};

// Prop type validation for MedicineEdit
export const MedicineEditPropTypes = {
  medicationRecord: PropTypes.object.isRequired,
  handleToggleTaken: PropTypes.func.isRequired,
  handleToggleFlag: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};
