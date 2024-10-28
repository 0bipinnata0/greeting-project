# publish

npm publish --access public

git checkout -b changeset-install

pnpm i -D @changesets/cli

npx changeset init

"access": "restricted" -> "public"
