export const GET_MESSAGES = "GET_MESSAGES";

export function getMessage() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

  return {
    type: GET_MESSAGES,
    payload: promise
  };
}
