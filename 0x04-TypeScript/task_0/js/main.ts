interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    }

    const student1: Student = {
    firstName: "Ezekiel",
    lastName: "Mabotsa",
    age: 20,
    location: "Johannesburg"
};

const student2: Student = {
    firstName: "Drew",
    lastName: "Barrymore",
    age: 22,
    location: "Pretoria"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
    });

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
