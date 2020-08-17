import moment from 'moment';

const mapUserToMessage = ({ message, users }) => {
  const user = users.find((u) => u.attributes.id === message.user_id);
  return {
    id: message.id,
    content: message.content,
    user_id: user.attributes.id,
    user_color: user.attributes.color,
    user_name: user.attributes.name,
    created_at: moment(message.created_at).format('llll'),
  };
};

const scrollToBottom = (ref) => {
  const scrollHeight = ref.scrollHeight;
  const height = ref.clientHeight;
  const maxScrollTop = scrollHeight - height;
  ref.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
};

const generateRandomWelcomeMessage = (userName) => {
  const welcomeMessages = Object.freeze([
    `Welcome to the party, ${userName}!`,
    `Look who decided to show up - it's ${userName}!`,
    `Welcome, ${userName}! Better late than never, I guess.`,
  ]);

  return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
};

export default {
  mapUserToMessage,
  scrollToBottom,
  generateRandomWelcomeMessage,
};
