<script lang="ts">
	import { base } from '$app/paths';
	import AutoColliderWrapper from './AutoColliderWrapper.svelte';
	import GltfModel from './GLTFModel.svelte';
	import { T } from '@threlte/core';

	let { position, rotation, id, index } = $props();

	let ids = [
		'Food_Chukaman.gltf',
		'Food_Dango.gltf',
		'Food_EbiNigiri.gltf',
		'Food_Gyoza.gltf',
		'Food_MaguroNigiri.gltf'
	];
</script>

<T.Group {position} {rotation}>
	<AutoColliderWrapper {id} {index}>
		<GltfModel source={base + `/models/${ids[id]}`} />
	</AutoColliderWrapper>
</T.Group>
