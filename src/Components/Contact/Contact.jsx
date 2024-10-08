const Contact = () => {
  return (
    <>
      <form action="send_email.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
