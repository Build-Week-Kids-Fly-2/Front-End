import styled from 'styled-components';
export const ReviewStyle = styled.div `
padding: 5%;
  .top-box {
    background: #5CA2A9;
    border-radius: 10px;
    margin-top: 5%;
    padding: 4% 0 4% 5%;
  }
 .middle {
   background: #fff;
   display: flex;
 }
  .top-box h2 {
    margin: 3% 0;
    color: white;
  }
  .top-box h3 {
    margin: 2% 0;
    color: white;
  }

  .data {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .data input {
    margin: 5%;
    border: none;
    border-bottom: 1px solid lightgray;
    font-family: Lato;
  }
  .top-box p {
    color: white;
  }
  .bottom-box p {
    margin: 5%;
  }
  .middle-box {
    width: 60%;
    padding: 0 3%;
    margin-left: 10%;
    margin-top: 5%;
  }
  .left-middle-box button {
    width: 50%;
    margin: 5%;
    background: #F5CA8A;
    padding: 4% 0;
    text-align: center;
    border: none;
    border-radius: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  a {
    font-size: 1.8rem;
  }
  .left-middle-box button:hover {
    background: #F9DFB9;
  }
  .left-middle-box .inner-icon {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .right-middle-box {
    margin-right: 10%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-middle-box img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .right-middle-box h3 {
    text-align: center;
    padding: 10% 0 0 10%;
    font-weight: 600;
  }
  .whos_going {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding: 10% 0 0 15%;
  }
   .whos_going .p1,
 .whos_going .p2,
 .whos_going .p3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 .whos_going .p1:hover img,
 .whos_going .p2:hover img,
 .whos_going .p3:hover img {
  width: 80px;
  height: 80px;
}
.add {
  background: white;
  border: none;
}
`