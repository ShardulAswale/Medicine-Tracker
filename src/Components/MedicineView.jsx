import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";
import { MedicineViewPropTypes } from "./propValidations";
import {
  CloseOutlined,
  Medication,
  MedicationOutlined,
} from "@mui/icons-material";

function MedicineView({
  medicationRecord,
  handleToggleTaken,
  handleEditClick,
  editMode,
}) {
  return (
    <div>
      <h3>Medicine Schedule</h3>
      {editMode && (
        <Button onClick={handleEditClick} variant="outlined" color="primary">
          Edit
        </Button>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Medicine</TableCell>
              <TableCell>Morning</TableCell>
              <TableCell>Afternoon</TableCell>
              <TableCell>Night</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(medicationRecord.medicines).map((medicineId) => {
              const medicine = medicationRecord.medicines[medicineId];
              return (
                <TableRow key={medicineId}>
                  <TableCell>{medicine.name}</TableCell>
                  <TableCell>
                    {medicine.morning.flag ? (
                      <Checkbox
                        checked={medicine.morning.taken}
                        onChange={() =>
                          handleToggleTaken(medicineId, "morning")
                        }
                        icon={<MedicationOutlined />}
                        checkedIcon={<Medication />}
                      />
                    ) : (
                      <Checkbox icon={<CloseOutlined />} disabled />
                    )}
                  </TableCell>
                  <TableCell>
                    {medicine.afternoon.flag ? (
                      <Checkbox
                        checked={medicine.afternoon.taken}
                        onChange={() =>
                          handleToggleTaken(medicineId, "afternoon")
                        }
                        icon={<MedicationOutlined />}
                        checkedIcon={<Medication />}
                      />
                    ) : (
                      <Checkbox icon={<CloseOutlined />} disabled />
                    )}
                  </TableCell>
                  <TableCell>
                    {medicine.night.flag ? (
                      <Checkbox
                        checked={medicine.night.taken}
                        onChange={() => handleToggleTaken(medicineId, "night")}
                        icon={<MedicationOutlined />}
                        checkedIcon={<Medication />}
                      />
                    ) : (
                      <Checkbox icon={<CloseOutlined />} disabled />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

MedicineView.propTypes = MedicineViewPropTypes;

export default MedicineView;
