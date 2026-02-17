import React from 'react';

const Project = () => {
  const projects = [
    {
      category: "Company",
      items: [
       { name: "Monir Group", url: "https://mg.monirsoft.com/", imgSrc: "assets/img/mg-group.JPG" },
        { name: "It Sheba Limited", url: "http://itsheba.com.bd/", imgSrc: "assets/img/it-sheba.png" },
        { name: "Construction Professional Ltd", url: "https://cpl2.monirsoft.com/", imgSrc: "assets/img/cpl.png" },
        { name: "Umrah Sheba", url: "https://umrahsheba.com/", imgSrc: "assets/img/umrah-sheba.png" },
        { name: "Monir Travel LLC", url: "#", imgSrc: "assets/img/monir-llc.JPG" },
        { name: "Emaarhomes", url: "https://www.emaarhomes.com.au/", imgSrc: "assets/img/land.JPG" },
        { name: "rarcdc", url: "https://rarcdc.org/", imgSrc: "assets/img/rainbow.png" },
        { name: "AIM INSTITUTE OF MEDICAL RESEARCH", url: "https://aim-imr.com", imgSrc: "assets/img/AIM.png" },
        { name: "Portfolio(Md-Monirul-Islam)", url: "https://www.themonirul.com/", imgSrc: "assets/img/Portfolio(Md-Monirul-Islam).JPG" },
        { name: "protyzer", url: "https://protyzermedicalsystem.com/", imgSrc: "assets/img/protyzer.png" },
        { name: "fastmarkcorporation", url: "https://www.fastmarkcorporation.com/", imgSrc: "assets/img/fast.png" },
        { name: "jewel-design-ltd", url: "https://jeweldesign.com.bd/", imgSrc: "assets/img/jwel-design-ltd.png" },
        { name: "SF Denim", url: "https://sfdenim.airticketbangladesh.com/", imgSrc: "assets/img/sf.png" },
         { name: "Capital News", url: "https://www.capitalnews24.net/", imgSrc: "assets/img/NEWS.png" },
         { name: "sabit International", url: "https://sabitinternational.com/", imgSrc: "assets/img/SABIT-INT.png" },
        { name: "Archetive", url: "https://www.archetive-bd.com/", imgSrc: "assets/img/arc.png" },
      ]
    },
     {
      category: "E-commerce",
      items: [
        { name: "Hoodnjogs", url: "https://hoodnjogs.co.uk/", imgSrc: "assets/img/hoodnjogs.jpg" },
        { name: "EkotaMart", url: "https://shop.ekotamart.com/#", imgSrc: "assets/img/ekotamart.com" },
        { name: "zoota footwear", url: "https://joota.airticketbangladesh.com", imgSrc: "assets/img/zootafootwear.png" },
        { name: "Zestmartbd", url: "https://zestmartbd.com", imgSrc: "assets/img/zestmart.png" },
        { name: "Jahan Stdios", url: "https://jahan.monirsoft.com/", imgSrc: "assets/img/jahan-stdios.jpg" }
        { name: "watchghor", url: "http://rifatmart.com/", imgSrc: "assets/img/rifat-mart.JPG" },
        { name: "Astrovet", url: " https://astrovet.uk/", imgSrc: "assets/img/Astrovet.png" },
        { name: "jeweldesign", url: "https://jeweldesign.monirsoft.com/", imgSrc: "assets/img/jeweldesign.png" },
        { name: "petra product bd ", url: "https://petra.monirsoft.com/index.html", imgSrc: "assets/img/petra.png" },
        { name: "Sevenlinksnts", url: "https://sevenlinksapparels.com/", imgSrc: "assets/img/sevenlinks.png" },
      ]
    },
    {
      category: "Travels",
      items: [
         { name: "TravelShaba Ltd", url: "https://www.travelsheba.com/", imgSrc: "assets/img/travelsheba.png" },
        { name: "Monir Travel & Tourism LLC ", url: "https://www.monirtravels.com/", imgSrc: "assets/img/llc.png" },
        { name: "Amanot Travels International", url: "#", imgSrc: "assets/img/amanot.png" },
        { name: "A To Z Holidays", url: "http://atoztour.net/", imgSrc: "assets/img/atozlolyday.png" },
        { name: "blue-voyage", url: "https://bluevoyage.com.bd/", imgSrc: "assets/img/blue-voyage.png" },
        { name: "Muskan Holidays", url: "http://muskaanholidays.com/", imgSrc: "assets/img/muskan.png" },
        { name: "Travel Tour", url: "", imgSrc: "assets/img/travel.png" },
        { name: "R.B-Tours&Travels", url: "https://www.rbtbd.com/", imgSrc: "assets/img/rb.png" }
      ]
    },
    {
      category: "NGO",
      items: [
        { name: "Ashraf Foundation", url: "https://ashrafbd.org/", imgSrc: "assets/img/ashraf.png" },
        { name: "RUS", url: "https://rusbd.org/", imgSrc: "assets/img/rus.png" },
        { name: "Community Management Center", url: "https://cmcpbbd.org/", imgSrc: "assets/img/community.png" },
        { name: "heaven architect", url: "", imgSrc: "assets/img/heaven.png" },
        { name: "Crown Agency", url: "https://crownagencies.net/", imgSrc: "assets/img/crown.png" },
        { name: "Gramen seba sangstha", url: "#", imgSrc: "assets/img/Tmss.png" },
      ]
    },
    {
      category: "School Website",
      items: [
        { name: "BCB High School", url: "https://bcbhs.airticketbangladesh.com/", imgSrc: "assets/img/bcbhigh-school.png" },
        // https://bcbhighschool.com.bd/
        { name: "Child Care School", url: "https://childcareschool.org/", imgSrc: "assets/img/child-care-school.png" }
      ]
    },
    {
      category: "Admin Panel",
      items: [
         { name: "Ekota Admin Panel", url: "#", imgSrc: "assets/img/ekotaadmin.JPG" },
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
