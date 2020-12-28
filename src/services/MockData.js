// TODO: Delete file

import groupIconsCodes from '../images/group-icons/group-icons-base64-codes';

const groups = [
  {
    name: 'כל דולפין',
    description: 'כללללל דולפין',
    tags: ['רמת אביב'],
    type: 'public',
    users: [
      {
        role: 0,
        id: '1111',
      },
      {
        role: 0,
        id: '2222',
      },
      {
        role: 1,
        id: '3333',
      },
      {
        role: 1,
        id: '4444',
      },
      {
        role: 0,
        id: '5555',
      },
      {
        role: 1,
        id: '6666',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '8',
  },
  {
    name: 'סגני דולפין',
    description: 'הסגנים של דולפין',
    tags: ['קצונה'],
    type: 'public',
    users: [
      {
        role: 1,
        id: '1111',
      },
      {
        role: 0,
        id: '2222',
      },
      {
        role: 1,
        id: '3333',
      },
      {
        role: 1,
        id: '4444',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '4',
  },
  {
    name: 'סרני דולפין',
    description: 'הסגנים של דולפין',
    tags: ['קצונה'],
    type: 'public',
    users: [
      {
        role: 0,
        id: '5555',
      },
      {
        role: 1,
        id: '6666',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '5',
  },
  {
    name: 'מבצע סודי',
    description: 'קבוצה סודית מאוד',
    tags: ['סודי ביותר', 'חיזבאללה', 'צפון'],
    type: 'private',
    users: [
      {
        role: 0,
        id: '1111',
      },
      {
        role: 1,
        id: '3333',
      },
      {
        role: 0,
        id: '2222',
      },
      {
        role: 1,
        id: '4444',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '1',
  },
  {
    name: 'חד"כ דולפין',
    description: 'מלא מלא ספורט',
    tags: [],
    type: 'private',
    users: [
      {
        role: 0,
        id: '1111',
      },
      {
        role: 1,
        id: '3333',
      },
      {
        role: 1,
        id: '4444',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '2',
  },
  {
    name: 'מנהלי friends',
    description: 'קבוצה סודית מאוד',
    tags: [],
    type: 'private',
    users: [
      {
        role: 1,
        id: '1111',
      },
      {
        role: 0,
        id: '2222',
      },
      {
        role: 1,
        id: '3333',
      },
      {
        role: 0,
        id: '4444',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: groupIconsCodes[0],
    _id: '3',
  },
];

const users = [{
  id: '1111',
  fullName: 'נייקי אדידס',
  name: { firstName: 'נייקי', lastName: 'אדידס' },
  hierarchyFlat: 'היררכיה',
},
{
  id: '3333',
  fullName: 'חיים כהן',
  name: { firstName: 'חיים', lastName: 'כהן' },
  hierarchyFlat: 'היררכיה',
},
{
  id: '2222',
  fullName: 'ישראל ישראלי',
  name: { firstName: 'ישראל', lastName: 'ישראלי' },
  hierarchyFlat: 'היררכיה',
},
{
  id: '4444',
  fullName: 'עומר אדם',
  name: { firstName: 'עומר', lastName: 'אדם' },
  hierarchyFlat: 'היררכיה',
},
{
  id: '5555',
  fullName: 'איציק כהן',
  name: { firstName: 'איציק', lastName: 'כהן' },
  hierarchyFlat: 'היררכיה',
},
{
  id: '6666',
  fullName: 'ישראל אהרוני',
  name: { firstName: 'ישראל', lastName: 'אהרוני' },
  hierarchyFlat: 'היררכיה',
},
];

const currentUser = {
  address: 'רחוב הממתקים 34',
  adfsId: 't23458789@jello.com',
  currentUnit: 'nitro unit',
  dischargeDay: '2022-11-30T22:00:00.000Z',
  displayName: 't23458789@jello.com',
  entityType: 'digimon',
  exp: 1607005903,
  genesisId: '5e5688324203fc40043591aa',
  iat: 1607002303,
  id: '1111',
  job: 'רוצח',
  jti: '57c79308-5e5e-4205-8d69-c59025dc70fd',
  name: { firstName: 'נייקי', lastName: 'אדידס' },
  phoneNumbers: ['026666998', '052-1234565'],
  photo: null,
  provider: 'Genesis',
  rank: 'mega',
};

export { groups, users, currentUser };
