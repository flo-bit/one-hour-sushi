<script>
	import { game } from '$lib/main.svelte';
	import Scene from '$lib/Scene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import { ACESFilmicToneMapping } from 'three';
</script>

<div class="h-screen w-screen">
	<Canvas toneMapping={ACESFilmicToneMapping}>
		<World>
			<Scene />
		</World>
	</Canvas>
</div>

<svelte:window
	onpointerup={(event) => {
		// get percentage of the screen that was clicked on x
		const x = event.clientX / window.innerWidth;

		game.particles.push({
			position: [(x - 0.5) * 3.4, 3, 0],
			rotation: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
			id: 0,
			random: Math.random().toString()
		});
	}}
/>
