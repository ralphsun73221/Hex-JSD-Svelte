<script lang="ts">
	import "./style/01.scss";
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<main>
	<div class="title">
		<h1>九九乘法表</h1>
		<h2>MULTIPLICATION CHART</h2>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">2</p>
				{#each arr as arr, i}
					<p class="card-content">2 X {arr} = {2 * arr}</p>
				{/each}
			<!-- <div class="card-content">
			</div> -->
		</div>
	</div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
	<div class="card-bcg"></div>
</main>
<footer>
	<p>Copyright © 2019 HexSchool. All rights reserved.</p>
</footer>
