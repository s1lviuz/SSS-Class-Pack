// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// Stacks Vanilla to 64
onEvent('item.modification', event => {
	let itemsStackChangeTo64 = [
		'minecraft:ender_pearl',
		'minecraft:egg',
		'minecraft:snowball'
	]
	itemsStackChangeTo64.forEach(item => {
		event.modify(item, item => {
			item.maxStackSize = 64
		  })
	})

	// Aquaculture Edits
	event.modify('aquaculture:neptunium_sword', item => {
		item.attackDamage = 12
	})
	event.modify('aquaculture:neptunium_helmet', item => {
		item.armorProtection = 4
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.2
	})
	event.modify('aquaculture:neptunium_chestplate', item => {
		item.armorProtection = 9
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.2
	})
	event.modify('aquaculture:neptunium_leggings', item => {
		item.armorProtection = 7
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.2
	})
	event.modify('aquaculture:neptunium_boots', item => {
		item.armorProtection = 4
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.2
	})

	// Nether Exoticism Edits
	event.modify('nethers_exoticism:kiwano_sword', item => {
        item.attackDamage = 7
    })
    event.modify('nethers_exoticism:kiwano_chestplate', item => {
        item.armorProtection = 6
    })
})

