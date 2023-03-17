const ForgetPassword = () => {
  return (
    <section className="section-forget-password">
        <div className="container">
            <div className="section-wrap">
                <h2>Find your account</h2>
                <div className="input-field">
                    <p>Please enter your email to search for your account.</p>
                    <input  placeholder="Enter Email" type="email" />
                </div>
                <div className="bttn-wrap">
                    <button className="cancel-bttn" type="button">cancel</button>
                    <button className="search-bttn" type="button">search</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ForgetPassword