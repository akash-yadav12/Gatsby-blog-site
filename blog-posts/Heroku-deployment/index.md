---
path: "/Deploy-To-Heroku"
date: "2020-12-07"
title: "Deploying a Website On Heroku in five simple steps"
author: "Akash Yadav"
tags: "Heroku, Deployment, Heroku-cli"
featuredImage: "./herokuImg.png"
---
### In this article we will learn to deploy our website on Heroku using five simple steps

**Heroku** is a cloud platform as a service (PaaS) supporting several programming Languages. One of the first cloud platforms. Heroku has been in development since June 2007, when it supported only Ruby programming langauge, but now supports Java, Nodejs, Scala, Clojure, Python, PHP, and GO. **Heroku** is the free hosting platform for developers which is the best part of **Heroku**. One can easily deploy their static website as well as dynamic webites(using some ad-ons) on **Heroku**

**Step 1: First You'll need Heroku-cli on your device(Heroku-cli installation),**

**For MAC running the following command will do the job,**
```
$ brew tap heroku/brew && brew install heroku
```
**For Ubuntu 16+ running the following command will do the job,**
```
$ sudo snap install --classic heroku
```

**For Windows**

we can't install it using command line, we need to download the 64/32-bit installer from https://devcenter.heroku.com/articles/heroku-cli for windows

Note: After installation is complete try running the following command: 
```
$ heroku --version
heroku/7.0.0 (windows-x64) node-v8.0.0
```
inorder to confirm the installation 

**Step 2: Heroku login**
```
$ heroku login -i
heroku: Enter your login credentials
Email: me@example.com
Password: ***************
Two-factor code: ********
Logged in as me@heroku.com
```
The CLI saves your email address and an API token to ~/.netrc for future use.

After completion of above two steps you are good to go!
Now You can now push your code files to Heroku server like you push your files to your github.

**Step 3: Creating git repository and adding your files to it (Git init, add and commit)**

Move in to your application folder first as
``` 
$ cd yourApp
```
Initialze Git repository as,
```
$ git init
Initialized empty Git repository in .git/
```
Add all the files to the repository
```
$ git add .
```
commit your changes
```
$ git commit -m "First Commit"
created initial commit 5df2d09: First commit
22 files changed, 4232 insertion (+), 0 deletions(-)
create mode 100644 README
create mode 100644 Procfile
create mode 100644 app/controllers.source_file
```
Note: be sure to initialize the Git repository in your app's root directory. If your app is in a subdirectory of your repository, it won't run when it is pushed to Heroku

**Step 4(a): Creating a Heroku remote**

git remotes are versions of your directory that live on other servers. You deploy your app by pushing its code to a special Heroku hosted remote that's associated with app.

The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app's root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.
```
$ Heroku create
Creating app... done, ⬢ thawing-inlet-61413
https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git
```
You can use the git remote command to confirm that a remote named heroku has been set for your app:
```
$ git remote -v
heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)
heroku  https://git.heroku.com/thawing-inlet-61413.git (push)
```
**Step 4(b): For an existing Heroku app**

If you have already created your Heroku app, you can easily add a remote to your local repository with the heroku git:remote command. All you need is your Heroku app’s name:
```
$ heroku git:remote -a thawing-inlet-61413
set git remote heroku to https://git.heroku.com/thawing-inlet-61413.git
```
**Renaming remotes**

By default, the Heroku CLI names all of the Heroku remotes it creates for your app heroku. You can rename your remotes with the git remote rename command:
```
$ git remote rename heroku yourApp
```
Renaming your Heroku remote can be handy if you have multiple Heroku apps that use the same codebase (for example, the staging and production versions of an app). In this case, each Heroku app has its own remote in your local repository.

Note: The remainder of this article assumes your app has a single Heroku remote that is named heroku.

**Step 5: Deploying code**

To deploy your app to Heroku, you typically use the git push command to push the code from your local repository’s master or main branch to your heroku remote, like so:
```
$ git push heroku master
```

Now you can visit the link that Heroku provided to you for your website and you can see your app running live on a Heroku hosted server

That's it, Congratulations your website is Deployed(if all steps went well).

Thank You Hope it helps :)
