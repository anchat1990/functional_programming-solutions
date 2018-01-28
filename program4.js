function getShortMessages(messages) {
      // SOLUTION GOES HERE
	return messages.map((o) => {return o.message;}).filter((s) => {return s.length <50;});	
}

module.exports = getShortMessages
