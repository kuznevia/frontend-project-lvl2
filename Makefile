install: # install npm
	npm ci

publish: #publish brain-games
	npm publish --dry-run
	
lint:#initializing linter
	npx eslint .

lintfix:#fixing linter
	npx eslint . --fix

test:#initilizing tests
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:#initilizing test-coverage
	NODE_OPTIONS=--experimental-vm-modules npx jest -- --coverage --coverageProvider=v8