<script>
	import edit from '$lib/assets/icons/rc_settings.svg';
	import remove from '$lib/assets/icons/rc_settings.svg';
	import RotoclearRoundIconButton from '../buttons/RotoclearRoundIconButton.svelte';

	export let name = 'Category Name';
	export let color = '#ff00cc';
	export let id = 0;
</script>

<div class="category-item" data-id={id} style="--category-color: {color}">
	<span class="category-item__color"> </span>
	<span class="category-item__name">
		{name}
	</span>
	<RotoclearRoundIconButton icon={edit} />
	<RotoclearRoundIconButton icon={remove} />
</div>

<style>
	.category-item {
		position: relative;
		display: flex;
		justify-content: space-between;
		background: transparent;
		align-items: center;
		padding: 10px;
		gap: 5px;
	}
	.category-item::after {
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
	}
	.category-item__color {
		background-color: var(--category-color);
		border: 1px solid var(--polar-white);
		box-shadow: var(--box-shadow);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 5px;
	}
	.category-item__name {
		flex: 1;
	}
</style>
