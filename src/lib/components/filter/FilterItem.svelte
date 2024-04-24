<script>
	export let name = 'Category Name';
	export let color = '#ff00cc';
	export let id = 0;
	export let selected = false;
</script>

<div class="filter-item" data-id={id} style="--category-color: {color}" class:selected>
	<span class="filter-item__color"> </span>
	<span class="filter-item__name">
		{name}
	</span>
</div>

<style lang="scss">
	.filter-item {
		position: relative;
		display: flex;
		justify-content: space-between;
		background: transparent;
		align-items: center;
		padding: 15px;
		gap: 5px;
		backdrop-filter: blur(10px);
		border-radius: 25px;
		&.selected {
			color: var(--polar-white);
			backdrop-filter: none;
		}
	}

	.filter-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: var(--midnight-surf);
		opacity: 0.2;
		border-radius: 25px;
		box-shadow: 0px 13px 30px #00000029;
		filter: brightness(116%) opacity(0.69);
	}
	.filter-item.selected::before {
		opacity: 1;
		filter: none;
	}
	.filter-item__color {
		position: relative;
		background-color: var(--category-color);
		border: 1px solid var(--polar-white);
		box-shadow: var(--box-shadow);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 5px;
	}
	.filter-item__name {
		position: relative;
		flex: 1;
	}
</style>
