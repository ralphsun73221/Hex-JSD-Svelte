<script lang="ts">
	import Nav from "./Nav.svelte";
</script>

<Nav />
<main>
	<div class="clock-bg">
		<div class="hour"></div>
		<div class="minute"></div>
		<div class="second"></div>
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
			width: 500px;
			height: 500px;
			background-image: url("/src/assets/clock-bg.svg");
			margin: 0 auto;
			position: relative;

			.hour {
				width: 72px;
				height: 8px;
				background-image: url("/src/assets/hour-hand.svg");
				position: absolute;
				left: 20px;
			}
			
			.minute {
				width: 8px;
				height: 72px;
				background-image: url("/src/assets/minute-hand.svg");
			}
			
			.second {
				width: 12px;
				height: 126px;
				background-image: url("/src/assets/second-hand.svg");
			}
		}
	}
</style>
