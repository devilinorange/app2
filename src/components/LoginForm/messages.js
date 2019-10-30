export default (message) => {
  switch (message) {
    case 'wrong_email_or_password':
      return 'Неверный email или пароль';
    case 'The user aborted a request.':
      return 'Авторизация отмененна';
    default:
      return 'Unknown error';
  }
};
