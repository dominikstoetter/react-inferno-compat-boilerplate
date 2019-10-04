import styled from 'styled-components'

const StyledResponsiveGrid = styled.div`
  ${({ sm, md, lg }) => `
  .row {
    width: 100%;
    display: block;
    clear: both;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  @media screen {
    .inf-col-xs-1-12,
    .inf-col-xs-2-12,
    .inf-col-xs-3-12,
    .inf-col-xs-4-12,
    .inf-col-xs-5-12,
    .inf-col-xs-6-12,
    .inf-col-xs-7-12,
    .inf-col-xs-8-12,
    .inf-col-xs-9-12,
    .inf-col-xs-10-12,
    .inf-col-xs-11-12,
    .inf-col-xs-12-12 {
      box-sizing: border-box;
      display: inline-block;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .inf-col-xs-1-12 {
      width: 8.33%;
    }

    .inf-col-xs-2-12 {
      width: 16.66%;
    }

    .inf-col-xs-3-12 {
      width: 25%;
    }

    .inf-col-xs-4-12 {
      width: 33.33%;
    }

    .inf-col-xs-5-12 {
      width: 41.66%;
    }

    .inf-col-xs-6-12 {
      width: 50%;
    }

    .inf-col-xs-7-12 {
      width: 58.33%;
    }

    .inf-col-xs-8-12 {
      width: 66.66%;
    }

    .inf-col-xs-9-12 {
      width: 75%;
    }

    .inf-col-xs-10-12 {
      width: 83.33%;
    }

    .inf-col-xs-11-12 {
      width: 91.66%;
    }

    .inf-col-xs-12-12 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${sm}) {
    .inf-col-sm-1-12,
    .inf-col-sm-2-12,
    .inf-col-sm-3-12,
    .inf-col-sm-4-12,
    .inf-col-sm-5-12,
    .inf-col-sm-6-12,
    .inf-col-sm-7-12,
    .inf-col-sm-8-12,
    .inf-col-sm-9-12,
    .inf-col-sm-10-12,
    .inf-col-sm-11-12,
    .inf-col-sm-12-12 {
      box-sizing: border-box;
      display: inline-block;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .inf-col-sm-1-12 {
      width: 8.33%;
    }

    .inf-col-sm-2-12 {
      width: 16.66%;
    }

    .inf-col-sm-3-12 {
      width: 25%;
    }

    .inf-col-sm-4-12 {
      width: 33.33%;
    }

    .inf-col-sm-5-12 {
      width: 41.66%;
    }

    .inf-col-sm-6-12 {
      width: 50%;
    }

    .inf-col-sm-7-12 {
      width: 58.33%;
    }

    .inf-col-sm-8-12 {
      width: 66.66%;
    }

    .inf-col-sm-9-12 {
      width: 75%;
    }

    .inf-col-sm-10-12 {
      width: 83.33%;
    }

    .inf-col-sm-11-12 {
      width: 91.66%;
    }

    .inf-col-sm-12-12 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${md}) {
    .inf-col-md-1-12,
    .inf-col-md-2-12,
    .inf-col-md-3-12,
    .inf-col-md-4-12,
    .inf-col-md-5-12,
    .inf-col-md-6-12,
    .inf-col-md-7-12,
    .inf-col-md-8-12,
    .inf-col-md-9-12,
    .inf-col-md-10-12,
    .inf-col-md-11-12,
    .inf-col-md-12-12 {
      box-sizing: border-box;
      display: inline-block;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .inf-col-md-1-12 {
      width: 8.33%;
    }

    .inf-col-md-2-12 {
      width: 16.66%;
    }

    .inf-col-md-3-12 {
      width: 25%;
    }

    .inf-col-md-4-12 {
      width: 33.33%;
    }

    .inf-col-md-5-12 {
      width: 41.66%;
    }

    .inf-col-md-6-12 {
      width: 50%;
    }

    .inf-col-md-7-12 {
      width: 58.33%;
    }

    .inf-col-md-8-12 {
      width: 66.66%;
    }

    .inf-col-md-9-12 {
      width: 75%;
    }

    .inf-col-md-10-12 {
      width: 83.33%;
    }

    .inf-col-md-11-12 {
      width: 91.66%;
    }

    .inf-col-md-12-12 {
      width: 100%;
    }
  }

  @media screen and (min-width: ${lg}) {
    .inf-col-lg-1-12,
    .inf-col-lg-2-12,
    .inf-col-lg-3-12,
    .inf-col-lg-4-12,
    .inf-col-lg-5-12,
    .inf-col-lg-6-12,
    .inf-col-lg-7-12,
    .inf-col-lg-8-12,
    .inf-col-lg-9-12,
    .inf-col-lg-10-12,
    .inf-col-lg-11-12,
    .inf-col-lg-12-12 {
      box-sizing: border-box;
      display: inline-block;
      zoom: 1;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .inf-col-lg-1-12 {
      width: 8.33%;
    }

    .inf-col-lg-2-12 {
      width: 16.66%;
    }

    .inf-col-lg-3-12 {
      width: 25%;
    }

    .inf-col-lg-4-12 {
      width: 33.33%;
    }

    .inf-col-lg-5-12 {
      width: 41.66%;
    }

    .inf-col-lg-6-12 {
      width: 50%;
    }

    .inf-col-lg-7-12 {
      width: 58.33%;
    }

    .inf-col-lg-8-12 {
      width: 66.66%;
    }

    .inf-col-lg-9-12 {
      width: 75%;
    }

    .inf-col-lg-10-12 {
      width: 83.33%;
    }

    .inf-col-lg-11-12 {
      width: 91.66%;
    }

    .inf-col-lg-12-12 {
      width: 100%;
    }
  }
`};
`
export default StyledResponsiveGrid
