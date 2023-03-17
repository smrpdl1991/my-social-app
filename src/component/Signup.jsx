const Signup = () => {
  return (
    <form className="signup">
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Confirm password" />
        <input type="submit" value="Sign Up" />
    </form>
  )
}

export default Signup