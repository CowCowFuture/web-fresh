/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";

export const Head = () => (
  <head>
    <meta charSet="utf-8"/>
    <title>ccf projects</title>
    <link rel="stylesheet" href="/style.css"/>
  </head>
)

export const ProjectList = () => (
  <div>
    <p>This is just the bancho !roll command but in bash</p>
    <a href={asset("/projectfolder/,roll")}>download</a>
  </div>
)

export default function Projects() {
  return (
    <div>
      <Head/>
      <h1 class="rainbow">ccf projects</h1>
      <ProjectList/>
    </div>
  );
}