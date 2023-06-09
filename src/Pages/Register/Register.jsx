import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

export default function Register() {
  const registerNewUser = (e) => {
    e.preventDefault();
    console.log("user Register");
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <section class="login-register">
        <div class="login register-form">
          <span class="login__title">ساخت حساب کاربری</span>
          <span class="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div class="login__new-member">
            <span class="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link class="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input
                element="input"
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                type="text"
                className="login-form__password-input"
                placeholder="آدرس ایمیل"
              />

              <i class="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                type="text"
                className="login-form__password-input"
                placeholder="رمز عبور"
              />

              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Button
              className="login-form__btn"
              type="submit"
              onClick={registerNewUser}
              disabled={false}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
          </form>
          <div class="login__des">
            <span class="login__des-title">سلام کاربر محترم:</span>
            <ul class="login__des-list">
              <li class="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li class="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li class="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
