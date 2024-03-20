#!/bin/bash

read -p "What is the title of this commit: " title
read -p "What is the description of this commit: " description


git add .
git commit -m "$title" -m "$description"
git push origin main



