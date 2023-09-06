<template>
  <div class="cv-outter">
    <div id="cv-example" style="font-family: 'Quicksand', sans-serif">
      <div class="cv-left">
        <div class="cv-header">
          <h1>Jorge Dumnic</h1>
          <p class="job-title">Frontend Developer</p>
          <div class="cv-header-contact">
            <div class="cv-header-contact__item">
              <PhoneIcon fillColor="#999999" :size="16" />
              <p>+38268836393</p>
            </div>
            <div class="cv-header-contact__item">
              <EmailIcon fillColor="#999999" :size="16" />
              <p>markodumnic8@gmail.com</p>
            </div>
            <div class="cv-header-contact__item">
              <LocationIcon fillColor="#999999" :size="16" />
              <p>Montenegro, Niksic</p>
            </div>
          </div>
        </div>
        <div class="cv-body">
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Summary</h2>
            </div>
            <p class="cv-section__summary">
              As a passionate frontend developer with 2.5 years of experience, I
              have worked with various front-end technologies such as Vue.js,
              React, and React Native. I am skilled in translating design
              mockups into functional websites and applications, ensuring they
              are optimized for performance and accessibility. I have experience
              working in both small and large teams, as well as remotely, and am
              adept at collaborating effectively to deliver high-quality
              projects. I am committed to staying up-to-date with the latest
              trends and technologies in the industry to ensure that I am always
              delivering the best results for my clients.
            </p>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Professional Experience</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Frontend Developer</h3>
                  <p>2020 - 2023</p>
                </div>
                <div class="experiance-item-subheader">
                  <h3>Bild Studio</h3>
                  <p>Podgorica</p>
                </div>
                <div class="experiance-item-details">
                  <p>
                    Worked as an intern for the first three months, responsible
                    for creating landing pages and a full-stack online library
                    system.
                  </p>
                  <p>
                    Joined the Telekom ME team, where I learned and utilized
                    Vue.js/Nuxt.js for various tasks such as creating widgets
                    for custom page creation, maintaining and improving the
                    admin panel, and creating purchase processes for different
                    offers.
                  </p>
                  <p>
                    In addition to the main Telekom ME project, I often worked
                    on additional projects, such as front-end enhancements for
                    the Tiramisu ERP finance system, and participated in
                    building two mobile applications for the Montenegrin market
                    (Baba Ganus and BellaBoka) using React Native.
                  </p>
                  <p>
                    Currently in the final stages of the Locate London project
                    for the British market, where I served as the lead frontend
                    developer, responsible for tasks such as creating the admin
                    panel, creating a script to initialize a chatbot widget that
                    the client fills in on the admin panel, and then displaying
                    certain data and chatbot to end-users.
                  </p>
                </div>
              </div>
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Freelancer</h3>
                  <p>2020 - ?</p>
                </div>

                <div class="experiance-item-details">
                  <p>
                    Throughout my career, I have worked on various side projects
                    utilizing a range of different technologies, from Wordpress
                    to Next.js.
                  </p>
                  <p>
                    In my free time, I love creating applications for personal
                    use, and on my Github profile, you can find over 70
                    repositories that showcase my work. The repositories range
                    from simple components such as card components to a CV
                    generator which I used to create this very CV.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section"  id="page-break">
            <div class="cv-section-title">
              <h2>Projects</h2>
            </div>
            <div class="project-items">
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Telekom ME</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Website development - Custom E-Commerce / Agile
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Vue.js, Nuxt.js, Vuex, Vuetify, SCSS</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Locate London</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>United Kingdom</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Admin panel development - Custom ChatBot / Agile
                  </p>

                  <p>Language: JavaScript</p>
                  <p>
                    Front-End Technologies: React.js, Vue.js, Vuex, TailwindCSS, Vue
                    Material
                  </p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Baba Ganus</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Mobile application development - Auth0 login system
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: React Native, Wordpress, Auth0</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Bella Boka</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Montenegro</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Mobile application development
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: React Native</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>GM Inzenjering</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Serbia</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Website development - WooCommerce
                  </p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Wordpress, WooCommerce</p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Prologs</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>USA</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">Website development</p>

                  <p>Language: JavaScript</p>
                  <p>Front-End Technologies: Next.js, TailwindCSS, EmailJS</p>
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Education</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header smaller-header">
                  <h3>Bachelor's degree, Information Technology</h3>
                  <p>2015 - 2020</p>
                </div>
                <div class="experiance-item-subheader smaller-header">
                  <h3>Unviersity of Novi Sad</h3>
                  <p>Novi Sad, Serbia</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="cv-right" style="background-color: #fffasfsafas">
        <div class="cv-avatar">
          <img style="border-radius: 50%;"
            :src="require('@/assets/avatar.jpeg')"
            alt="avatar"
          />
        </div>
        <div class="cv-body">
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Skills</h2>
            </div>
            <div class="skill-items">
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Tools</h6>
                </div>
                <div class="skill-item-details">
                  <p>JavaScript</p>
                  <p>Vue.js</p>
                  <p>Nuxt.js</p>
                  <p>React.js</p>
                  <p>React Native</p>
                  <p>Next.js</p>
                  <p>jQuery</p>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>TailwindCSS</p>
                  <p>SCSS</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Operating Systems</h6>
                </div>
                <div class="skill-item-details">
                  <p>Windows</p>
                  <p>Ubuntu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Languages</h2>
            </div>
            <div class="language-items">
              <div class="language-item">
                <div class="language-item-left">
                  <h4>Montenegrian</h4>
                  <span>Native</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                </div>
              </div>
              <div class="language-item">
                <div class="language-item-left">
                  <h4>English</h4>
                  <span>Intermediate</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle"></div>
                  <div class="language-item-right__circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Hobbies</h2>
            </div>
            <div class="hobbie-items">
              <div class="hobbie-item">
                <p>Football</p>
                <p>Table Tennis</p>
                <p>Chess</p>
                <p>Photography</p>
                <p>Traveling</p>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Find Me Online</h2>
            </div>
            <div class="social-items">
              <div class="social-item">
                <div class="social-item-left">
                  <GithubIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Github</p>
                  <a href="https://github.com/dumaaas" target="_blank">
                    @dumaaas
                  </a>
                </div>
              </div>
              <div class="social-item">
                <div class="social-item-left">
                  <LinkedInIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/marko-dumni%C4%87-714b72198/"
                    target="_blank"
                  >
                    @Marko Dumnić
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";
import EmailIcon from "vue-material-design-icons/At.vue";
import html2pdf from "html2pdf.js";
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";

export default {
  components: {
    PhoneIcon,
    LocationIcon,
    LinkedInIcon,
    GithubIcon,
    EmailIcon,
  },
  props: {
    userInfo: Object,
  },
  methods: {
    exportToPDF2() {
      html2pdf(document.getElementById("cv-example"), {
        filename: "cv-example.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 192,
          scale: 2,
          letterRendering: false,
          useCORS: true,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
    },
  },
};
</script>


<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Cookie&family=Handlee&family=Montserrat&family=Nunito&family=Open+Sans&family=Quicksand&family=Roboto&family=Roboto+Condensed&family=Rowdies&family=Sofia+Sans&display=swap");

* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: ease-in-out 0.3s all;
}

#cv {
  display: flex;
  background: #ffffe0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#cv-example {
  display: flex;
  background: #ffffe0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.cv-left {
  width: 140mm;
  background: #fff;
  padding: 50px 40px;
}

.cv-right {
  width: 70mm;
  background: #006666;
  padding: 30px 30px 30px 10px;
}

.cv-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 49px;
}

.cv-avatar img {
  max-width: 117px;
  max-height: 117px;
  min-width: 117px;
  min-height: 117px;
}

.cv-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 65px;
}

.cv-body {
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.cv-section {
  display: flex;
  flex-direction: column;
}

.cv-section__summary {
  font-size: 11px;
}

.cv-section.right-section {
  color: white;
  padding: 0 40px 0 20px;
}

.cv-section.right-section h2 {
  border-bottom: 2px solid #fff;
}

.cv-section-title h2 {
  text-transform: uppercase;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #006666;
  font-size: 18px;
}

.cv-header .job-title {
  font-size: 20px;
  font-weight: 600;
  color: #1ab3b8;
}

.cv-header-contact {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

.cv-header-contact__item span {
  height: 16px;
}

.cv-header-contact__item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cv-header-contact__item p {
  font-size: 12px;
}

.tag {
  margin: 6px 8px;

  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 10001;
  padding: 8px 12px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #1ab3b8;
}

.save-btn {
  position: fixed !important;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 10001;
}

.cv-right-section {
  color: white;
  padding: 0 30px;
}

.experiances-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.experiance-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.experiance-item-header,
.experiance-item-subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.experiance-item-header.smaller-header h3,
.experiance-item-subheader.smaller-header h3 {
  font-size: 14px;
}

.experiance-item-subheader h3 {
  color: #1ab3b8;
}

.experiance-item-header.smaller-header,
.experiance-item-subheader.smaller-header p {
  font-weight: 600;
  font-size: 12px;
}

.experiance-item-details p {
  font-size: 11px;
}

.experiance-item-details p:before {
  content: "• ";
  padding-right: 6px;
}

.project-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-item-header h3 {
  color: #1ab3b8;
}

.project-item-details p {
  font-size: 12px;
}

.project-item-details p:before {
  content: "• ";
  padding-right: 6px;
}

.project-item-details p.project-item-details-title:before {
  content: "";
  padding-right: 0;
}

.project-item-details p.project-item-details-title {
  font-size: 14px;
}

.skill-item {
  margin-bottom: 16px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-item-title h6 {
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 5px;
}

.skill-item-details {
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
}

.skill-item-details p {
  font-size: 11px;
}

.skill-item-details p:after {
  content: " •";
}

.skill-item-details p:last-child:after {
  content: "";
}

.language-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.language-item-left {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.language-item-left h4 {
  font-size: 12px;
}

.language-item-left span {
  font-size: 11px;
}

.language-item-right {
  display: flex;
  flex-direction: row;
  gap: 3px;
}

.language-item-right__circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.4;
}

.language-item-right__circle.circle-active {
  background: #fff;
  opacity: 1;
}

.hobbie-item p {
  font-size: 13px;
  margin-bottom: 10px;
  font-weight: 500;
}

.hobbie-item p:last-child {
  margin-bottom: 0;
}

.social-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.social-item {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-content: flex-start;
}

.social-item-right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-item-right p {
  font-weight: 600;
  font-size: 13px;
}

.social-item-right a {
  font-size: 11px;
  color: #fff !important;
  word-break: break-all;
}

.color-picker-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
  position: relative;
}

.color-picker {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 50%;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
}

.color-picker .vue-swatches__container {
  z-index: 999 !important;
}

.image-upload {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 4px;
}

.image-upload label {
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
}

.image-upload-label {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 10px;
}

.md-select-menu {
  z-index: 1001 !important;
}


    .boton-container {
      display: flex;
      justify-content: flex-end;
      /* Alinea el botón a la derecha */
      margin-top: 20px;
      /* Agrega margen superior para separarlo del contenido */
    }

    .generar-boton {
      background-color: #007bff !important;
      /* Color de fondo del botón */
      color: white;
      /* Color del texto del botón */
      padding: 10px 20px;
      /* Espaciado interno del botón */
      border: none;
      /* Sin borde */
      border-radius: 5px;
      /* Radio de borde */
      cursor: pointer;
      /* Cambia el cursor al pasar sobre el botón */
    }

    .generar-boton:hover {
      background-color: #0056b3;
      /* Color de fondo al pasar el cursor sobre el botón */
    }

.cv-outter {
  min-height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin: 80px auto 100px auto;
  border: 1px solid #ccc;
}
</style>

