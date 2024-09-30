function calculateSuma(numberOne,numberTwo) {
   
    const total = numberOne + numberTwo;
     // Retorna el total redondeado a 2 decimales
    return total.toFixed();
}
function calculateResta(numberOne, numberTwo){
    const total = numberOne - numberTwo;
    return total.toFixed();
}
function calculateMult(numberOne,numberTwo){
    const total = numberOne * numberTwo;
    return total.toFixed();
} 
function calculateDiv (numberOne, numberTwo){
    if (numberTwo === 0) {
        return 'Error: División por cero';
    }
    const total = numberOne / numberTwo;
    return total.toFixed(2);
}
function generInvoque(){
    const numberOne=parseInt(document.getElementById('numero1').value);
    const numberTwo=parseInt(document.getElementById('numero2').value);
    const invoiceForm=document.getElementById('invoiceForme');
// Calcula la suma de los dos números
    const totalWithTax=calculateSuma(numberOne,numberTwo);
    console.log(totalWithTax)

    // Mostrar el resultado en el elemento con id 'resultado'
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <strong>Resultado es:</strong> ${totalWithTax}
    `;
    // Crear factura HTML para imprimir
    const itemHTML = `
       
        <h2>Suma</h2>
        <p><strong>Dato 1:</strong> ${numberOne}</p>
        <p><strong>Dato 2:</strong> ${numberTwo}</p>
        <p><strong>Suma:</strong> ${totalWithTax}</p>  
     
    `;
    invoiceForm.insertAdjacentHTML('beforeend', itemHTML);
    // Refresca la página después de mostrar los resultados
    setTimeout(() => {
        window.location.reload();
    }, 5000); // Espera 3 segundos antes de refrescar
}
function generResta(){
    const numberOne=parseInt(document.getElementById('numero1').value);
    const numberTwo=parseInt(document.getElementById('numero2').value);
    const invoiceForm=document.getElementById('invoiceForme');

    const totaRest=calculateResta(numberOne,numberTwo);
     // Mostrar el resultado en el elemento con id 'resultado'
     const resultadoElement = document.getElementById('resultado');
     resultadoElement.innerHTML = `
         <strong>Resultado es:</strong> ${totaRest}
     `;
    const itemHTML = `
    <h2>Suma</h2>
    <p><strong>Dato 1:</strong> ${numberOne}</p>
    <p><strong>Dato 2:</strong> ${numberTwo}</p>
    <p><strong>Resta:</strong> ${totaRest}</p>  
 
`;
invoiceForm.insertAdjacentHTML('beforeend', itemHTML);
// Refresca la página después de mostrar los resultados
setTimeout(() => {
    window.location.reload();
}, 2000); // Espera 3 segundos antes de refrescar
}
function generMultiplicacion(){
    const numberOne=parseInt(document.getElementById('numero1').value);
    const numberTwo=parseInt(document.getElementById('numero2').value);
    const invoiceForm=document.getElementById('invoiceForme');

    const totalMult=calculateMult(numberOne,numberTwo);  

     // Mostrar el resultado en el elemento con id 'resultado'
     const resultadoElement = document.getElementById('resultado');
     resultadoElement.innerHTML = `
         <strong>Resultado es:</strong> ${totalMult}
     `;
    const itemHTML = `
    <h2>Suma</h2>
    <p><strong>Dato 1:</strong> ${numberOne}</p>
    <p><strong>Dato 2:</strong> ${numberTwo}</p>
    <p><strong>Multiplicacion:</strong> ${totalMult}</p>  
 
`;
invoiceForm.insertAdjacentHTML('beforeend', itemHTML);
// Refresca la página después de mostrar los resultados
setTimeout(() => {
    window.location.reload();
}, 2000); // Espera 3 segundos antes de refrescar
}
function generDivision(){
    const numberOne=parseInt(document.getElementById('numero1').value);
    const numberTwo=parseInt(document.getElementById('numero2').value);
    const invoiceForm=document.getElementById('invoiceForme');

    const totalDivi=calculateDiv(numberOne,numberTwo);  
     // Mostrar el resultado en el elemento con id 'resultado'
     const resultadoElement = document.getElementById('resultado');
     resultadoElement.innerHTML = `
         <strong>Resultado es:</strong> ${totalDivi}
     `;
    const itemHTML = `
    <h2>Suma</h2>
    <p><strong>Dato 1:</strong> ${numberOne}</p>
    <p><strong>Dato 2:</strong> ${numberTwo}</p>
    <p><strong>Division:</strong> ${totalDivi}</p>  
 
`;
invoiceForm.insertAdjacentHTML('beforeend', itemHTML);
// Refresca la página después de mostrar los resultados
setTimeout(() => {
    window.location.reload();
}, 2000); // Espera 3 segundos antes de refrescar
}



