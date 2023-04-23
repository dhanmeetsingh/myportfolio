(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    // add event listener for contact form submit button
    document.querySelector(".submit-form").addEventListener("submit", event => {

      event.preventDefault(); // prevent default form submit behavior
  
      // get form values
      const name = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const subject = document.querySelector('input[type="text"][placeholder="ENTER SUBJECT"]').value;
      const message = document.querySelector('textarea[placeholder="Message Here..."]').value;
  
      // send form data to server
      fetch('/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
  })();
  