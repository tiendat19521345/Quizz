// src/components/Login.js
import React, { useState } from 'react';
import "./Login.css"
import image from "../image/login.png"

const Login = ({ onLogin }) => {

  return (
    <div className='div-genaral'>
      <div className='div-left'>
        <img className='img-login' src={image} />
      </div>

      <div className='div-right'>
        <div className='div-child'>
          <div className='header-login'>
            <h1>Đăng nhập</h1>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center', marginTop: 50}}>
            <div className='div-input'>
              <input className='text-input' type="text" name="name" placeholder='Tên đăng nhập' />
            </div>
            <div className='div-input'>
              <input className='text-input' type="text" name="name" placeholder='Mật khẩu' />
            </div>
            <div className='button-login'>Đăng nhập</div>
            <div className='div-btn-regis'>
              <p>Bạn đã có tài khoản?</p>
              <div className='button-regis'>Đăng ký</div>
            </div>
          </div>
          
        </div>
    
      </div>
      
    </div>
  );
};

export default Login;
