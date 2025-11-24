const Contact = () => {
  return (
    <div className="contact-page">
      


    
      <form>
        <input type="text" name="name" placeholder="Naam" />
        <input type="email" name="email" placeholder="E-mail" />
        <textarea name="message" placeholder="Bericht" rows="5"></textarea>
        <input type="submit" value="Verzenden" />
      </form>
    </div>
  );
};

export default Contact;