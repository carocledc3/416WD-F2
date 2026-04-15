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