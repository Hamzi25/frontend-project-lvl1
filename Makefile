install-dev:
		npm ci --production

install:
		npm install eslint
		npm install eslint-config-airbnb-base
		npm install eslint-plugin-import

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
		npx eslint .