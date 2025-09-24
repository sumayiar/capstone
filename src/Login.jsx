import React, { useState } from "react";

export default function Login(){
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});

  function onChange(e){
    const { name, value, type, checked } = e.target;
    setValues(v => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  }

  function validate(){
    const next = {};
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.password) next.password = "Password is required.";
    return next;
  }

  function onSubmit(e){
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0){
      alert(`😺 Logging in as ${values.email}${values.remember ? " (remembered)" : ""}`);
    }
  }

  return (
    <div className="card" role="region" aria-label="Login card">
      <div className="card-body">
        <div className="center">
          <div className="illustration" aria-hidden="true">
            {/* Cat coin SVG */}
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37 37) rotate(90) scale(37)">
                  <stop stopColor="#FFE8A3"/>
                  <stop offset="1" stopColor="#F2C14E"/>
                </radialGradient>
              </defs>
              <circle cx="37" cy="37" r="34" fill="url(#g)" stroke="rgba(0,0,0,0.15)" />
              {/* Cat face */}
              <circle cx="37" cy="40" r="16" fill="#fff" opacity="0.95"/>
              <path d="M28 36 L30 30 L35 34Z" fill="#fff"/>
              <path d="M46 36 L44 30 L39 34Z" fill="#fff"/>
              <circle cx="32" cy="40" r="2.5" fill="#0b0b0d"/>
              <circle cx="42" cy="40" r="2.5" fill="#0b0b0d"/>
              <path d="M33 46 C37 49, 41 49, 45 46" stroke="#0b0b0d" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              {/* whiskers */}
              <path d="M22 40 H30" stroke="#0b0b0d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 44 H29" stroke="#0b0b0d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M52 40 H44" stroke="#0b0b0d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M53 44 H45" stroke="#0b0b0d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Welcome back 🐱</h1>
          <p className="subtitle">Sign in to continue building strong financial habits with Cashvelo.</p>
        </div>

        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              value={values.email}
              onChange={onChange}
              autoComplete="email"
            />
            {errors.email && <p className="subtitle" role="alert" style={{ color: "#dc2626" }}>{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <div className="password-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="••••••••"
                value={values.password}
                onChange={onChange}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-eye"
                onClick={() => setShowPassword(s => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="subtitle" role="alert" style={{ color: "#dc2626" }}>{errors.password}</p>}
          </div>

          <div className="row">
            <label className="checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={values.remember}
                onChange={onChange}
              />
              Remember me
            </label>
            <a className="link" href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">Sign in</button>

          <div className="divider" aria-hidden="true">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>

          <div className="social">
            <button type="button">Continue with Google</button>
            <button type="button">Continue with GitHub</button>
          </div>
        </form>

        <p className="center subtitle" style={{ marginTop: 16 }}>
          New here? <a className="link" href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
}
