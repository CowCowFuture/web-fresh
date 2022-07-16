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
    <p>
      osu! <a href="https://osu.ppy.sh/users/28964454">CowCowFuture</a>
      <br/>
      github: <a href="https://www.github.com/CowCowFuture/">CowCowFuture</a>
      <br/>
      reddit: <a href="https://www.reddit.com/u/CowCowFuture/">/u/CowCowFuture/</a>
      <br/>
      twitter: <a href="https://youtu.be/dQw4w9WgXcQ">@CowCowFuture</a>
    </p>
  </div>
)

export default function Home() {
  return (
    <div>
      <Head/>
      <h1 class="rainbow">ccf site</h1>
      <Links/>
      <a href="/projects">my projects</a>
    </div>
  );
}
