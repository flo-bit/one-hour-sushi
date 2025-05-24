<script>
	import { game } from '$lib/main.svelte';
	import Scene from '$lib/Scene.svelte';
	import { Canvas } from '@threlte/core';
	import { World } from '@threlte/rapier';
	import { ACESFilmicToneMapping } from 'three';

	import { Howl, Howler } from 'howler';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		const sound = new Howl({
			src: [base + '/audio/music.mp3'],
			loop: true,
			volume: 0.5
		});

		sound.play();
	});
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
			position: [(x - 0.5) * 3.4, 2, 0],
			rotation: game.nextRotation,
			id: game.nextId,
			random: Math.random().toString()
		});

		game.nextRotation = [Math.random() * 6, Math.random() * 6, Math.random() * 6];
		game.nextId = Math.floor(Math.random() * 3);
	}}
/>
