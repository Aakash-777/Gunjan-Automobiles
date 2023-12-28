document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.querySelector(".quote-pop").style.display = "none";
    document.getElementById("message").textContent = "Submitting...";
    document.getElementById("message").style.display = "flex";
    document.getElementById("quotation-submit").disabled = true;

    // Collect the form data
    var formData = new FormData(this);
    var keyValuePairs = [];
    for (var pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    const currentDate = new Date();

    // Get date components
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Get time components
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    // Create a string in the desired format (e.g., "DD-MM-YYYY_____HH:MM:SS")
    const currentDateTimeString = `${day}-${month}-${year}_____${hours}:${minutes}:${seconds}`;

    keyValuePairs.push("Time="+currentDateTimeString);
    // console.log(keyValuePairs);

    var formDataString = keyValuePairs.join("&");

    // Send a POST request to your Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbwFMQ6pltFgkVeOs-3lTIoJ_zZyT8TXvwD7p2jqmTD_hsV9WOldeWGLgzydpdNvIP7o/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        // Check if the request was successful
        if (response) {
          return response; // Assuming your script returns JSON response
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .then(function (data) {
        // Display a success message
        document.getElementById("message").textContent =
          "Data submitted successfully!";
        console.log("Data submitted successfully!");
        document.getElementById("message").style.display = "flex";
        document.getElementById("message").style.backgroundColor = "lightgreen";
        document.getElementById("message").style.borderColor = "black";
        document.getElementById("message").style.color = "black";
        document.getElementById("quotation-submit").disabled = false;
        document.getElementById("form").reset();

        setTimeout(function () {
          document.getElementById("message").textContent = "";
          document.getElementById("message").style.display = "none";
        }, 2600);
      })
      .catch(function (error) {
        // Handle errors, you can display an error message here
        console.error(error);
        document.getElementById("message").textContent =
          "An error occurred while submitting the form.";
        document.getElementById("message").style.display = "flex";
      });
  });