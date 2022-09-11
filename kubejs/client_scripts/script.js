// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide('minecraft:bundle')

	const bygAmetrineItems = [
		'byg:ametrine_gems',
		'byg:ametrine_ore',
		'byg:ametrine_cluster',
		'byg:budding_ametrine_ore',
		'byg:ametrine_block',
		'byg:ametrine_helmet',
		'byg:ametrine_chestplate',
		'byg:ametrine_leggings',
		'byg:ametrine_boots',
		'byg:ametrine_horse_armor'
	]

	const tinkersReforgedMetals = [
		'tinkers_reforged:aluminum_ingot',
		'tinkers_reforged:aluminum_dust',
		'tinkers_reforged:aluminum_nugget',
		'tinkers_reforged:aluminum_block',
		'tcintegrations:bronze_ingot'
	]

	let itemsToHideLists = []
	itemsToHideLists.push(bygAmetrineItems);
	itemsToHideLists.push(tinkersReforgedMetals);

	function jeiHideItems(itemList) {
		itemList.forEach(subList => {
			subList.forEach(item => {
				event.hide(item);
			})
		})
	}

	jeiHideItems(itemsToHideLists);
	
	const dustBlacklist = [
		'duralumin',
		'felsteel',
		'gausum',
		'lavium',
		'qivium',
		'chorus_metal',
		'durasteel',
		'crusteel',
		'yokel',
		'wavy',
	]
	dustBlacklist.forEach(metal => {
		event.hide(`tinkers_reforged:${metal}_dust`);
	})

})