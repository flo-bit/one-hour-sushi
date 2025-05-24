<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity, OrbitControls, Sky } from '@threlte/extras';
	import { Debug } from '@threlte/rapier';
	import { Spring } from 'svelte/motion';
	import Particle from './Particle.svelte';
	import Ground from './Ground.svelte';
	import { game } from './main.svelte';

	interactivity();
</script>

<T.OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />

<!-- <T.PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]}>
	<OrbitControls />
</T.PerspectiveCamera> -->

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<Ground />
<!-- <Debug /> -->

{#each game.particles as particle, index (particle.random)}
	<Particle position={particle.position} rotation={particle.rotation} id={particle.id} {index} />
{/each}

<Sky />
