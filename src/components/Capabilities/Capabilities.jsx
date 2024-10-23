import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import "./Capabilities.scss"

const Capabilities = ({ bgColour, isHome }) => {
  let primaryText = "text-white"
  let secondaryText = "text-green"
  if (bgColour == "white") {
    primaryText = "text-white"
    secondaryText = "text-green"
  }

  const classes = isHome ? "capabilities_home my-8 py-8 lg:my-16 lg:py-16" : ""

  const [isActive, setIsActive] = useState(false)

  const ref = useRef(isActive)

  return (
    <section className={`${classes}`}>
      {isHome ? (
        <>
          <Link to="/capabilities">
            <h2
              className={`${primaryText} mb-8  uppercase text-[24px] md:text-[36px] lg:text-[50px] xl:text-[70px]`}
            >
              Capabilities
            </h2>
          </Link>
          <p className={`${primaryText} font-semibold`}>
            Our interconnected supply chain solutions are tailor-made to keep
            your world in business.
          </p>
        </>
      ) : null}

      <div className="relative mt-10">
        <div
          className="hidden lg:block mr-[5rem] ml-[2rem]
        "
        >
          <StaticImage
            src={"../../images/svgs/dotted-green-circle.svg"}
            className=" w-[29rem] "
            alt="Green circle"
          />
        </div>

        <div className="flex flex-row top-0 mb-8 lg:mb-4 lg:absolute lg:top-[5.5rem] lg:max-w-[17rem] lg:left-[6.5rem] circle-glow">
          <div
            ref={ref}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className={`lg:opacity-100 ${
              isActive ? "lg:hover:opacity-100" : ""
            }`}
          >
            <Link
              className={`${primaryText} text-sm relative`}
              to="/projects"
            >
              <div className="flex relative -left-16">
                <div className="ring-container ml-[48px] md:ml-[54px] lg:ml-0">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <h3 className={`${secondaryText} text-2xl uppercase pt-2`}>
                  Projects
                </h3>
              </div>
              <p className={`${primaryText} text-sm`}>
                With expert hands we handle the complicated with precision.
              </p>

              <p className="text-lg relative inline gotham-bold read-more">
                Learn more
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex flex-row top-0 mb-8 lg:mb-4 lg:absolute lg:top-[5.5rem] lg:max-w-[16rem] lg:left-[31.2rem] circle-glow">
          <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className={`lg:opacity-100 ${
              isActive ? "lg:hover:opacity-100" : ""
            }`}
          >
            <Link
              className={`${primaryText} text-sm relative`}
              to="/logistics"
            >
              <div className="flex relative -left-16">
                <div className="ring-container ml-[48px] md:ml-[54px]  lg:ml-0">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <h3 className={`${secondaryText} text-2xl uppercase pt-2`}>
                  Logistics
                </h3>
              </div>
              <p className={`${primaryText} text-sm`}>
                We humanise a seemingly standardised experience.
              </p>
              <p className="text-lg relative inline gotham-bold read-more">
                Learn more
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex flex-row top-0 mb-8 lg:mb-4 lg:absolute lg:top-[19.5rem] lg:max-w-[16rem] lg:left-[6rem] circle-glow">
          <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className={`lg:opacity-100 ${
              isActive ? "lg:hover:opacity-100" : ""
            }`}
          >
            <Link
              className={`${primaryText} text-sm relative`}
              to="/warehousing"
            >
              <div className="flex relative -left-16">
                <div className="ring-container ml-[48px] md:ml-[54px] lg:ml-0">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <h3 className={`${secondaryText} text-2xl uppercase pt-2`}>
                  Warehousing
                </h3>
              </div>
              <p className={`${primaryText} text-sm`}>
                We envision spaces that bring supply chains to the next level.
              </p>
              <p className="text-lg relative inline gotham-bold read-more">
                Learn more
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex flex-row top-0 mb-8 lg:mb-4 lg:absolute lg:top-[19.5rem] lg:max-w-[16rem] lg:left-[31.5rem] circle-glow">
          <div
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            className={`lg:opacity-100 ${
              isActive ? "lg:hover:opacity-100" : ""
            }`}
          >
            <Link
              className={`${primaryText} text-sm relative`}
              to="/trading"
            >
              <div className="flex relative -left-16">
                <div className="ring-container ml-[48px] md:ml-[54px] lg:ml-0">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <h3 className={`${secondaryText} text-2xl uppercase pt-2`}>
                  Trading
                </h3>
              </div>
              <p className={`${primaryText} text-sm`}>
                We define and shape solutions to meet ever-changing needs.
              </p>
              <p className="text-lg relative inline gotham-bold read-more">
                Learn more
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities