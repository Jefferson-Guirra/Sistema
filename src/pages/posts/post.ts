import styled from "styled-components";

export const container = styled.main`
max-width:1120px;
margin: 0 auto ;
padding:0 2rem;
padding-bottom:5rem;
`
export const post = styled.article`
  max-width: 720px;
  margin: 5rem auto 0 auto;
  color: var(--white);

  img {
    max-width: 100%;
    max-height: 410px;
    border-radius: 7px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: var(--white);
  }

  time {
    color: var(--gray-100);
    margin-top: 1.5rem;
    font-size: 1rem;
    display: block;
  }
  .postContent {
    font-size: 1.125rem;
    margin-top: 2rem;
    line-height: 2rem;

    .block-img {
      margin-block: 0.5rem;
    }

    img {
      display: block;
      width: 100%;
    }

    iframe {
      width: 100%;
      min-height: 350px;
      padding: 0.5rem 0;
    }

    a{
      color:var(--blue-900)
    }

    a:hover {
      color: var(--yellow-500);
    }

    p,
    ul {
      margin: 1.5rem 0;
    }

    ul {
      padding-left: 1.5rem;
      li {
        margin: 0.5rem 0;
      }
    }
    pre {
      border-radius: 0.5rem;
      background-color: var(--gray-700);
      padding: 0.5rem;
      color: var(--white);
    }
  }
`