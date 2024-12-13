<script lang="ts">
	import Nav from "./Nav.svelte";
</script>

<Nav />
<main>
	<div class="clock-bg">
		<div class="clock"></div>
	</div>
</main>

<style lang="scss">
	$main-color: #293b29;
	$senderay-color: #435947;
	$hour: #ee7e31;
	$minute: #ffffff;
	$seconds: #c1fd50;

	main {
		width: 1200px;
		height: 800px;
		margin: 0 auto;
		align-content: center;
		background-color: $main-color;
		color: $minute;

		.clock-bg {
			background-image: url("/src/assets/clock-bg.svg");
			width: 500px;
			height: 500px;
			margin: 0 auto;
			/* align-content: center; */
			/* background-color: $senderay-color;
			border-radius: 25%; */

			.clock {
				/* width: 300px;
				height: 300px;
				margin: 0 auto;
				background-color: $main-color;
				border-radius: 100%; */
			}
		}
	}
</style>
