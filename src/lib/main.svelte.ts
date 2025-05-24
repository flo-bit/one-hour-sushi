export const game: {
	particles: {
		position: [number, number, number];
		id: number;
		random: string;
	}[];
	nextId: number;
	playPop: boolean;
} = $state({
	particles: [],
	nextId: 0,
	playPop: false
});

export const ids = [
	'Food_Chukaman.gltf',
	'Food_Wasabi.gltf',

	'Food_Gyoza.gltf',
	'Food_EbiNigiri.gltf',

	'Food_MaguroNigiri.gltf',
	'Food_OctopusNigiri.gltf',

	'Food_Dango.gltf',

	'Food_Onigiri.gltf',
	'Food_SalmonNigiri.gltf',
	'Food_SalmonRoll.gltf',
	'Food_Roll.gltf',
	'Food_TamagoNigiri.gltf'
];

export const rotate = [true, true, true, true, true, true, false, false, true, false, false, true];