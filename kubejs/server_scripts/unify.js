// priority: 1

onEvent('recipes', event => {

    const ingotsOutputRemoveRecipe = [
        'tinkers_reforged:aluminum_nugget_to_ingot',
        'tinkers_reforged:aluminum_ingot_to_block',
        'tinkers_reforged:aluminum_ingot_to_nugget'
    ]
	ingotsOutputRemoveRecipe.forEach(itemID => {
        event.remove({id: itemID})
    })

	const dustToIngotRemoveRecipe = [
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
    dustToIngotRemoveRecipe.forEach(metal => {
        event.remove({id: `tinkers_reforged:${metal}_ingot_from_smelting_${metal}_dust`})
    })
    
})