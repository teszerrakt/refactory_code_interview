#!/usr/bin/env node

/**
 * refactoryDB
 * Gets all user data from the Database
 *
 * @author Zaky Syihab Hatmoko <https://zsyihab.tech/>
 */

require('dotenv').config();
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const mongoose = require('mongoose');
const User = require('./model/user');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	if (input.includes('data')) {
		const main = async () => {
			console.log('Please wait...\n');
			await mongoose.connect(process.env.MONGODB_URL);
			let data = await User.find();

			if (
				flags.type === 'email' ||
				flags.type === 'given_name' ||
				flags.type === 'family_name' ||
				flags.type === 'picture'
			) {
				console.log(data.map(item => item[flags.type]));
			} else {
				console.log(data);
			}
		};

		main().catch(err => console.log(err));
	}
})();
