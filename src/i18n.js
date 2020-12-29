import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      title: {
        description: 'תיאור',
        friends: 'חברים',
        myGroups: 'הקבוצות שלי',
        publicGroups: 'קבוצות ציבוריות',
      },
      button: {
        add: 'הוסף',
        edit: 'ערוך',
        addNewGroup: 'הוספת קבוצה',
        leaveGroup: 'יציאה מהקבוצה',
        save: 'שמור',
        cancel: 'ביטול',
        deleteGroup: 'מחיקת קבוצה',
        agree: 'כן :)',
        disagree: 'בעצם לא..',
        back: 'חזור',
        next: 'רשימת חברים',
      },
      tooltip: {
        addNewPhoto: 'הוספת תמונה חדשה',
        addTag: 'הוסיפו תגית..',
        delete: 'מחיקה',
        privateGroup: 'קבוצה פרטית',
        publicGroup: 'קבוצה ציבורית',
      },
      placeholder: {
        description: 'הוסיפו תיאור..',
        name: 'הוסיפו שם..',
        search: 'חיפוש..',
        friend: 'הוסיפו חבר...',
      },
      message: {
        noGroupsFound: 'לא נמצאו אף קבוצות',
        noPrivateGroupsFound: 'אין לכם קבוצות פרטיות! צרו אחת :)',
        noTagsFound: '(: אין תגיות.. צרפו כמה',
        noFriendsFound: '(: אין חברים בקבוצה.. צרפו כמה',
      },
      alertMessage: {
        leaveGroup: 'אוי חבל.. לצאת מהקבוצה?',
        deleteGroup: 'אוי חבל.. למחוק את הקבוצה?',
        saveChanges: 'נראה טוב! לשמור את השינויים?',
      },
      timeGreeting: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evening: 'ערב טוב',
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
