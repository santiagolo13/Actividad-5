function downloadPDF() {
    const invoice = document.getElementById("invoice");
    const options = {
        margin: 0.5, // PDF margin
        filename: 'factura_digital.pdf',
        image: { type: 'png', quality: 100 }, // using PNG for better quality
        html2canvas: { scale: 4 }, // increase scale for higher resolution
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } // A4 size for higher resolution
    };
    html2pdf().set(options).from(invoice).save();
}
