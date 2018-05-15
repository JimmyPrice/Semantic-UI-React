# From Stardust: The V2 Manifesto

What went well with the first version of Semantic UI's React port? What didn't? And, most importantly, what are the fundamental ideas that captivated the community, and how can we make them even more prominent in future versions while reworking the library's weaknesses? We look to answer those questions by first distilling the philosophy behind Semantic UI, and building anew with that as our foundation.

* [Painless First Run Experience](#painless-first-run-experience)
* [Pragmatic Design Language](#pragmatic-design-language)
* [Intuitive](#intuitive)
* [Universal Traits](#universal-traits)
* [Shorthand Syntax](#shorthand-syntax)
* [First-class Theming](#first-class-theming)

## Painless First Run Experience

There should be minimal steps needed for a user to get up and running. That means sane defaults, zero peer dependencies.

```
// Version 1

```

## Pragmatic Design Language
c
One of the things that we love about Semantic UI is its friendly design language, where component APIs prioritize human readability. However, this emphasis is also a tax on [intuitiveness](#intuitiveness), and we want to re-evaluate that compromise. Take the `size` property, for example:

```js
// Version 1
<Button size={'mini' | 'tiny' | ... | 'massive'} />
```

The possible options for `size` are familiar since they overlap our everyday language. However, language is subjective and deeply personal, so while Semantic UI understands "massive" to be the largest possible size, its restrictive vocabulary often falters when it meets that of its users. Additionally, language is ambiguous; is "mini" really smaller than "tiny"? Should users even have to care?

Here is where we are willing to make concessions; by compromising
Our goal is to continue to prioritize that human language, but more selectively, favoring simpler, more discoverable solutions when a compromise must be made.

```js
// Version 2
// TODO(zuko): should this be termed `scale` instead?
<Button size={0..8} />
```

## Intuitiveness

Complementing our focus on pragmatism, we heavily emphasize intuitiveness and, when in doubt, always abide by the [Principle of Least Surprise](#todo). Components should do as much as possible to fit the .

In such cases, we should always consider alternative API's before accepting inconsistent API's.

```js
// Version 1
<Table basic='very' />
```

```js
// Version 2
// TODO(zuko): RFC
// TODO(zuko): basic might be a theme variant, not component-level? Talk about this.
```

It will be intuitive because...

## Universal Traits

```js
```

## First-class Theming
