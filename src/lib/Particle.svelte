<script lang="ts">
	import { base } from '$app/paths';
	import AutoColliderWrapper from './AutoColliderWrapper.svelte';
	import GltfModel from './GLTFModel.svelte';
	import { T } from '@threlte/core';
	import { ids } from './main.svelte';

	let { position, rotation, id, index } = $props();
</script>

<T.Group>
	<AutoColliderWrapper {id} {index}>
		<GltfModel source={base + `/models/${ids[id]}`} {position} {rotation} scale={1 + id * 0.2}/>
	</AutoColliderWrapper>
</T.Group>
