import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Gửi yêu cầu đăng ký đến server tương tự như ở màn hình đăng nhập
    // Trong trường hợp này, chúng ta chỉ giả định rằng đăng ký thành công và gọi onRegister
    onRegister({ username });
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Username: </label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
    );
};

export default Register