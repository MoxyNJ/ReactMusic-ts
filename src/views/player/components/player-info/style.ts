import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  padding: 30px 30px 40px 39px;
`;

export const InfoLeftWrapper = styled.div`
  width: 206px;
  padding-top: 7px;

  .image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;

    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
    }
  }

  .link {
    margin-top: 20px;
    margin-left: -13px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-top: -2px;
      background-position: -34px -863px;
    }

    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`;

export const InfoRightWrapper = styled.div<{
  $isSpread: boolean;
}>`
  width: 414px;
  margin-left: 20px;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
    i {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .title {
      font-size: 24px;
      font-weight: 400;
      margin-left: 10px;
    }
  }
  .label {
    color: #999999;
  }

  .item {
    margin: 8px 0px 2px;

    a {
      color: #0c73c2;
    }
  }

  .lyric {
    padding: 30px 0 50px;

    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }

    .lyric-control {
      position: relative;
      color: #0c73c2;
      background-color: #fff;
      text-decoration: underline;
      cursor: pointer;

      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -8px;
        top: 2px;
        background-position: ${(props) => (props.$isSpread ? '-45px' : '-65px')} -520px;
      }
    }
  }
`;
