/** @jsx h */
import { h } from "preact";

export const Head = () => (
  <head>
    <meta charSet="utf-8"/>
    <title>ccf projects</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
)

export default function Projects() {
  return (
    <div>
      <Head/>
      <h1 class="rainbow">ccf projects</h1>
    </div>
  );
}