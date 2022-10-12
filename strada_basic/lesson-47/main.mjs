import data from './data.json' assert { type: 'json' };

for (const userObj of data.users) {
	console.log(userObj.firstName);
}

for (const userObj of data.users) {
	console.log(`${userObj.firstName}, born at ${userObj.dateOfBirth} and ${userObj.knowsAs}`);
}
