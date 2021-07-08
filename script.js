<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
<script>
$("#nav a").click(function(e){
    e.preventDefault();
    var toUpdate = $(this).attr('data-infoto');
    $("#" + toUpdate).html($(this).text());
});
</script>
