import styled from "styled-components";

export const container = styled.main`
max-width:1120px;
margin: 0 auto;
padding: 0 2rem;

.posts{
  max-width:720px;
  margin: 5rem auto;

  a{
    display:block;
  }
  time{
    font-size:1rem;
    display:flex;
    align-items:center;
    color: var(--gray-200);
  }

  img{
    max-width:100%;
    max-height:410px;
    border:2px solid var(--blue-900);
    border-radius:6px;
    border-image:linear-gradient(95deg,#31b4d0,transparent) 1;
  }

  strong{
    display:block;
    font-size:1.5rem;
    margin:1rem 0 ;
    line-height: 2rem;
    color: var(--white);
    transition: color 0.3s;
  }

  p{
    color:var(--white);
    margin-top:0.5rem;
    line-height:1.62rem;
  }

  &:hover strong{
    color:var(--blue-900);
  }

  .buttonsNavigate{
    margin-top:2rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    div{
      display:flex;
      gap:5px;
    }
    button{
      display:flex;
      background-color:var(--blue-900);
      padding:0.5rem;
      border-radius:5px;

      svg{
        padding: 0 3px;
      }
    }

  }
}

.posts a:not(a:nth-child(1)){
  margin-top:2rem;
  padding-top:2rem;
}

`
