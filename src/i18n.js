import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import config from './appConf';

const resources = {
  he: {
    translation: {
      title: {
        description: 'תיאור',
        members: 'חברים',
        currentUserGroups: 'הקבוצות שלי',
        privateGroups: 'קבוצות פרטיות',
        publicGroups: 'קבוצות ציבוריות',
      },
      button: {
        add: 'הוסף',
        edit: 'ערוך',
        addNewGroup: 'קבוצה חדשה',
        leaveGroup: 'יציאה מהקבוצה',
        save: 'שמור',
        cancel: 'ביטול',
        deleteGroup: 'מחיקת קבוצה',
        agree: 'כן :)',
        disagree: 'בעצם לא..',
        ok: 'אוקיי',
      },
      tooltip: {
        addNewPhoto: 'הוספת תמונה חדשה',
        delete: 'מחיקה',
        privateGroup: 'קבוצה פרטית',
        publicGroup: 'קבוצה ציבורית',
        hierarchy: 'היררכיה',
        manager: 'מנהל/ת',
        member: 'חבר/ה',
        edit: 'עריכה',
        save: 'שמירה',
        cancel: 'ביטול',
      },
      placeholder: {
        addTag: 'הוסיפו תגית..',
        searchFriend: 'הוסיפו חבר...',
        description: 'הוסיפו תיאור..',
        name: 'הוסיפו שם..',
        search: 'חיפוש..',
      },
      error: {
        file: 'יש לבחור תמונה',
        server: 'קרתה תקלה.. נסו שוב מאוחר יותר :)',
        userAlreadyExist: 'החבר/ה כבר בקבוצה',
        emptyTagInput: 'יש למלא את התגית',
        tagAlreadyExist: 'התגית כבר קיימת',
        tagTooShort: `תגית צריכה להכיל לפחות ${config.minTagLength} תווים`,
      },
      message: {
        noGroupsFound: 'לא נמצאו אף קבוצות',
        noCurrentUserGroupsFound: 'אין לכם קבוצות! צרו אחת :)',
        noTagsFound: '(: אין תגיות.. אתם יכולים לצרף כמה',
        noMembersFound: '(: אין חברים בקבוצה.. צרפו כמה',
      },
      alertMessage: {
        cantLeaveGroup: 'כדי לצאת מהקבוצה מנו מנהלים חדשים :)',
        theGroupWillBeDeleted: 'אוי חבל הקבוצה תמחק.. לצאת מהקבוצה?',
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
        nameTooShort: `השם צריך להכיל לפחות ${config.minGroupNameLength} תווים`,
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
