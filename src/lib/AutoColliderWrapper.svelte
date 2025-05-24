<script lang="ts">
	import { Suspense } from '@threlte/extras';
	import { AutoColliders, RigidBody } from '@threlte/rapier';
	import { Group, Mesh, Vector3 } from 'three';
	import { T } from '@threlte/core';
	import { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat';
	import { game } from './main.svelte';

	let ref:
		| AutoColliders<{
				density?: never;
				mass?: never;
				centerOfMass?: never;
				principalAngularInertia?: never;
				angularInertiaLocalFrame?: never;
		  }>
		| undefined = $state(undefined);

	let { children, id, index } = $props();

	let group = $state<Group | undefined>(undefined);

	let rigidBody = $state<RapierRigidBody | undefined>(undefined);

	let collision = $state(false);
</script>

<T.Group bind:ref={group} scale={1 + id * 0.2}>
	<RigidBody
	enabledTranslations={[true, true, false]}
		bind:rigidBody
		type={'dynamic'}
		oncontact={(event) => {
			if (event.targetRigidBody?.userData.id === id && !collision) {
				collision = true;

				let higherIndex = Math.max(index, event.targetRigidBody.userData.index);
				// only if we are the lower index particle
				if (higherIndex !== index) {
					console.log('contact with self');
					return;
				}

				// get median position of the two particles
				const medianPosition = new Vector3(
					rigidBody.translation().x,
					rigidBody.translation().y,
					rigidBody.translation().z
				);

				let lowerIndex = Math.min(index, event.targetRigidBody.userData.index);

				console.log(higherIndex, lowerIndex);
				// remove the two particles
				game.particles = game.particles.filter(
					(particle, index) => index !== higherIndex && index !== lowerIndex
				);

				// spawn a new particle at the median position
				game.particles.push({
					position: [medianPosition.x, medianPosition.y, medianPosition.z],
					rotation: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
					id: id + 1,
					random: Math.random().toString()
				});
			}
		}}
		userData={{ id, index }}
		ccd
	>
		<AutoColliders shape="convexHull" bind:this={ref}>
			<Suspense
				onload={() => {
					ref?.refresh?.();

					group?.traverse((child) => {
						if (child instanceof Mesh) {
							child.castShadow = true;
							child.receiveShadow = true;

							child.material.roughness = 1;
						}
					});
				}}
			>
				{@render children?.({ ref })}
			</Suspense>
		</AutoColliders>
	</RigidBody>
</T.Group>
