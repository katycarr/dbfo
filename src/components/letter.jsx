import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from './navbar';
import SkipLinks from './skip-links';
import Names from './names';

import scrollArrow from '../assets/icons/scroll-top.svg';
import scrollArrowWhite from '../assets/icons/scroll-top-white.svg';

smoothscroll.polyfill();

const petLink = 'https://sign.moveon.org/petitions/sign-our-letter-to-vice-president-biden-we-have-some-plans-for-that';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      showScrollTop: false,
    };
    this.listenToScroll = this.listenToScroll.bind(this);
    this.renderScrollTop = this.renderScrollTop.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll() {
    const max = 2 * window.innerHeight;
    if (window.pageYOffset >= max && !this.state.showScrollTop) {
      this.setState({ showScrollTop: true });
    } else if (window.pageYOffset < max && this.state.showScrollTop) {
      this.setState({ showScrollTop: false });
    }
  }

  renderScrollTop() {
    const arrowCls = (color) => `letter__scroll__arrow letter__scroll__arrow--${color}`;
    return (
      <div
        className="letter__scroll"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
      >
        <img src={scrollArrow} alt="arrow pointing up" className={arrowCls('red')} />
        <img src={scrollArrowWhite} alt="arrow pointing up" className={arrowCls('white')} />
        <div className="letter__scroll__text">
          Scroll to top
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="letter">
        <Navbar currentPage='letter' />
        {this.state.showScrollTop && this.renderScrollTop()}
        <h1 className="letter__title">
          We Have Some Plans for That.
        </h1>
        <div className="letter__container">
          <h3 className="letter__sub letter__dear">Dear Vice President Biden,</h3>
          <p className="letter__para">
            Tuesday night in Philadelphia, you indicated that there is a place in your 
            campaign for supporters of progressive candidates and policies. Your
            willingness to listen has galvanized us — a group of Warren Democrats,
            volunteers, and organizers — to reach out to you. We are encouraged that you
            have long been an advocate for working people. You fought for gun violence 
            prevention against the NRA, championed the Violence Against Women Act, and 
            were an integral part of passing the Affordable Care Act. You have spent your 
            life building coalitions, and we know that you are no stranger to a righteous 
            fight. That is why we ask you to consider the following plans that we believe 
            are vital for our country going forward.
          </p>
          <h3 className="letter__sub">Skip to:</h3>
          <SkipLinks />
          <h3 id="inclusion" className="letter__sub">Inclusion</h3>
          <p className="letter__para">
            We first urge you to approach the problems that face our country using an
            intersectional equity lens. Challenges compounded by race, religion, sexual 
            orientation, gender identity, and ability are present at every level from 
            health care to housing to climate change to education. Addressing these needs 
            must be at the center, not the sidelines, of our government’s policy goals.
            We also point to Senator Warren’s — and Secretary Castro’s — practice of 
            bringing activists with direct knowledge of and experience with these needs 
            to the table. We ask that you not only follow that example and use these 
            on-the-ground experts to help shape your policies, but also that you appoint
            them to key roles in your administration. Personnel is policy.
          </p>
          <h3 id="corruption" className="letter__sub">Corruption</h3>
          <p className="letter__para">
            Senator Warren framed her campaign around dismantling the corrupt channels
            that perpetuate structural inequity and prevent any meaningful reform. Your
            plan to establish the Commission on Federal Ethics aligns with Senator
            Warren’s proposed U.S. Office of Public Integrity, which would oversee efforts
            to restore transparency to our government. We ask that you go further: support
            a ban on professional lobbying by any former president, vice president, cabinet
            secretary, federal judge, or member of Congress. We ask also that you make
            passage of a constitutional amendment to limit campaign contributions — 
            nullifying Citizens United — a top priority. We must have trust in our
            government, and that begins with ensuring our officials and elections cannot
            be bought.
          </p>
          <h3 id="immigration" className="letter__sub">Immigration</h3>
          <p className="letter__para">
            We applaud your commitment to a moratorium on deportations during your first
            100 days as president, but further action is needed to eliminate the cruelty 
            and abuse perpetrated in the name of immigration enforcement. We need 
            comprehensive reform of our immigration justice system, and we must start 
            with decriminalizing immigration. To prevent future abuses, we urge you to 
            commit to the establishment of professional, independent Article I immigration
            courts, and to provide access to counsel in all immigration courts. You have
            condemned the horrific actions of the Trump administration at the border.
            We urge you to adopt Senator Warren’s plan for a Department of Justice task
            force to investigate and prosecute all reported crimes committed against 
            detained immigrants.
          </p>
          <h3 id="debt" className="letter__sub">Student Loan Debt</h3>
          <p className="letter__para">
            The rising cost of tuition across the country means that many students are 
            crushed by student loan debt — and it’s impacting our entire economy. Black
            students are particularly affected: they are more likely to have federal student
            loans and owe more than their original debt 12 years after finishing college.
            We are supportive of public service, but strongly believe that across-the-board 
            college loan debt reduction is the best approach, especially for those with 
            increased barriers (poor and working-class students, students with family 
            obligations, and working students). We ask you to adopt Senator Warren’s 
            approach and cancel student loan debt through executive action, immediately 
            enabling 95% of student loan debt holders to pursue their dreams.
          </p>
          <h3 id="childcare" className="letter__sub">Universal Child Care</h3>
          <p className="letter__para">
            Universal child care is an investment in working parents. It provides millions
            of children with access to quality care and early learning. It also creates 
            millions of well-paying jobs for child care workers and early education teachers,
            many of whom are women of color. Research shows that every dollar spent on 
            quality early education saves seven dollars in the long run. We encourage you 
            to adopt Senator Warren’s plan, which mandates that universal child care be 
            free to any family that earns less than 200 percent of the federal poverty line.
            Crucially, the plan also establishes a partnership between the federal government 
            and local providers to offer a network of early childhood options — including 
            child care and preschool centers — to every family.
          </p>
          <h3 id="disability" className="letter__sub">Equality for Americans with Disabilities</h3>
          <p className="letter__para">
            You have a strong history advocating for Americans with disabilities through 
            your work on the ADA, the ADAAA, IDEA, and VAWA. It is critical that you 
            collaborate with disability rights leaders and advocates moving forward to form
            a comprehensive disability rights plan. We ask that you use Senator Warren’s 
            plan for Protecting the Rights and Equality of Americans With Disabilities as a 
            model. This includes our ask that you to commit to combating discrimination in 
            the labor market and workplace, ending the subminimum wage, fully funding the 
            Office of Disability Employment Policy, improving SSI and SSDI programs, breaking
            down barriers to marriage, providing national paid family and medical leave,
            improving critical elements of the long-term services, and supporting coverage
            to enable the right to live in the community. We also urge you to protect the 
            civil rights of all Americans with disabilities, including decriminalizing poverty,
            addressing language deprivation for Deaf and hard-of-hearing students, and 
            enforcing the ADA everywhere that it is applicable. We urge you to work with
            the disability rights community to incorporate key priorities relating to 
            employment, housing, opioid medications, disaster preparedness, healthcare,
            education, equity in criminal justice, deinstitutionalization, and other key
            civil rights issues into your platform.
          </p>
          <h3 id="wealthTax" className="letter__sub">Wealth Tax</h3>
          <p className="letter__para">
            These plans have a price tag. We believe in fiscal responsibility — every 
            American should pay their fair share. We believe ultra-millionaires, who 
            benefit most from our country’s infrastructure, should invest a little more in 
            our country. Therefore, we ask you to adopt Senator Warren’s two cent wealth tax,
            which requires those Americans lucky enough to have vast fortunes to pay a two 
            cent tax on every dollar of net worth above $50 million. Over 10 years, this tax
            will raise an estimated $3.75 trillion that we can reinvest in working families 
            by supporting education, childcare, family leave, and more.
          </p>
          <h3 id="climate" className="letter__sub">Climate Change, Health Care, and Beyond</h3>
          <p className="letter__para">
            Though we have highlighted plans that have received less national attention above,
            we also must stress the urgent need to address climate change and health care.
            We firmly believe that healthcare is a human right, and that climate change is
            an existential threat. Senator Warren famously has a plan for everything. Her
            commitment to elevating progressive and pragmatic plans is what drew many of 
            this letter’s authors to volunteer for her campaign. Senator Warren appreciated,
            however, that no one has a monopoly on good ideas; she reached out to former 
            opponents (Secretary Castro, Governor Inslee, and Senators Booker, Gillibrand,
            and Harris) in order to incorporate some of their policies into her platform once
            they left the race. We urge you to do the same.
          </p>
          <div className="letter__line" />
          <p className="letter__para">
            Let’s build a broad coalition and unite the party around the best plans from
            every campaign. There are far too many people living on the margins who are 
            desperate for the bold, progressive agenda that you spoke about on Tuesday. 
            As volunteers who have worked on a campaign with a powerful ground game, if 
            you are ready to listen, we are ready to be in this fight with you and push 
            forward an agenda that works for every American.
          </p>
          <p className="letter__para">Sincerely,</p>
          <h3 className="letter__sig">Dream Big Fight On</h3>
          {
            // <Link to="/petition" className="link">
            //   Click here to sign this letter and see the full list of signatories.
            // </Link>
          }
          <a
            href={petLink}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            Click here to sign this letter and see the full list of signatories.
          </a>
        </div>
        <Names />
      </div>
    );
  }
}

export default Letter;
