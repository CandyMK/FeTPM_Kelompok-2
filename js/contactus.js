function showPopup() {
    const popup = document.querySelector(".image-popup");
    popup.classList.remove("hide");
    popup.classList.add("show");
    popup.style.visibility = "visible";
}

function hidePopup() {
    const popup = document.querySelector(".image-popup");
    popup.classList.remove("show");
    popup.classList.add("hide");
    setTimeout(() => {
        popup.style.visibility = "hidden";
    }, 500);
}

function handleSubmit() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;


    const submissionData = { name, email, subject, message };
    localStorage.setItem("formSubmission", JSON.stringify(submissionData));

    console.log("Stored Data:", submissionData);

    showPopup();

    setTimeout(() => {
        hidePopup();
    }, 2500);
}