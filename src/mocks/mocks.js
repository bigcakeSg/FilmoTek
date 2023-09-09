/*
id:
ratingsSummary:
episodes:
primaryImage:
titleType:
principalCast:
creators:
directors:
writers:
genres:
titleText:
releaseYear:
releaseDate:
runtime:
series:
meterRanking:
keywords:
plot:
*/

/*
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971',
  params: {info: 'base_info'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
*/

export const movieInfo = {
  results: {
    _id: '61e5811ce1a8ddbd96415553',
    id: 'tt0082971',
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 1008970,
      __typename: 'RatingsSummary'
    },
    episodes: null,
    primaryImage: {
      id: 'rm1612744448',
      width: 1021,
      height: 1536,
      url: 'https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_.jpg',
      caption: {
        plainText: 'Harrison Ford in Raiders of the Lost Ark (1981)',
        __typename: 'Markdown'
      },
      __typename: 'Image'
    },
    titleType: {
      text: 'Movie',
      id: 'movie',
      isSeries: false,
      isEpisode: false,
      __typename: 'TitleType'
    },
    genres: {
      genres: [
        {
          text: 'Action',
          id: 'Action',
          __typename: 'Genre'
        },
        {
          text: 'Adventure',
          id: 'Adventure',
          __typename: 'Genre'
        }
      ],
      __typename: 'Genres'
    },
    titleText: {
      text: 'Indiana Jones and the Raiders of the Lost Ark',
      __typename: 'TitleText'
    },
    originalTitleText: {
      text: 'Raiders of the Lost Ark',
      __typename: 'TitleText'
    },
    releaseYear: {
      year: 1981,
      endYear: null,
      __typename: 'YearRange'
    },
    releaseDate: {
      day: 13,
      month: 8,
      year: 1981,
      __typename: 'ReleaseDate'
    },
    runtime: {
      seconds: 6900,
      __typename: 'Runtime'
    },
    series: null,
    meterRanking: {
      currentRank: 239,
      rankChange: {
        changeDirection: 'UP',
        difference: 131,
        __typename: 'MeterRankChange'
      },
      __typename: 'TitleMeterRanking'
    },
    plot: {
      plotText: {
        plainText:
          "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
        __typename: 'Markdown'
      },
      language: {
        id: 'en-US',
        __typename: 'DisplayableLanguage'
      },
      __typename: 'Plot'
    }
  }
};

/*
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971',
  params: {
    info: 'principalCast'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
*/

export const moviePrincipalCast = {
  results: {
    _id: '61e5811ce1a8ddbd96415553',
    id: 'tt0082971',
    principalCast: [
      {
        credits: [
          {
            name: {
              id: 'nm0000148',
              nameText: {
                text: 'Harrison Ford',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_.jpg',
                width: 269,
                height: 400,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Indy',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          {
            name: {
              id: 'nm0000261',
              nameText: {
                text: 'Karen Allen',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTg2NjgyMjQwMF5BMl5BanBnXkFtZTcwNzkwMjE3MQ@@._V1_.jpg',
                width: 1353,
                height: 2048,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Marion',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          {
            name: {
              id: 'nm0293550',
              nameText: {
                text: 'Paul Freeman',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjA4Mzc2NjU2N15BMl5BanBnXkFtZTcwNzYzMDAxMw@@._V1_.jpg',
                width: 1370,
                height: 2048,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Belloq',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          {
            name: {
              id: 'nm0722636',
              nameText: {
                text: 'John Rhys-Davies',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMjMwNDY3NjQxMF5BMl5BanBnXkFtZTcwMDc3NTYyOQ@@._V1_.jpg',
                width: 1716,
                height: 2048,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Sallah',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          }
        ],
        __typename: 'PrincipalCreditsForCategory'
      }
    ]
  }
};

/*
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971',
  params: {
    info: 'extendedCast'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
*/

export const movieExtendedCast = {
  results: {
    _id: '61e5811ce1a8ddbd96415553',
    id: 'tt0082971',
    cast: {
      edges: [
        {
          node: {
            name: {
              id: 'nm0479951',
              nameText: {
                text: 'Ronald Lacey',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BYTliYzY1MGItNzg3MS00ZjAyLWI0ZTQtNWVlNTkwNWFlZGU3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
                width: 673,
                height: 813,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Toht',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0001186',
              nameText: {
                text: 'Denholm Elliott',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NDc5Nl5BMl5BanBnXkFtZTcwNDAwMjg5Nw@@._V1_.jpg',
                width: 2048,
                height: 1365,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Brody',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0000547',
              nameText: {
                text: 'Alfred Molina',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTEwNTgzNzgxNzNeQTJeQWpwZ15BbWU3MDQ5NzU1NjM@._V1_.jpg',
                width: 310,
                height: 400,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Satipo',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0434759',
              nameText: {
                text: 'Wolf Kahler',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNTViNTY2ZGUtYzlmOC00MWExLWExNTMtNDM3YTQzMGJiZDNkL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
                width: 650,
                height: 800,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Dietrich',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0001891',
              nameText: {
                text: 'Anthony Higgins',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTAzMjQ5NDM4MzNeQTJeQWpwZ15BbWU3MDg3MDk4MDM@._V1_.jpg',
                width: 1892,
                height: 2048,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Gobler',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0846004',
              nameText: {
                text: 'Vic Tablian',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTc5NTMxNTQzNV5BMl5BanBnXkFtZTcwNzA1MzA4NA@@._V1_.jpg',
                width: 1017,
                height: 1536,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Barranca',
                __typename: 'Character'
              },
              {
                name: 'Monkey Man',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0271514',
              nameText: {
                text: 'Don Fellows',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNjI4YjM5MWItNDM3ZC00ZTc0LWIyNzYtYzkwNGRjMmJhOWYwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
                width: 1350,
                height: 1800,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Col. Musgrove',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0393853',
              nameText: {
                text: 'William Hootkins',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTk0MjkzOTE1M15BMl5BanBnXkFtZTYwOTY2OTgy._V1_.jpg',
                width: 450,
                height: 600,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Major Eaton',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0717810',
              nameText: {
                text: 'Bill Reimbold',
                __typename: 'NameText'
              },
              primaryImage: null,
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Bureaucrat',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0814885',
              nameText: {
                text: 'Fred Sorenson',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNmFhN2Q5MjYtMTdjZS00Y2Y0LTkyOTktYmQ4ZGUzMjFjMWZlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
                width: 2541,
                height: 1080,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Jock',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0244190',
              nameText: {
                text: 'Patrick Durkin',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BNzEwODNlOGQtNjMxOS00MDVjLWEwMTEtNTliODQ1ZmQ0OTI2XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
                width: 2541,
                height: 1080,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Australian Climber',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0780321',
              nameText: {
                text: 'Matthew Scurfield',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTBiNTg3ZmItYzUyNy00ZGEyLTg2YmQtYjk4NTkxYzIxYmU2XkEyXkFqcGdeQXVyMTEzNzczMA@@._V1_.jpg',
                width: 1234,
                height: 782,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: '2nd. Nazi',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0915912',
              nameText: {
                text: 'Malcolm Weaver',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BOTVhOGE1ZjMtMDVmYi00NWZhLWE5YmQtOGVkZmE5MWVlOTQwXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg',
                width: 450,
                height: 619,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: [
              {
                text: 'as Malcom Weaver',
                __typename: 'CreditedAsCreditAttribute'
              }
            ],
            characters: [
              {
                name: 'Ratty Nepalese',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0129640',
              nameText: {
                text: 'Sonny Caldinez',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZDhhNDMzYzUtZDBiNS00NzQ3LWIxYjgtZTExN2E1NzZiM2ZkXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg',
                width: 1920,
                height: 1036,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Mean Mongolian',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0157716',
              nameText: {
                text: 'Anthony Chinn',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BMTQzMTc4MTE4MF5BMl5BanBnXkFtZTgwMTU3MjU5MjE@._V1_.jpg',
                width: 500,
                height: 375,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Mohan',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        },
        {
          node: {
            name: {
              id: 'nm0730053',
              nameText: {
                text: 'Pat Roach',
                __typename: 'NameText'
              },
              primaryImage: {
                url: 'https://m.media-amazon.com/images/M/MV5BZDQ5MzRlNmUtOWVlOC00YWVjLWE5ZTAtNTQwYWI4ZGI5ZmZmXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
                width: 641,
                height: 812,
                __typename: 'Image'
              },
              __typename: 'Name'
            },
            attributes: null,
            characters: [
              {
                name: 'Giant Sherpa',
                __typename: 'Character'
              },
              {
                name: '1st Mechanic',
                __typename: 'Character'
              }
            ],
            episodeCredits: {
              total: 0,
              yearRange: null,
              __typename: 'EpisodeCastConnection'
            },
            __typename: 'Cast'
          },
          __typename: 'CreditEdge'
        }
      ],
      __typename: 'CreditConnection'
    }
  }
};

/*
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971',
  params: {
    info: 'creators_directors_writers'
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
*/

export const movieCreators = {
  results: {
    _id: '61e5811ce1a8ddbd96415553',
    id: 'tt0082971',
    creators: [],
    directors: [
      {
        totalCredits: 1,
        category: {
          text: 'Director',
          __typename: 'CreditCategory'
        },
        credits: [
          {
            name: {
              id: 'nm0000229',
              nameText: {
                text: 'Steven Spielberg',
                __typename: 'NameText'
              },
              __typename: 'Name'
            },
            attributes: null,
            __typename: 'Crew'
          }
        ],
        __typename: 'PrincipalCreditsForCategory'
      }
    ],
    writers: [
      {
        totalCredits: 3,
        category: {
          text: 'Writers',
          __typename: 'CreditCategory'
        },
        credits: [
          {
            name: {
              id: 'nm0001410',
              nameText: {
                text: 'Lawrence Kasdan',
                __typename: 'NameText'
              },
              __typename: 'Name'
            },
            attributes: [
              {
                text: 'screenplay by',
                __typename: 'JobCreditAttribute'
              }
            ],
            __typename: 'Crew'
          },
          {
            name: {
              id: 'nm0000184',
              nameText: {
                text: 'George Lucas',
                __typename: 'NameText'
              },
              __typename: 'Name'
            },
            attributes: [
              {
                text: 'story by',
                __typename: 'JobCreditAttribute'
              }
            ],
            __typename: 'Crew'
          },
          {
            name: {
              id: 'nm0442241',
              nameText: {
                text: 'Philip Kaufman',
                __typename: 'NameText'
              },
              __typename: 'Name'
            },
            attributes: [
              {
                text: 'story by',
                __typename: 'JobCreditAttribute'
              }
            ],
            __typename: 'Crew'
          }
        ],
        __typename: 'PrincipalCreditsForCategory'
      }
    ]
  }
};

/*
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971',
  params: {info: 'mini_info'},
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
*/

export const movieMiniInfo = {
  results: {
    _id: '61e5811ce1a8ddbd96415553',
    id: 'tt0082971',
    primaryImage: {
      id: 'rm1612744448',
      width: 1021,
      height: 1536,
      url: 'https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_.jpg',
      caption: {
        plainText: 'Harrison Ford in Raiders of the Lost Ark (1981)',
        __typename: 'Markdown'
      },
      __typename: 'Image'
    },
    titleType: {
      text: 'Movie',
      id: 'movie',
      isSeries: false,
      isEpisode: false,
      __typename: 'TitleType'
    },
    titleText: {
      text: 'Indiana Jones and the Raiders of the Lost Ark',
      __typename: 'TitleText'
    },
    originalTitleText: {
      text: 'Raiders of the Lost Ark',
      __typename: 'TitleText'
    },
    releaseYear: {
      year: 1981,
      endYear: null,
      __typename: 'YearRange'
    },
    releaseDate: {
      day: 13,
      month: 8,
      year: 1981,
      __typename: 'ReleaseDate'
    }
  }
};

/*
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/tt0082971/aka',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
*/

export const movieTitles = {
  results: [
    {
      region: 'AE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 81,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'AR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 41,
      title: 'Indiana Jones y los cazadores del arca perdida',
      types: 'alternative'
    },
    {
      region: 'AU',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 71,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'BG',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'bg',
      ordering: 63,
      title: 'Похитители на изчезналия кивот',
      types: 'imdbDisplay'
    },
    {
      region: 'BR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 64,
      title: 'Os Caçadores da Arca Perdida',
      types: 'imdbDisplay'
    },
    {
      region: 'CA',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 84,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'CL',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 1,
      title: 'Indiana Jones y los cazadores del arca perdida',
      types: 'alternative'
    },
    {
      region: 'CN',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'cmn',
      ordering: 34,
      title: '夺宝奇兵：法柜奇兵',
      types: 'alternative'
    },
    {
      region: 'CSHH',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'cs',
      ordering: 6,
      title: 'Dobyvatelé ztracené archy',
      types: 'imdbDisplay'
    },
    {
      region: 'CZ',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 35,
      title: 'Dobyvatelé ztracené archy',
      types: 'imdbDisplay'
    },
    {
      region: 'DE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 54,
      title: 'Jäger des verlorenen Schatzes',
      types: 'imdbDisplay'
    },
    {
      region: 'DK',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 69,
      title: 'Jagten på den forsvundne skat',
      types: 'imdbDisplay'
    },
    {
      region: 'EC',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 82,
      title: 'Los cazadores del arca perdida',
      types: 'imdbDisplay'
    },
    {
      region: 'EE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 9,
      title: 'Indiana Jones kadunud laeka jälil',
      types: 'imdbDisplay'
    },
    {
      region: 'EG',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 77,
      title: 'Indiana Jones and the Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'ES',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'eu',
      ordering: 46,
      title: 'Arka galduaren bila',
      types: 'imdbDisplay'
    },
    {
      region: 'FI',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 78,
      title: 'Indiana Jones ja kadonneen aarteen metsästäjä',
      types: 'alternative'
    },
    {
      region: 'FR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 73,
      title: "Les Aventuriers de l'arche perdue",
      types: 'imdbDisplay'
    },
    {
      region: 'GB',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 31,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'GR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 62,
      title: 'Ο Ιντιάνα Τζόουνς και οι κυνηγοί της χαμένης κιβωτού',
      types: 'imdbDisplay'
    },
    {
      region: 'HK',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'yue',
      ordering: 42,
      title: '奪寶奇兵',
      types: 'imdbDisplay'
    },
    {
      region: 'HR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 49,
      title: 'Indiana Jones i otimači izgubljenog kovčega',
      types: 'imdbDisplay'
    },
    {
      region: 'HU',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 75,
      title: 'Az elveszett frigyláda fosztogatói',
      types: 'imdbDisplay'
    },
    {
      region: 'ID',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 55,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'IL',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'he',
      ordering: 79,
      title: "Indiana Jones Ve'Shodeday Ha'Teiva Ha'Avouda",
      types: 'imdbDisplay'
    },
    {
      region: 'IN',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'ta',
      ordering: 72,
      title: 'Last Pelaiyin Reytars',
      types: 'imdbDisplay'
    },
    {
      region: 'IS',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 58,
      title: 'Innrás týndu arkarinnar',
      types: 'imdbDisplay'
    },
    {
      region: 'IT',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 48,
      title: "I predatori dell'arca perduta",
      types: 'imdbDisplay'
    },
    {
      region: 'JP',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 74,
      title: 'Reidâsu/Ushinawareta âku',
      types: 'imdbDisplay'
    },
    {
      region: 'KR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 8,
      title: '레이더스',
      types: 'imdbDisplay'
    },
    {
      region: 'LT',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 45,
      title: 'Indiana Džounsas ir dingusios Sandoros skrynios ieškotojai',
      types: 'imdbDisplay'
    },
    {
      region: 'MX',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 3,
      title: 'Indiana Jones y los cazadores del arca perdida',
      types: 'alternative'
    },
    {
      region: 'NL',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 10,
      title: 'Indiana Jones and the Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'NO',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 40,
      title: 'Jakten på den forsvunne skatten',
      types: 'imdbDisplay'
    },
    {
      region: 'PE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 68,
      title: 'Los cazadores del arca perdida',
      types: 'imdbDisplay'
    },
    {
      region: 'PH',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 7,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'PL',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 56,
      title: 'Poszukiwacze zaginionej Arki',
      types: 'imdbDisplay'
    },
    {
      region: 'PT',
      titleId: 'tt0082971',
      attributes: 'DVD box title',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 85,
      title: 'Indiana Jones e Os Salteadores da Arca Perdida',
      types: '\\N'
    },
    {
      region: 'RO',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 50,
      title: 'Indiana Jones și căutătorii arcei pierdute',
      types: 'imdbDisplay'
    },
    {
      region: 'RS',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 18,
      title: 'Индијана Џоунс и отимачи изгубљеног ковчега',
      types: 'imdbDisplay'
    },
    {
      region: 'RU',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 37,
      title: 'Индиана Джонс: В поисках утраченного ковчега',
      types: 'imdbDisplay'
    },
    {
      region: 'SE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 39,
      title: 'Jakten på den försvunna skatten',
      types: 'imdbDisplay'
    },
    {
      region: 'SG',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 29,
      title: 'Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'SI',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 26,
      title: 'Lov za izgubljenim zakladom',
      types: 'imdbDisplay'
    },
    {
      region: 'SK',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 24,
      title: 'Dobyvatelia stratenej archy',
      types: 'imdbDisplay'
    },
    {
      region: 'TH',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'th',
      ordering: 5,
      title: 'Khum Sap Sut Khop Fa',
      types: 'imdbDisplay'
    },
    {
      region: 'TR',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'tr',
      ordering: 65,
      title: 'Kutsal Hazine Avcıları',
      types: 'imdbDisplay'
    },
    {
      region: 'TW',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 11,
      title: '法櫃奇兵',
      types: 'imdbDisplay'
    },
    {
      region: 'UA',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 57,
      title: 'Індіана Джонс: У пошуках втраченого ковчега',
      types: 'imdbDisplay'
    },
    {
      region: 'US',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 80,
      title: 'Indiana Jones and the Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'UY',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 33,
      title: 'Los cazadores del arca perdida',
      types: 'imdbDisplay'
    },
    {
      region: 'VE',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 52,
      title: 'Cazadores del arca perdida',
      types: 'imdbDisplay'
    },
    {
      region: 'VN',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 67,
      title: 'Indiana Jones Và Chiếc Rương Thánh Tích',
      types: 'imdbDisplay'
    },
    {
      region: 'XWG',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: '\\N',
      ordering: 27,
      title: 'Jäger des verlorenen Schatzes',
      types: 'imdbDisplay'
    },
    {
      region: 'XWW',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 36,
      title: 'Indiana Jones and the Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: 'XYU',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'sr',
      ordering: 60,
      title: 'Indijana dzouns - Otimaci izgubljenog kovcega',
      types: 'imdbDisplay'
    },
    {
      region: 'ZA',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 0,
      language: 'en',
      ordering: 43,
      title: 'Indiana Jones and the Raiders of the Lost Ark',
      types: 'imdbDisplay'
    },
    {
      region: '\\N',
      titleId: 'tt0082971',
      attributes: '\\N',
      isOriginalTitle: 1,
      language: '\\N',
      ordering: 83,
      title: 'Raiders of the Lost Ark',
      types: 'original'
    }
  ]
};

export const movieList = [
  // Spielberg
  'tt0067023',
  'tt0072226',
  'tt0073195',
  'tt0075860',
  'tt0078723',
  'tt0082971',
  'tt0083866',
  'tt0086491',
  'tt0087469',
  'tt0088939',
  'tt0092965',
  'tt0097576',
  'tt0096794',
  'tt0102057',
  'tt0107290',
  'tt0108052',
  'tt0119567',
  'tt0118607',
  'tt0120815',
  'tt0212720',
  'tt0181689',
  'tt0264464',
  'tt0362227',
  'tt0407304',
  'tt0408306',
  'tt0367882',
  'tt0983193',
  'tt1568911',
  'tt0443272',
  'tt3682448',
  'tt3691740',
  'tt6294822',
  'tt1677720',
  'tt3581652',
  'tt14208870',
  // Wacho
  'tt0115736',
  'tt0133093',
  'tt0234215',
  'tt0242653',
  'tt0811080',
  'tt1371111',
  'tt1617661',
  'tt10838180',
  // Fincher
  'tt0103644',
  'tt0114369',
  'tt0119174',
  'tt0137523',
  'tt0258000',
  'tt0443706',
  'tt0421715',
  'tt1285016',
  'tt1568346',
  'tt2267998',
  // Cameron,
  'tt0082910',
  'tt0088247',
  'tt0090605',
  'tt0096754',
  'tt0103064',
  'tt0111503',
  'tt0120338',
  'tt0499549',
  // Nolan
  'tt0209144',
  'tt0278504',
  'tt0372784',
  'tt0482571',
  'tt0468569',
  'tt1375666',
  'tt1345836',
  'tt0816692',
  'tt5013056',
  'tt6723592',
  // Bay
  'tt0112442',
  'tt0117500',
  'tt0172156',
  'tt0399201',
  'tt0418279',
  'tt1055369',
  'tt1399103',
  'tt1980209',
  'tt2109248',
  'tt4172430',
  'tt3371366',
  'tt4998632',
  // Lynch
  'tt0074486',
  'tt0080678',
  'tt0100935',
  'tt0105665',
  'tt0116922',
  'tt0166924',
  // Kubrick,
  'tt0054331',
  'tt0056193',
  'tt0057012',
  'tt0062622',
  'tt0066921',
  'tt0081505',
  'tt0093058',
  'tt0120663',
  // De Palma
  'tt0063036',
  'tt0065641',
  'tt0065836',
  'tt0070698',
  'tt0071994',
  'tt0074991',
  'tt0074285',
  'tt0077588',
  'tt0080661',
  'tt0082085',
  'tt0086250',
  'tt0086984',
  'tt0094226',
  'tt0097027',
  'tt0099165',
  'tt0105217',
  'tt0106519',
  'tt0117060',
  'tt0120832',
  'tt0183523',
  'tt0280665',
  'tt0387877',
  'tt0937237',
  'tt1829012',
  // Carpenter
  'tt0074156',
  'tt0077651',
  'tt0080749',
  'tt0082340',
  'tt0084787',
  'tt0085333',
  'tt0088172',
  'tt0090728',
  'tt0093777',
  'tt0096256',
  'tt0104850',
  'tt0113409',
  'tt0114852',
  'tt0116225',
  'tt0120877',
  'tt0228333',
  'tt1369706',
  // Zemeckis
  'tt0088011',
  'tt0088763',
  'tt0096438',
  'tt0096874',
  'tt0099088',
  'tt0104070',
  'tt0109830',
  'tt0118884',
  'tt0161081',
  'tt0162222',
  'tt0338348',
  'tt0442933',
  'tt1067106',
  'tt1907668',
  'tt3488710',
  'tt3640424',
  'tt3289724',
  'tt0805647',
  // Burton
  'tt0089791',
  'tt0094721',
  'tt0096895',
  'tt0099487',
  'tt0103776',
  'tt0109707',
  'tt0116996',
  'tt0162661',
  'tt0133152',
  'tt0319061',
  'tt0367594',
  'tt0121164',
  'tt0408236',
  'tt1014759',
  'tt1142977',
  'tt1126590',
  // Hitchcock
  'tt0017075',
  'tt0018328',
  'tt0018876',
  'tt0018756',
  'tt0020142',
  'tt0019702',
  'tt0021015',
  'tt0021165',
  'tt0022395',
  'tt0021128',
  'tt0023395',
  'tt0023285',
  'tt0024747',
  'tt0025452',
  'tt0026029',
  'tt0028231',
  'tt0028212',
  'tt0029811',
  'tt0030341',
  'tt0031505',
  //
  'tt0032976',
  'tt0032484',
  'tt0033922',
  'tt0034248',
  'tt0035279',
  'tt0036342',
  'tt0037017',
  'tt0036621',
  'tt0036659',
  'tt0038109',
  'tt0038787',
  'tt0039694',
  'tt0040746',
  'tt0042004',
  'tt0042994',
  'tt0044079',
  'tt0045897',
  'tt0046912',
  'tt0047396',
  'tt0048728',
  'tt0048750',
  'tt0049470',
  'tt0051207',
  'tt0052357',
  'tt0053125',
  'tt0054215',
  'tt0056869',
  'tt0058329',
  'tt0061107',
  'tt0065112',
  'tt0068611',
  'tt0074512',
  // Lean
  'tt0050212',
  'tt0056172',
  'tt0059113',
  'tt0066319',
  'tt0087892',
  // Polanski
  'tt0061655',
  'tt0063522',
  'tt0071315',
  'tt0142688',
  'tt0253474',
  'tt1139328'
];
