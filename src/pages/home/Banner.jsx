import React from "react";
import PageContainer from "../../components/PageContainer";

const Banner = () => {
  return (
    <PageContainer className={"banner-section"}>
      <div className="container">
        <section style={{ background: "red" }} className="main-banner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure neque
          quis recusandae esse porro deleniti, sapiente harum, ipsa voluptate
          veritatis sit autem ratione! Rem, libero quam? Vero non autem,
          eligendi nesciunt alias saepe aperiam omnis dicta atque impedit maxime
          ullam reiciendis quasi, velit quo accusantium eveniet odio. Ea
          corporis natus dignissimos minima nobis, architecto tenetur amet
          necessitatibus sequi eaque ab saepe iste exercitationem qui eveniet
          asperiores vero dolor sit at quam ad. Suscipit et cumque voluptas nisi
          quo laborum quas exercitationem quae, impedit nam dolorem deserunt
          temporibus, placeat tenetur doloremque explicabo ipsa necessitatibus
          cupiditate eius. Nostrum officia maiores maxime unde!
        </section>
        <aside className="aside-banner">
          <div style={{ background: "purple" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            voluptate. Similique mollitia dolores veritatis neque totam sequi
            temporibus, tempore repudiandae ipsam quod id ratione consectetur
            reprehenderit corporis labore recusandae debitis!
          </div>
          <div style={{ background: "green" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum
            sit provident perspiciatis. Voluptatibus vero accusamus similique
            delectus illo itaque, ipsum exercitationem maxime facilis
            temporibus.
          </div>
        </aside>
      </div>
    </PageContainer>
  );
};

export default Banner;
