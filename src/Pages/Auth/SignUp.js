import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import SignUpImg from "../../assets/images/auth/login1.png";
import toast from "react-hot-toast";
import useToken from "../../Hooks/useToken";
const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createUserEmail, setCreatedUserEmail] = useState("");
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
  const [token] = useToken(createUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log(name, email, password, role);

    if (password.length < 6) {
      setError(`Your Password must be 6 character`);
      return;
    }
    setUserName(name);
    setUserRole(role);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast("User created Successfully");
        const userInfo = {
          displayName: name,
        };

        updateUser(userInfo)
          .then(() => {
            saveUser(name, email, role);
            form.reset();
            navigate("/");
          })
          .catch((err) => setError(err));
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Save user ", data);
        setCreatedUserEmail(email);
      });
  };

  const handleGoogleSignup = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      saveUser(userName, user?.email, userRole);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center m-12 lg:text-left">
          <img src={SignUpImg} width={500} height={400} alt="Login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            Registration!
          </h1>
          <form onSubmit={handleSignup} className="card-body">
            <p className="text-center text-red-600">{error}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Role</span>
              </label>
              <select
                name="role"
                defaultValue="Normal User"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="Normal User">Normal User</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
            <div className="divider">OR</div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-info">
                Login
              </Link>
            </p>
            <button
              onClick={handleGoogleSignup}
              className="btn btn-outline btn-success"
            >
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
