// import axiosInstance from '../axiosConf';
// import axios from "axios";

class GroupsService {
  static async getPublicGroups() {
    return [
      {
        name: "סגני דולפין",
        description: "הסגנים של דולפין",
        tags: ["קצונה"],
        type: "public",
        users: [
          {
            role: 0,
            id: "5e5688324203fc40043591aa",
            name: { firstName: "נייקי", lastName: "אדידס" },
          },
          {
            role: 0,
            id: "2222",
            name: { firstName: "ישראל", lastName: "ישראלי" },
          },
          {
            role: 1,
            id: "3333",
            name: { firstName: "חיים", lastName: "כהן" },
          },
          {
            role: 2,
            id: "4444",
            name: { firstName: "עומר", lastName: "אדם" },
          },
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: undefined,
        _id: "1",
      }
    ]
  }

  static async getPrivateGroups() {
    // TODO: get private groups
    // const { data } = await axios.get('/groups');

    // return data;
    return [
      {
        name: "מבצע סודי",
        description: "קבוצה סודית מאוד",
        tags: ["סודי ביותר", "חיזבאללה", "צפון"],
        type: "private",
        users: [
          {
            role: 1,
            id: "5e5688324203fc40043591aa",
            name: { firstName: "נייקי", lastName: "אדידס" },
          },
          {
            role: 0,
            id: "2222",
            name: { firstName: "ישראל", lastName: "ישראלי" },
          },
          {
            role: 1,
            id: "3333",
            name: { firstName: "חיים", lastName: "כהן" },
          },
          {
            role: 2,
            id: "4444",
            name: { firstName: "עומר", lastName: "אדם" },
          },
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: undefined,
        _id: "1",
      },
      {
        name: `חד"כ דולפין`,
        description: "מלא מלא ספורט",
        tags: [],
        type: "private",
        users: [
          {
            role: 0,
            id: "5e5688324203fc40043591aa",
            name: { firstName: "נייקי", lastName: "אדידס" },
          },
          {
            role: 1,
            id: "3333",
            name: { firstName: "חיים", lastName: "כהן" },
          },
          {
            role: 2,
            id: "4444",
            name: { firstName: "עומר", lastName: "אדם" },
          },
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: `data:image/png;base64,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`,
        _id: "2",
      },
      {
        name: "מנהלי friends",
        description: "קבוצה סודית מאוד",
        tags: [],
        type: "private",
        users: [
          {
            role: 1,
            id: "5e5688324203fc40043591aa",
            name: { firstName: "נייקי", lastName: "אדידס" },
          },
          {
            role: 0,
            id: "2222",
            name: { firstName: "ישראל", lastName: "ישראלי" },
          },
          {
            role: 1,
            id: "3333",
            name: { firstName: "חיים", lastName: "כהן" },
          },
          {
            role: 2,
            id: "4444",
            name: { firstName: "עומר", lastName: "אדם" },
          },
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: undefined,
        _id: "3",
      },
    ];
  }
}

export default GroupsService;
