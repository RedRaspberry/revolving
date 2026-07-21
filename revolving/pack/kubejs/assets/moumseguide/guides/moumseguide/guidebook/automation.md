---
navigation:
  # Title shown in the navigation bar
  title: Automation Helpers
  # [OPTIONAL] Item ID for an icon 
  # defaults to the same namespace as the pages, so ae2 in our guidebook
  icon: pulsetech:console
  position: 7
---
# Helpful Tools

# Pulsetech
<ItemGrid>
    <ItemIcon id="pulsetech:console" />
    <ItemIcon id="pulsetech:pattern_detector" />
    <ItemIcon id="pulsetech:pattern_emitter" />
    <ItemIcon id="pulsetech:number_monitor" />
    <ItemIcon id="pulsetech:number_emitter" />
    <ItemIcon id="pulsetech:analog_number_emitter" />
    <ItemIcon id="pulsetech:scope" />
    <ItemIcon id="pulsetech:controller" />
    <ItemIcon id="pulsetech:scanner" />
    <ItemIcon id="pulsetech:screen" />
    <ItemIcon id="pulsetech:cannon" />
    <ItemIcon id="pulsetech:orb" />
    <ItemIcon id="pulsetech:program_emitter" />
    <ItemIcon id="pulsetech:number_bulb" />
    <ItemIcon id="pulsetech:retriever" />
    <ItemIcon id="pulsetech:storage_modem" />
    <ItemIcon id="pulsetech:data_cell" />
    <ItemIcon id="pulsetech:debugger" />
    <ItemIcon id="pulsetech:remote_console" />
</ItemGrid>

**Pulsetech** is a mod centered around serial data transmission over vanilla redstone lines. It adds redstone components that can be combined into a rudimentary computer system, capable of sending timed redstone pulses to devices. It's not exactly easy to work with, but at least a few of it's components may be of use in certain situations, and since the entire mod is centered around *vanilla redstone*, it's possible to create your own "instruction set" using pattern detectors and specific opcodes that those detectors look for. For example, you could have a pattern detector set to 0010 at your front door, and use the console to create a macro titled "front_door" that emits 0010 to open the door remotely.

For more info on **Pulsetech**, ponder a <ItemLink id="pulsetech:console" />, and use the <ItemLink id="pulsetech:datasheet" /> on the mod's various machines.

# Superposition

<ItemGrid>
    <ItemIcon id="superposition:pink_cable" />
    <ItemIcon id="superposition:antenna" />
    <ItemIcon id="superposition:signal_generator" />
    <ItemIcon id="superposition:monitor" />
    <ItemIcon id="superposition:transmitter" />
    <ItemIcon id="superposition:receiver" />
    <ItemIcon id="superposition:amplifier" />
    <ItemIcon id="superposition:filter" />
    <ItemIcon id="superposition:computer" />
    <ItemIcon id="superposition:inscriber" />
    <ItemIcon id="superposition:analyser" />
    <ItemIcon id="superposition:manipulator" />
    <ItemIcon id="superposition:combinator" />
    <ItemIcon id="superposition:constant_combinator" />
    <ItemIcon id="superposition:panel" />
    <ItemIcon id="superposition:spotlight" />
</ItemGrid>

**Superposition** is a WIP mod that adds Factorio-Styled combinators, which are connected together by a physically simulated cabling system, alongside semi-realistic radio transmission and analog waveforms. It also has a punchcard computer. 

For more info on **Superposition**, uh... honestly just mess around with this one. You can also check their [github](https://github.com/Volcano-Bay-Studios/superposition) for development updates.

