import styled from 'styled-components';
import { colorA } from '../../../utils/colors';

const bannerHeight = 350;

export const StyledMovie = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & .movie-banner {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: ${bannerHeight}px;
    background-color: ${colorA};
    z-index: 10;
    &__image {
      width: 400%;
      height: 400%;
      position: absolute;
      top: -100%;
      left: -100%;
      filter: blur(50px);
    }
    &__overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #000;
      opacity: 0.3;
    }
  }
  & .main-content {
    padding-top: ${bannerHeight}px;
  }
  & .movie {
    &__picture {
      width: 250px;
      position: absolute;
      top: 50px;
      left: 30px;
      z-index: 20;
      box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.5);
    }
    &__main-info {
      position: absolute;
      right: 30px;
      top: 100px;
      z-index: 20;
      width: calc(100% - 350px);
      height: 180px;
      vertical-align: text-bottom;
      color: #fff;
      text-shadow: 1px 1px 2px #000;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &__title {
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 5px;
    }
    &__region-title {
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: solid 1px #fff;
    }
    &__year {
      font-weight: 500;
      font-size: 20px;
    }
    &__info {
      position: absolute;
      right: 30px;
      margin-top: 20px;
      width: calc(100% - 350px);
      font-size: 16px;
      top: ${bannerHeight - 50}px;
      &-item {
        margin-bottom: 5px;
      }
    }
    &__label {
      font-weight: 700;
      color: ${colorA};
    }
    &__genres {
      margin-top: 20px;
      &-item {
        display: inline-block;
        border: solid 1px ${colorA};
        border-radius: 15px;
        margin-right: 10px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 700;
        color: ${colorA};
      }
    }
    &__casting {
      position: absolute;
      top: 450px;
      width: 100%;
      padding-bottom: 50px;
      & .cast__item {
        margin: 5px;
        padding: 5px;
        font-size: 14px;
        & .casting__name {
          font-weight: 700;
        }
      }
      &-principal {
        display: flex;
        flex-wrap: wrap;
        & .casting__image {
          width: 200px;
          height: 200px;
        }
        & .cast__item {
          & .casting__name {
            margin-top: 10px;
          }
        }
      }
      &-extended {
        display: flex;
        flex-wrap: wrap;
        & .casting__image {
          width: 100px;
          height: 100px;
          margin-right: 10px;
        }
        & .cast__item {
          display: flex;
          width: 300px;
        }
      }
      & .casting__image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: solid 3px ${colorA};
        background-color: #cccccc;
      }
    }
  }
`;
