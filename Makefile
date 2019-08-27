install:
	npm install
	npm run build
	npm link
start:
	npx babel-node 'src/bin/brain-games.js'
	npx babel-node 'src/bin/brain-even.js'
	npx babel-node 'src/bin/brain-calc.js'
	npx babel-node 'src/bin/brain-gnd.js
	npx babel-node 'src/bin/brain-progression.js
	npx babel-node 'src/bin/brain-prime.js'

publish:
	npm publish

lint:
	npx eslint .

test:
	npm test

