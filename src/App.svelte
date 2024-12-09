<script lang="ts">
	import "./style/01.scss";
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<main>
	<div class="card-title">
		<h1>九九乘法表</h1>
		<h2>MULTIPLICATION CHART</h2>
	</div>
	<div class="card">
		<div class="card-body">
			<p class="title">2</p>
			{#each arr as arr, i}
				<p>2 X {arr} = {2 * arr}</p>
			{/each}
		</div>
	</div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
</main>
<footer>
	<p>Copyright © 2019 HexSchool. All rights reserved.</p>
</footer>
