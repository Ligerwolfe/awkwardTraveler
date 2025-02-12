const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const contactName = document.getElementById("name").value;
  const contactEmail = document.getElementById("email").value;
  const contactMessage = document.getElementById("message").value;

  if (!contactName || !contactEmail || !contactMessage) {
    alert("Please enter contact info.");
  } else {
    alert("Thank you for contacting us.");
  }
});
