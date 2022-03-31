import { PrimaryCustomMessages } from "reactjs-forms/types";

type TypeCustomMessage = {
  [ln: string]: PrimaryCustomMessages;
};

const validationMessages: TypeCustomMessage = {
  en: {
    isEmail: "upss! email address is invalid"
  }, //there are already default messages for en
  tr: {
    required: "{{identity}} zorunlu alandır",
    isName: "geçersiz ad girdiniz",
    isAlphaNumeric: "{{identity}} sadece rakam ve harflerden oluşmalıdır",
    isEmail: "geçersiz email adresi"
  }
};

export type LexiaProps = {
  heading: string;
  btn: string;
  placeholders: {
    [p: string]: string;
  };
  alertMsg: string;
  validation: PrimaryCustomMessages;
};

export type Laxia = {
  [ln: string]: LexiaProps;
};

const lexia: Laxia = {
  en: {
    heading: "Form Generator",
    btn: "Generate Form",
    placeholders: {
      email: "Email Adress",
      dallas: "dallas",
      lastName: "Last Name",
      password: "Password",
      passwordRepeat: "Password-Repeat",
      tester: "Select"
    },
    alertMsg: "Registration was succeeded!",
    validation: validationMessages["en"]
  },
  tr: {
    heading: "Kaydol",
    btn: "Şimdi Kaydol",
    placeholders: {
      email: "Email Adresi",
      fistName: "Ad",
      lastName: "Soyad",
      password: "Şifre",
      passwordRepeat: "Şifre Tekrar",
      country: "Ülke"
    },
    alertMsg: "Kayıt başarı ile gerçekleşti!",
    validation: validationMessages["tr"]
  }
};

export default lexia;
