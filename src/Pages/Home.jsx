import React from 'react'
import '../Styles/hero.css';
import HeroImage from '../Assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg';
import placeholder from '../Assets/placeholder.jpg';
import BusinessCardHome from '../Components/BusinessCardHome';
import '../Styles/hero.css';

function Home() {
  return (
    <div>
      <header>
    <img src={placeholder}/>
<h3>All your appointments in one go.</h3>
<p>Search bar goes here</p>
</header>

<section id='featured-businesses'>
<p>Featured Businesses</p>
<BusinessCardHome/>
</section>

<section id='mini-about'>
  <p>Say goodbye to juggling emails, texts, and scattered confirmations. With All Set, you can view, manage, and update all your appointments in one simple dashboard. Whether you're booking a haircut, massage, or meeting, everything is streamlined for your convenience.</p>
  <p> Explore a wide range of trusted businesses from beauty and wellness to home services and more without hopping between different websites. Compare prices, read reviews, and book instantly. It's never been easier to find and secure the services that fit your schedule and lifestyle.</p>

</section>

<footer>This is where the footer goes</footer>

</div>


  )
}

export default Home