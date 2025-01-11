// Initialize datepicker with theme support
$(document).ready(function () {
    $("#datepicker").datepicker({
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
        selectOtherMonths: true,
        beforeShow: function (input, inst) {
            // Set theme on datepicker open
            const theme = document.documentElement.getAttribute('data-theme');
            inst.dpDiv.attr('data-theme', theme);
        }
    });

    // Set initial theme on datepicker
    const initialTheme = document.documentElement.getAttribute('data-theme');
    $('.ui-datepicker').attr('data-theme', initialTheme);
});