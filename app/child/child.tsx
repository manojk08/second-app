export default function Child({ message }: { message: string }) {
  return (
    <section>
      <h2>Child component</h2>
      <p>{message || "Your message will appear here."}</p>
    </section>
  );
}