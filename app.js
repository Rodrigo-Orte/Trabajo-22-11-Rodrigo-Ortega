let problemas = [];

function agregarProblema() {
  const nombrePC = document.getElementById('computerName').value;
  const descripcionProblema = document.getElementById('problemDescription').value;
  const resuelto = document.getElementById('resolvedCheckbox').checked;

  if (nombrePC.trim() !== '' && descripcionProblema.trim() !== '') {
    problemas.push({ pc: nombrePC, problema: descripcionProblema, resuelto });

    mostrarProblemas();
    limpiarCampos();
  } else {
    alert('ingrese un nombre de PC y descripción de problema.');
  }
}

function mostrarProblemas() {
  const tablaProblemas = document.getElementById('problemBody');
  tablaProblemas.innerHTML = '';

  problemas.forEach((problema, index) => {
    const fila = tablaProblemas.insertRow();

    const numCell = fila.insertCell(0);
    numCell.textContent = index + 1;

    const pcCell = fila.insertCell(1);
    pcCell.textContent = problema.pc;

    const descCell = fila.insertCell(2);
    descCell.textContent = problema.problema;

    const resueltoCell = fila.insertCell(3);
    resueltoCell.textContent = problema.resuelto ? 'Resuelto' : 'No Resuelto';
  });
}

function limpiarCampos() {
  document.getElementById('computerName').value = '';
  document.getElementById('problemDescription').value = '';
  document.getElementById('resolvedCheckbox').checked = false;
}