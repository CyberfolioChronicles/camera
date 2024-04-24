<script>
	import { _ } from 'svelte-i18n';
	export let selectedCount = 0;
</script>

<span>{$_('selected', { values: { selectedCount } })}</span>

<style>
	span {
		margin-left: 15px;
		font-size: 15px;
		line-height: 22px;
		color: var(--midnight-surf);
	}
</style>
