# CitySpace - Live in your safe space.

For queer individuals, finding safety is vital to well-being in a world where equity standards are inconsistent. CitySpace lists LGBTQ+ friendly cities based on user reviews and the HRC index.

## Problem Space / Inspiration

As unfortunate as it may be, living standards and societal treatment of LGBTQ+ people is, on balance, inequitable. Society has a long way to go, but some places are certainly better than others.

**We want to help not only individual members of the queer community to live in LGBTQ+ friendly spaces but also provide a guideline for the government to use for building policy for inclusive cities.**

## Technology

- We used React for building the website itself, and used Firebase Cloud Firestore in order to store, access, and add to the reviews.
- Python allowed us to 1) scan 2) extract and 3) store necessary information from the Human Rights Campaign’s Municipal Equality Index Database. Can process as many of the HRC MEI files as we want, so the product can easily be expanded.

## Obstacles/Major Goals
- The HRC provided data was through individual pdfs that were highly stylized - made conversion to text a bit difficult initially because of various pdf kinks under the hood.
- This was our first time using Firebase, so we needed to learn while implementing the DB at the same time.

## User Experience/Accessibility
- Everyone’s experience with each city is bound to be different, so we added a robust review system.
- We made sure to add alt values to every image so that our website will be accessible to everyone.
- The website's font and color are soft on the eyes and easily readable.

