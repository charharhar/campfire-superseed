<?php
/**
 * Template Name: Campaign Page
 *
 * Displays the single page campaign site.
 *
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Campfire</title>

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"/>

    <link rel="stylesheet" href="<%= assetsMap.main.css %>">

    <script src="https://use.fontawesome.com/374bf92dc0.js"></script>
</head>
<body>

    <div class="wrapper">

        <section class="section section-main">
            <nav class="main-navigation">
                <div class="navigation-logo-wrapper">
                    <figure class="heading-logo-image">
                        <img src="/images/section-main/logo-header.png" alt="">
                    </figure>
                </div>

                <button class="hamburger hamburger--elastic">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>

                <div class="navigation-list-wrapper">
                    <ul>
                        <li>
                            <a class="campWhite navLink" href="" scrollTo="section-about">Who we are</a>
                        </li>
                        <li>
                            <a class="campWhite navLink" href="" scrollTo="section-member">Features</a>
                        </li>
                        <li>
                            <a class="campWhite navLink" href="" scrollTo="section-plans">Plans</a>
                        </li>
                        <li>
                            <a class="campWhite navLink" href="" scrollTo="section-locations">Locations</a>
                        </li>
                        <li>
                            <a class="campWhite navLink" href="" scrollTo="section-loop">Blogs/Events</a>
                        </li>
                        <li>
                            <a class="button button-red small-bold navButton" href="https://campfire.work/contact-us/">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div class="sticky-nav-list">
                    <ul>
                        <li>
                            <a href="https://campfire.work"><img class="sticky-nav-logo" src="/images/logo-white.png" alt=""></a>
                        </li>
                        <li>
                            <a class="campWhite stickyNavLink" href="" scrollTo="section-about">Who we are</a>
                        </li>
                        <li>
                            <a class="campWhite stickyNavLink" href="" scrollTo="section-member">Features</a>
                        </li>
                        <li>
                            <a class="campWhite stickyNavLink" href="" scrollTo="section-plans">Plans</a>
                        </li>
                        <li>
                            <a class="campWhite stickyNavLink" href="" scrollTo="section-locations">Locations</a>
                        </li>
                        <li>
                            <a class="campWhite stickyNavLink" href="" scrollTo="section-loop">Blogs/Events</a>
                        </li>
                        <li>
                            <a class="button button-red small-bold navButton" href="https://campfire.work/contact-us/">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div class="mobile-nav-list">
                    <ul>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-about">Who we are</a>
                        </li>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-member">Features</a>
                        </li>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-plans">Plans</a>
                        </li>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-locations">Locations</a>
                        </li>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-loop">Blogs/Events</a>
                        </li>
                        <li>
                            <a class="campWhite mobileNavLink" href="" scrollTo="section-join">Join Us</a>
                        </li>
                        <li>
                            <a class="button button-grey small-bold navButton" href="https://campfire.work/contact-us/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="main-heading">
                <h1 class="campWhite larger-bold">Industry Focused <br> coworking spaces</h1>
            </div>

            <div class="main-subheading flex-display position-center direction-column">
                <h2 class="campWhite large-light">connect. collaborate. create.</h2>
                <figure class="arrow-image arrowDown" scrollTo="section-about">
                    <img src="/images/section-main/arrow-down.png" alt="">
                </figure>
            </div>

        </section>

        <section class="section section-about">
            <div class="container-fluid">
                <div class="row row-eq-height sm-fix section-row-wrapper">
                    <div class="col-sm-4 flex-display position-center">
                        <h1 class="campLightRed massive-bold waypoint" data="leftToRight">Who<span class="br"></span>We<span class="br"></span>Are</h1>
                    </div>
                    <div class="col-sm-8 flex-display position-center waypoint" data="rightToLeft">
                        <p class="campLightRed about-wording">Campfire Collaborative Spaces is Asia's fastest growing network of shared spaces. By end 2017, Campfire will have 7 industry-focused co-working, 1 co-living, and 1 co-learning sites in 4 countries. With real estate at a premium in most major cities, Campfire provides reliable and flexible sites to maximise utilisation. Currently operating 2 industry focused workspaces in Hong Kong (Kennedy Town - Tech and Wong Chuk Hang - Fashion), that has been designed to provide every tool and service possible for members to grow.
                        <br><br>
                        Campfire was conceptualized as a place where like-minded entrepeneurs can gather to share their experiences and work together. Campfire encourages its members to connect, create, and collaborate through industry-specific facilities, relevant events, and vibrant communities.</p>
                    </div>
                </div>

                <div class="row section-row-wrapper">
                    <div class="col-sm-7 flex-display position-center">
                        <h2 class="campLightRed medium-light">Stay up to date with our latest project<span class="br"></span>developments of co-learning and co-living spaces</h2>
                    </div>
                    <div class="col-sm-5 flex-display space-around">
                        <a href="https://www.facebook.com/CampfireCo-Learning-1992277400993883/" target="_blank" class="button small-regular button-red">Co-learning</a>
                        <a href="https://www.facebook.com/CampfireCo-Living-1172144746224741/" target="_blank" class="button small-regular button-red">Co-living</a>
                    </div>
                </div>
            </div>

            <div class="section-image parallax-first">
                <figure class="parallax-image"></figure>
            </div>

        </section>

        <section class="section section-member">
            <div class="container-fluid full-height">
                <div class="row row-eq-height md-fix section-row-wrapper full-height">
                    <div class="col-md-6 flex-display position-center direction-column">
                        <h1 class="campWhite large-bold waypoint" data="leftToRight">Membership <br> Features</h1>
                    </div>
                    <div class="col-md-6 waypoint" data="rightToLeft">
                        <div class="row row-eq-height sm-fix half-height">
                            <div class="col-sm-6 flex-display position-center direction-column">
                                <div class="feature-wrapper">
                                    <h2 class="campWhite medium-regular member-heading">Industry Focused Hardware</h2>

                                    <div class="member-icon">
                                        <figure class="feature-image">
                                            <img src="/images/section-member/features-hardware.png" alt="">
                                        </figure>
                                    </div>

                                    <p class="campWhite member-wording">Utilize state-of-the-art hardware for each specific industry at every Campfire site</p>
                                </div>
                            </div>
                            <div class="col-sm-6 flex-display position-center direction-column">
                                <div class="feature-wrapper">
                                    <h2 class="campWhite medium-regular member-heading">Industry Relevant Events</h2>

                                    <div class="member-icon">
                                        <figure class="feature-image">
                                            <img src="/images/section-member/features-events.png" alt="">
                                        </figure>
                                    </div>

                                    <p class="campWhite member-wording">Be inspired by frequent events with expert speakers and networking with your peers</p>
                                </div>
                            </div>
                        </div>
                        <div class="row row-eq-height sm-fix half-height">
                            <div class="col-sm-6 flex-display position-center direction-column">
                                <div class="feature-wrapper">
                                    <h2 class="campWhite medium-regular member-heading">Global Access</h2>

                                    <div class="member-icon">
                                        <figure class="feature-image">
                                            <img src="/images/section-member/features-global.png" alt="">
                                        </figure>
                                    </div>

                                    <p class="campWhite member-wording">Travel and work with ease. Campfire Memberships entitles you to work anywhere we are</p>
                                </div>
                            </div>
                            <div class="col-sm-6 flex-display position-center direction-column">
                                <div class="feature-wrapper">
                                    <h2 class="campWhite medium-regular member-heading">Camper Perks</h2>

                                    <div class="member-icon">
                                        <figure class="feature-image">
                                            <img src="/images/section-member/features-tent.png" alt="">
                                        </figure>
                                    </div>

                                    <ul class="campWhite member-list">
                                        <li>Reliable Internet</li>
                                        <li>Friendly Community Hosts</li>
                                        <li>Clean Locations</li>
                                        <li>Unique Meeting Rooms</li>
                                        <li>Campfire Canteen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-plans">
            <div class="red-header">
                <h1 class="campWhite medium-regular">Campfire Plans</h1>
            </div>

            <div class="accordion-plans-wrapper">
                <div class="accordion-plan">
                    <div class="accordion-button accordion-plans-button active-plan" id="acc-1">
                        <h2 class="campWhite medium-regular">flex plans</h2>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-plans-content active-plan" id="acc-1">

                        <div class="container-fluid accordion-content-wrapper flex-display position-center">
                            <div class="row row-eq-height sm-fix">
                                <div class="col-sm-6 accordion-left">
                                    <h2 class="campWhite large-regular">flex plans</h2>
                                    <p class="campWhite">The Flexible plan is a short-term alternative to a home office. These plans are flexible Hot Desk for a short-term membership.</p>
                                    <ul class="campWhite plan-list">
                                        <li>Day Pass</li>
                                        <li>Half Day Membership</li>
                                    </ul>
                                    <a href="" class="button button-red small-regular">sign me up</a>
                                </div>
                                <div class="col-sm-6 accordion-right">
                                    <div class="hours-block half-height">
                                        <h3 class="campWhite medium-regular">hours</h3>
                                        <ul class="campWhite hour-list">
                                            <li>Day (9:00AM - 6:30PM)</li>
                                            <li>Week (Monday - Friday <br> 9:00AM - 6:30PM)</li>
                                            <li>Half Day Monthly</li>
                                        </ul>
                                    </div>
                                    <div class="addons-block half-height">
                                        <h3 class="campWhite medium-regular">additional<span class="br-mobile"></span>add-ons</h3>
                                        <p class="campWhite">
                                            Lockers <br>
                                            Mail/Handling<br>
                                            Meeting Room
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="accordion-plan">
                    <div class="accordion-button accordion-plans-button" id="acc-2">
                        <h2 class="campWhite medium-regular">hot desk</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-plans-content" id="acc-2">

                        <div class="container-fluid accordion-content-wrapper flex-display position-center">
                            <div class="row row-eq-height sm-fix">
                                <div class="col-sm-6 accordion-left">
                                    <h2 class="campWhite large-regular">hot desk</h2>
                                    <p class="campWhite">The Hot Desk area is a shared workspace that allows Campfire Members to immerse themselves in the Campfire atmosphere. The desk is both flexible and affordable for people who need a temporary space.</p>
                                    <ul class="campWhite plan-list">
                                        <li>Full Membership</li>
                                    </ul>
                                    <a href="" class="button button-red small-regular">sign me up</a>
                                </div>
                                <div class="col-sm-6 accordion-right">
                                    <div class="hours-block half-height">
                                        <h3 class="campWhite medium-regular">hours</h3>
                                        <p class="campWhite">
                                            Monday - Friday <br> 9:00AM - 6:00PM
                                        </p>
                                    </div>
                                    <div class="addons-block half-height">
                                        <h3 class="campWhite medium-regular">additional<span class="br-mobile"></span>add-ons</h3>
                                        <p class="campWhite">
                                            Lockers <br>
                                            Mail/Handling<br>
                                            Meeting Room
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="accordion-plan">
                    <div class="accordion-button accordion-plans-button" id="acc-3">
                        <h2 class="campWhite medium-regular">fixed desk</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-plans-content" id="acc-3">

                        <div class="container-fluid accordion-content-wrapper flex-display position-center">
                            <div class="row row-eq-height sm-fix">
                                <div class="col-sm-12 accordion-left">
                                    <h2 class="campWhite large-regular">fixed desk</h2>
                                    <p class="campWhite">Want a bit more privacy but also have the perks of collaborating with your peers? Look no further. These spacious Fixed Desks will provide you with enough room to fit a desktop monitor. They are ideal spaces for Freelancers or a small startup to grow their business with the flexibility of having a personalized desk.</p>
                                    <a href="" class="button button-red small-regular">sign me up</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="accordion-plan">
                    <div class="accordion-button accordion-plans-button" id="acc-4">
                        <h2 class="campWhite medium-regular">private office</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-plans-content" id="acc-4">

                        <div class="container-fluid accordion-content-wrapper flex-display position-center">
                            <div class="row row-eq-height sm-fix">
                                <div class="col-sm-12 accordion-left">
                                    <h2 class="campWhite large-regular">Private Office</h2>
                                    <p class="campWhite">Campfire Private Campsites are spaces for medium to large companies to grow and collaborate. These offices are fully furnished and customized for your company. Ditch those cube farms and create your own open office space. With your own lockable space that you can access 24 hours a day, 7 days a week, you will have the space and privacy to run your growing business.  You’ll be amazed at how spacious these private campsites are, with enough room for up to 25 people.</p>
                                    <a href="" class="button button-red small-regular">sign me up</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="section-image parallax-second"></div>
        </section>

        <section class="section section-locations">
            <div class="red-header">
                <h1 class="campWhite medium-regular">Our Locations</h1>
            </div>

            <div class="accordion-location-wrapper">
                <div class="accordion-location">
                    <div class="accordion-button accordion-location-button active-plan" id="acc-1">
                        <h2 class="campWhite medium-regular">Hong Kong</h2>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-location-content active-plan" id="acc-1">

                        <div class="google-map-wrapper">
                            <div class="google-map" id="hk-map"></div>
                        </div>

                        <div class="location-buttons-wrapper">
                            <div class="location-buttons location-left">
                                <div class="location-button" data-target="#hk-content" data-context="HK_1">
                                    <h2 class="medium-light">Kennedy Town</h2>
                                </div>
                                <div class="location-button" data-target="#hk-content" data-context="HK_2">
                                    <h2 class="medium-light">Wong Chuk Hang</h2>
                                </div>
                                <div class="location-button" data-target="#hk-content" data-context="HK_3">
                                    <h2 class="medium-light">Quarry Bay</h2>
                                </div>
                                <div class="location-button" data-target="#hk-content" data-context="HK_4">
                                    <h2 class="medium-light">Tai Koo</h2>
                                </div>
                                <div class="location-button" data-target="#hk-content" data-context="HK_5">
                                    <h2 class="medium-light">Sham Shui Po</h2>
                                </div>
                                <div class="location-button" data-target="#hk-content" data-context="HK_6">
                                    <h2 class="medium-light">Tseung Kwan O</h2>
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid accordion-content-wrapper" id="hk-content">
                            <figure class="location-x-image" data-close="hk-content">
                                <img src="/images/section-location/location-close-x.png" alt="">
                            </figure>

                            <div class="row full-height">
                                <div class="col-sm-4 location-left-wrapper">
                                    <div class="location-buttons-placeholder location-left"></div>

                                    <div class="location-details location-left"></div>

                                    <div class="location-contact location-left">
                                        <a href="https://campfire.work/contact-us/" class="button small-bold button-red">Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-sm-8 full-height location-right-wrapper"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="accordion-location">
                    <div class="accordion-button accordion-location-button" id="acc-2">
                        <h2 class="campWhite medium-regular">Australia</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-location-content" id="acc-2">

                        <div class="google-map-wrapper">
                            <div class="google-map" id="aus-map"></div>
                        </div>

                        <div class="container-fluid accordion-content-wrapper coming-soon marker-clicked" id="aus-content">
                            <figure class="location-x-image" data-close="aus-content">
                                <img src="/images/section-location/location-close-x.png" alt="">
                            </figure>

                            <h1 class="campWhite large-regular">COMING SOON</h1>
                            <h2 class="campWhite medium-thin text-center">Be the first to know! <br> Subscribe to our newsletter!</h2>
                            <a href="" class="button small-regular button-red comingSoonLinks" scrollTo="section-loop">Sign Me Up</a>
                        </div>

                    </div>
                </div>

<!--                 <div class="accordion-location">
                    <div class="accordion-button accordion-location-button" id="acc-3">
                        <h2 class="campWhite medium-regular">Singapore</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-location-content" id="acc-3">

                        <div class="google-map-wrapper">
                            <div class="google-map" id="sg-map"></div>
                        </div>

                        <div class="container-fluid accordion-content-wrapper coming-soon marker-clicked" id="sg-content">
                            <figure class="location-x-image" data-close="sg-content">
                                <img src="/images/section-location/location-close-x.png" alt="">
                            </figure>

                            <h1 class="campWhite large-regular">COMING SOON</h1>
                            <h2 class="campWhite medium-thin text-center">Be the first to know! <br> Subscribe to our newsletter!</h2>
                            <a href="" class="button small-regular button-red comingSoonLinks" scrollTo="section-loop">Sign Me Up</a>
                        </div>

                    </div>
                </div> -->

                <div class="accordion-location">
                    <div class="accordion-button accordion-location-button" id="acc-4">
                        <h2 class="campWhite medium-regular">United Kingdom</h2>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    <div class="accordion-content accordion-location-content" id="acc-4">

                        <div class="google-map-wrapper">
                            <div class="google-map" id="uk-map"></div>
                        </div>

                        <div class="container-fluid accordion-content-wrapper coming-soon marker-clicked" id="uk-content">
                            <figure class="location-x-image" data-close="uk-content">
                                <img src="/images/section-location/location-close-x.png" alt="">
                            </figure>

                            <h1 class="campWhite large-regular">COMING SOON</h1>
                            <h2 class="campWhite medium-thin text-center">Be the first to know! <br> Subscribe to our newsletter!</h2>
                            <a href="" class="button small-regular button-red comingSoonLinks" scrollTo="section-loop">Sign Me Up</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="section section-loop">
            <figure class="loop-bg loop-bg-left">
                <img src="/images/section-loop/background-bg-left.png" alt="">
            </figure>

            <figure class="loop-bg loop-bg-right">
                <img src="/images/section-loop/background-bg-right.png" alt="">
            </figure>

            <div class="container-fluid">
                <div class="row section-row-wrapper">
                    <div class="col-xs-6 col-xs-offset-3 col-sm-8 col-sm-offset-1">
                        <div class="join-heading-wrapper waypoint" data="leftToRight">
                            <h2 class="campLightRed large-light text-left">Stay in</h2>
                            <h1 class="campLightRed massive-bold">The Loop</h1>
                            <h2 class="campLightRed large-light text-right">With Us</h2>
                        </div>
                    </div>
                </div>

                <div class="row section-row-wrapper">
                    <div class="col-lg-4 col-lg-offset-2 col-xs-offset-0 col-xs-6 flex-display position-center direction-column">
                        <h2 class="campLightRed medium-bold">Blogs</h2>
                        <a href="https://campfire.work/blog/" class="button small-regular button-red">Read More</a>
                    </div>
                    <div class="col-lg-4 col-xs-6 flex-display position-center direction-column">
                        <h2 class="campLightRed medium-bold">Events</h2>
                        <a href="https://campfire.work/events/" class="button small-regular button-red events-button">See More</a>
                    </div>
                </div>

                <div class="row section-row-wrapper">
                    <div id="mc_embed_signup">
                        <form action="//work.us15.list-manage.com/subscribe/post?u=fbc608ae8522a1bc5e86505b8&amp;id=6d4b6b7aab" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <div class="col-lg-4 col-lg-offset-2 col-sm-6 col-sm-offset-0 col-xs-6 flex-display position-center">
                                    <div class="newsletter-input-wrapper">
                                        <input type="email" value="" name="EMAIL" id="mce-EMAIL"  class="input-newsletter" placeholder="Join Our NewsLetter (Enter Email Address)" required>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-offset-0 col-sm-6 col-xs-offset-3 col-xs-6 flex-display position-center">
                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fbc608ae8522a1bc5e86505b8_6d4b6b7aab" tabindex="-1" value=""></div>
                                    <div class="clear">
                                        <input type="submit" value="Sign Me Up" name="subscribe" id="mc-embedded-subscribe" class="button button-red small-regular newsletter-button">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>

        <section class="section section-join">
            <div class="container-fluid">
                <div class="row row-eq-height sm-fix section-row-wrapper">
                    <div class="col-sm-6 flex-display position-center direction-column waypoint" data="leftToRight">
                        <h2 class="campLightRed large-light text-left nowrap">Interested in our space?</h2>
                        <h1 class="campLightRed massive-bold">Join Us</h1>
                    </div>
                    <div class="col-sm-6 flex-display flex-end">
                        <a href="https://campfire.work/contact-us/" class="button small-bold button-red">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container-fluid">
                <div class="row row-eq-height sm-fix section-row-wrapper">
                    <div class="col-sm-5 col-sm-push-7 flex-display flex-end">
                        <a href="https://www.instagram.com/campfire_hk/" target="_blank">
                            <figure class="footer-social-image">
                                <img src="/images/footer/footer-social-icons_01.png" alt="">
                            </figure>
                        </a>
                        <a href="https://www.facebook.com/campfire.coworking/" target="_blank">
                            <figure class="footer-social-image">
                                <img src="/images/footer/footer-social-icons_03.png" alt="">
                            </figure>
                        </a>
                        <a href="https://www.linkedin.com/company-beta/7804336/" target="_blank">
                            <figure class="footer-social-image">
                                <img src="/images/footer/footer-social-icons_05.png" alt="">
                            </figure>
                        </a>
                        <a href="https://twitter.com/Campfire_Spaces" target="_blank">
                            <figure class="footer-social-image">
                                <img src="/images/footer/footer-social-icons_07.png" alt="">
                            </figure>
                        </a>
                    </div>
                    <div class="col-sm-7 col-sm-pull-5 flex-display">
                        <figure class="logo-image">
                            <img src="/images/footer/footersmall-logo.png" alt="">
                        </figure>
                        <p class="medium-light campLightRed">Industry focused coworking spaces</p>
                    </div>
                </div>
                <div class="row">
                    <p class="small-light campLightRed">&copy; Campfire Inc. 2017 All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    </div>

    <script
      src="https://code.jquery.com/jquery-3.2.1.min.js"
      integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
      crossorigin="anonymous"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
    <script src="<%= assetsMap.main.js %>"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnT2AePmWqjDBFz29YAmHLnGT53yqXcCc"></script>
</body>
</html>

