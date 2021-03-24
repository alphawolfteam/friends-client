import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      headline: {
        friends: 'רשימת חברים',
        additionalData: 'מידע נוסף',
      },
      title: {
        description: 'תיאור',
        members: 'חברים',
        oneMember: 'חבר אחד',
        currentUserGroups: 'הקבוצות שלי',
        privateGroups: 'קבוצות פרטיות',
        publicGroups: 'קבוצות ציבוריות',
      },
      button: {
        add: 'הוספה',
        edit: 'עריכה',
        addNewGroup: 'קבוצה חדשה',
        agree: 'כן :)',
        disagree: 'בעצם לא..',
        ok: 'אוקיי',
        next: 'הבא',
        back: 'חזור',
      },
      tooltip: {
        leaveGroup: 'יציאה מהקבוצה',
        deleteGroup: 'מחיקת קבוצה',
        addNewPhoto: 'הוספת תמונה חדשה',
        delete: 'מחיקה',
        privateGroup: 'קבוצה פרטית',
        publicGroup: 'קבוצה ציבורית',
        manager: 'מנהל/ת',
        member: 'חבר/ה',
        edit: 'עריכה',
        save: 'שמירה',
        cancel: 'ביטול',
        info: 'למידע נוסף',
      },
      placeholder: {
        addTag: 'כתבו תגית..',
        searchFriend: 'הוסיפו חבר...',
        description: 'הוסיפו תיאור..',
        name: 'הוסיפו שם..',
        search: 'חיפוש..',
      },
      error: {
        file: 'יש לבחור תמונה',
        server: ':) קרתה תקלה.. נסו שוב מאוחר יותר',
        userAlreadyExist: 'החבר/ה כבר בקבוצה',
        emptyTagInput: 'יש למלא את התגית',
        tagAlreadyExist: 'התגית כבר קיימת',
        tagTooShort: 'תגית צריכה להכיל לפחות {{minTagLength}} תווים',
      },
      success: {
        icon: 'התמונה עודכנה בהצלחה',
        type: 'סוג הקבוצה עודכן בהצלחה',
        addTag: 'התגית נוספה בהצלחה',
        removeTag: 'התגית הוסרה בהצלחה',
        role: 'התפקיד עודכן בהצלחה',
        addUser: 'החבר נוסף בהצלחה',
        removeUser: 'החבר הוסר בהצלחה',
        description: 'התיאור עודכן בהצלחה',
        name: 'השם עודכן בהצלחה',
      },
      message: {
        noGroupsFound: 'לא נמצאו אף קבוצות',
        noCurrentUserGroupsFound: 'אין לכם קבוצות! צרו אחת :)',
        noTagsFound: '(: אין תגיות.. אתם יכולים לצרף כמה',
        noMembersFound: '(: אין חברים בקבוצה.. צרפו כמה',
      },
      alertMessage: {
        cantLeaveGroup: 'כדי לצאת מהקבוצה מנו מנהלים חדשים :)',
        theGroupWillBeDeleted: 'הקבוצה תמחק.. לצאת מהקבוצה?',
        leaveGroup: 'אוי חבל.. לצאת מהקבוצה?',
        deleteGroup: 'אוי חבל.. למחוק את הקבוצה?',
        validationMessage: 'רק רגע..',
      },
      timeGreeting: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evening: 'ערב טוב',
      },
      validation: {
        emptyNameInput: 'יש לבחור שם',
        emptyDescriptionInput: 'יש למלא את התיאור',
        noMembersInList: 'יש להוסיף חברים',
        nameTooShort: 'השם צריך להכיל לפחות {{minGroupNameLength}} תווים',
      },
      roles: {
        member: 'חבר/ה',
        manager: 'מנהל/ת',
      },
      text: {
        info: `שירות הקבוצות של אמן.\nבעזרת Friends ניתן ליצור קבוצות עניין הן מבצעיות והן אישיות,\n ולהוסיף משתמשים לקבוצות קיימות ובכך להקל על המשתמש בעבודה היומיומית\n (ארגון פגישות, עבודה משותפת על פרויקטים, שיתוף קבצים ועוד).
        השירות מאפשר עבודה באופן מרוכז מול אנשי קשר מרובים\n בעזרת השימוש בקבוצה.`,
        infoMessage: 'שירות Friends נמצא בימים אלה בתהליך פיתוח ועתיד להיות זמין בקרוב',
      },
      link: {
        docs: 'דקומונטציה',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
