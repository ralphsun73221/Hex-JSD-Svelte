<script lang="ts">
	import Nav from "./Nav.svelte";
</script>

<Nav />
<main>
	<div class="clock-bg">
	</div>
</main>

<style lang="scss">
	$main-color: #293b29;
	$senderay-color: #435947;
	$hour: #EE7E31;
	$minute: #ffffff;
	$seconds: #C1FD50;

	main {
		width: 1200px;
		height: 800px;
		margin: 0 auto;
		background-color: $main-color;
		color: $minute;
	}
</style>
