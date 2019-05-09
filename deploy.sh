#!/bin/sh
git worktree add web gh-pages
export RESOURCE_ROOT=/boilerplate-compoents
npm install
npm run prod
npm run fractal build

cd web
rm -f pattern-library/.git
git add --all
git commit -m "Updating GitHub Pages"
git push origin gh-pages
cd ..

git worktree remove web
