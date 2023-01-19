# Be sure to change the API key

const sdk = require('api')('@writesonic/v2.2#4enbxztlcbti48j');

sdk.auth('apikeyhere');
sdk.chatsonic_V2BusinessContentChatsonic_post({
  enable_google_results: 'true',
  enable_memory: false,
  input_text: 'Who was Ada Lovelace?'
}, {engine: 'premium'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
