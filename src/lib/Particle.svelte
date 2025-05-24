<script lang="ts">
	import { base } from '$app/paths';
	import AutoColliderWrapper from './AutoColliderWrapper.svelte';
	import GltfModel from './GLTFModel.svelte';
	import { T } from '@threlte/core';
	import { ids, rotate } from './main.svelte';

	let { position, id, index } = $props();
</script>

<T.Group>
	<AutoColliderWrapper {id} {index}>
		<GltfModel
			source={base + `/models/${ids[id]}`}
			{position}
			rotation={[0, rotate[id] ? Math.PI / 2 : 0, 0]}
			scale={1 + id * 0.2}
		/>
	</AutoColliderWrapper>
</T.Group>
