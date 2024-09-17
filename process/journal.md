# Journal

## The Basics -- Sunday 8 September 2024

I've made a genuine start at this point, two sessions to try to get a basic skeleton of how the basic input-output flow would be able to work.

I've also had a brief conversation with Michael B about kind of piggy-backing on/reacting to a short story of his that I really loved, so that's still in my mind as something to do.

Having made it this far though the next step is really to understand how I should be generating/choosing the sequence of commands for the user to input. In an earlier version of this I'd imagined something more or less like *It is as if you were playing chess* where I'd just have a fixed sequence the user would type it.

And that still makes sense - a lot of sense in some ways because it mirrors the essentially linear nature of stories. That is, there would be a fixed, implicit story being told that the user is perceiving only through the commands they type in as well as any suggested reactions they should have to it.

But I also feel a weird kind of pressure in that scenario where I actually need to understand what is happening moment to moment - there's a need for a real story to exist in that scenario I think. And... well, I suppose that's what I wanted, a chance to secretly write a story that nobody would actually read?

As I approach it, though, I've also found my brain going the more generative track. What would it take to perhaps generate commands instead, so that different people would have different experiences and we'd be talking more about how you build up an understanding of a world by probing it with commands? Which is *also* interesting.

In that case I've started thinking in terms of a data structure that would represent the *world* in much the same way an Inform story does (rooms, objects, special/relevant commands). And then having a system that would track: where the user is, what they're holding, maybe other status effects if I want to go nutso?

And that is appealing... I gotta say, because there could be some pretty fun serendipty around it? And it's this weird idea of designing some of a game but not all of it? (It would frankly even leave room for freakier stuff like actually letting story bleed in some places, though that sounds a bit much.)

Anyway, that's where we are with this right now. I think I will at least try out the weird structural idea if only because it just seems technically challenging and funny as an idea. A secret structure of a game that only exists to generate relevant commands is pretty great.

Oh also, I suppose some kind of statistical likelihood thing may make sense? Because you obviously do "look" a lot more than other things and so on?

And some way of creating some more specific "reaction" suggestions for the user? So that they seem a bit more relevant? Shocks versus boredom etc.? Annoyance?

And can you win? It would be really funny if you could technically win?

## Further thoughts -- Sunday 8 September 2024

I spent some more time with this this evening and it's now crossed some kind of threshold where it both seems real (I have two locations, a few commands available) but where it also starts to seem like the contortions involved in a more "simulation" approach may not be all that fun and nor all that important?

There is tension - probably interesting, probably worth reflecting on - between creating something more procedural (leaning more into the "truth" of parser-based IF I guess?) and something more (or totally) linear (leaning more into the nature of story telling).

When I actually "play" what I have so far I think the thing that gives me the best little thrill is, well, just any command input, but especially changing locations (and seeing the location acknowledged in the menu bar) and picking something up... because those are moments where you really feel like you act on the world (unlike looking etc.).

I feel like getting a "realistic" representation of the command sequence in the simulation version might just be too hard and it might seem too weird without it? Like how do you reproduce the idea that if you enter a room you almost always "look", but not all the time. Or how when you pick something up you might look at it. Or how you often try using all your items on a specific situation.

And it's not even totally about realism there, but also about the narrative potential of those things too? Or of just being able to communicate a state of play... the story of playing sitting on top of the story itself...

So I'm perhaps just talking myself into a version where:

- It's linear... you will just be typing in a set of instructions (which, I mean, who is ever going to replay this!)
- But it includes triggers around location, points, and anything else that could make sense to sort of reflect action through the UI

I briefly thought I'd need an inventory, but I suppose not actually. I'd need to keep track of it personally though.

Hmmm. Yeah well I think I just plow on with the linear version as my next thing, maybe just string together 10-20 commands including a location change to get a sense of what that would feel like? Maybe look at some walkthroughs of *good* IF to see how many commands etc. it might make sense to have? Start stockpiling forms that might be in there ("ask X about Y" for example).

## Reminding myself of where I am -- Monday 16 September 2024

Yes, it has been eight days. Sosumi. It would be nice to round the corner into an understanding of what the screen itself needs so that I can "just" write the thing. If it's linear is the point to also pre-write all the "reaction" stuff, or should that be drawn from a pool? Or... really, why do that? Might as well use the reactions as a way to further communicate about what might be happening.

The biggest question to me ultimately become: how much do *I* need to know about what is "really happening" both in the sense of the overarching story being told and the structuring of the parser-based IF that's telling it?

I do like that this is yet another different take on the use of "It is as if" though. Speculative fiction, looking smart on the metro, ... narrative vehicle...

Well but how do I write this then? I suppose first approximation is that each beat needs data, the same data... which would amount to what?

- Input (what they should type)
- Reaction (how they should "act", including instructions on how much to read? Or text padding that lets them read "the right amount"? A shape...)
- Location (to display)
- Points (to add)

Plausibly something else? But also I suppose I should take a look at some walk throughs and some actual IF as some point soon. Maybe that's tonight's little job? Or is it just to put together a teeny draft of the above so I can see what that looks like? Or both, let's see.