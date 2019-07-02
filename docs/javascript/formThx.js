$(document).ready(function () {
    $("#googleForm").submit(function (event) {
        var name = $("#googleForm input[id=name]").val();
        var email = $("#googleForm input[id=email]").val();
        var message = $("#googleForm textarea[id=message]").val();

        $.ajax({
            url: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdjVHtfvpjzkCaDghJOnur6L1U44HyVLgrgbTOvtyrkZAplgQ/formResponse",
            data: {
                "entry.459134805": name,
                "entry.490746179": email,
                "entry.1823922308": message
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#error').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});
