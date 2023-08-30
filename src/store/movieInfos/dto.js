// export const baseInfoDto = (baseInfo) => ({
//   genres: baseInfo.genres.genres,
//   originalTitleText: baseInfo.originalTitleText.text,
//   plot: baseInfo.plot.plotText.plainText,
//   primaryImage: baseInfo.primaryImage,
//   releaseDate: baseInfo.releaseDate,
//   releaseYear: baseInfo.releaseYear,
//   runtime: baseInfo.runtime
// });

// export const principalCastDto = (principalCast) =>
//   principalCast.principalCast[0].credits.map((credit) => ({
//     characters: credit.characters,
//     name: credit.name
//   }));

// export const extendedCastDto = (extendedCast) =>
//   extendedCast.cast.edges.map((edge) => ({
//     characters: edge.node.characters,
//     name: edge.node.name
//   }));

// export const creatorsDto = (creators) => ({
//   directors: {
//     category: creators.directors[0].category.text,
//     credits: creators.directors[0].credits.map((credit) => ({
//       id: credit.name.id,
//       name: credit.name.nameText.text,
//       attributes: credit.attributes
//         ? credit.attributes.map((attribute) => attribute?.text)
//         : null
//     }))
//   },
//   writers: {
//     category: creators.writers[0].category.text,
//     credits: creators.writers[0].credits.map((credit) => ({
//       id: credit.name.id,
//       name: credit.name.nameText.text,
//       attributes: credit.attributes
//         ? credit.attributes.map((attribute) => attribute?.text)
//         : null
//     }))
//   }
// });
