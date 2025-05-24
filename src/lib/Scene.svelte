<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity, OrbitControls, Sky } from '@threlte/extras';
	import { Debug } from '@threlte/rapier';
	import { Spring } from 'svelte/motion';
	import Particle from './Particle.svelte';
	import Ground from './Ground.svelte';
	import { game } from './main.svelte';
	import { Audio, AudioListener } from '@threlte/extras';
	import { base } from '$app/paths';

	interactivity();

	let x = $state(0);
</script>

<T.OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]}>
	<AudioListener />
</T.OrthographicCamera>

<!-- <T.PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]}>
	<OrbitControls />
</T.PerspectiveCamera> -->

<Audio autoplay loop src={base + '/audio/music.mp3'} />

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<Ground />
<!-- <Debug /> -->

<svelte:window onpointermove={(event) => {
	x = ((event.clientX / window.innerWidth) - 0.5) * 3.4;
}} />


<T.Mesh position={[x, 3, 0]}>
	<T.SphereGeometry args={[0.1, 32, 32]} />
	<T.MeshStandardMaterial color="red" />
</T.Mesh>


{#each game.particles as particle, index (particle.random)}
	<Particle position={particle.position} rotation={particle.rotation} id={particle.id} {index} />
{/each}

<Sky />
