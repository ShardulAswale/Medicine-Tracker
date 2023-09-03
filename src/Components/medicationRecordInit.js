const medicationRecordInit = {
  id: 1,
  date: "__/__/2023",
  medicines: {
    1: {
      id: 1,
      name: "Vitamin D",
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
      name: "Calcium",
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
    poop: 2,
    urine: 3,
    feeding: 1,
  },
};

export default medicationRecordInit;
