document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Não recarrega a página

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const table = document.getElementById('contactTable');
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = phone;
        newRow.appendChild(phoneCell);

        table.appendChild(newRow);

        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
