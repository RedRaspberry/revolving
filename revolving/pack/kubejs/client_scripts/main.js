// Visit the wiki for more info - https://kubejs.com/


const toRemove = [
    'immersiveengineering:sawmill',
    'immersiveengineering:refinery',
    'immersiveengineering:mixer_potions',
    'immersiveengineering:mixer',
    'immersiveengineering:metal_press',
    'immersiveengineering:bottling_potions',
    'immersiveengineering:bottling_machine',
    'immersiveengineering:bottling_buckets',
    'immersiveengineering:blast_furnace_fuel',
    'immersiveengineering:blast_furnace',
    'immersiveengineering:alloy'
];

RecipeViewerEvents.removeCategories(event => {
    for (var a of toRemove) {
        event.remove(a)
    } 
})

//this is fucking stupid
ClientEvents.lang('en_us', event => {
  event.renameItem('minecraft:iron_ingot', 'Pig Iron Ingot')
  event.renameItem('createdeco:industrial_iron_ingot', 'Wrought Iron Ingot')
  event.renameItem('railways:track_create_andesite_wide', 'Wide Train Track')
  event.renameItem('railways:track_create_andesite_narrow', 'Narrow Train Track')
  event.renameItem('createdeco:industrial_iron_sheet', 'Wrought Iron Sheet')
  event.renameItem('createdeco:industrial_iron_nugget', 'Wrought Iron Nugget')
  event.renameItem('createdeco:industrial_iron_coin', 'Wrought Iron Coin')
  event.renameItem('createdeco:industrial_iron_coinstack', 'Wrought Iron Coin Stack')
  event.renameItem('createdeco:industrial_iron_window', 'Wrought Iron Window')
  event.renameItem('createdeco:industrial_iron_window_pane', 'Wrought Iron Window Pane')
  event.renameItem('createdeco:industrial_iron_bars_overlay', 'Wrought Iron Bars Overlay')
  event.renameItem('createdeco:industrial_iron_bars', 'Wrought Iron Bars')
  event.renameItem('createdeco:industrial_iron_mesh_fence', 'Wrought Iron Mesh Fence')
  event.renameItem('createdeco:industrial_iron_catwalk', 'Wrought Iron Catwalk')
  event.renameItem('createdeco:industrial_iron_catwalk_stairs', 'Wrought Iron Catwalk Stairs')
  event.renameItem('createdeco:industrial_iron_catwalk_railing', 'Wrought Iron Catwalk Railing')
  event.renameItem('createdeco:industrial_iron_support_wedge', 'Wrought Iron Support Wedge')
  event.renameItem('createdeco:industrial_iron_ladder', 'Wrought Iron Ladder')
  event.renameItem('createdeco:industrial_iron_hull', 'Wrought Iron Train Hull')
  event.renameItem('createdeco:industrial_iron_support', 'Wrought Iron Support')
  event.renameItem('createdeco:yellow_industrial_iron_lamp', 'Yellow Wrought Iron Cage Lamp')
  event.renameItem('createdeco:red_industrial_iron_lamp', 'Red Wrought Iron Cage Lamp')
  event.renameItem('createdeco:green_industrial_iron_lamp', 'Green Wrought Iron Cage Lamp')
  event.renameItem('createdeco:blue_industrial_iron_lamp', 'Blue Wrought Iron Cage Lamp')
  event.renameItem('createdeco:industrial_iron_sheet_metal', 'Wrought Iron Sheet Metal')
  event.renameItem('createdeco:industrial_iron_door', 'Wrought Iron Door')
  event.renameItem('createdeco:locked_industrial_iron_door', 'Locked Wrought Iron Door')
  event.renameItem('createdeco:industrial_iron_trapdoor', 'Wrought Iron Trapdoor')
  event.renameItem('create:industrial_iron_block', 'Block of Wrought Iron')
  event.renameItem('create:industrial_iron_window', 'Wrought Iron Window')
  event.renameItem('create:industrial_iron_window_pane', 'Wrought Iron Window Pane')
  event.renameItem('get_creative:industrial_iron_handle', 'Wrought Iron Handle')

  event.renameItem('create:weathered_iron_block', 'Block of Weathered Wrought Iron')
  event.renameItem('create:weathered_iron_window', 'Weathered Wrought Iron Window')
  event.renameItem('create:weathered_iron_window_pane', 'Weathered Wrought Iron Window Pane')

  event.renameItem('create:precision_mechanism', "Clockwork Mechanism")
  event.renameItem('tfmg:steel_mechanism', "Bulky Mechanism")

  event.renameItem('tfmg:circuit_board', 'Electronic Circuit')
  event.renameItem('chemica:electronic_circuit', 'Advanced Circuit')
  event.renameItem('chemica:advanced_circuit_board', 'Processing Unit')
})

RecipeViewerEvents.removeEntries("item", event => {

  let a = ccawhitelist.reduce((thing, cur) => {return thing.except(Ingredient.of(cur))}, Ingredient.of('@createadditon'))
  event.remove(a)
  event.remove(Ingredient.of("@createaddition"))
})
