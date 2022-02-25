# Overview

If you are a non-technical discord user and want to learn how to use the Llama bot, you've come to the right place.
In this page, you'll learn the basics of discord bots, what the Llama bot can do, and how to use it.

## Background

### What even is a discord bot?

In essence, a Discord bot is a account controlled by a program.
It is used in almost ever server for many different reasons such as automating moderation, music streaming, and even dad jokes.

### Great! Now, how do I use a bot?

Although some bots — including the Llama bot — offers a web interface, most bots are controlled by commands.
Commands are messages that is prefixed with special letter(s) that tells what a bot should do.

Here's an example of a command:

```
-help
```

Here, the hyphen (`-`) is the prefix and `help` is the command.
When messages are formatted like this, bots can identify whether a message is a command or not, and if the command is meant for them or some other bot.
This is helpful when there are multiple bots in one server.
Commonly used prefixes are: `?`, `!`, `>`, `.`, `..`, etc.

Although Discord released [slash commands](https://discord.com/blog/slash-commands-are-here) in 2021, it is not used by most bot developers.

### Commands are not enough!

Although commands are awesome, sometimes it is not enough to tell what exactly you want the bot to do.
This is why you need arguments.

Here's an example of a command with arguments:

```
-ban @NaughtyUser @BadUser @GPUScalper69
```

Arguments are extra text information that are passed with the command.
Arguments could be a user, a text channel, regular text, numbers, or even emojis.
They are usually separated by spaces.
If you provide more arguments than what's required, they will simply be ignored.

## How to read the documentation

WIP

<!-- list of commands. Web interface instruction will be included if it exists -->

### Required arguments

WIP

### Optional arguments

WIP

### Examples

#### A command with one required argument

```
-command <arg1>
```

#### A command with a required argument and a optional one

```
-command <arg1> [arg2]
```

#### A command with arbitrary amount of optional arguments

```
-command [args]*
```

#### A command that takes neither or both arguments

```
-command [<arg1> <arg2>]
```
