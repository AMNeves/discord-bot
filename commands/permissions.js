module.exports = {
	name: 'perma',
	description: 'Sugoi',
	execute(message) {
        muted = message.mentions.members.first();
        
        // Remove all of the member's roles
        muted.setRoles([])
        .then(member => console.log(`${member.displayName} now has ${member.roles.size} roles`))
        .catch(console.error);
	},
};