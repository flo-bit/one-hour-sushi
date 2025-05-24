<script lang="ts">
	import { T } from '@threlte/core';
	import { AutoColliders } from '@threlte/rapier';
</script>

<T.Group rotation.y={Math.PI / 2}>
	<T.Group position={[0, -1, 0]}>
		<AutoColliders shape={'cuboid'}>
			<T.Mesh receiveShadow>
				<T.BoxGeometry args={[4, 0.4, 4]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
		</AutoColliders>
	</T.Group>

	<!-- walls -->
	<T.Group position={[0, 1, 2]}>
		<AutoColliders shape={'cuboid'}>
			<T.Mesh receiveShadow>
				<T.BoxGeometry args={[4, 4, 0.4]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
		</AutoColliders>
	</T.Group>
	<T.Group position={[0, 1, -2]}>
		<AutoColliders shape={'cuboid'}>
			<T.Mesh receiveShadow>
				<T.BoxGeometry args={[4, 4, 0.4]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
		</AutoColliders>
	</T.Group>
</T.Group>
