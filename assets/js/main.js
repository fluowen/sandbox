<script type="text/javascript">
function init()  {
	document.getElementById("solutions-link").onclick=function(e) {
		e=e||window.event;
		stopEvent(e);
		location.href="click_counter.php?redirect_to=http://www.google.com/";
		return false;
	}
}
window.onload=init;
</script>