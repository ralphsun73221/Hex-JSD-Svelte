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
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">3</p>
				{#each arr as arr, i}
					<p class="card-content">3 X {arr} = {3 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">4</p>
				{#each arr as arr, i}
					<p class="card-content">4 X {arr} = {4 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">5</p>
				{#each arr as arr, i}
					<p class="card-content">5 X {arr} = {5 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">6</p>
				{#each arr as arr, i}
					<p class="card-content">6 X {arr} = {6 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">7</p>
				{#each arr as arr, i}
					<p class="card-content">7 X {arr} = {7 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">8</p>
				{#each arr as arr, i}
					<p class="card-content">8 X {arr} = {8 * arr}</p>
				{/each}
		</div>
	</div>
	<div class="card-bcg">
		<div class="card-body">
			<p class="card-title">9</p>
				{#each arr as arr, i}
					<p class="card-content">9 X {arr} = {9 * arr}</p>
				{/each}
		</div>
	</div>
</main>
<footer>
	<p>Copyright © 2019 HexSchool. All rights reserved.</p>
</footer>
