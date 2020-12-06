// import axiosInstance from '../axiosConf';
// import axios from "axios";

class GroupsService {
  static async getPrivateGroups() {
    // TODO: get private groups
    // const { data } = await axios.get('/groups');

    // return data;
    return [
      {
        name: "מבצע סודי",
        description: "קבוצה סודית מאוד",
        tags: ["סודי ביותר", "חיזבאללה","צפון"],
        type: "private",
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
          }
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: undefined,
        _id: '1'
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
          }
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: `iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAACVBMVEUAAJkBAJoBAJlog0mdAAACd0lEQVR4nO3
        VMYoEQAwDQd3+/9EbXDzJQquNccGAw6ETJfnk/209/rbLfnZinB24wE6MswMX2IlxmbJa4DHlH7f4v8p+dmKcHbjAToyzAx
        fYiXGZslq3+Lf4T9nPToyzAxfYiXF24AI7MS5TVusW/xb/KfvZiXF24AI7Mc4OXGAnxmXKat3i3+I/ZT87Mc4OXGAnxtmBC
        +zEuExZrVv8W/yn7GcnxtmBC+zEODtwgZ0YlymrdYt/i/+U/ezEODtwgZ0YZwcusBPjMmW1bvFv8Z+yn50YZwcusBPj7MAFd
        mJcpqzWLf4t/lP2sxPj7MAFdmKcHbjATozLlNW6xb/Ff8p+dmKcHbjAToyzAxfYiXGZslq3+Lf4T9nPToyzAxfYiXF24AI7M
        S5TVusW/xb/KfvZiXF24AI7Mc4OXGAnxmXKat3i3+I/ZT87Mc4OXGAnxtmBC+zEuExZrVv8W/yn7GcnxtmBC+zEODtwgZ0Yl
        ymrdYt/i/+U/ezEODtwgZ0YZwcusBPjMmW1bvFv8Z+yn50YZwcusBPj7MAFdmJcpqzWLf4t/lP2sxPj7MAFdmKcHbjATozLl
        NW6xb/Ff8p+dmKcHbjAToyzAxfYiXGZslq3+Lf4T9nPToyzAxfYiXF24AI7MS5TVusW/xb/KfvZiXF24AI7Mc4OXGAnxmXKa
        t3i3+I/ZT87Mc4OXGAnxtmBC+zEuExZrVv8W/yn7GcnxtmBC+zEODtwgZ0YlymrdYt/i/+U/ezEODtwgZ0YZwcusBPjMmW1b
        vFv8Z+yn50YZwcusBPj7MAFdmJcpqzWLf4t/lP2sxPj7MAFdmKcHbjATozLlNXCji/5D2ttW5KEUQAAAABJRU5ErkJggg==`,
        _id: '2'
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
          }
        ],
        lastModified: new Date(),
        createdAt: new Date(),
        modifiedBy: "5e5688324203fc40043591aa",
        exchangeAddress: "",
        externalSystems: {},
        createdBy: "5e5688324203fc40043591aa",
        icon: undefined,
        _id: '3'
      },
    ];
  }
}

export default GroupsService;
