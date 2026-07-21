---
navigation:
  # Title shown in the navigation bar
  title: The Electric Age
  # [OPTIONAL] Item ID for an icon 
  # defaults to the same namespace as the pages, so ae2 in our guidebook
  icon: electroenergetics:alternator_rotor
  position: 5
---
# Electrical Power

# Getting Started
Electricity, like rotary power, is a means to transfer energy around to various devices which consume it. Unlike rotary power, it can travel long distances over wires, and is required for certain processes like electrolysis and Aluminum processing. It also will enable you to create light sources that are much more capable than torches.

# Making Power
To generate electricity, begin by choosing your difficulty level:

"Easy": Ponder <Color id="aqua"><ItemLink id="electroenergetics:alternator_brushes" /></Color> from Create: Electro Energistics and follow it's directions.

Hard: Ponder the <Color id="aqua"><ItemLink id="powergrid:generator_induction_rotor" /></Color> from **Create: Power Grid** and follow it's directions. This mod is harder to work with, but has a payoff of many interesting electrical devices, like the Cathode Ray Tube, and features a circuit builder with simulation based on [SPICE](https://en.wikipedia.org/wiki/SPICE).

Electrical Engineering Degree Required: Use Create: Electro Energistics, but setup 3-phase power in Wye or Delta configuration using the <Color id="aqua"><ItemLink id="electroenergetics:three_phase_alternator_brushes" /></Color> and <Color id="aqua"><ItemLink id="electroenergetics:synchroscope" /></Color> instead of the normal alternator brushes. There's really no advantage to this -- transformers in both mods work with DC power, and other real-world advantages of AC are not present. This will change in a future update to Electro Energistics, but for now the AC content is not fleshed out.

Power from C:EE and C:PG can be converted to the other mod's system using a Motor-Generator, or in other words, converting electrical power to rotation, and rotation back to electrical. This is probably fairly lossy, depending on your setup. I generally suggest using C:EE for power generation and long range transmission, and C:PG for small scale setups, street lighting, residential power, etc. Additionally, C:EE has electric trains, and C:PG allows you to route wires directly along blocks and make circuit boards, so you'll probably end up using both.

