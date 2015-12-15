---
layout: page
title: "Common Problems"
category: tut
date: 2015-01-06
order: 5
---

## Windows error when installing NPM:
> Error: ENOENT, stat `C:\Users\You\AppData\Roaming`

We're not sure why this happens, but it [sure is popular](http://stackoverflow.com/questions/25093276/node-js-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm).  NPM can't find the folder that it is complaining about.  Create the folder, and it fixed the problem.