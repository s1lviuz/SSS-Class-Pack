// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

// Listen to player login event
onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  event.player.give('ftbquests:book')
	}
})

onEvent('recipes', event => {
	event.shaped('3x minecraft:clay_ball', [
		'S  '
	  ], {
		S: 'minecraft:clay'
	})

	event.shaped('16x minecraft:stick', [
		'  S',
		'  S'
		], {
		S: '#minecraft:logs'
	})

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
		event.remove({output: item})
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})