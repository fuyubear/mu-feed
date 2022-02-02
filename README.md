![](https://img.shields.io/github/license/mashape/apistatus.svg)

# mu-feed
A MangaUpdates RSS feed generator using Next.js. Originally created by [TSedlar](https://github.com/TSedlar).

You can self-host this on [Vercel](https://vercel.com) with very little knowledge and use this to generate RSS feeds for [MangaUpdates](https://www.mangaupdates.com/).

## Easy Setup Guide

Here is an easy setup guide to quickly get this up and ready to use. While this can be hosted on any other service that supports non-static Next.js content, Vercel (used in this guide) is a quick, easy, and cheap (free) way to quickly set up.

### MangaUpdates Setup

To use it, you should make a list public. This list should contain all the manga you want to track (like your reading list).

The settings you can use on the desired list are in the image below, but at a minimum, **make sure your list is public**.

![](https://i.imgur.com/mpURglK.png)

You will then be able to see your public list URL, which should look something like this: 

`https://www.mangaupdates.com/mylist.html?id=542166&list=read`

Take note of the `?id=xxxx&list=xxxx` part for later.

### Repo Import Instructions

Go to import a repository, as seen below:

![](https://i.imgur.com/suxe0Yy.png)

Use the following url during import: `https://github.com/fuyubear/mu-feed.git`

Fill in the form and press `Begin import`.

![](https://i.imgur.com/Buv6CXP.png)

### Registering on Vercel

Head on over to [Vercel](https://vercel.com) and login with your GitHub account.

Now you will want to go to your [Vercel dashboard](https://vercel.com/dashboard), and click New Project.

Select the repository you imported earlier. Besides selecting Next.js as the platform, do not fill out or change any fields. Click Deploy.

### Finishing up

Your newly deployed project should now appear in the [Vercel dashboard](https://vercel.com/dashboard).

Click on your newly deployed project and locate the URLs (they are the Domains).

You can now obtain your MangaUpdates RSS feed file with one of the domains, like `https://mu-feed-<username>.vercel.app/api/feed?id=xxxx&list=xxxx`, or in other words, `https://mu-feed-<username>.vercel.app/api/feed` + the `?id=xxxx&list=xxxx` part saved from earlier.
