// const emailButtons = document.querySelectorAll('.email-button');

// emailButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         console.log('Tombol dengan class email-button diklik!');
//     });
// });

$(document).ready(function () {
  $(".email-button").click(function (e) {
    e.preventDefault();

    const sender = $('input[name="sender"]').val();
    const email = $('input[name="email"]').val();
    const subject = $('input[name="subject"]').val();
    const message = $('textarea[name="message"]').val();

    console.log("Sender:", sender);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    const data = {
      service_id: "service_r3yd655",
      template_id: "template_se5bk37",
      user_id: "siLNydFzpGxpd3ez5",
      template_params: {
        sender,
        email,
        subject,
        message,
      },
    };

    $.ajax({
      url: "https://api.emailjs.com/api/v1.0/email/send",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      // success: function (response) {
      //   console.log("Email berhasil dikirim:", response);
      // },
      // error: function (error) {
      //   console.error("Gagal mengirim email:", error);
      // },
      success: function (response) {
        console.log("Email berhasil dikirim:", response);
        // Clear the form fields or hide the form
        $("#emailForm")[0].reset(); // Reset the form
        alert("Email sent successfully!");
      },
      error: function (error) {
        console.error("Gagal mengirim email:", error);
        alert("Error sending email.");
      },
    });
  });
});
