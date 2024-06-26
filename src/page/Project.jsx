import React from 'react';

const Project = () => {
  const projects = [
    {
      category: "E-commerce",
      items: [
        { name: "EkotaMart", url: "https://shop.ekotamart.com/#", imgSrc: "assets/img/ekotamart.com" },
        { name: "zoota footwear", url: "https://joota.airticketbangladesh.com", imgSrc: "assets/img/zootafootwear.png" },
        { name: "Zestmartbd", url: "https://zestmartbd.com", imgSrc: "assets/img/zestmart.png" },
        { name: "watchghor", url: "https://watchghorbd.com", imgSrc: "assets/img/watchghor.png" }
      ]
    },
    {
      category: "Company",
      items: [
        { name: "It Sheba Limited", url: "http://itsheba.com.bd/", imgSrc: "assets/img/it-sheba.png" },
        { name: "Umrah Sheba", url: "https://umrahsheba.com/", imgSrc: "assets/img/umrah-sheba.png" },
        { name: "rarcdc", url: "https://rarcdc.org/", imgSrc: "assets/img/rainbow.png" },
        { name: "protyzer", url: "https://protyzermedicalsystem.com/", imgSrc: "assets/img/protyzer.png" },
        { name: "fastmarkcorporation", url: "https://www.fastmarkcorporation.com/", imgSrc: "assets/img/fast.png" },
        { name: "jewel-design-ltd", url: "https://jeweldesign.com.bd/", imgSrc: "assets/img/jwel-design-ltd.png" },
        { name: "SF Denim", url: "https://sfdenim.airticketbangladesh.com/", imgSrc: "assets/img/sf.png" }
      ]
    },
    {
      category: "Travels",
      items: [
        { name: "A To Z Holidays", url: "http://atoztour.net/", imgSrc: "assets/img/atozlolyday.png" },
        { name: "blue-voyage", url: "https://bluevoyage.com.bd/", imgSrc: "assets/img/blue-voyage.png" },
        { name: "Muskan Holidays", url: "http://muskaanholidays.com/", imgSrc: "assets/img/muskan.png" },
        { name: "Travel Tour", url: "", imgSrc: "assets/img/travel.png" },
        { name: "R.B-Tours&Travels", url: "", imgSrc: "assets/img/rb.png" }
      ]
    },
    {
      category: "NGO",
      items: [
        { name: "Ashraf Foundation", url: "https://ashrafbd.org/", imgSrc: "assets/img/ashraf.png" },
        { name: "RUS", url: "https://rusbd.org/", imgSrc: "assets/img/rus.png" },
        { name: "Community Management Center", url: "https://cmcpbbd.org/", imgSrc: "assets/img/community.png" },
        { name: "heaven architect", url: "", imgSrc: "assets/img/heaven.png" },
        { name: "Crown Agency", url: "https://crownagencies.net/", imgSrc: "assets/img/crown.png" }
      ]
    },
    {
      category: "School Website",
      items: [
        { name: "BCB High School", url: "https://bcbhs.airticketbangladesh.com/", imgSrc: "assets/img/bcbhigh-school.png" },
        { name: "Child Care School", url: "https://childcareschool.org/", imgSrc: "assets/img/child-care-school.png" }
      ]
    },
    {
      category: "Admin Panel",
      items: [
        { name: "Admin Panel It Sheba", url: "", imgSrc: "assets/img/admin-panel.png" }
      ]
    }
  ];

  return (
    <>
      {/* Project Section */}
      <section id="portfolio" data-scroll-index={3} className="section portfolio-section gray-bg-1">
        <div className="container">
          <div className="section-heading">
            <h3><span>My Portfolio</span></h3>
          </div>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3 className="skill-heading section-heading">{project.category}</h3>
              <div className="lightbox-gallery">
                <div className="row g-3 g-lg-4 portfolio-content">
                  {project.items.map((item, idx) => (
                    <div key={idx} className="col-sm-6 col-lg-4 grid-item">
                      <div className="portfolio-box">
                        <div className="portfolio-text">
                          <h6><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a></h6>
                          <p>Website</p>
                          <a className="gallery-link" href={item.url} target="_blank" rel="noopener noreferrer">
                            <i className="bi-arrow-up-right-circle" />
                          </a>
                        </div>
                        <div className="portfolio-img">
                          <img src={item.imgSrc} title="" alt={item.name} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End Project Section */}
    </>
  );
};

export default Project;
