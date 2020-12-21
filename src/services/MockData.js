// TODO: Delete file
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
    icon: undefined,
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
        role: 2,
        id: '4444',
      },
    ],
    lastModified: new Date(),
    createdAt: new Date(),
    modifiedBy: '5e5688324203fc40043591aa',
    exchangeAddress: '',
    externalSystems: {},
    createdBy: '5e5688324203fc40043591aa',
    icon: undefined,
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
    icon: undefined,
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
    icon: undefined,
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
    icon: 'data:image/jpeg;base64,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IvLTO5/u7CHFmHuaFEFSALH9GPlZI04nfPPupsQEKO4gSVGa+eDPaAWdMu9WBa/s/n+kkwCsRqNbiOY7Veeo8P1FE5JQmpWMbAOpk1cD1PQKLDzNXv8A0wgiUwzdkMVBfx/yT//aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888884zrz8/w11888888888888888888888888888888znz880us++d8888X88888888888888888888885WdsO/9d8888I8888V9888888888888888888888H88N88478888s8888r688888888888888888888834xt08t88888i8888898888888888888888888887888f/APPfPPLfPPPPOvFvPPPPPPPPPPPPPPPPPPPPHvtfXGD1vPHfPPPP/fGPPPPPPPPPPPPPPPPPPPPPLX/HfPN/fPHvPPPNHPKPPPPPPPPPPPPPPPPPPPPPPPP/AHzzzzzz5zjaV3zz3zzzzzzzzzzzzzzzzzzzzzzzx7zzzzzzzzz4fTzzrzzzzzzzzzzzzzzzzzzzzzzzzTzzzzzzzzzRj3zzrzzzzzzzzzzzzzzzzzzzzzzzxrzzzzzzzzv8zzzzzzzzzzzzzzzzzzzzzzzzzzzzy7zzzzzzzy+bzzzznzzzzzzzzzzzzzzzzzzzzzzzyp3y/wA8880088888c888888888888888888888888988e88416d888882888888888888888888888888888988/wAXfPPPPIPPPPPPPPPPPPPPPPPPPPPPPPPPN/NPO/H/ADzzzzz/AM8888888888888888888888888c8y8t98888883888888888888888888888888888f828nc88888/9888888888888888888888888888/9f8ANNfPPPNX/PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPdCdfPPPfvPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPFXH3vPPv8Azzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy1LFb3/3zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy1163zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz/xAAqEQEAAgAGAQIFBQEAAAAAAAABABEQICExQVFAYXEwUJGh0YCBscHh8P/aAAgBAwEBPxD9JxLeYV0EgmvXrDcVQDsy5Z5++9epwxCIrDBXZTER3SM5666QRsz12BtHWMe4aZSTyPHUC2Ir9X8RVWxTH7ynmkpXZ11D5VwAHhFPJks1zl6pd4NlnjPdnv8AjG8fOKBaOC/plZZ2ZToprDc8ZUuzrg1uo+rETS/rLhWYAOCVfrKo8NWX7qV/Tp4yDe4jtuEGocYDNjmCGw4XHIQzH96DCg8Y90e/5jWbnJ3Nfv25PzEVCbhEvH14ka6wObHGot3KFDxvLR0wtfTxkEpjCFnXU2irviLVq9chc0e5kdw7z1YiVM7PI5gS4F5zj0kMb0ToxbU6dwB/07gtXsYqvJkW9/CDRdGdqO3tKQcY/ceTQfX4TUuzeXj6RFbiL9zyajsfBA77K/8A3m27GQX5NYJua/ANBawLdyf2+W1dPJsDgjvhotkcg1YB532lXni3luO3kuvZcaH3b9/8xC4dVq+0I88VW3KiBDEceSafo41H0Y6c6G3vD092Irc2p9jyhRIjrjA6vowUN5gIbBEVZkQIAHy/c2uB9lrDWcVJ5z1/a8yiPH8YK12w9YWXXpmS52IAFHmAm0xTwT2mv6YwsXLWjaANjzurX8StXbZ9mXBPt475NNbfIdFpPTmLcqHVy5MVNglYNPkKCUxE/wCaWdBlk9xFRKf4YFaHyN13jLTHclArchem/f6U/wD/xAAiEQACAQUBAAIDAQAAAAAAAAABEQAQICExQEEwUGFxgFH/2gAIAQIBAT8Q/k7QgF7Ba0JA+i2ENgICIYoCtQmBniOMxmbi0Ho8KHlAACEIMwCJUASGJmxZtEm5/BVQddQTAt1XTYXMigHpgEYWIAGKbgkC3IW6Q0eYYIwhFRe0ObgLzTfYc0IAELxMPm8EYhE5ghbmkMfiCjgzxUQGteVCzQsLnRm0olDmzVwVijg4Z9hM0LPTj6N4JBYgL0QrcYThJQ1CTsjZ/EylFhoXldukUfxNwlLNukUX8IEkIIVHH6WAB4ER/M8haGeklCvlgDwJuHcXgXBjp3VwAsUZ3F4FwzAEF05lXQfqrS0QvBl9ZCKoOB+qAMqAAFCZdwzAQXWijco5oSCv9OxwdDkfxQU0Nm53aQwowobKjXDu4ALuQYpBCM03ABY+gRhQsYd1bAF9EvIhYIgo0/0+lAsFAD+U3//EACwQAQABAgQEBgIDAQEAAAAAAAERITEAQVFhcYGRoRAgMFCxwdHwQGDh8aD/2gAIAQEAAT8Q/wDI6HK4NLjFueIiPVp2nEkjSWgcS5/TACoA1wVwSt/qd7G+EoiplW74MBCUwjs4XM24U+jmrvgm6Xi60S4+RCWoigjDfAJVdJ+HG4dcSamJNTENTAjZPf4r5E1vDPtphhqubUbs+FvMEM3iw0TMw+mBYBRjmPhBrKOOEqZSaz4d4kMdvwvvC5C3H8uO6tOGBwzAlcRo4dIhDZmw2a9PSuim7pAckR9yrz1mvACuHR7EYnKx344XR8rKu74P82ByrwxI10rJ5GStbeVHLDdn78DeSw+OOGVJozBZjzzGjonJ3Dr6TbMwVrxxnaJg8AhCRHP29koAlXLDQDkQnhM+NuOF9DMsviHoV2VwOA1v/AfPQNbUYDC4FLVvs+eoeJGxAdlp2DwXZac7pbjPoB2CrozjA3zCWRKPow4KueIzqOmKn05LW1HNTgntztgJQBgdVYctx0Nuu3kqDpZCxb6OT4k1aComA8JUFsBaPZw5TGw6xhl/iaGgm64NYYSwBAYgiJbLVTuTChFKrdXP0Um9q+tqcn5PRGElStiHcMMqpWSJqJxJwOnUCEn2wmQASrhseSZGbbQ58PJCYc9VYMWSoXWCrzv5YNDEBY8FwSVvKUgzc/SaqjjgSTuHoi5LVwSMXDUuJivZJO3b2Fnm09spenGUog4w8jfzVskrSVB8vLziKumJVyAzcZJKG5kKHfCthzZjYMjY9IAun74LHoNnETW6KzEt6glm05guBqgjshI+1tZ5t2JPk8qYWgpVwQn5IVoAVj9XwuR2EnmcbpGESyOuC07IKNYDRenpuQV4ylIHdeXotsQDe6vwrMwc3Znoo4B7WTrQQq9nGg8t/EJQkN3FOAZtTtKAxGWEShyKHJjbGY1wsaBYNjArNqVNiWeeBhfQGvto7Pmi1oSbC/MekgAqYAJXDU1H8DkO6+i2wpBod/h0QVTc6DkvtbXAIYTI51s2lqZfHnTjkrKgzbmufG/kr7knEHogVAFWgGI2wo36GRlxt6LZwJ9iufgKUUIXEzwixIEyNByCe1ybH1gkOJm6E6B5keDEDETCmYYhaEYq7J9nkdiYa4lRxSMQgyNHv5EptiH0UClSydfqc9vTc+AVdsJcBfNnxrKCN07HMfbDzPQC97tfr41ypOY+U6L+2iuElBS2ddvJMEJmsHiF8IwbeNPZKdRwoVSFKWzZ+dsFbYoW2QoFRJpm4Vo+v1FxWvvSzVL+aVECBcKTG7Ic8GnZYALHpXIlluKPcxVaJNuQd08lPCbLTHyQ5+2AREkcONOgvfDTpx8FgqkCotlvGWZrgOQ1UlsTfn1xV+8FIeDZ5eVQ8odfzm3TTB8yISI5nh+nNXmJdYA6PSd3lIF5b8k9YwB7JK6wROI5YC8mfbv8k5UOjOBjthHAQJmPtmV+cSYcgtZ/6N8/IukivP2eaSGhkbv0euGoFcQHNxK4xpg3M+NuM+acUQvEj4D6Jp3EIALuBBkqeDeLCeO2LGMh6G6/Q18sstStavuvbQIJBSJi0Ahr+N3+fRShSJmYQlFu+ezLiaw252xUbMajmO409Ca0BCnM+7y3xmDAeYnFwbY5Cg9knGF5+VXGohsnyL25rhyItU6/6VO+EgacFU55cGH+ApjIlUC6jk/OAUNVQHWjyXCUPbT8YE1PIlmDdDqtj5w4Q8Kqi68XFgrF11ebXBHyP9gujyxdl8sjWyLjF+D3AOgQiSJiG2cSeatljKKp/CXEssE9SmLUfND3iz2xAUjKcc+7YiGnQvlDfEsB4C2UNsVHArZor0Pk8CoPQjmyHpLmeaqtF6V7iSRquaD+IVJcrhMUGgHEs4auEslGzVgxCCtCzKr1wTFIMgS4mZllM5HIAOXmg5flF9e4uByJ3fv+NnewJezkW66eFDiOJstDmOi186gdR7vcZr/qk+v4pyJOY7d/1nGBmkFsYEMpsjTfbDmxJJSFQOBB5xKaL3e40spKcU/xAQBVoBng4vCapy5c9+XhUOYQ3OTd3jT0P2SSPv3FBlULpUd3+IeuVTWPiZb8PAdMijRumhd5GeHsCelRlX0KDUqeK9xE7EyjKFHrGEYEDCOT/COwQH4Xd7HLAE3AQAWDCqy2oF3FRZla93du9MvRlYt7wJ+HuLiGwL9j5fwQWhq5TU46GIU+vms1c18K8NaKBlv3HgelJpD0hPct5OlIur6UeT/Av8UnFK4n9KqnEP48MhYLq+TcdDiem8APO8nuX3JhwqhZhXthqsEHlma9Fsv3n0blbq2c05GDxoliv0Gh4JtZBNC+DN2MLkQ/Kmqr6SUAA7Wew4KB7lkrPQo+/KI+QvDr2DiuGxcVn0Llbq2OacjB06dQqfRoeEXlapb4h3sZpmCNYv0bZenWalbw6cnV7nR115QlziTRQfL0GQQw+XQwUgjMFXpwMjwzCir/AMB3sZp9S1DBkGR6lcApdIHYHm+5/qtPlnQuxxWfk87IkQASriJZqt9j978PCnYkmu7A/wAx8S1DBoFg9QbGBEZNVyDg9xQLAWPc5TqPKTmVCu0H588LNZCcTlsbzp4S8igsLsP2hLiUx6DgAyD1b7t+ZDPWg5PuiRcwv2cPLCGd0A+vNP4NDy7v1xTAyQjWAwnoT0AEq4QBVblmRq/EGXqxuiHRc3Yu4I+BBiqzXdZefumb/ckeWAP+g+YKbhrvkOd+Zp4IRAWFMr/AuW/rV9cnOR/D3VY4o/AMbmTsnkjQlY+I+W8Ksx0NX8c8CWAQBliJ1Rq3qdTtOHlJpzTL6s3gzQ0G5wO8GDVCCyA92jjCacx2OryHeJ6j8nlG7CoyK9THTweXQgGiVDku71rIAEVvbLm70y93SVjK8p7+RIX5oX3jJft6PJIUFHmO646qrUExxbYnKI91L8+rAyaEUG3Eud4NfeL5CdpL4AuVHRGHxnU2SOMj8GKZRPaH28ZuJHOKvacCAbYSDAA1qu/f6s59tKZ7xbBrzwB80+n25rr7y0TWDKg9SOj410oSbkfAcQpKOO4vwDxnsk7P4DyYcmjy7epSFBLuugFVxDFBi1/GWD7n3oThEmcjbrbnhyykRIR08KySRcUdi4mAoLuMJ8PiChUN4l+mHCqswN2p+mJzY2VNgMQdIQVLkmmrm8D3yGitbbM634z4zCyVrkm958YP8aH+4uYdJlmuKfSFaQeVNgM3FOG64bJuzeRnPvhwWxmWSbjiuuBo6JslfCdsjTsh7y6+Iq5yxIZdXt6QcMHyjYDNxO31fFyNdTyM19+uKrgVvpxLnMz8JZYpjNUHRcJOMqFn6hPCTRz6/gxv6GIhhv6EPXiyrADbyC9zXkKX9/a4evTJrnwezx8JopTLmhboQcvCX/cMPrDZwq5DCcEfXnqZCW2qMjEJUQCvAy+WeUf0ElqoEiNxw71zKWr6fGuFOsD8vCk8QO8S7r5oU0VyY+B1jEFIw1WuX6GX9EyvbATCklt37Hz4Tohl3kDvHgkQMY1Z+D08hVw24dE/0au18UpakBsf0YY7QUiYIlKl2zs3/XuFQDP1hLYRNRMNNg2CsKckK8vGpOJBQ6qwbuKbNURU2t3dyj+kjTRASI5OHLKHXd1G1/qNqZ9nJgLC26yEJifWWjicwRwqB0IiD3LG7yHBYrVFV1V1/phQyBQaka6ufgKiQ8gCo5Jre+Lf+Sb/2Q==',
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
    icon: undefined,
    _id: '3',
  },
];

const users = [{
  id: '1111',
  fullName: 'נייקי אדידס',
  name: { firstName: 'נייקי', lastName: 'אדידס' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
},
{
  id: '3333',
  fullName: 'חיים כהן',
  name: { firstName: 'חיים', lastName: 'כהן' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
},
{
  id: '2222',
  fullName: 'ישראל ישראלי',
  name: { firstName: 'ישראל', lastName: 'ישראלי' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
},
{
  id: '4444',
  fullName: 'עומר אדם',
  name: { firstName: 'עומר', lastName: 'אדם' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
},
{
  id: '5555',
  fullName: 'איציק כהן',
  name: { firstName: 'איציק', lastName: 'כהן' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
},
{
  id: '6666',
  fullName: 'ישראל אהרוני',
  name: { firstName: 'ישראל', lastName: 'אהרוני' },
  hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
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
