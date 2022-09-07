// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide('minecraft:bundle')

	let bygAmetrineItems = [
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
	bygAmetrineItems.forEach(item => {
		event.hide(item)
	})
})