import React, { useState } from 'react';
import { Container, Typography,Checkbox, FormControlLabel } from '@mui/material';

function MedicationTracker() {
  const [medications, setMedications] = useState([
    { id: 1, name: 'Vitamin D', taken: false },
    { id: 2, name: 'Calcium', taken: true },
    // Add more medications here
  ]);

  const handleToggleTaken = (id) => {
    setMedications((prevMedications) =>
      prevMedications.map((medication) =>
        medication.id === id ? { ...medication, taken: !medication.taken } : medication
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Medication Tracker
      </Typography>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            {medication.name}
            <FormControlLabel
              control={
                <Checkbox
                  checked={medication.taken}
                  onChange={() => handleToggleTaken(medication.id)}
                />
              }
              label="Taken"
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default MedicationTracker;