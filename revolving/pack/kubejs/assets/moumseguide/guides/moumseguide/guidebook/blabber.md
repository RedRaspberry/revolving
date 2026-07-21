---
navigation:
  # Title shown in the navigation bar
  title: dev notes
  # [OPTIONAL] Item ID for an icon 
  # defaults to the same namespace as the pages, so ae2 in our guidebook
  icon: minecraft:command_block
  position: 1000
---
ok so basically

the goal is for the game to look pretty in screenshots
hope this helps

big thing:
oil processing chain
IE pumpjack -> TFMG fractioning -> C:DG generators -> C:PG/C:EE electric gen
other oil products get used for other things

electric can also be made from steam engine obviously
which is just create going into powergrid/electroenergistics generators
also you cant use IE portable generators because they make FE and i want to remove FE
and that means removing IE wires
and the portable gen only has a direct wire hookup and doesn't accept other mod power connectors so i cant even use the convertor from CPG/CEE

ores are spread out very far (we still need some way for people to get starter setups to go get more ores)
this encourages trains
giant factorio deposits with that one mod

mining and exploration also still viable for the slop fans possibly
not sure how this works
this is stupid?
but i like the things that are in spelunkery but like only a little bit
mostly i just want the parachute 
find me a parachute mod that looks good and lets me bail out of aero planes and isn't a fucking hangglider
i want an honest to god parachute that just drops you down no paragliding graghhyhh
spelunkery is also kinda neat to break up the monotony of Just Factory Game Gameplay
gives you something to go and do
same thing for caverns and chasms
which is even less of a mod i would normally want to have
it has a couple features i like though
not even really that offensive of a mod

deco mods have conflicts that i want resolved
for example
caverns and chasms adds granite bricks and stuff, a bunch of other mods add granite diorite andesite bricks etc
caverns and chasms adds copper chains and stuff, vanilla backport adds copper chains (i think)
caverns and chasms adds that blue wood, Would also adds blue wood of a similar color
create:design n' decor adds packed mud block set stuff, missing blocks adds mud block set stuff except also adds stairs and slabs which design n' decor neglected to do for some fucking reason
dimensional doors adds a bunch of absolutely NONSENSE deco blocks but i cant remove them because they're used in the dimdoors dungeons
two options: remake the dungeon structures with blocks that aren't nonsense, or remove duplicates of them that other mods add (like terracotta stairs)
im opting for option two because its easier

protomanly's weather adds a bunch of nonsense blocks as well like reinforced concrete that just looks like normal concrete
i dont like it
remove that slop
protomanly's weather is kinda just a slop mod in general. but sigh its kinda peak. i want to experience storms in a multiplayer setting

TFMG is mostly centered around making steel and aluminum and then making electricity and circuits to make other things and power stuff
however, TFMG's power system is jank and bad, and I already want to use CPG/CEE for power. this means most of TFMG is useless and should be disabled
this is sad because I like the TFMG winding system and winding machine
Possibly add recipes for CPG/CEE wire coils that use the TMFG winding machine and such
Chemica is a TFMG addon that adds a billion extra chemicals that have no uses
I think it should probably be removed but it's also really peak
If all of these things were tied into a ... Research System... it could work. It could be peak.
But then I'd need to actually do that effort. 
which is why im bothering you
smile emoji

also 
the create aero addon to make simulated trains isnt out yet because they're still waiting on sable to merge their PRs
i want to make people use the electric trains from CEE
I also want to make unpowered trains just straight up not work
you should need to either use the steam engine powered train from base create (its a contraption so its a virtual steam engine basically, you put a tank down and a storage that contains coal) or an electric train from CEE
once the simulated train addon comes out trains will not be virtualized at all which is what I want, you have to actually build rotary power gen on the train and drive the wheels with it


create:pressing/iron_ingot

- remove spelunker's palette :( it doesnt tag a bunch of its blocks correctly and it has recipe loops
i dont have the energy to fix it manually, maybe later i can readd since i really like its texturework

- remove moumsemod

- remove grounded (its pointless bloat)

- switch PMW for any other weather and season mod
- find another timecontrol mod that isnt slop so we can have extended day/night cycle
- remove surface mobs!!!
- as much factorio gameplay as possible

- look into dimdoors adding weird shit like stone slabs when stone slabs already exist

- make unpowered trains incredibly slow to force power use
- make electric/diesel trains even faster
- do diesel trains even exist (Answer: no, cdg is working on it)
