export default function Contact() {
  return (
    <>
    <section className="contact">
      <h1>Contact</h1>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Naam</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Je naam"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="je@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            placeholder="Typ hier je bericht..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          Versturen
        </button>
      </form>
    </section>
            <footer className="footer">Jordan Buchacz Portfolio</footer>

   </>
  );
}

