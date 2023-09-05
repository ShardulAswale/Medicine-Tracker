import { useState } from "react";
import MedicineView from "./MedicineView";
import MedicineEdit from "./MedicineEdit";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Add,
  EditOutlined,
  Remove,
  SaveOutlined,
} from "@mui/icons-material";
import medicationRecordInit from "./medicationRecordInit";

function MedicineList() {
  const [medicationRecord, setMedicationRecord] =
    useState(medicationRecordInit);
  const [editMode, setEditMode] = useState(false);
  const [counterToggle, setCounterToggle] = useState(true);

  const handleToggleTaken = (medicineId, time) => {
    setMedicationRecord((prevState) => ({
      ...prevState,
      medicines: {
        ...prevState.medicines,
        [medicineId]: {
          ...prevState.medicines[medicineId],
          [time]: {
            ...prevState.medicines[medicineId][time],
            taken: !prevState.medicines[medicineId][time].taken,
          },
        },
      },
    }));
  };

  const handleToggleFlag = (medicineId, time) => {
    setMedicationRecord((prevState) => ({
      ...prevState,
      medicines: {
        ...prevState.medicines,
        [medicineId]: {
          ...prevState.medicines[medicineId],
          [time]: {
            ...prevState.medicines[medicineId][time],
            flag: !prevState.medicines[medicineId][time].flag,
          },
        },
      },
    }));
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = (medicineId, time, newName) => {
    if (medicationRecord.medicines[medicineId]) {
      setMedicationRecord((prevState) => ({
        ...prevState,
        medicines: {
          ...prevState.medicines,
          [medicineId]: {
            ...prevState.medicines[medicineId],
            [time]: {
              ...prevState.medicines[medicineId][time],
              name: newName,
            },
          },
        },
      }));
      setEditMode(false);
    }
  };

  const handleIncrement = (counterName) => {
    setMedicationRecord((prevState) => ({
      ...prevState,
      counts: {
        ...prevState.counts,
        [counterName]: prevState.counts[counterName] + 1,
      },
    }));
  };

  const handleDecrement = (counterName) => {
    setMedicationRecord((prevState) => ({
      ...prevState,
      counts: {
        ...prevState.counts,
        [counterName]:
          prevState.counts[counterName] > 0
            ? prevState.counts[counterName] - 1
            : prevState.counts[counterName],
      },
    }));
  };

  return (
    <div>
      <h2>Medicines Schedule</h2>
      <Button
        variant="contained"
        onClick={handleEditClick}
        startIcon={!editMode ? <EditOutlined /> : <SaveOutlined />}
      >
        {editMode ? "Save" : "Edit"}
      </Button>
      {editMode ? (
        <MedicineEdit
          medicationRecord={medicationRecord}
          setMedicationRecord={setMedicationRecord}
          handleToggleTaken={handleToggleTaken}
          handleToggleFlag={handleToggleFlag}
          handleSaveClick={handleSaveClick}
          counterToggle={counterToggle}
          setCounterToggle={setCounterToggle}
        />
      ) : (
        <MedicineView
          medicationRecord={medicationRecord}
          handleToggleTaken={handleToggleTaken}
          setMedicationRecord={setMedicationRecord}
        />
      )}
      {counterToggle && (
        <div>
          <h2>Counters</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Counter</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Actions</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(medicationRecord.counts).map((counterName) => (
                  <TableRow key={counterName}>
                    <TableCell>{counterName}</TableCell>
                    <TableCell>
                      {medicationRecord.counts[counterName]}
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleIncrement(counterName)}
                        color="primary"
                        variant="contained"
                        endIcon={<Add />}
                      >
                        {counterName}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDecrement(counterName)}
                        color="secondary"
                        variant="outlined"
                      >
                        <Remove />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default MedicineList;
