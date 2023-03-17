import Login from "@/src/component/Login"
import Header from "@/src/component/header"
import StatusSection from "@/src/component/status"

export default function Home() {
  return (
    <>
        <div className="login-section">
            <div className="container">
                <div className="section-wrap">
                    <div className="section-wrap-left">
                        <h1 className="logo">facebook</h1>
                        <p className="">Connect with friends and the world around you on Facebook.</p>
                    </div>
                    <div className="section-wrap-right">
                        <Login />
                    </div>
                </div>
            </div>
        </div>

        <div className="home-page">
            <Header />
            <StatusSection />
        </div>
    </>
  )
}
