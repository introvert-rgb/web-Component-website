class columnLayout extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        .first-sec {
  max-width: 1440px;
  width: 90%;
  margin: 2.5em auto 0 auto;
  display: -ms-grid;
  display: grid;
  grid-template-columns:repeat(2,50%);}

.first-sec .part-one {
  margin-top: 2.5em;
  color: #070439;
}

.first-sec .part-one .heading {
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 1em;
}

.first-sec .part-one .para {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  margin-bottom: 1.5em;
}

.first-sec .part-one .cta-div {
  width: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.first-sec .part-one .cta-div .email {
  padding: 1em;
  width: 60%;
  font-family: "Raleway", sans-serif;
  color: #bfbfbf;
}

.first-sec .part-one .cta-div .btn {
  width: 35%;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  background-color: #3065f8;
  outline: none;
  border: none;
  border-radius: 0.3em;
  color: #f6f6fe;
}

.first-sec .part-two img {
  width: 90%;
}
        </style>
        <section class="first-sec">
        <div class="part-one">
            <div class="heading"> In All your files in one secure location, accessible anywhere.</div>
            <div class="para">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</div>
            <div class="cta-div">
                <input type="email" placeholder="Enter your email..." class="email">
                <button class="btn">Get Started</button>
            </div>
        </div>
        <div class="part-two">
            <img src="./img/illustration-1.svg" alt="">
        </div>
    </section>`
    }
}
customElements.define('column-component', columnLayout);