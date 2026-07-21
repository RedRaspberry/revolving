---
navigation:
  # Title shown in the navigation bar
  title: Oil Processing
  # [OPTIONAL] Item ID for an icon 
  # defaults to the same namespace as the pages, so ae2 in our guidebook
  icon: immersivepetroleum:pumpjack
  parent: steel_age.md
---
# Oil Processing

Some text on this page is adapted from the <ItemLink id="immersiveengineering:manual" />. Feel free to consult it for additional details on these features, but remember that other portions of the manual may be inaccurate: [Disabled Features List](./disabled_features.md)

# Getting Started
Your first step in obtaining oil should be to craft a Seismic Survey Tool and load it with Buckshot.  
<Row>
<RecipeFor id="immersivepetroleum:seismic_survey" />
<ItemLink id="immersiveengineering:bullet_buckshot" />s can be crafted in the <ItemLink id="immersiveengineering:workbench" /> with <ItemLink id="minecraft:gunpowder" />,<br/> an <ItemLink id="immersiveengineering:empty_shell" />, and <ItemLink id="immersiveengineering:dust_steel" />. 
</Row>

Right clicking on the Survey Tool will let you obtain a map of nearby fluid reservoirs, which you can use to inform your placement of a Derrick, built like shown:

<Row>
<GameScene zoom={2} interactive={true}>
  <ImportStructure src="derrick.nbt" />
    <BlockAnnotation x="2" y="0" z="4" color="#ff0000">
    Right click this block with an <ItemImage id="immersiveengineering:hammer" />Engineer's Hammer to form the multiblock
    </BlockAnnotation>
</GameScene>
<ItemImage id="immersivepetroleum:derrick" scale="12" />
</Row>

Details about the process of *using* the Derrick can (and should) be found in the <ItemLink id="immersiveengineering:manual" />, under Oil Processing -> Derrick. Reproducing it's text here would be pointless. Note that the drilling process requires Immersive Engineering fluid pipes, and I'm too lazy to fork the mod to change this.

After the derrick finishes spewing oil, you can replace it with a pumpjack to continue the process of extracting oil reserves long term. 
<Row>
<GameScene zoom={2} interactive={true}>
  <ImportStructure src="pumpjack.nbt" />
    <BlockAnnotation x="1" y="1" z="4" color="#ff0000">
    Right click this block with an <ItemImage id="immersiveengineering:hammer" />Engineer's Hammer to form the multiblock
    </BlockAnnotation>
</GameScene>
<ItemImage id="immersivepetroleum:pumpjack" scale="8" />
</Row>
