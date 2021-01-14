import { groups } from './MockData';

export const decodeString = (str) => {
  str = str.split('%D7%90').join('א');
  str = str.split('%D7%91').join('ב');
  str = str.split('%D7%92').join('ג');
  str = str.split('%D7%93').join('ד');
  str = str.split('%D7%94').join('ה');
  str = str.split('%D7%95').join('ו');
  str = str.split('%D7%96').join('ז');
  str = str.split('%D7%97').join('ח');
  str = str.split('%D7%98').join('ט');
  str = str.split('%D7%99').join('י');
  str = str.split('%D7%9A').join('ך');
  str = str.split('%D7%9B').join('כ');
  str = str.split('%D7%9C').join('ל');
  str = str.split('%D7%9D').join('ם');
  str = str.split('%D7%9E').join('מ');
  str = str.split('%D7%9F').join('ן');
  str = str.split('%D7%A0').join('נ');
  str = str.split('%D7%A1').join('ס');
  str = str.split('%D7%A2').join('ע');
  str = str.split('%D7%A3').join('ף');
  str = str.split('%D7%A4').join('פ');
  str = str.split('%D7%A5').join('ץ');
  str = str.split('%D7%A6').join('צ');
  str = str.split('%D7%A7').join('ק');
  str = str.split('%D7%A8').join('ר');
  str = str.split('%D7%A9').join('ש');
  str = str.split('%D7%AA').join('ת');
  str = str.split('%20').join(' ');
  return str;
};

export const getGroupById = (groupId) => {
  return groups[groups.map((group) => group._id).indexOf(groupId)];
};
