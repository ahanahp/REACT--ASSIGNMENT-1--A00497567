import { me } from "../config.js";

export default function About() {
  return (
    <section className="card">
      <h1>{me.name}</h1>
      <p className="tagline">{me.tagline}</p>
      <p>{me.bio}</p>
      <h2>Things I enjoy</h2>
      <ul>
        {me.interests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
