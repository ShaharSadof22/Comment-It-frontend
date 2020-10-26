import httpService from './httpService';

const comments = [
  { email: "shahar@gmail.com", message: "Hey there!" },
  { email: "puki444@gmail.com", message: "Hey you!" },
  { email: "tomi33@gmail.com", message: "Hey me!" },
  { email: "yanav444@gmail.com", message: "Hey she!" }
]

export const commentService = {
  query,
  add,
};

function query() {
  return httpService.get(`comment`);
}

async function add(email, message) {
  const comment = _createComment(email, message)
  await httpService.post(`comment`, comment);
}

function _createComment(email, message) {
  return {
    email,
    message
  }
}

function makeId(length = 5) {
  var txt = '';
  var possible = '0123456789abcdefgABCDEFG';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}