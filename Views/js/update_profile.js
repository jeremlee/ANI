$(document).ready(function () {
  var user = sessionStorage.getItem("userDetails");

  if (!user) window.location.href = "login.html";

  user = JSON.parse(user);

  $("#username").val(user.username);
  $("#firstName").val(user.firstName);
  $("#lastName").val(user.lastName);
  $("#phoneNumber").val(user.phoneNumber);
  $("#address").val(user.address);
    $("#isFarmer").prop("checked", user.isFarmer);
    $('#profile-picture').attr('src', user.profilePictureUrl);
    $("#profile-picture").on("click", function () {
        window.location.href = "profile.html";
    });
    $('#goToCart').on('click', function () {
        window.location.href = 'checkout.html';
    });
    let cart = sessionStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    $('#cart-count').html(cart.length);

  $("#update-profile-form").submit(function (e) {
    e.preventDefault();

    var formData = new FormData(this);
    formData.set("isFarmer", $("#isFarmer").is(":checked"));

    $.ajax({
      url: "http://localhost:5088/api/UserDTOs/" + user.userID,
      type: "PUT",
      contentType: false,
      processData: false,
      data: formData,
      success: function (response) {
        sessionStorage.setItem("userDetails", JSON.stringify(response));
        window.location.href = "profile.html";
      },
      error: function (response) {
        $("#error-messages").html(response.responseText);
      },
    });
  });
  /*
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("translate-x-full");
    document.getElementById("mobile-menu").classList.add("translate-x-0");
  });

  document.getElementById("menu-close").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("translate-x-0");
    document.getElementById("mobile-menu").classList.add("translate-x-full");
  }); para unsa ni oy*/
});
