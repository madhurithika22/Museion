class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.bookingData = {
      date: '',
      time: '',
      tickets: 1,
      type: 'Regular',
    };
  }

  askDate = () => {
    const message = this.createChatBotMessage('Please enter the date for your visit (YYYY-MM-DD):');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  askTime = () => {
    const message = this.createChatBotMessage('Please enter the time for your visit (HH:MM):');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  askTickets = () => {
    const message = this.createChatBotMessage('How many tickets would you like to book?');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  askTicketType = () => {
    const message = this.createChatBotMessage('What type of ticket would you like? (Regular, Student, VIP):');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  finishBooking = () => {
    const message = this.createChatBotMessage('Thank you! Your booking is complete.');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
