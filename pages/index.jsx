import Login from "@/src/component/Login";
import Header from "@/src/component/header";
import StatusSection from "@/src/component/status";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
        {!user.uid &&
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
        }
        {user.uid &&
            <div className="home-page">
                <Header />
                <StatusSection />
            </div>
        }
    </>
  )
}
