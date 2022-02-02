![](https://img.shields.io/github/license/mashape/apistatus.svg)

# mu-feed
A MangaUpdates RSS feed generator. Originally created by [TSedlar](https://github.com/TSedlar). 

You can self-host this on [Vercel](https://vercel.com) with very little knowledge and use this to generate RSS feeds for [MangaUpdates](https://www.mangaupdates.com/)

## Setup

To use it, you should make a list (of all the manga you want to track) public.

The settings you can use on the desired list are below:

![](https://i.imgur.com/mpURglK.png)

You will then be able to see your public list URL, which should look something like this: 

`https://www.mangaupdates.com/mylist.html?id=542166&list=read`

Take note of the `?id=xxxx&list=xxxx` part for later.

## Instructions

Go to import a repository, as seen below:

![](https://i.imgur.com/suxe0Yy.png)

Use the following url during import: `https://github.com/fuyubear/mu-feed.git`

Fill in the form and press `Begin import`.

![](https://i.imgur.com/Buv6CXP.png)

## Registering

Head on over to [Vercel](https://vercel.com) and login with your GitHub account.

Now you will want to go to your [Vercel dashboard](https://vercel.com/dashboard), and click New Project.

Select the repository you imported. Do not fill out any fields, then click Deploy.

Now go to your [GitHub repositories](https://github.com/settings/repositories) and locate the repository you imported.

Click the `Create File` button.

![](https://i.imgur.com/EFoKcL3.png)

Type `BUILD` or anything you want in the field it highlights and click `Commit new file`

![](https://i.imgur.com/mNTowvP.png)
![](https://i.imgur.com/RSGI7aB.png)

## Finishing up

Your newly deployed project should now appear in the [Vercel dashboard](https://vercel.com/dashboard).

Click the project and locate the URLs (they are the Domains).

Refer to the above section for your `id` and `list`.

You can now obtain your MangaUpdates RSS feed file at `https://mu-feed-<username>.vercel.app/api/feed?id=xxxxxx&list=xxxx`
