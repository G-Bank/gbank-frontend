import LocalizedStrings from 'react-localization';

export const strings = new LocalizedStrings({
  en: {
    // general
    dashboard: 'dashboard',
    home: 'home',
    profile: 'profile',
    welcome: 'Hi, Welcome Back',
    submit: 'submit',

    // home
    crypto: 'Crypto',
    balance: 'Total Balance (USDT)',
    rial: 'Rial',
    convert: 'Convert',

    // profile
    generalError: 'Field is required!',
    firstname: 'First name',
    lastname: 'Lastname',
    national_code: 'National Code',
    email: 'Email',
    address: 'Address',
    postal_code: 'Postal Code',
    date_of_birth: 'Date of birth',

    // account
    accountWelcome: 'You are now logged in',
    accountMessage: 'Please choose your account type!',
    profitAccount: 'Profit account',
    investmentAccount: 'Investment account',
    moneyAccount: 'Pocket money account',

    // authentication
    welcomeSubtitle: 'Enter your phone number to continue',
    phoneNumber: 'Phone Number',
    otp: 'otp',
    otpWarning: "Didn't get the otp?",
    signIn: 'sign in',
    phoneNumberError: 'phone number is required',
    otpError: 'OTP code is required',
    otpText: 'Your otp is ',
    logout: 'logout'
  },
  fa: {
    // general
    dashboard: 'داشبرد',
    home: 'خانه',
    profile: 'حساب کاربری',
    welcome: 'سلام، خوش آمدید',
    submit: 'ثبت',

    // home
    crypto: 'کریپتو',
    balance: 'ارزش کل (USDT)',
    rial: 'ریال',
    convert: 'تبدیل',

    // profile
    generalError: 'لطفا این فیلد را پر کنید!',
    firstname: 'نام',
    lastname: 'نام خانوادگی',
    national_code: 'کد ملی',
    email: 'رایانامه',
    address: 'آدرس',
    postal_code: 'کد پستی',
    date_of_birth: 'تاریخ تولد',

    // account
    accountWelcome: ' شما وارد شدید',
    accountMessage: 'لطفا نوع حساب کاربری خود را انتخاب کنید.',
    profitAccount: 'حساب سود',
    investmentAccount: 'حساب سرمایه‌گذاری',
    moneyAccount: 'حساب پول تو جیبی',

    // authentication
    welcomeSubtitle: 'شماره تماس فعال خود را برای ادامه وارد کنید.',
    phoneNumber: 'شماره تماس',
    otp: 'کد 4 رقمی',
    otpWarning: 'کد 4 رقمی را دریافت نکردم!',
    signIn: 'ورود',
    phoneNumberError: 'شماره تماس ضروری است',
    otpError: 'کد 4 رقمی ضروری است',
    otpText: 'کد شما: ',
    logout: 'خروج از حساب'
  }
});
