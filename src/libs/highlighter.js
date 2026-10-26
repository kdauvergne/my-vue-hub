import { createHighlighter } from "shiki";

export const highlighterPromise = createHighlighter({
  themes: ["github-dark"],
  langs: ["vue", "javascript", "typescript"],
});
