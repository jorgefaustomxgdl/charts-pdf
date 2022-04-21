import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';

export function BuildPdf(){
    // imagen tomada del sitio icons8.com
    const imagen = "data:image/png;base64,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"
    
    const doc = new jsPDF({
        encryption : {
            userPassword : 'HolaMundo',
            userPermissions: ['print','copy', 'modify'], 
        }
    });
    doc.addImage(imagen,"jpg",1,1,96,96, null,"fast")
    doc.setFontSize(20); // definir el tipo de letra
    doc.setTextColor(255,128,0) // definir el color del texto
    doc.text('Hello world!', 10, 10);
    doc.setTextColor(0,0,0) // definir el color del texto
    doc.text('Otro texto!', 20, 20);
    doc.addPage()
    // visualizar una tabla con datos
    autoTable(doc, {
       head: [['Fecha', 'Transaccion', 'Monto']],
       theme: 'grid',
       body: [
           ['01/01/2020', '+ Deposito', '$100'],
           ['01/02/2020', '- Retiro',   '$890'],
           ['01/15/2020', '+ Deposito', '$90'],
           ['01/29/2020', '- Retiro', '$500'],
           ['01/29/2020', '- Retiro', '$900'],
       ]
    })
    // nombre del archivo a descargar
    doc.save('reporteFinanciero.pdf');
}