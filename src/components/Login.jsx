import React, { useState } from "react"

export default function Login(){
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({ email: "", password: "", remember: true })
  const [errors, setErrors] = useState({})

  function onChange(e){
    const { name, value, type, checked } = e.target
    setValues(v => ({ ...v, [name]: type === "checkbox" ? checked : value }))
  }

  function validate(){
    const next = {}
    if (!values.email.trim()) next.email = "Email is required."
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email."
    if (!values.password) next.password = "Password is required."
    return next
  }

  function onSubmit(e){
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0){
      alert(`😺 Logging in as ${values.email}${values.remember ? " (remembered)" : ""}`)
    }
  }

  return (
    <div className="card" role="region" aria-label="Login card">
      <div className="card-body">
        <div className="center">
          <div className="illustration" aria-hidden="true">
            {/* Cat coin SVG */}
        <img
  src="/cat-envelope.jpg"
  alt="Cat placing cash into an envelope"
  className="cat-hero"
/>
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
  )
}
