class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('start') || lowerCaseMessage.includes('yes')) {
      this.actionProvider.askDate();
    } else if (lowerCaseMessage.includes('date')) {
      this.actionProvider.askTime();
    } else if (lowerCaseMessage.includes('time')) {
      this.actionProvider.askTickets();
    } else if (lowerCaseMessage.includes('tickets')) {
      this.actionProvider.askTicketType();
    } else {
      this.actionProvider.finishBooking();
    }
  }
}

export default MessageParser;
