const videos = [
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',
  'dQw4w9WgXcQ',  // Increase the chance of original rick rolled.
  'wpV-gGA4PSk',
  'ub82Xb1C8os',
  'GHMjD0Lp5DY',
  'D919h2Cri74',
  'iJgNpm8cTE8',
  '7z_1E8VGJOw',
  'wpV-gGA4PSk',
  'OcL3wJCE1w8',
  '29esPZzn4wA',
  'sO4wVSA9UPs&t=27',
  'cSAp9sBzPbc',
  'ElSivh9j5Qs&t=76',
  '7hMTO3jDTJ8',
  'E50L-JYWm3w',
  'LLd2uAam0hI',
  'pUvwleVGVmA',
  'orbjuMHZ4k4',
  'FpFztrJbksg&t=31',
  'd4EviPTzllY'
]

const gachaChance = (chance: number = 0.6): boolean => {
  return Math.random() < chance
}

const getVideo = (): string => {
  const videoIndex = Math.floor(Math.random() * videos.length);
  return videos[videoIndex];
}

if (gachaChance()) {
  console.log('hit')
  window.location.href = `https://www.youtube.com/watch?v=${getVideo()}`
} else {
  console.log('yeet') //<<Yeet?
}

let tempHref = window.location.href

const listener = () => {
  if (tempHref !== window.location.href) {
    if (gachaChance()) {
      window.location.href = `https://www.youtube.com/watch?v=${getVideo()}`
    } else {
      tempHref = window.location.href
    }
  } else {
    tempHref = window.location.href
  }
}

setInterval(listener, 100)
