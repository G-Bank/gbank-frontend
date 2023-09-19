import LocalizedStrings from 'react-localization';

export const strings = new LocalizedStrings({
  en: {
    // brand
    name: 'felexin',

    // general
    dashboard: 'dashboard',
    home: 'home',
    profile: 'profile',
    welcome: 'Hi, Welcome Back',
    submit: 'submit',
    available: 'available',
    bio: 'bio',
    allServices: 'all services',
    cancel: 'cancel',

    // home
    crypto: 'Crypto',
    balanceUSDT: 'Total Balance (USDT)',
    balanceRial: 'Total Balance (ريال)',
    rial: 'Rial',
    toman: 'Toman',
    gold: 'Gold',
    usdt: 'Tether',
    btc: 'Bitcoin',
    usd: 'Dollar',
    exchange: 'exchange',
    transfer: 'transfer',
    charge: 'charge',
    wallet: 'wallet',
    transactions: 'transactions',
    deposite: 'deposite',

    // profile
    generalError: 'Field is required!',
    firstname: 'First name',
    lastname: 'Lastname',
    national_code: 'National Code',
    email: 'Email',
    address: 'Address',
    postal_code: 'Postal Code',
    date_of_birth: 'Date of birth',
    cards: 'cards',
    addNewCard: 'Add New Card',
    cardAlreadyExists: 'Card already exists',
    authenticationRequiredForCards: 'authentication Required for cards',
    maxDailyWithdraw: 'Max Daily Withdraw',
    authentication: 'authentication',
    authLevel: 'Authentication Level',
    enter_national_code: 'Enter National Code',
    national_code_not_matched: 'National Code not matched',
    authenticationSuccessful: 'Authentication Successful',
    backToHomePage: 'Back to Home Page',

    // account
    accountWelcome: 'You are now logged in',
    accountMessage: 'Please choose your account type!',
    profitAccount: 'Profit account',
    investmentAccount: 'Investment account',
    moneyAccount: 'Pocket money account',

    // authentication
    welcomeSubtitle: 'Enter your phone number to continue',
    phone_number: 'Phone Number',
    otp: 'otp',
    otpWarning: "Didn't get the otp?",
    signIn: 'sign in',
    phoneNumberError: 'phone number is required',
    otpError: 'OTP code is required',
    otpText: 'Your otp is ',
    logout: 'logout',

    // transfer
    currentWallet: 'Your maximum transfer limit',
    messageForSelect: 'Select the receiver.',
    selectTypeOfTransfer: 'Select transfer source',

    // exchange
    amountYouPay: 'The amount you pay',
    stock: 'Stock',
    exchangeRate: 'Exchange Rate',
    amountYouReceive: 'The amount you receive',
    notEnoughBalance: 'Not Enouch Balance',
    openOrders: 'Open Orders',
    receivingAmount: 'Receiving Amount',
    areYouSure: 'Are You Sure?',
    yes: 'Yes',
    no: 'No',
  },
  fa: {
    // brand
    name: 'فلکسین',

    // general
    dashboard: 'داشبرد',
    home: 'خانه',
    profile: 'حساب کاربری',
    welcome: 'سلام، خوش آمدید',
    submit: 'ثبت',
    available: 'موجود',
    bio: 'احراز',
    allServices: 'همه خدمات',
    cancel: 'بستن',

    // home
    crypto: 'کریپتو',
    balanceUSDT: 'ارزش کل (USDT)',
    balanceRial: 'ارزش کل (ريال)',
    rial: 'ریال',
    toman: 'تومان',
    gold: 'طلا',
    usdt: 'تتر',
    btc: 'بیت کوین',
    usd: 'دلار',
    exchange: 'تبدیل',
    transfer: 'انتقال',
    charge: 'واریز',
    wallet: 'کیف پول',
    transactions: 'تراکنش‌ها',
    deposite: 'واریز',

    // profile
    generalError: 'لطفا این فیلد را پر کنید!',
    firstname: 'نام',
    lastname: 'نام خانوادگی',
    national_code: 'کد ملی',
    email: 'رایانامه',
    address: 'آدرس',
    postal_code: 'کد پستی',
    date_of_birth: 'تاریخ تولد',
    cards: 'کارت‌ها',
    addNewCard: 'افزودن کارت جدید',
    cardAlreadyExists: 'کارت موجود است',
    authenticationRequiredForCards: 'برای افزودن کارت احراز هویت کنید',
    maxDailyWithdraw: 'سقف برداشت روزانه',
    authentication: 'احراز هویت',
    authLevel: 'سطح کاربری',
    enter_national_code: 'لطفا کد ملی را وارد کنید',
    national_code_not_matched: 'کد ملی مطابق نیست',
    authenticationSuccessful: 'احراز هویت شما با موفقیت انجام شد',
    backToHomePage: 'بازگشت به صفحه اصلی',

    // account
    accountWelcome: ' شما وارد شدید',
    accountMessage: 'لطفا نوع حساب کاربری خود را انتخاب کنید.',
    profitAccount: 'حساب سود',
    investmentAccount: 'حساب سرمایه‌گذاری',
    moneyAccount: 'حساب پول تو جیبی',

    // authentication
    welcomeSubtitle: 'شماره تماس فعال خود را برای ادامه وارد کنید.',
    phone_number: 'شماره تماس',
    otp: 'کد 4 رقمی',
    otpWarning: 'کد 4 رقمی را دریافت نکردم!',
    signIn: 'ورود',
    phoneNumberError: 'شماره تماس ضروری است',
    otpError: 'کد 4 رقمی ضروری است',
    otpText: 'کد شما: ',
    logout: 'خروج از حساب',

    // transfer
    currentWallet: 'بیشینه مقدار قابل انتقال',
    messageForSelect: 'دریافت کننده وجه را انتخاب کنید',
    selectTypeOfTransfer: 'منبع انتقال را انتخاب کنید',

    // exchange
    amountYouPay: 'مقداری که پرداخت می‌کنید',
    stock: 'سهم',
    exchangeRate: 'نرخ تبدیل',
    amountYouReceive: 'مقداری که دریافت می‌کنید',
    notEnoughBalance: 'موجودی حساب شما کافی نیست',
    openOrders: 'سفارش های باز',
    receivingAmount: 'مقدار دریافتی',
    areYouSure: 'آیا مطمئن هستید؟',
    yes: 'بله',
    no: 'خیر',
  }
});
