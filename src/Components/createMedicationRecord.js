export default function createMedicationRecord() {
  // Dummy medicine names
  const medicineNames = ["Medicine 1", "Medicine 2", "Medicine 3"];

  // Generate a dummy date (string)
  const dummyDate = "__/__/2023"; // You can replace this with a dynamic date if needed

  // Generate a random id (for demonstration purposes)
  const id = Math.floor(Math.random() * 1000); // Replace with your own id logic

  // Generate dummy data for each medicine
  const medicines = {};
  medicineNames.forEach((name) => {
    medicines[name] = {
      morning: Math.random() < 0.5, // Randomly true or false
      afternoon: Math.random() < 0.5,
      night: Math.random() < 0.5,
    };
  });

  // Generate dummy data for poop, urine, and feeding counts
  const counts = {
    poop: Math.floor(Math.random() * 5), // Random value between 0 and 4
    urine: Math.floor(Math.random() * 5),
    feeding: Math.floor(Math.random() * 5),
  };

  // Create the medication record
  const medicationRecord = {
    id,
    date: dummyDate,
    medicines,
    counts,
  };

  return medicationRecord;
}

