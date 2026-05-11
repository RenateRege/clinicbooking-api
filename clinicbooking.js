const patients = [ // A list that contains patients.
    {
        id: 1,
        name: "Ola Nordmann",
        email: "ola@example.com",
        phone: "12345678"
    },

    {
        id: 2,
        name: "Kari Nordmann",
        email: "kari@example.com",
        phone: "87654321"
    },

    {
        id: 3,
    name: "Per Hansen",
    email: "per@example.com",
    phone: "24681012"
    },

    {
        id: 4,
        name: "Siri Olsen",
        email: "siri@example.com",
        phone: "10121416"
    }
];

const appointments = [ // A list with appointments.
   {
    id: 1,
    patientId: 1, // This means that this appointment belongs to patient with Id 1.
    service: "First consultation",
    date: "2026-05-12",
    time: "10:00"
   },

   {
    id: 2,
    pasientId: 2,
    service: "Follow-up appointment",
    date: "2026-06-7",
    time: "07:30"
   },

   {
    id: 3,
    patientId: 3,
    service: "First consultation",
    date: "2026-05-08",
    time: "15:00"
   },

   {
    id: 4,
    patientId: 4,
    service: "Follow-up appointment",
    date: "2026-05-24",
    time: "12:00"
   }
];

function showPasients() { // A function that shows all patients.
    console.log("Patients:");
    console.log(patients);
}

function showAppointments() {
    console.log("Appointments:");
    console.log(appointments);
}

function findPatientById(id) {
    const patient = patients.find(patient => patient.id === id); // Find the patient where the Id is matching.
    console.log(patient);
}

function addPatient(name, email, phone) { // A function who gets information about a patient.
    const newPatient = {
        id: patients.length + 1, // Take number of patients and add with 1.
        name: name,
        email: email,
        phone: phone
    };

    patients.push(newPatient); // Add to the list.

    console.log("New patient added:");
    console.log(newPatient);
}

function showAppointmentsWithPatientNames() {
    appointments.forEach(appointment => {
        const patient = patients.find(patient => patient.id === appointment.patientId);

        console.log(
            `${appointment.date} ${appointment.time} - ${appointment.service} with ${patient.name}` // Template literal
        );
    });
}

function addAppointment(patientId, service, date, time) { // Make new booking and connect booking to correct pasient.
    const newAppointment = {
        id: appointments.length + 1,
        patientId: patientId,
        service: service,
        date: date,
        time: time
    };

    appointments.push(newAppointment);

    console.log("New appointment added:");
    console.log(newAppointment);
}

function deleteAppointment(id) {
    const index = appointments.findIndex(
        appointment => appointment.id === id
    );

    if (index === -1) { // If no booking is found.
        console.log("Appointment not found");
        return;
    }

    appointments.splice(index, 1); // Move 1 element from list.

    console.log("Appointment deleted");
}

function getAppointmentForPatient(patientId) {
    const patientAppointments = appointments.filter( // Go through all bookings and keep those who match.
        appointment => appointment.patientId === patientId
    );

    console.log(patientAppointments);
}

function updateAppointment(id, newDate, newTime) {
    const appointment = appointments.find(
        appointment => appointment.id === id
    );

    if (!appointment) {
        console.log("Appointment not found");
        return;
    }

    appointment.date = newDate;
    appointment.time = newTime;

    console.log("Appointment updated:");
    console.log(appointment);
}



showPasients();
showAppointments();
findPatientById(); 
addPatient(
    "Lise Hansen",
    "lise@example.com",
    "11223344"
);
addPatient(
    "Jan Johnsen",
    "jan@example.com",
    "44556677"
);
showAppointmentsWithPatientNames();
addAppointment(
    1,
    "Osteopathy consultation",
    "2026-05-20",
    "14:00"
);
deleteAppointment();
getAppointmentForPatient();
updateAppointment(1, "2026-05-25", "13:00");
showAppointmentsWithPatientNames();