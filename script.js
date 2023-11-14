// Importati toti utilizatorii din json in tabel si apoi inputul search introduceti un nume, email sau curs  apasand pe buton utilizatorii
// gasiti conform inputului se va colora cu un background galben, conformaginii din mapa img

let users = [

{"first_name":"Cornelius","email":"csummerley0@nydailynews.com","student_course":"Voltsillam"},
{"first_name":"Stephi","email":"swagen1@usda.gov","student_course":"Vagram"},
{"first_name":"Hinze","email":"hfoulser2@techcrunch.com","student_course":"Konklux"},
{"first_name":"Brew","email":"bshory3@house.gov","student_course":"Gembucket"},
{"first_name":"Andrew","email":"ahatliffe4@howstuffworks.com","student_course":"Treeflex"},
{"first_name":"Ruddy","email":"rcastrillo5@ustream.tv","student_course":"Voltsillam"},
{"first_name":"Jo ann","email":"jyoung6@joomla.org","student_course":"Alpha"},
{"first_name":"Pavlov","email":"pdudeney7@youtube.com","student_course":"Matsoft"},
{"first_name":"Rhianon","email":"rkeer8@moonfruit.com","student_course":"Stronghold"},
{"first_name":"Montague","email":"mladlow9@bbb.org","student_course":"Veribet"}

]

const createTableRows = () => {
    const tableBody = document.getElementById('studentsTableBody');

    users.forEach(student => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.first_name;
        row.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        const courseCell = document.createElement('td');
        courseCell.textContent = student.student_course;
        row.appendChild(courseCell);

        tableBody.appendChild(row);
    });
}

createTableRows();


const searchField = document.getElementById('searchField');
const tableRows = document.getElementById('studentsTableBody').getElementsByTagName('tr');
const searchBtn = document.getElementById('searchBtn');

const searchByName = function () {
    const searchTerm = searchField.value.toLowerCase();

    for (let i = 0; i < tableRows.length; i++) {
        const cells = tableRows[i].getElementsByTagName("td");

        const nameCell = cells[0];

        if (nameCell) {
            const nameText = nameCell.textContent.toLowerCase();

            if (searchTerm === '' || nameText.includes(searchTerm)) {
                tableRows[i].style.backgroundColor = searchTerm === '' ? 'transparent' : 'yellow';
            } else {
                tableRows[i].style.backgroundColor = 'transparent';
            }
        }
    }
};


searchBtn.addEventListener("click", searchByName);
