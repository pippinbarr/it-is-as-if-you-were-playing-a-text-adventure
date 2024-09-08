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