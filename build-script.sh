#!/bin/bash

npm run build

cd dist/
git init
git remote add origin https://github.com/Muzammil-Bilwani/Muzammil-Bilwani.github.io.git
git add .
echo Enter Commit Message
read commitMessage
git commit -m commitMessage
git push origin master