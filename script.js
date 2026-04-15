// CARLOS ROMEO CLEMENTE DEL CASTILLO III
// UNIVERSITY OF THE CORDILLERAS, BSIT-2
// 416WD/CC14/WEB APPLICATION DEVELOPMENT
// 416WD-F2 Product Landing Page Project
// 16 APRIL 2026 THURSDAY


$("#book").submit(function(e) {
    e.preventDefault();
    });

function submitform() {
    var output = "";
    var formData = $("#book").serializeArray();
    for(i = 0; i < 5; i++) {
    output +=         
            formData[i].name + ": " + formData[i].value
            + "\n"
    }
    console.log(output);
    alert(output);
}