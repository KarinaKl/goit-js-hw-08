import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onGetCurrentTime, 1000));
function onGetCurrentTime(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

function onPlay(e) {
  const currentTime = localStorage.getItem(STORAGE_KEY);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
onPlay();
