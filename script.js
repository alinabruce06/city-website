let lastModified = new Date(document.lastModified);
document.body.innerHTML += "<p>This page was modified on " + lastModified.toDateString() + ".</p>";


function compareInputs() {
    const val1 = document.getElementById("enterEmail").value.trim();
    const val2 = document.getElementById("confirmEmail").value.trim();

    if (val1 !== val2) {
        window.alert("Emails do not match. This contact form is just for show anyways.");
    } else {
        window.alert("Nice try! This contact form is just for show.")
    }
    }
}
