StartupEvents.registry('item', event => {
	event.create('incomplete_steel_component', 'create:sequenced_assembly')
    event.create('incomplete_iron_component', 'create:sequenced_assembly')
    event.create('incomplete_light_engineering', 'create:sequenced_assembly')
    event.create('incomplete_heavy_engineering', 'create:sequenced_assembly')
    event.create('incomplete_redstone_engineering', 'create:sequenced_assembly')

    event.create('incomplete_test_item', 'create:sequenced_assembly')

    //molds
    event.create('clay_ingot_mold')
    event.create('tungsten_carbide_ingot_mold')

    //fireclay
    event.create('kaolin_dust')
    event.create('quartz_dust')
    event.create('fireclay_ball')
})

StartupEvents.registry('block', event => {
    //bauxite biome
    event.create('red_mud')
    .soundType('mud')
    //.box(0, 0, 0, 16, 14, 16, true)
    .mapColor('TERRACOTTA_RED')
    .tagBlock('minecraft:mineable/shovel')
    .redstoneConductor(false)

    event.create('bauxite')
    .soundType('stone')
    .mapColor('TERRACOTTA_RED')
    .tagBlock('minecraft:mineable/pickaxe')

    event.create('fireclay')
    .soundType('gravel')
    .mapColor('TERRACOTTA_RED')
    .tagBlock('minecraft:mineable/shovel')
    
    //SEDEX seafloor deposit
    event.create('banded_lead_zinc_sulfide_ore')

    //Iron Bog
    event.create('bog_iron_ore')
    event.create('lignite')
    event.create('peat')

    //MISC
    event.create('chromite')
    event.create('fervorite')

    //end ores
    event.create('metallic_scrap')
    .mapColor('COLOR_ORANGE')

    event.create('chemical_scrap')
    .mapColor('COLOR_CYAN')

    //molds
    event.create('clay_anvil_mold')
    event.create('clay_bars_mold')
    event.create('clay_cauldron_mold')
    event.create('clay_curving_head_v_mold')
    event.create('clay_curving_head_w_mold')
    event.create('clay_curving_head_convex_mold')
    event.create('clay_curving_head_concave_mold')
    event.create('clay_pipe_mold')

    //deco
    event.create('inox_sheetmetal')
})
