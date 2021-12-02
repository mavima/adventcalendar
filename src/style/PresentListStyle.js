import styled from 'styled-components';
// import snowflake from '../images/snowflake.png';
// import small_flake from '../images/small_flake.png';

export const StyledPresentList = styled.div`
    padding-top: 100%;
    position: relative;
    cursor: pointer;

    .present-input {
  padding:15px;
  margin: 1rem;
}

.present-button {
  padding: 8px;
  background-color: purple;
  color: white;

}

.present-list {
  background-color: white;
  font-size: 2rem;
}

.present-list > ul {
  background-color: sandybrown;
}

.completed {
  color: green;
}


    
a {
         text-decoration: none;
         color: #113d70;
}

`