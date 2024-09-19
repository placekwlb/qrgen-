$(document).ready(function() {
    $('#generate').click(function() {
        const link = $('#link').val();
        const image = $('#image')[0].files[0];
        const audio = $('#audio')[0].files[0];

        if (link) {
            $('#qrcode').empty();
            $('#qrcode').qrcode(link);

            // Możesz dodać kod do obsługi obrazka i dźwięku tutaj.
            // Na przykład, możesz je przesłać na serwer lub przetworzyć w inny sposób.
        } else {
            alert('Proszę wpisać link.');
        }
    });
});
