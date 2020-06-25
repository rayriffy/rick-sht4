import { getVideo } from './getVideo'

export const setRickRoll = (element: HTMLElement): void => {
  // TODO: Set element to link to that youtube video
  // element.setAttribute("href", "https://www.youtube.com/watch?v=" + getVideo());
  element.setAttribute("href", `https://www.youtube.com/watch?v=${getVideo()}`);

}
