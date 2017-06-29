import YouTube from 'youtube-player'

const video = {

  events: [
    {'dataName': 'unstarted',  'dataInt':-1},
    {'dataName': 'ended',      'dataInt': 0},
    {'dataName': 'playing',    'dataInt': 1},
    {'dataName': 'paused',     'dataInt': 2},
    {'dataName': 'buffering',  'dataInt': 3},
    {'dataName': 'video cued', 'dataInt': 5}
    ],

    state: {
      event: -1
    },

handleStateChange() {


},

  describe() {
    return `${this.name} is the man is real.`
  }
}

let youtubeFactory = function youtubeFactory () {
  return Object.assign(Object.create(video), {
    name: 'jason'
  });
};

let jason = youtubeFactory();

module.exports = jason;
