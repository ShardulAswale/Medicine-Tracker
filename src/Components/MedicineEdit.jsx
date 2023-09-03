import React, { useState } from "react";
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
  TextField,
  InputAdornment,
} from "@mui/material";
import { MedicineViewPropTypes } from "./propValidations";
import { Medication } from "@mui/icons-material";

function MedicineEdit({
  medicationRecord,
  setMedicationRecord,
  handleToggleFlag,
}) {
  const [newMedicineName, setNewMedicineName] = useState("");
  const [editMedicineId, setEditMedicineId] = useState(null);
  const [editedMedicineName, setEditedMedicineName] = useState("");

  const handleEditNameClick = (medicineId, currentName) => {
    setEditMedicineId(medicineId);
    setEditedMedicineName(currentName);
  };

  const handleSaveNameClick = (medicineId) => {
    const updatedRecord = { ...medicationRecord };
    updatedRecord.medicines[medicineId].name = editedMedicineName;
    setEditMedicineId(null);
    setMedicationRecord(updatedRecord);
  };

  const handleAddNewMedicine = () => {
    if (newMedicineName.trim() !== "") {
      const newMedicineId = Date.now().toString();
      const newMedicine = {
        id: newMedicineId,
        name: newMedicineName,
        morning: { flag: false, taken: false },
        afternoon: { flag: false, taken: false },
        night: { flag: false, taken: false },
      };

      const updatedRecord = { ...medicationRecord };
      updatedRecord.medicines[newMedicineId] = newMedicine;

      setNewMedicineName("");
      setMedicationRecord(updatedRecord);
    }
  };

  const handleDeleteMedicine = (medicineId) => {
    setMedicationRecord((prevState) => {
      const updatedMedicines = { ...prevState.medicines };
      delete updatedMedicines[medicineId];
  
      return {
        ...prevState,
        medicines: updatedMedicines,
      };
    });
  };
  

  return (
    <div>
      <h3>Edit Medicine Schedule</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Medicine</TableCell>
              <TableCell>Morning</TableCell>
              <TableCell>Afternoon</TableCell>
              <TableCell>Night</TableCell>
              <TableCell>Edit Name</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(medicationRecord.medicines).map((medicineId) => {
              const medicine = medicationRecord.medicines[medicineId];
              const isEditing = editMedicineId === medicineId;
              return (
                <TableRow key={medicineId}>
                  <TableCell>
                    {isEditing ? (
                      <TextField
                        value={editedMedicineName}
                        onChange={(e) =>
                          setEditedMedicineName(e.target.value)
                        }
                      />
                    ) : (
                      medicine.name
                    )}
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={medicine.morning.flag}
                      onChange={() => handleToggleFlag(medicineId, "morning")}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={medicine.afternoon.flag}
                      onChange={() => handleToggleFlag(medicineId, "afternoon")}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={medicine.night.flag}
                      onChange={() => handleToggleFlag(medicineId, "night")}
                    />
                  </TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Button
                        onClick={() => handleSaveNameClick(medicineId)}
                        variant="outlined"
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleEditNameClick(medicineId, medicine.name)
                        }
                        variant="outlined"
                      >
                        Edit Name
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDeleteMedicine(medicineId)}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <h4>Add New Medicine</h4>
        <TextField
          label="Medicine Name"
          variant="outlined"
          value={newMedicineName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Medication />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setNewMedicineName(e.target.value)}
        />
        <Button
          onClick={handleAddNewMedicine}
          variant="outlined"
          color="primary"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

MedicineEdit.propTypes = MedicineViewPropTypes;

export default MedicineEdit;
