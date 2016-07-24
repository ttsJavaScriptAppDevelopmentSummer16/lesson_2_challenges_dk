var emailApp = {
	provider: {
		company: "Google",
		service: "Gmail"
	},

	mailboxes: [
		inbox = {
			name: "Inbox",
			emails: [
				email1 = {
						from: "john123@abc.com",
						date: "Jul 2", 
						subject: "Fw: Bachelor Party 2016!!!"
				},
				email2 = {
						from: "jessica123@abc.com",
						date: "Jun 21",
						subject: "Dinner?"
				},
				email3 =  {
						from: "marian123@abc.com",
						date: "Jun 14",
						subject: "Re: condo for weekend"
				},
			],
		},	

		starred = {
			name: "Starred",
			emails: [],
		},	

		important = {
			name: "Important",
			emails: [],
		},

		sent = {
			name: "Sent",
			emails: [],
		},

		drafts = {
			name: "Drafts",
			emails: []
		},	
	],

	contacts: [
		{name: "Marjory", email: "marjory123@abc.com"},
		{name: "Aunt Chubi", email: "marian123@abc.com"},
		{name: "John", email: "john123@abc.com"},
		{name: "Jessica", email: "jessica123@abc.com"},
	],
};


for ( var i = 0; i < emailApp.mailboxes.length; i++) {
	console.log(emailApp.mailboxes[i].name);
};

for ( var i = 0; i < emailApp.mailboxes[0].emails.length; i++) {
	console.log(emailApp.mailboxes[0].emails[i]);
}

console.log(emailApp.mailboxes[0].emails[1].subject);

draft1 = emailApp.mailboxes[4].emails;
draft1Content = {
	to: "Jessica",
	subject: "Dinner at Saigon Palace!"
};
draft1.push(draft1Content);
console.log(draft1);