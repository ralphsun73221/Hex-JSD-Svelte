<script lang="ts">
	import "./style/01.scss";

	// 定義一串數字陣列
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	// 將 card-content 裡面會使用到的資料統一用函式處理
	const CARD_CONTENT = (num: number, arr: number[]) => {
		console.log("目前的 num:", num); // 會看到是 2,3,4...9
		console.log("完整的 arr:", arr); // 會看到是 [1,2,3,4,5,6,7,8,9]
		return arr.map((item) => `${num} X ${item} = ${num * item}`);
	};
</script>

<main>
	<div class="title">
		<div class="line">
			<span class="corner x-left">x</span>
			<span class="line-content"></span>
			<span class="corner x-left">x</span>
		</div>
		<div class="title-content">
			<h1>九九乘法表</h1>
			<h2>MULTIPLICATION CHART</h2>
		</div>
		<div class="line">
			<span class="corner x-left">x</span>
			<span class="line-content"></span>
			<span class="corner x-left">x</span>
		</div>
	</div>
	{#each arr.slice(1) as num}
		<div class="card-bcg">
			<div class="card-body">
				<p class="card-title">{num}</p>
				{#each CARD_CONTENT(num, arr) as content}
					<p class="card-content">{content}</p>
				{/each}
			</div>
		</div>
	{/each}
</main>
<footer>
	<p>Copyright © 2024 HexSchool. All rights reserved.</p>
</footer>
