import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About me</h1>

    <h2>Shorter Version</h2>

    <p>
      I live in Austin, Texas with my wife and two chocolate labs. I played
      football in college, served as a CEO, and founded a company, a
      run-of-the-mill jack of all trades and master of none. Some things I like
      doing are cooking, reading, <Link to="/wine">drinking wine</Link>, playing
      chess, dancing tango, lifting weights, playing sports, and writing
      software.
    </p>

    <p>
      I'm learning to stop conceiving life as project and just live where I'm at
      today. Ambition comes natural to me, I've always dreamed about
      contributing something great to the world, but I want to prioritize being
      at peace with my self, my daily life, and the people I love. In many ways
      I think (and am hoping) the latter is a good path to former.
    </p>

    <h2>Longer version</h2>

    <h3>Boyhood</h3>

    <p>
      I was born in Massachusetts to loving parents. We moved down to Austin a
      couple years late. I was lucky to grow up in a city that was growing up
      around me. My dad took to me to SxSW when I was child and I remember my
      high school years by who played at Austin City Limits.
    </p>

    <p>
      I mostly wasn't interested in school itself, something I consider a missed
      opportunity and a pattern I'd repeat in college. I did enjoy playing
      sports (football, track, soccer) and think they taught me a lot of useful
      things about life.
    </p>

    <h3>College</h3>

    <p>
      I attended the University of Texas where I studied computer science in the
      Turing Scholars Program and{" "}
      <a href="/football">played football (walk-on, not scholarship)</a>. As
      sometimes happen to people in college, I spent most of my spare time on
      social activities or reading books completely unrelated to my field
      (mostly classic lit and money). Looking back I do wish I would've realized
      how interesting my actual studies were and invested more time in learning
      with my peers and professors.
    </p>

    <p>
      During college I interned at Intel as a software developer. The work
      mostly consisted of writing small Perl and Bash scripts. It was great to
      make some money and get real work experience along some quality people but
      the real take-away was figuring out that I was fairly allergic to the
      corporate world.
    </p>

    <h3>Career</h3>

    <p>
      When I was in school I met wily entrepreneur running an e-commerce wine
      business called Personal Wine (along with a wine bar) out of a basement in
      downtown Austin. I started working for him and helped him grow the
      business with better software and online presence. I had a knack for
      business and eventually became the CEO.
    </p>

    <p>
      At the start of 2018 I left Personal Wine to co-found a company with three
      individuals I had a lot of respect for. We succeeded in getting the
      company off the ground but after a year and half decided to put it on ice
      for a handful of reasons which I'll write about soon. It wasn't the big
      exit every entreprenuer dreams of but it was a fun and tremendously
      valuable experience.
    </p>

    <p>
      Since then I've been on a bit of sabbatical trying to figure out exactly
      what I want to do next. In the meantime I've doing some independent
      consulting around technology, data, and business.
    </p>

    <p className="hidden">
      We built a virtual assistant that helped employees take care of internal
      adminstrative tasks, like updating tax forms and enrolling in benefit
      plans. The idea was that each company has a similar set of tasks like
      this, and often times the employee experience is fragmented across many
      systems. Our assistant would provide a single interface and leverage the
      latest NLP technologies to provide a seamless experience.
    </p>

    <p className="hidden">
      There was a lot of interest in our product and we had some success selling
      it to a few enterprise customers, but realized that the realities of long
      sales cycles and complexities in rolling out a tool like this at large
      organization were incompatible with our plan to build a lean organization.
      We eventually decided to put the company of ice.
    </p>

    <p className="hidden">
      It wasn't the big exit every entreprenuer dreams of, but it was fun and
      tremendously valuable experience. I came out of the experience with a
      sharper toolkit for decision-making at an early-stage company. Since then
      I've used this experience to provide consulting to early-stage startups.
    </p>
  </Layout>
)
