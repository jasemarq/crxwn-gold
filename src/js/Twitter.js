import Twitter from 'twitter'

const account = {

  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
  params: '',


getTweets() {

    const client = new Twitter({
    consumer_key: this.consumer_key,
    consumer_secret: this.consumer_secret,
    access_token_key: this.access_token_key,
    access_token_secret: this.access_token_secret
  });

  client.get('statuses/user_timeline', this.params, (error, tweets, response) => {
    if (!error) {
      console.log(tweets);
      return tweets;
    }
  })
}

}

let clientFactory = function clientFactory () {
  return Object.assign(Object.create(account), {

    consumer_key: 'PedBVO88veelKF5u73REY1fJM',
    consumer_secret: 'FVnLlITexw1ILBBNRne4Vkz3CqtPABRLBhLz31deI7rZcq7eZR',
    access_token_key:	'883149624948781056-MeyfTU57oVKdtNLoOLnjmZUT2OFM0AE',
    access_token_secret: 'TTvic0PDKcWdu7emWno1BgL0IBO1M6I8zleiX251eS3BV',
    params: 'crxwn-hw'

  });
};

let crxwnAccount = clientFactory();

module.exports = crxwnAccount;
