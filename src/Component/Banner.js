import styled from "styled-components";

export default function Banner() {
    return (
        <Banners>
            <section>
                <div className="banner_content">
                    <h1>Super Flash Sale <br />50% Off</h1>
                </div>
            </section>
        </Banners>
    )
}

// Styling 
const Banners = styled.div`
  height: 500px;
  background-image: url(/Images/promotion.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  div{
    height: 500px;
  display: flex;
  align-items: center;
  }
  h1{
    color: #fff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  @media (max-width:768px){
    font-size: 54px;
  }

  }
  section{
      max-width:1200px;
      margin:auto;
      padding:20px;
  }
`;
