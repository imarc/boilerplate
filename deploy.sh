#!/bin/sh
rm -rf web
git worktree add web gh-pages
npm install
RESOURCE_ROOT=/boilerplate-components npm run prod
RESOURCE_ROOT=/boilerplate-components npm run fractal build

cd web
rm -f pattern-library/.git
git add --all
git commit -m "Updating GitHub Pages"
git push origin gh-pages
cd ..

git worktree remove web
