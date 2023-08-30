import axios from 'axios';
import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';

import { apiHeaders } from '../../utils/configs';
import {
  baseInfoDto,
  creatorsDto,
  extendedCastDto,
  principalCastDto
} from './dto';
import { selectMovieId } from './selectors';

export const getMovieInfos = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      if (selectMovieId(state) !== movieId) {
        dispatch(movieInfosLoading());

        const params = [
          'base_info',
          'principalCast',
          'extendedCast',
          'creators_directors_writers'
        ];

        // const [
        //   base_info,
        //   principalCast,
        //   extendedCast,
        //   creators_directors_writers,
        //   titles
        // ] = await Promise.all([
        //   ...params.map((param) =>
        //     axios.get(
        //       `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
        //       {
        //         headers: apiHeaders,
        //         params: {
        //           info: param
        //         }
        //       }
        //     )
        //   ),
        //   axios.get(
        //     `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/aka`,
        //     {
        //       headers: apiHeaders
        //     }
        //   )
        // ]);

        // dispatch(
        //   movieInfosSuccess({
        //     id: movieId,
        //     base_info: baseInfoDto(base_info.data.results),
        //     principalCast: principalCastDto(principalCast.data.results),
        //     extendedCast: extendedCastDto(extendedCast.data.results),
        //     creators_directors_writers: creatorsDto(
        //       creators_directors_writers.data.results
        //     ),
        //     titles: titles.data.results
        //   })
        // );
        const { data } = await axios.get(
          `http://localhost:5000/movie/infos/${movieId}`
        );

        dispatch(movieInfosSuccess(data));
      }
    } catch (error) {
      dispatch(movieInfosFailure(error.message));
    }
  };
};

export const postMovieByImdbId = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const params = [
        'base_info',
        'principalCast',
        'extendedCast',
        'creators_directors_writers'
      ];

      const [
        base_info,
        principalCast,
        extendedCast,
        creators_directors_writers,
        titles
      ] = await Promise.all([
        ...params.map((param) =>
          axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${movieId}`, {
            headers: apiHeaders,
            params: {
              info: param
            }
          })
        ),
        axios.get(
          `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/aka`,
          {
            headers: apiHeaders
          }
        )
      ]);

      // Genres creation
      // const genresParams = base_info.data.results.genres.genres.map(
      //   (genre) => ({
      //     id: genre?.id,
      //     text: genre?.text
      //   })
      // );
      // const genresResult = await axios.post(
      //   `http://localhost:5000/genre/list`,
      //   genresParams
      // );
      // console.log(genresResult);

      // const genresResult = await Promise.all([
      //   ...genresParams.map((param) =>
      //     axios.post(`http://localhost:5000/genre`, param)
      //   )
      // ]);

      // // Names creation
      // const namesParams = [
      //   ...creators_directors_writers.data.results.directors[0].credits.map(
      //     (credit) => ({
      //       id: credit.name.id,
      //       name: credit.name.nameText.text
      //     })
      //   ),
      //   ...creators_directors_writers.data.results.writers[0].credits.map(
      //     (credit) => ({
      //       id: credit.name.id,
      //       name: credit.name.nameText.text
      //     })
      //   ),
      //   ...principalCast.data.results.principalCast[0].credits.map((cast) => ({
      //     id: cast.name.id,
      //     name: cast.name.nameText.text
      //   })),
      //   ...extendedCast.data.results.cast.edges.map(({ node }) => ({
      //     id: node.name.id,
      //     name: node.name.nameText.text
      //   }))
      // ];
      // const namesResult = await Promise.all([
      //   ...namesParams.map((param) =>
      //     axios.post(`http://localhost:5000/name`, param)
      //   )
      // ]);
      // console.log(namesResult.map((name) => name.data));

      // Movie creation
      const movieParams = {
        imdbId: movieId,
        originalTitle: base_info.data.results.originalTitleText.text,
        regionalTitles: titles.data.results.map((title) => ({
          title: title?.title,
          region: title?.region
        })),
        picture: {
          url: base_info.data.results.primaryImage?.url,
          height: base_info.data.results.primaryImage?.height,
          width: base_info.data.results.primaryImage?.width
        },
        releaseDate: {
          year: base_info.data.results.releaseDate?.year,
          month: base_info.data.results.releaseDate?.month,
          day: base_info.data.results.releaseDate?.day
        },
        duration: base_info.data.results.runtime.seconds,
        plot: base_info.data.results.plot.plotText.plainText,
        genres: base_info.data.results.genres.genres.map((genre) => ({
          id: genre?.id,
          text: genre?.text
        })),
        directors:
          creators_directors_writers.data.results.directors[0].credits.map(
            (credit) => ({
              id: credit.name.id,
              name: credit.name.nameText.text,
              attributes: credit?.attributes?.map((attr) => attr.text)
            })
          ),
        writers: creators_directors_writers.data.results.writers[0].credits.map(
          (credit) => ({
            id: credit.name.id,
            name: credit.name.nameText.text,
            attributes: credit?.attributes?.map((attr) => attr.text)
          })
        ),
        casting: {
          principal: principalCast.data.results.principalCast[0].credits.map(
            (cast) => ({
              id: cast.name.id,
              name: cast.name.nameText.text,
              attributes: cast?.attributes?.map((attr) => attr.text),
              characters: cast.characters?.map((char) => char.name),
              picture: {
                url: cast.name.primaryImage.url,
                height: cast.name.primaryImage.height,
                width: cast.name.primaryImage.width
              }
            })
          ),
          extended: extendedCast.data.results.cast.edges.map(({ node }) => ({
            id: node.name.id,
            name: node.name.nameText.text,
            attributes: node?.attributes?.map((attr) => attr.text),
            characters: node.characters?.map((char) => char.name),
            picture: {
              url: node.name.primaryImage?.url,
              height: node.name.primaryImage?.height,
              width: node.name.primaryImage?.width
            }
          }))
        }
      };

      await axios.post(`http://localhost:5000/movie`, movieParams);
      // TODO: rafraichir liste
      return true;
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
