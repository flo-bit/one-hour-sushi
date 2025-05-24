<script>
	import { T } from '@threlte/core';
	import { interactivity, Sky } from '@threlte/extras';
	import Particle from './Particle.svelte';
	import Ground from './Ground.svelte';
	import { game, ids } from './main.svelte';
	import { base } from '$app/paths';
	import GltfModel from './GLTFModel.svelte';

	interactivity();

	let x = $state(0);

	function updateX(event) {
		x = (event.clientX / window.innerWidth - 0.5) * 3.4;
	}
</script>

<T.OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]}>
</T.OrthographicCamera>

<!-- <T.PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]}>
	<OrbitControls />
</T.PerspectiveCamera> -->
<T.DirectionalLight position={[0, 10, 10]} castShadow />

<Ground />
<!-- <Debug /> -->

<svelte:window onpointermove={updateX} onpointerup={updateX} />

{#key game.nextRotation}
	<T.Group scale={1 + game.nextId * 0.2}>
		<T.Mesh position={[x, 2, 0]} rotation={game.nextRotation} >
			<GltfModel source={base + '/models/' + ids[game.nextId]} />
		</T.Mesh>
	</T.Group>
{/key}

{#each game.particles as particle, index (particle.random)}
	<Particle position={particle.position} rotation={particle.rotation} id={particle.id} {index} />
{/each}

<Sky />

<T.Mesh position.z={-10}>
	<T.BoxGeometry args={[100, 100, 1]} />
	<T.MeshStandardMaterial color="#292524" />
</T.Mesh>
