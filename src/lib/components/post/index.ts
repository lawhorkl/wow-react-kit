import { WowPostBody } from "./WowPostBody";
import { WowPostDateBreak } from "./WowPostDateBreak";
import { WowPostMeta } from "./WowPostMeta";
import { WowPostRoot } from "./WowPostRoot";
import { WowPostTime } from "./WowPostTime";
import { WowPostTitle } from "./WowPostTitle";

export { WowPostBody, WowPostDateBreak, WowPostMeta, WowPostRoot, WowPostTime, WowPostTitle };
export type { WowPostMetaProps } from "./WowPostMeta";

export const WowPost = {
  Root: WowPostRoot,
  Title: WowPostTitle,
  DateBreak: WowPostDateBreak,
  Body: WowPostBody,
  Meta: WowPostMeta,
  Time: WowPostTime
};
