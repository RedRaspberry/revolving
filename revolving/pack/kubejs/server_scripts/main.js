
ServerEvents.recipes(event => {

event.remove({ id: 'dimdoors:gold_door' })

})

const multiblocksToDisable = [
    "immersiveengineering:multiblocks/auto_workbench",
    "immersiveengineering:multiblocks/excavator",
    "immersiveengineering:multiblocks/bucket_wheel",
    "immersiveengineering:multiblocks/assembler",
    "immersiveengineering:multiblocks/bottling_machine",
    "immersiveengineering:multiblocks/blast_furnace",
    "immersiveengineering:multiblocks/advanced_blast_furnace",
    "immersiveengineering:multiblocks/mixer",
    "immersiveengineering:multiblocks/refinery",
    "immersiveengineering:multiblocks/sawmill",
    "immersiveengineering:multiblocks/alloy_smelter",
    //"immersivepetroleum:multiblocks/distillationtower",
    "immersiveengineering:multiblocks/metal_press"
]

IEEvents.createStructure(event => {
    if (multiblocksToDisable.includes(event.getMultiblock().getUniqueName().toString())) {
        event.player.sendSystemMessage(Component.empty().append(event.getMultiblock().getDisplayName()).append(" Disabled"))
        event.setCanceled(true)
    }
    if (event.getMultiblock().getUniqueName().toString() == "immersiveengineering:multiblocks/crusher" && event.getWorld().getDimension() != "minecraft:the_end") {
      event.player.sendSystemMessage("Formation canceled: The magnetosphere in this dimension is too weak!")
    }
})

//hide in emi
const categoriesToRemove = [
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
    'immersiveengineering:alloy',
    'create:fan_blasting',
    'create:polarizing',
    'create:winding',
    'create:casting'
    
];

RecipeViewerEvents.removeCategories(event => {
    for (var a of categoriesToRemove) {
        //event.remove(a)
    } 
})

//this doesnt include all structures, only the ones enabled in the pack, because im lazy
const physicsBlacklist = [
    "immersiveengineering:arc_furnace",
    "immersiveengineering:crusher",
    "immersiveengineering:squeezer",
    "immersiveengineering:fermenter",
    "immersiveengineering:chunk_loader",
    "immersiveengineering:refinery",
    "immersiveengineering:radio_tower",
    "immersiveengineering:diesel_generator",
    "immersiveengineering:tank",
    "immersiveengineering:squeezer",
    "immersiveengineering:fermenter",
    "immersiveengineering:silo",
    "immersiveengineering:lightning_rod",
    "immersivepetroleum:hydrotreater",
    "immersivepetroleum:oiltank",
    "immersivepetroleum:pumpjack",
    "immersivepetroleum:derrick",
    "immersivepetroleum:distillation_tower",
    "immersivepetroleum:coker_unit"
]
const lightWhitelist = [
  "/minecraft:.*froglight/",
  "tfmg:gas_lamp"
]
ServerEvents.tags('block', event => {
    physicsBlacklist.forEach(blacklist => {
    event.add('simulated:non_movable', blacklist)
    })
    lightWhitelist.forEach(whitelist => {
    event.add('stupidbullshit:good_light', whitelist)
    })
  })
ServerEvents.tags('fluid', event => {
  event.add('tfmg:flammable', 'createdieselgenerators:gasoline')
})

//this might need to get changed if sable ever switches to f64 and pushes the shipyard further out
//also it will break if you go past the shipyard but nobody will ever do that
IEEvents.createStructure(event => {
    if (event.getPos().getX() >= 20480000) {
        event.player.sendSystemMessage("IE/IP multiblocks cannot be built on sublevels!")
        event.setCanceled(true)
    }
})

//create compat
ServerEvents.recipes(event => {
    const light = 'kubejs:incomplete_light_engineering'
    const heavy = 'kubejs:incomplete_light_engineering'
    const redstone = 'kubejs:incomplete_light_engineering'
    const iron = 'kubejs:incomplete_light_engineering'
    const steel = 'kubejs:incomplete_light_engineering'

    const test = 'kubejs:incomplete_test_item'
  event.recipes.create.sequenced_assembly(
    [CreateItem.of("minecraft:dirt", 1)], "minecraft:stone", [event.recipes.createvintageneoforged.curving_concave(test, test)]).transitionalItem(test).loops(17)


  event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('immersiveengineering:light_engineering', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'create:andesite_casing', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        event.recipes.create.cutting(light, light),
        event.recipes.create.deploying(light, [light, 'immersiveengineering:component_iron']),
        event.recipes.create.deploying(light, [light, 'create:precision_mechanism']),
        event.recipes.create.deploying(light, [light, Ingredient.of('#c:wires/copper')]),
        event.recipes.create.deploying(light, [light, 'create:wrench']).keepHeldItem()
      ]
    )
    .transitionalItem(light)
    .loops(6)

    event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('immersiveengineering:rs_engineering', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'powergrid:conductive_casing', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        event.recipes.create.cutting(redstone, redstone),
        event.recipes.create.filling(redstone, [redstone, Fluid.of('immersiveengineering:redstone_acid', 250)]),
        event.recipes.create.deploying(redstone, [redstone, 'create:transmitter']),
        event.recipes.create.deploying(redstone, [redstone, 'powergrid:electrical_gizmo']),
        event.recipes.create.deploying(redstone, [redstone, 'create:wrench']).keepHeldItem()
      ]
    )
    .transitionalItem(redstone)
    .loops(6)

    event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('immersiveengineering:component_iron', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'minecraft:copper_ingot', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        event.recipes.create.deploying(iron, [iron, 'createdeco:industrial_iron_sheet']),
        event.recipes.create.pressing(iron, iron),
        event.recipes.create.pressing(iron, iron),
        event.recipes.create.pressing(iron, iron)
      ]
    )
    .transitionalItem(iron)
    .loops(4)


    event.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('immersiveengineering:component_steel', 1), // Main output, will appear in JEI as the result
      ],
      // Input:
      'create:brass_ingot', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        event.recipes.create.deploying(steel, [steel, Ingredient.of('#c:plates/steel')]),
        event.recipes.create.pressing(steel, steel),
        event.recipes.create.pressing(steel, steel),
        event.recipes.create.pressing(steel, steel)
      ]
    )
    .transitionalItem(steel)
    .loops(4)
    
    
    event.recipes.create.mixing('immersiveengineering:resonanz_engineering', ['immersiveengineering:rs_engineering', 'minecraft:echo_shard', Fluid.of('tfmg:sulfuric_acid', 500)]).superheated()


    //
    event.recipes.createmetallurgy.casting_in_basin('tfmg:hardened_planks', [Fluid.sizedIngredientOf('#c:creosote', 200), Ingredient.of("#minecraft:planks")], 1800, true)
})

// event.replaceInput(
//   { mod: 'railways', type: 'create:sequenced_assembly' }// Arg 1: the filter
//   'minecraft:stick',                    // Arg 2: the item to replace
//   Ingredient.of('#minecraft:saplings')  // Arg 3: the item to replace it with 
//   // Do /kjs hand with the items you want to use to see all their tags.
// )

const assemblyallowlist = [
  Ingredient.of('#railways:conductor_caps'),
  //'railways:track_create_andesite_narrow',
  //'railways:track_create_andesite_wide',
  'railways:track_monorail'
]
ServerEvents.recipes(event => {
event.remove({ not: { output: assemblyallowlist }, mod: 'railways', type: 'create:sequenced_assembly' })


//TODO: figure out a way to get a map of track block to "type" (basically, wide ender track would return end brick slab, narrow birch track would return birch plank slab)
//use this to register shapeless recipes that convert "andesite" track to other types for decoration 

//const tracks = Ingredient.of('/railways:track_.*/')
// event.shapeless()
// tracks.forEach(track => {
// 		event.shapeless(`kubejs:$==={track}===_plate`, [`minecraft:$==={metal}===_ingot`, 'kubejs:hammer'])
// 			.damageIngredient('kubejs:hammer')
// 	})

//for now just hardcode recipes for phantom and tieless tracks
event.shapeless(Item.of('railways:track_phantom', 8), ['minecraft:phantom_membrane', '8x create:track'])
event.shapeless(Item.of('railways:track_phantom_narrow', 8), ['minecraft:phantom_membrane', '8x railways:track_create_andesite_narrow'])
event.shapeless(Item.of('railways:track_phantom_wide', 8), ['minecraft:phantom_membrane', '8x railways:track_create_andesite_wide'])
event.recipes.create.cutting(Item.of('railways:track_tieless'), 'create:track')
event.recipes.create.cutting(Item.of('railways:track_tieless_narrow'), 'railways:track_create_andesite_narrow')
event.recipes.create.cutting(Item.of('railways:track_tieless_wide'), 'railways:track_create_andesite_wide')



})


//copper rework
RecipeViewerEvents.removeEntriesCompletely('item', event => {
  event.remove(Ingredient.of('#caverns_and_chasms:copper_ingots').except('minecraft:copper_ingot'))
})

// THREE DIFFERENT WAYS OF DOING THE SAME THING
//YOU CANT USE Ingredient.of INSIDE OF "INPUT" IN A RECIPEFILTER DESPITE "INPUT" TAKING AN $INGREDIENT BECAUSE KUBEJS IS UNDOCUMENTED DOGSHIT
ServerEvents.recipes(event => {
event.remove({ input: '#caverns_and_chasms:copper_ingots', not: {input: 'minecraft:copper_ingot'}})

Ingredient.of('#caverns_and_chasms:copper_ingots').except(Ingredient.of('minecraft:copper_ingot')).getStackArray().forEach(element => {
  event.remove({ output: Item.of(element)})
});

const replacewithstorageblock = [
  'caverns_and_chasms:copper_boots',
  'caverns_and_chasms:copper_leggings',
  'caverns_and_chasms:copper_chestplate', 
  'caverns_and_chasms:copper_helmet', 
  'caverns_and_chasms:copper_sword', 
  'caverns_and_chasms:copper_hoe', 
  'caverns_and_chasms:copper_axe', 
  'caverns_and_chasms:copper_pickaxe',
  'caverns_and_chasms:copper_shovel', 
  'createdieselgenerators:chemical_sprayer', 
  'tfmg:copper_electrode', 
  'minecraft:bolt_armor_trim_smithing_template', 
  'create:steam_engine', 
  'pulsetech:cannon', 
  'aeronautics:steam_vent',
  Fluid.sizedIngredientOf("createmetallurgy:molten_copper", 810)]

replacewithstorageblock.forEach(element => {
  event.replaceInput({ output: element }, "minecraft:copper_block", Ingredient.of("spelunkerspalette:copper_storage_block"))
})


event.replaceOutput({type: "createmetallurgy:casting_in_basin"}, "minecraft:copper_block", Item.of("spelunkerspalette:copper_storage_block"))
//who added bro
event.remove({ input: "minecraft:waxed_copper_block", output: "minecraft:copper_ingot" })
})






ServerEvents.recipes(event => {
//iron rework
//blaze burner needs to be earlier in progression so you can melt iron

//this is a fucking stupid way to do this why did i do this im replacing the same recipe 4 times
Ingredient.of('#c:plates/iron').getStackArray().forEach(element => {
  event.replaceInput({output: "create:empty_blaze_burner"}, element, Ingredient.of('createdeco:industrial_iron_sheet'))
})

event.remove({input: 'minecraft:iron_ingot', output: 'create:industrial_iron_block'})
event.remove({input: 'minecraft:iron_ingot', output: 'dndecor:industrial_plating_block'})


event.recipes.createvintageneoforged.hammering(['immersiveengineering:slag', 'createdeco:industrial_iron_ingot'], 'minecraft:iron_ingot').hammerBlows(3)

event.remove({type: "create:pressing", output: "create:iron_sheet"})
event.remove({type: "createdieselgenerators:hammering", output: "create:iron_sheet"})

event.recipes.createdieselgenerators.hammering('6x createdeco:industrial_iron_nugget', 'minecraft:iron_ingot')

//hammer made from cast iron
event.remove({output: 'createvintageneoforged:helve_hammer'})
event.shaped(Item.of('createvintageneoforged:helve_hammer'), // arg 1: output
  [
    'ABB',
    'A C' // arg 2: the shape (array of strings)

  ],
  {
    A: 'tfmg:cast_iron_block',
    B: '#minecraft:logs',  //arg 3: the mapping object
    C: 'simulated:torsion_spring'
  }
)






//chainmail


//cast iron made by.. casting iron
event.remove({output: "tfmg:cast_iron_ingot", type: "create:packing"})
event.remove({not: {output: "create:andesite_alloy_block"}, type: "createmetallurgy:casting_in_basin", input: Fluid.of("createmetallurgy:molten_iron")})
event.remove({not: {output: "create:andesite_alloy"}, type: "createmetallurgy:casting_in_table", input: Fluid.of("createmetallurgy:molten_iron")})
event.recipes.createmetallurgy.casting_in_basin("tfmg:cast_iron_block", Fluid.of("createmetallurgy:molten_iron", 810), 120)


//TODO : replace this with a tag based approach where we just create something like "#kjs:meltable_iron_ingot", "#kjs:meltable_iron_block", etc, so that I can just tag *all* iron based blocks to be meltable into some reasonable value

const meltableirons = {
'minecraft:iron_ingot': "ingot", 
'minecraft:iron_nugget': "nugget", 
'create:iron_sheet': "sheet", 
'minecraft:iron_block': "block", 
//'minecraft:raw_iron': "ingot", 
//'spelunkery:raw_iron_nugget': "rawnugget", 
'tfmg:cast_iron_ingot': "ingot", 
'tfmg:cast_iron_nugget': "nugget", 
'tfmg:cast_iron_sheet': "sheet", 
'tfmg:cast_iron_block': "block", 
'createdeco:industrial_iron_ingot': "ingot", 
'createdeco:industrial_iron_nugget': "nugget", 
'createdeco:industrial_iron_sheet': "sheet", 
'create:industrial_iron_block': "block",
'#c:rods/iron': "rod",
'#c:wires/iron': "wire",
'#c:dusts/iron': "dust"
}
event.remove({type: "createmetallurgy:melting", output: Fluid.of("createmetallurgy:molten_iron"), not: {output: Fluid.of("createmetallurgy:molten_slag")}})
event.remove({type: "createmetallurgy:bulk_melting", output: Fluid.of("createmetallurgy:molten_iron"), not: {output: Fluid.of("createmetallurgy:molten_slag")}})

for (var meltable in meltableirons) {
  switch(meltableirons[meltable]) {
    case "rawnugget":
      event.recipes.createmetallurgy.melting([Fluid.of("createmetallurgy:molten_iron", 10), Fluid.of("createmetallurgy:molten_slag", 5)], Ingredient.of(meltable), 4).heatRequirement("heated")
      break
    case "nugget":
      event.recipes.createmetallurgy.melting(Fluid.of("createmetallurgy:molten_iron", 10), Ingredient.of(meltable), 4).heatRequirement("heated")
      break
    case "wire":
      event.recipes.createmetallurgy.melting(Fluid.of("createmetallurgy:molten_iron", 15), Ingredient.of(meltable), 40).heatRequirement("heated")
      break
    case "rod": 
      event.recipes.createmetallurgy.melting(Fluid.of("createmetallurgy:molten_iron", 45), Ingredient.of(meltable), 40).heatRequirement("heated")
      break
    case "ingot":
    case "dust":
    case "sheet":
      event.recipes.createmetallurgy.melting(Fluid.of("createmetallurgy:molten_iron", 90), Ingredient.of(meltable), 40).heatRequirement("heated")
      break

    case "block":
      event.recipes.createmetallurgy.bulk_melting(Fluid.of("createmetallurgy:molten_iron", 810), Ingredient.of(meltable), 220).minHeatRequirement(7)
  }
}

});
//remove CC&A nonsense 
const ccawhitelist = ['createaddition:barbed_wire', 'createaddition:rolling_mill', 'createaddition:straw', 'createaddition:chocolate_cake', 'createaddition:honey_cake', 'createaddition:cake_base', 'createaddition:cake_base_baked', 'createaddition:brass_rod', 'createaddition:diamond_grit_sandpaper', 'createaddition:diamond_grit']

RecipeViewerEvents.removeEntries("item", event => {

  /*let a = ccawhitelist.reduce((thing, cur) => {return thing.except(Ingredient.of(cur))}, Ingredient.of('@createadditon'))
  event.remove(a)*/
  event.remove(Ingredient.of("@createaddition").except(ccawhitelist) )
})
ServerEvents.recipes(event => {
  let h = ccawhitelist.map((a)=>{return {output: a}})
  event.remove({mod: "createaddition", not: {or: h}})
})

// WIRES
const removewires = ['immersiveengineering:wire_copper', 'immersiveengineering:wire_electrum', 'immersiveengineering:wire_aluminum', 'immersiveengineering:wire_steel', 'immersiveengineering:wire_lead', 'immersiveengineering:mold_wire', 'immersiveengineering:connector_lv', 'immersiveengineering:connector_lv_relay', 'immersiveengineering:connector_mv', 'immersiveengineering:connector_hv', 'immersiveengineering:connector_hv_relay', 'tfmg:aluminum_wire', 'tfmg:copper_wire', 'tfmg:constantan_wire', 'createaddition:copper_wire', 'createaddition:iron_wire', 'createaddition:gold_wire', 'createaddition:electrum_wire', 'createmetallurgy:tungsten_wire', 'createmetallurgy:tungsten_wire_spool', 'immersiveengineering:wirecutter', 'immersiveengineering:wirecoil_copper', 'immersiveengineering:wirecoil_electrum', 'immersiveengineering:wirecoil_steel', 'immersiveengineering:wirecoil_structure_rope', 'immersiveengineering:wirecoil_structure_steel', 'immersiveengineering:wirecoil_copper_ins', 'immersiveengineering:wirecoil_electrum_ins']
RecipeViewerEvents.removeEntriesCompletely("item", event => {
  removewires.forEach(wire => {
    event.remove(wire)
  })
})
ServerEvents.recipes(event => {
  removewires.forEach(wire => {
    event.remove({output: wire})
  })
})

const usablewires = ['powergrid:wire', 'powergrid:golden_wire', 'powergrid:iron_wire', 'electroenergetics:copper_wire', 'electroenergetics:electrum_wire', 'electroenergetics:iron_wire', 'immersiveengineering:wirecoil_redstone']
ServerEvents.recipes(event => {
  usablewires.forEach(wire => {
    event.remove({output: wire})
  })
  //event.recipes.
})
// IRON

// COPPER

// ELECTRUM


//spring made in coiler
ServerEvents.recipes(event => {
  event.remove({output: 'simulated:spring'})
  event.recipes.createvintageneoforged.coiling(Item.of('simulated:spring'), Ingredient.of('#c:wires/iron')).processingTime(100);
})


//end scrap
ServerEvents.recipes(event => {
  event.remove({type: "immersiveengineering:crusher"})
    event.recipes.immersiveengineering.crusher(
        TagOutputJS.ofItemStack('aeronautics:end_stone_powder'),
        "kubejs:metallic_scrap",
        512,
        [
            StackWithChanceJS.of('dndecor:large_industrial_cogwheel', 0.2),
            StackWithChanceJS.of('immersivepetroleum:petcoke', 0.07),
            StackWithChanceJS.of('tfmg:concrete', 0.06),
            StackWithChanceJS.of('minecraft:ice', 0.05),
            StackWithChanceJS.of('electroenergetics:accumulator', 0.04),
            StackWithChanceJS.of('immersiveengineering:plate_steel', 0.04),
            StackWithChanceJS.of('electroenergetics:copper_wire', 0.03),
            StackWithChanceJS.of('chemica:electronic_circuit', 0.03),
            StackWithChanceJS.of('chemica:advanced_circuit_board', 0.02),
            StackWithChanceJS.of('crowns:raw_uranium', 0.001),
            StackWithChanceJS.of('immersiveengineering:shader_bag_common', 0.001)
        ]
    )
})

//pneumaticcraft pnc

ServerEvents.recipes(event => {
  event.remove({type: "pneumaticcraft:explosion_crafting"})
})

// chain conveyors, reconnectable chains

const chains = ['dndecor:large_brass_chain', 'dndecor:large_andesite_chain', 'dndecor:large_zinc_chain', 'dndecor:large_copper_chain', 'dndecor:large_industrial_chain', 'dndecor:large_gold_chain', 'dndecor:large_iron_chain', 'dndecor:large_netherite_chain', 'oxide:heavy_iron_chain', 'oxide:weathered_heavy_iron_chain', 'oxide:rusted_heavy_iron_chain']

ServerEvents.tags("item", event => {
  chains.forEach(chain => {
    event.add('c:chains', chain)
  })
})
ServerEvents.tags("block", event => {
  chains.forEach(chain => {
    event.add('c:chains', chain)
  })
})