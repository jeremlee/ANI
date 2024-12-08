$(document).ready(function () {
    var user = sessionStorage.getItem('userDetails');
    
    if (!user) {
        window.location.href = 'login.html';
    }

    if (user.isFarmer == false) {
        window.location.href = 'home.html';
    }


    $('#sell-item-form').on('submit', function (e) {
        e.preventDefault();
        var formData = $(this).serializeArray();
        var jsonData = {};

        $.each(formData, function () {
            jsonData[this.name] = this.value;
        });

/*         $.ajax({
            url: 'http://localhost:5088/api/ItemDTOs',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(jsonData),
            success: function (response) {
                window.location.href = 'home.html';
            },
            error: function (xhr, status, error) {
                $('#sell-item-error').html('An error occurred: ' + error);
            }
        }); */
    });

});