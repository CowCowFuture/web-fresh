/** @jsx h */
import { h } from "preact";

export const Head = () => (
  <head>
    <meta charSet="utf-8"/>
    <title>ccf site</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
)

export const Links = () => (
  <div>
    <p>osu! <a href="https://osu.ppy.sh/users/28964454">CowCowFuture</a></p>
    <p>github: <a href="https://www.github.com/CowCowFuture/">CowCowFuture</a></p>
    <p>reddit: <a href="https://www.reddit.com/u/CowCowFuture/">/u/CowCowFuture/</a></p>
    <p>twitter: <a href="https://youtu.be/dQw4w9WgXcQ">@CowCowFuture</a></p>
  </div>
)

export default function Home() {
  return (
    <div>
      <Head/>
      <h1>ccf site</h1>
      <Links/>
    </div>
  );
}
