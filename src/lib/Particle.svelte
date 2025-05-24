<script lang="ts">
	import { base } from '$app/paths';
	import AutoColliderWrapper from './AutoColliderWrapper.svelte';
	import GltfModel from './GLTFModel.svelte';
	import { T } from '@threlte/core';
	import { ids } from './main.svelte';

	let { position, rotation, id, index } = $props();
</script>

<T.Group {position} {rotation}>
	<AutoColliderWrapper {id} {index}>
		<GltfModel source={base + `/models/${ids[id]}`} />
	</AutoColliderWrapper>
</T.Group>
