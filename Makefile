install-dev:
		npm ci

install:
		npm install eslint

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .