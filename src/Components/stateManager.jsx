import { useState, useEffect } from 'react';

const medicationRecordInit = {
  id: 1,
  date: new Date().toLocaleDateString(), // Set the date to today's date
  medicines: {
    1: {
      id: 1,
      name: 'Vitamin D',
      morning: {
        flag: true,
        taken: false,
      },
      afternoon: {
        flag: false,
        taken: false,
      },
      night: {
        flag: true,
        taken: false,
      },
    },
    2: {
      id: 2,
      name: 'Calcium',
      morning: {
        flag: false,
        taken: false,
      },
      afternoon: {
        flag: true,
        taken: false,
      },
      night: {
        flag: false,
        taken: false,
      },
    },
    // Add more medicines with unique IDs
  },
  counts: {
    poop: 0,
    urine: 0,
    feeding: 0,
  },
};

export function useMedicationRecord() {
  const [medicationRecord, setMedicationRecord] = useState(() => {
    const today = new Date().toLocaleDateString(); // Get today's date in "MM/DD/YYYY" format
    const storedRecord = JSON.parse(localStorage.getItem('medicationRecord'));

    if (storedRecord && storedRecord.date === today) {
      // If a record with today's date exists in local storage, use it
      return storedRecord;
    }

    // Otherwise, initialize with medicationRecordInit
    return {
      ...medicationRecordInit,
      date: today, // Set the date to today's date
    };
  });

  // Update local storage whenever medicationRecord changes
  useEffect(() => {
    localStorage.setItem('medicationRecord', JSON.stringify(medicationRecord));
  }, [medicationRecord]);

  return [medicationRecord, setMedicationRecord];
}
