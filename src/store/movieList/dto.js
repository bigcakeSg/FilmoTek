export const miniInfoDto = (miniInfo) => {
  // TODO: opti
  // return {
  //   id: miniInfo.id,
  //   primaryImage: miniInfo.primaryImage,
  //   title: miniInfo.originalTitleText.text,
  //   releaseYear: miniInfo.releaseYear.year
  // };
  return miniInfo;
};

export const titlesDto = (titles) => {
  // TODO: opti
  // const titleFr = titles.find(title => title.region === 'FR');

  // return titleFr !== -1 ? [titleFr] : [];
  return titles;
};
