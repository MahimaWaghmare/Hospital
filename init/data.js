const patientsData = [
    {
      Name: "John Smith",
      Age: 45,
      Gender: "Male",
      AdmissionDate: "2024-03-15",
      Diagnosis: "Pneumonia",
      RoomNumber: 102,
      Allergies: "None",
      MedicalHistory: "Hypertension, Diabetes"
    },
    {
      Name: "Emily Johnson",
      Age: 30,
      Gender: "Female",
      AdmissionDate: "2024-03-17",
      Diagnosis: "Appendicitis",
      RoomNumber: 215,
      Allergies: "Penicillin",
      MedicalHistory: "None"
    },
    {
      Name: "Michael Williams",
      Age: 65,
      Gender: "Male",
      AdmissionDate: "2024-03-19",
      Diagnosis: "Heart Attack",
      RoomNumber: "ICU-3",
      Allergies: "Aspirin",
      MedicalHistory: "Coronary Artery Disease"
    },
    {
        Name: "Sarah Davis",
        Age: 40,
        Gender: "Female",
        AdmissionDate: "2024-03-20",
        Diagnosis: "Kidney Stones",
        RoomNumber: 307,
        Allergies: "None",
        MedicalHistory: "None"
      },
      {
        Name: "Christopher Taylor",
        Age: 55,
        Gender: "Male",
        AdmissionDate: "2024-03-22",
        Diagnosis: "Diabetes Type 2",
        RoomNumber: 130,
        Allergies: "Insulin",
        MedicalHistory: "Obesity, Hypertension"
      },
      {
        Name: "David Miller",
        Age: 50,
        Gender: "Male",
        AdmissionDate: "2024-03-25",
        Diagnosis: "Gastritis",
        RoomNumber: 115,
        Allergies: "None",
        MedicalHistory: "Acid Reflux"
      },
      {
        Name: "Olivia Moore",
        Age: 35,
        Gender: "Female",
        AdmissionDate: "2024-03-27",
        Diagnosis: "Migraine",
        RoomNumber: 220,
        Allergies: "Aspirin",
        MedicalHistory: "Anxiety Disorder"
      },
      {
        Name: "William Anderson",
        Age: 60,
        Gender: "Male",
        AdmissionDate: "2024-03-29",
        Diagnosis: "Gallstones",
        RoomNumber: 305,
        Allergies: "None",
        MedicalHistory: "Cholecystitis"
      },
      {
        Name: "Sophia Clark",
        Age: 28,
        Gender: "Female",
        AdmissionDate: "2024-04-01",
        Diagnosis: "Bronchitis",
        RoomNumber: 112,
        Allergies: "None",
        MedicalHistory: "Asthma"
      },
      {
        Name: "Ethan Wilson",
        Age: 45,
        Gender: "Male",
        AdmissionDate: "2024-04-03",
        Diagnosis: "Ankle Sprain",
        RoomNumber: 218,
        Allergies: "Latex",
        MedicalHistory: "Sports Injury"
      },
      {
        Name: "Jacob Thompson",
        Age: 42,
        Gender: "Male",
        AdmissionDate: "2024-04-05",
        Diagnosis: "Gastric Ulcer",
        RoomNumber: 210,
        Allergies: "None",
        MedicalHistory: "GERD"
      },
      {
        Name: "Ava Garcia",
        Age: 32,
        Gender: "Female",
        AdmissionDate: "2024-04-07",
        Diagnosis: "Anxiety Disorder",
        RoomNumber: 125,
        Allergies: "None",
        MedicalHistory: "Depression"
      },
      {
        Name: "Benjamin Rodriguez",
        Age: 55,
        Gender: "Male",
        AdmissionDate: "2024-04-09",
        Diagnosis: "Osteoarthritis",
        RoomNumber: 310,
        Allergies: "NSAIDs",
        MedicalHistory: "Joint Pain"
      },
      {
        Name: "Mia Martinez",
        Age: 29,
        Gender: "Female",
        AdmissionDate: "2024-04-11",
        Diagnosis: "Gastroenteritis",
        RoomNumber: 215,
        Allergies: "Penicillin",
        MedicalHistory: "Digestive Issues"
      },
      {
        Name: "Elijah Wright",
        Age: 48,
        Gender: "Male",
        AdmissionDate: "2024-04-13",
        Diagnosis: "Concussion",
        RoomNumber: 305,
        Allergies: "None",
        MedicalHistory: "Head Injury"
      },
      {
        Name: "Sophie Evans",
        Age: 36,
        Gender: "Female",
        AdmissionDate: "2024-04-15",
        Diagnosis: "Stomach Flu",
        RoomNumber: 130,
        Allergies: "None",
        MedicalHistory: "Digestive Issues"
      },
      {
        Name: "Alexander Harris",
        Age: 58,
        Gender: "Male",
        AdmissionDate: "2024-04-17",
        Diagnosis: "Hypothyroidism",
        RoomNumber: 225,
        Allergies: "Iodine",
        MedicalHistory: "Thyroid Disorders"
      },
      {
        Name: "Madison Thompson",
        Age: 27,
        Gender: "Female",
        AdmissionDate: "2024-04-19",
        Diagnosis: "Anemia",
        RoomNumber: 310,
        Allergies: "None",
        MedicalHistory: "Iron Deficiency"
      },
      {
        Name: "Liam Jackson",
        Age: 50,
        Gender: "Male",
        AdmissionDate: "2024-04-21",
        Diagnosis: "COPD",
        RoomNumber: 210,
        Allergies: "None",
        MedicalHistory: "Smoking History"
      },
      {
        Name: "Charlotte Baker",
        Age: 33,
        Gender: "Female",
        AdmissionDate: "2024-04-23",
        Diagnosis: "Fibromyalgia",
        RoomNumber: 305,
        Allergies: "None",
        MedicalHistory: "Chronic Pain"
      },
      {
        Name: "Ethan Thompson",
        Age: 40,
        Gender: "Male",
        AdmissionDate: "2024-04-25",
        Diagnosis: "Hypertension",
        RoomNumber: 201,
        Allergies: "None",
        MedicalHistory: "High Blood Pressure"
      },
      {
        Name: "Aria White",
        Age: 29,
        Gender: "Female",
        AdmissionDate: "2024-04-27",
        Diagnosis: "Pneumonia",
        RoomNumber: 115,
        Allergies: "Penicillin",
        MedicalHistory: "Respiratory Issues"
      },
      {
        Name: "Jack Garcia",
        Age: 55,
        Gender: "Male",
        AdmissionDate: "2024-04-29",
        Diagnosis: "Colon Cancer",
        RoomNumber: 320,
        Allergies: "None",
        MedicalHistory: "Cancer Survivor"
      },
      {
        Name: "Scarlett Adams",
        Age: 31,
        Gender: "Female",
        AdmissionDate: "2024-05-01",
        Diagnosis: "Anxiety Disorder",
        RoomNumber: 210,
        Allergies: "None",
        MedicalHistory: "Mental Health Issues"
      },
      {
        Name: "Lucas Martin",
        Age: 48,
        Gender: "Male",
        AdmissionDate: "2024-05-03",
        Diagnosis: "Rheumatoid Arthritis",
        RoomNumber: 305,
        Allergies: "Aspirin",
        MedicalHistory: "Autoimmune Disease"
      },
      {
        Name: "Isaac Johnson",
        Age: 34,
        Gender: "Male",
        AdmissionDate: "2024-05-05",
        Diagnosis: "Gout",
        RoomNumber: 112,
        Allergies: "Shellfish",
        MedicalHistory: "Joint Pain"
      },
      {
        Name: "Ella Brown",
        Age: 41,
        Gender: "Female",
        AdmissionDate: "2024-05-07",
        Diagnosis: "Fibroid Tumor",
        RoomNumber: 220,
        Allergies: "None",
        MedicalHistory: "Reproductive Health Issues"
      },
      {
        Name: "Nathan Wilson",
        Age: 57,
        Gender: "Male",
        AdmissionDate: "2024-05-09",
        Diagnosis: "Parkinson's Disease",
        RoomNumber: 330,
        Allergies: "None",
        MedicalHistory: "Neurological Disorders"
      },
      {
        Name: "Sophia Carter",
        Age: 26,
        Gender: "Female",
        AdmissionDate: "2024-05-11",
        Diagnosis: "Celiac Disease",
        RoomNumber: 215,
        Allergies: "Gluten",
        MedicalHistory: "Digestive Disorders"
      },
      {
        Name: "Elijah Thompson",
        Age: 50,
        Gender: "Male",
        AdmissionDate: "2024-05-13",
        Diagnosis: "Chronic Kidney Disease",
        RoomNumber: 310,
        Allergies: "None",
        MedicalHistory: "Renal Disorders"
      }, {
        Name: "Liam Johnson",
        Age: 38,
        Gender: "Male",
        AdmissionDate: "2024-05-15",
        Diagnosis: "Eczema",
        RoomNumber: 120,
        Allergies: "Peanuts",
        MedicalHistory: "Skin Conditions"
      },
      {
        Name: "Emma Martinez",
        Age: 43,
        Gender: "Female",
        AdmissionDate: "2024-05-17",
        Diagnosis: "Crohn's Disease",
        RoomNumber: 225,
        Allergies: "Dairy",
        MedicalHistory: "Inflammatory Bowel Disease"
      },
      {
        Name: "Noah Anderson",
        Age: 55,
        Gender: "Male",
        AdmissionDate: "2024-05-19",
        Diagnosis: "Multiple Sclerosis",
        RoomNumber: 340,
        Allergies: "None",
        MedicalHistory: "Neurological Disorders"
      },
      {
        Name: "Olivia Wilson",
        Age: 31,
        Gender: "Female",
        AdmissionDate: "2024-05-21",
        Diagnosis: "Endometriosis",
        RoomNumber: 212,
        Allergies: "None",
        MedicalHistory: "Reproductive Health Issues"
      },
      {
        Name: "Mason Taylor",
        Age: 48,
        Gender: "Male",
        AdmissionDate: "2024-05-23",
        Diagnosis: "Rheumatoid Arthritis",
        RoomNumber: 315,
        Allergies: "NSAIDs",
        MedicalHistory: "Autoimmune Disease"
      },
      {
        Name: "Grace Thompson",
        Age: 42,
        Gender: "Female",
        AdmissionDate: "2024-05-25",
        Diagnosis: "Asthma",
        RoomNumber: 130,
        Allergies: "None",
        MedicalHistory: "Respiratory Issues"
      },
      {
        Name: "Ethan Parker",
        Age: 36,
        Gender: "Male",
        AdmissionDate: "2024-05-27",
        Diagnosis: "Gallbladder Stones",
        RoomNumber: 225,
        Allergies: "None",
        MedicalHistory: "Digestive Disorders"
      },
      {
        Name: "Chloe Rodriguez",
        Age: 50,
        Gender: "Female",
        AdmissionDate: "2024-05-29",
        Diagnosis: "Osteoporosis",
        RoomNumber: 310,
        Allergies: "None",
        MedicalHistory: "Bone Health Issues"
      },
      {
        Name: "James Lee",
        Age: 29,
        Gender: "Male",
        AdmissionDate: "2024-06-01",
        Diagnosis: "Depression",
        RoomNumber: 212,
        Allergies: "None",
        MedicalHistory: "Mental Health Issues"
      },
      {
        Name: "Sophia Harris",
        Age: 46,
        Gender: "Female",
        AdmissionDate: "2024-06-03",
        Diagnosis: "Hypothyroidism",
        RoomNumber: 320,
        Allergies: "Iodine",
        MedicalHistory: "Thyroid Disorders"
      },
      {
        Name: "Lucas Johnson",
        Age: 39,
        Gender: "Male",
        AdmissionDate: "2024-06-05",
        Diagnosis: "Hypertension",
        RoomNumber: 120,
        Allergies: "None",
        MedicalHistory: "High Blood Pressure"
      },
      {
        Name: "Avery Wilson",
        Age: 44,
        Gender: "Female",
        AdmissionDate: "2024-06-07",
        Diagnosis: "Migraine",
        RoomNumber: 225,
        Allergies: "Aspirin",
        MedicalHistory: "Chronic Headaches"
      },
      {
        Name: "Jackson Martinez",
        Age: 56,
        Gender: "Male",
        AdmissionDate: "2024-06-09",
        Diagnosis: "COPD",
        RoomNumber: 310,
        Allergies: "None",
        MedicalHistory: "Respiratory Issues"
      },
      {
        Name: "Scarlett Taylor",
        Age: 32,
        Gender: "Female",
        AdmissionDate: "2024-06-11",
        Diagnosis: "Anxiety Disorder",
        RoomNumber: 212,
        Allergies: "None",
        MedicalHistory: "Mental Health Issues"
      },
      {
        Name: "Liam Brown",
        Age: 47,
        Gender: "Male",
        AdmissionDate: "2024-06-13",
        Diagnosis: "Rheumatoid Arthritis",
        RoomNumber: 315,
        Allergies: "NSAIDs",
        MedicalHistory: "Autoimmune Disease"
      },
      {
        Name: "Mason Wilson",
        Age: 37,
        Gender: "Male",
        AdmissionDate: "2024-06-15",
        Diagnosis: "Diabetes Type 1",
        RoomNumber: 130,
        Allergies: "Insulin",
        MedicalHistory: "Type 1 Diabetes"
      },
      {
        Name: "Ella Thompson",
        Age: 49,
        Gender: "Female",
        AdmissionDate: "2024-06-17",
        Diagnosis: "Rheumatoid Arthritis",
        RoomNumber: 225,
        Allergies: "None",
        MedicalHistory: "Autoimmune Disease"
      },
      {
        Name: "Liam Garcia",
        Age: 59,
        Gender: "Male",
        AdmissionDate: "2024-06-19",
        Diagnosis: "COPD",
        RoomNumber: 310,
        Allergies: "None",
        MedicalHistory: "Respiratory Issues"
      },
      {
        Name: "Ava Martin",
        Age: 33,
        Gender: "Female",
        AdmissionDate: "2024-06-21",
        Diagnosis: "Anxiety Disorder",
        RoomNumber: 212,
        Allergies: "None",
        MedicalHistory: "Mental Health Issues"
      },
      {
        Name: "Benjamin Harris",
        Age: 45,
        Gender: "Male",
        AdmissionDate: "2024-06-23",
        Diagnosis: "Ulcerative Colitis",
        RoomNumber: 315,
        Allergies: "NSAIDs",
        MedicalHistory: "Inflammatory Bowel Disease"
      },
      {
        Name: "Emma Clark",
        Age: 28,
        Gender: "Female",
        AdmissionDate: "2024-06-25",
        Diagnosis: "Gastritis",
        RoomNumber: 120,
        Allergies: "None",
        MedicalHistory: "Digestive Issues"
      },
      {
        Name: "Oliver Anderson",
        Age: 53,
        Gender: "Male",
        AdmissionDate: "2024-06-27",
        Diagnosis: "Kidney Stones",
        RoomNumber: 225,
        Allergies: "None",
        MedicalHistory: "Renal Disorders"
      },
      {
        Name: "Ava Rodriguez",
        Age: 35,
        Gender: "Female",
        AdmissionDate: "2024-06-29",
        Diagnosis: "Migraine",
        RoomNumber: 310,
        Allergies: "Aspirin",
        MedicalHistory: "Chronic Headaches"
      },
      {
        Name: "Noah Thompson",
        Age: 57,
        Gender: "Male",
        AdmissionDate: "2024-07-01",
        Diagnosis: "Atrial Fibrillation",
        RoomNumber: 212,
        Allergies: "None",
        MedicalHistory: "Heart Conditions"
      },
      {
        Name: "Sophia Johnson",
        Age: 40,
        Gender: "Female",
        AdmissionDate: "2024-07-03",
        Diagnosis: "Asthma",
        RoomNumber: 315,
        Allergies: "Dust",
        MedicalHistory: "Respiratory Issues"
      },
      {
        Name: "Lucas Martinez",
        Age: 48,
        Gender: "Male",
        AdmissionDate: "2024-07-05",
        Diagnosis: "Osteoarthritis",
        RoomNumber: 130,
        Allergies: "NSAIDs",
        MedicalHistory: "Joint Pain"
      },
      {
        Name: "Isabella Brown",
        Age: 31,
        Gender: "Female",
        AdmissionDate: "2024-07-07",
        Diagnosis: "Anxiety Disorder",
        RoomNumber: 320,
        Allergies: "None",
        MedicalHistory: "Mental Health Issues"
      },
      {
        Name: "William Harris",
        Age: 47,
        Gender: "Male",
        AdmissionDate: "2024-07-09",
        Diagnosis: "Rheumatoid Arthritis",
        RoomNumber: 212,
        Allergies: "Aspirin",
        MedicalHistory: "Autoimmune Disease"
      },
      {
        Name: "Chloe Wilson",
        Age: 36,
        Gender: "Female",
        AdmissionDate: "2024-07-11",
        Diagnosis: "Gallstones",
        RoomNumber: 315,
        Allergies: "None",
        MedicalHistory: "Digestive Issues"
      },
      {
        Name: "Mason Davis",
        Age: 45,
        Gender: "Male",
        AdmissionDate: "2024-07-13",
        Diagnosis: "Obesity",
        RoomNumber: 130,
        Allergies: "None",
        MedicalHistory: "Weight Management"
      },
];


module.exports = { data: patientsData };