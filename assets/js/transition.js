$(document).ready(function() {
    $('#streaming').hide();
})
$(document).ready(function() {
    $('#stats').hide();
})
$(document).ready(function() {
    $('#poster').hide();
})
$(document).ready(function() {
    $('#related').hide();
})
$(document).ready(function() {
    $('#searchBtn').on('click', function () {
        $('#streaming').toggle();
        $('#stats').toggle();
        $('#poster').toggle();
        $('#related').toggle();
    })
})