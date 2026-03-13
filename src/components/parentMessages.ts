// parentMessages.ts

export enum ReelsFrameCommand {
  READY = 'ready',
  OPEN_GAME = 'go_to_game',
  OPEN_PROVIDER = 'go_to_provider',
  LIKED_GAME = 'liked_game',
  PAUSE = 'pause',
  PLAY = 'play',
  MUTE = 'mute',
  UNMUTE = 'unmute',
  SWIPE_BACKWARD = 'backward',
  SWIPE_FORWARD = 'forward',
  WATCHED_ALL_VIDEO = 'watched_all_video',
  VIDEO_WATCHED = 'video_15sec_watched',
  FEEDBACK_SHOWED = 'rate_your_experience_showed',
  FEEDBACK_VALUATED = 'rate_your_experience',
  RESTART_REELS = 'rate_your_experience_rewatch',
  CURRENT_REEL = 'current_video',
}

interface ReelsMessage {
  type: 'reels'
  action: ReelsFrameCommand
  context?: Record<string, unknown>
}


// Единственная функция, логирующая и отправляющая сообщения родителю.

// Глобальные переменные для очереди сообщений и контроля времени отправки
const messageQueue: ReelsMessage[] = [];
let lastSentTime = 0;
let timerId: number | null = null;

function processQueue(): void {
  if (messageQueue.length === 0) {
    timerId = null;
    return;
  }
  const now = Date.now();
  const delay = Math.max(300 - (now - lastSentTime), 0);
  timerId = window.setTimeout(() => {
    const message = messageQueue.shift();
    if (message) {
      console.log('[REELS MESSAGE]', message); // Логируем сообщение
      window.parent.postMessage(message, '*');  // Отправляем сообщение
      lastSentTime = Date.now();
    }
    processQueue();
  }, delay);
}

export function postReelsMessage(
  action: ReelsFrameCommand,
  context: Record<string, unknown> = {}
): void {
  const message: ReelsMessage = { type: 'reels', action, context };
  messageQueue.push(message);
  // Если процесс обработки очереди не запущен, запускаем его
  if (timerId === null) {
    processQueue();
  }
}

export const sendReelsReady = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.READY, { gameSlug, gameName, providerSlug, providerName, label: 'ready' })
}

export const sendReelsPlay = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.PLAY, { gameSlug, gameName, providerSlug, providerName, label: 'play' })
}

export const sendReelsPause = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.PAUSE, { gameSlug, gameName, providerSlug, providerName, label: 'pause' })
}

export const sendReelsUnmute = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.UNMUTE, { gameSlug, gameName, providerSlug, providerName, label: 'sound_on' })
}

export const sendReelsMute = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.MUTE, { gameSlug, gameName, providerSlug, providerName, label: 'sound_off' })
}

export const sendReelsLikedGame = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.LIKED_GAME, { gameSlug, gameName, providerSlug, providerName, label: 'like' })
}

export const sendReelsGoToGame = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.OPEN_GAME, { gameSlug, gameName, providerSlug, providerName, label: 'go_to_game' })
}

export const sendReelsGoToProvider = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.OPEN_PROVIDER, { gameSlug, gameName, providerSlug, providerName, label: 'go_to_provider' })
}

export const sendReelsCurrentVideo = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.CURRENT_REEL, { gameSlug, gameName, providerSlug, providerName, label: 'current_video' })
}

export const sendReelsWatchedAllVideo = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.WATCHED_ALL_VIDEO, { gameSlug, gameName, providerSlug, providerName, label: 'watched_all_video' })
}

export const sendReelsVideo15secWatched = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.VIDEO_WATCHED, { gameSlug, gameName, providerSlug, providerName, label: 'video_15sec_watched' })
}

export const sendReelsForward = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.SWIPE_FORWARD, { gameSlug, gameName, providerSlug, providerName, label: 'forward' })
}

export const sendReelsBackward = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.SWIPE_BACKWARD, { gameSlug, gameName, providerSlug, providerName, label: 'backward' })
}

export const sendReelsRewatchTrends = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.RESTART_REELS, { gameSlug, gameName, providerSlug, providerName, label: 'rewatch_trends' })
}

export const sendReelsFeedback = (gameSlug: string, gameName: string, providerSlug: string, providerName: string): void => {
  postReelsMessage(ReelsFrameCommand.FEEDBACK_SHOWED, { gameSlug, gameName, providerSlug, providerName, label: 'feedback_showed' })
}

export const sendReelsFeedbackValuated = (gameSlug: string, gameName: string, providerSlug: string, providerName: string, feedback: string): void => {
  postReelsMessage(ReelsFrameCommand.FEEDBACK_VALUATED, { gameSlug, gameName, providerSlug, providerName, label: feedback })
}

export const sendReelsExternalLink = (gameSlug: string, gameName: string, providerSlug: string, providerName: string, linkUrl: string): void => {
  postReelsMessage(ReelsFrameCommand.SWIPE_FORWARD, { gameSlug, gameName, providerSlug, providerName, label: linkUrl })
}

