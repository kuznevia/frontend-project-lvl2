install: # install npm
	npm ci

publish: #publish brain-games
	npm publish --dry-run
	
lint:#initializing linter
	npx eslint .

lintfix:#fixing linter
	npx eslint . --fix

test:#initilizing tests
	npm test

test-github-actions:#initilizing tests on GitHub Actions
	NODE_OPTIONS=--experimental-vm-modules npx jest --bail
	
test-coverage:#initilizing test-coverage
	npm test -- --coverage --coverageProvider=v8
