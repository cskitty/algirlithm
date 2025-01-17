import Prize from "@/components/Prize";
import Sponsor from "@/components/Sponsor";
import Schedule from "@/components/Schedule";
import {
  DISCORD_LINK,
  DONATION_LINK,
  REGISTRATION_LINK,
} from "@/utils/constants";
import { SiDiscord } from "react-icons/si";
import aops from "@/sponsors/aops.png";
import wolfram from "@/sponsors/wolfram.png";
import replit from "@/sponsors/replit.png";
import cpi from "@/sponsors/cpi.png";
import breakout_mentors from "@/sponsors/breakout_mentors.png";
import elastic from "@/sponsors/elastic.png";
import jdoodle from "@/sponsors/jdoodle.png";
import stickerGiant from "@/sponsors/stickerGiant.png";
import recursiveDragon from "@/sponsors/recursive_dragon.png";
import xcamp from "@/sponsors/xcamp.png";
import desmos from "@/sponsors/desmos.png";
import interviewcake from "@/sponsors/interviewcake.png";
import xyz from "@/sponsors/xyz.png";

const Home = () => {
  return (
    <div>
      <main>
        <section
          className={
            "px-8 sm:px-20 md:px-24 pt-36 pb-28 2xl:pb-24 bg-primary-100"
          }
        >
          <div className={"w-full max-w-4xl mx-auto"}>
            <h2 className={"uppercase text-lg font-medium text-primary-900"}>
              February 15, 2025
            </h2>
            <h1
              className={
                "text-4xl sm:ext-6xl md:text-8xl font-extrabold text-primary-500"
              }
            >
              al<span className={"font-black"}>GIRL</span>ithm.
            </h1>
            <h2 className={"text-2xl md:text-4xl mt-4"}>
              A programming contest for girls and non-binary students.
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center mt-8 gap-4 md:gap-8">
              <div className="flex items-center gap-4 md:gap-8">
                <a
                  className={
                    "block w-max text-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold hover:scale-105 hover:duration-150 duration-300 px-6 py-3 rounded-lg"
                  }
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register
                </a>
                <a
                  className={
                    "block w-max text-xl bg-primary-200 hover:bg-primary-300 text-primary-900 font-semibold hover:scale-105 hover:duration-150 duration-300 px-6 py-3 rounded-lg"
                  }
                  href={DONATION_LINK}
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate
                </a>
              </div>
              <a
                className="flex items-center gap-2 bg-white/75 hover:bg-white hover:duration-150 duration-300 px-4 py-1.5 rounded-2xl"
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <SiDiscord className="w-8 h-8 text-primary-800" />
                <span className="text-primary-900">
                  Join our discord server!
                </span>
              </a>
            </div>
          </div>
        </section>
        <div className={"-translate-y-10 2xl:translate-y-0"}>
          <div className={"bg-primary-100 h-8 w-full -skew-y-3 2xl:hidden"} />
          <div
            className={
              "bg-gradient-to-r from-secondary-200 to-primary-200 h-6 w-full -skew-y-3 2xl:skew-y-0"
            }
          />
          <div
            className={
              "bg-gradient-to-r from-primary-300 to-secondary-300 h-6 w-full -skew-y-3 2xl:skew-y-0"
            }
          />
        </div>
        <section className={"px-8 sm:px-20 md:px-24"}>
          <div
            className={
              "w-full max-w-4xl mx-auto py-16 flex gap-16 items-center"
            }
          >
            <div>
              <h2 className={"text-4xl font-medium mb-4"}>
                What is{" "}
                <span className={"text-primary-600 font-bold"}>
                  alGIRLithm?
                </span>
              </h2>
              <div className="space-y-2 text-gray-700 text-lg sm:text-xl">
                <p>
                  alGIRLithm is a student-led organization working to inspire
                  the next generation of female computer scientists by making
                  competitive programming accessible to high school girls.
                </p>
                <p>
                  We’re hosting a programming competition for high school girls.
                  Girls with all levels of experience in competitive programming
                  are encouraged to join!{" "}
                </p>
                <p>
                  Participants can compete in teams of up to 3 to solve problems
                  with C++, Java, or Python.
                </p>
                <p>
                  There are two divisions that girls can compete in: Novice and
                  Advanced.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* */}
        <div
          className={
            "bg-gradient-to-r from-primary-300 to-primary-200 h-24 w-full -skew-y-3 2xl:hidden translate-y-10"
          }
        />
        <section
          className={
            "px-8 sm:px-20 md:px-24 bg-gradient-to-r from-primary-300 to-primary-200 pt-24 pb-36" //2xl:pb-24
          }
        >
          <div className={"max-w-4xl w-full mx-auto pl-8 md:pl-0"}>
            <h2 className={"text-4xl font-medium mb-4 text-white"}>Schedule</h2>
            <h4 className={"text-lg font-medium mb-4 text-white"}>
              *all times are in est
            </h4>
            <div className={"flex flex-col justify-start lg:flex-row"}>
              {/*saturaday*/}
              <div className={"flex flex-col"}>
                <h2 className={"text-3xl font-medium my-4 text-white"}>
                  Saturday 2/15
                </h2>
                <Schedule time={"3:00PM ET"} event={"Opening Ceremony"} />
                <Schedule time={"4:00PM - 6:00PM ET"} event={"Contest"} />
                <Schedule time={"8:30PM ET"} event={"Awards"} />
              </div>
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-primary-300 to-primary-200 h-24 w-full -skew-y-3 2xl:hidden -translate-y-10"
          }
        />
        {/* */}
        <div
          className={
            "bg-gradient-to-r from-primary-400 to-secondary-400 h-24 w-full -skew-y-3 2xl:hidden -translate-y-10"
          }
        />
        <section
          className={
            "-mt-20 px-8 sm:px-20 md:px-24 bg-gradient-to-r from-primary-400 to-secondary-400 pt-24 pb-36 2xl:pb-24"
          }
        >
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-white"}>Prizes</h2>
            <div className="flex flex-col gap-8 sm:flex-row mb-16">
              <Prize
                title={"All attendees"}
                body={
                  "Free InterviewCake course access, XYZ domain."
                }
                paragraphClass="text-left"
                className="sm:w-1/2"
              />
              <Prize
                title={"Raffle Prizes"}
                body={
                  "Polaroid camera, $20 Desmos store gift card"
                }
                paragraphClass="text-left"
                className="sm:w-1/2"
              />
            </div>
            <div
              className={
                "grid grid-flow-col grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 gap-8"
              }
            >
              <Prize
                title={"1st place Novice"}
                body={"$25 per person"}
              />
              <Prize
                title={"2nd place Novice"}
                body={" $15 per person"}
              />
              <Prize
                title={"3rd place Novice"}
                body={"4 AoPS coupons for $25 each"}
              />
              <Prize
                title={"1st place Advanced"}
                body={"MSI Vigor GK30 RGB Keyboard for each winning member"}
              />
              <Prize
                title={"2nd place Advanced"}
                body={"$20 per person"}
              />
              <Prize
                title={"3rd place Advanced"}
                body={"$15 per person"}
              />
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-secondary-200 to-primary-200 h-24 w-full -skew-y-3 2xl:hidden -translate-y-10"
          }
        />
        <section
          className={
            "px-8 sm:px-20 md:px-24 bg-gradient-to-r from-secondary-200 to-primary-200 py-24 -mt-20 2xl:mt-0"
          }
        >
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-center"}>
              Sponsors
            </h2>
            <p className={"text-xl text-center mb-8"}>
              Thank you to our amazing sponsors!
            </p>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-8"}>
              <Sponsor
                image={xcamp}
                title="X-Camp"
                link="https://x-camp.academy/#/"
              />
              <Sponsor
                image={interviewcake}
                title="Interview Cake"
                link="https://www.interviewcake.com/"
              />
              <Sponsor
                image={jdoodle}
                title="JDoodle"
                link="https://www.jdoodle.com"
              />
              <Sponsor
                image={desmos}
                title="Desmos"
                link="https://www.desmos.com/"
              />
              <Sponsor
                image={xyz}
                title="xyz"
                link="https://gen.xyz/"
              />
              <Sponsor
                image={elastic}
                title="Elastic"
                link="https://www.elastic.co"
              />
              <Sponsor
                image={stickerGiant}
                title="StickerGiant"
                link="https://www.stickergiant.com/event-coupons?utm_source=website&utm_medium=event"
              />
              <Sponsor
                image={aops}
                title="Art of Problem Solving"
                link="https://artofproblemsolving.com"
              />
              <Sponsor
                image={cpi}
                title="Competitive Programming Initiative"
                link="https://joincpi.org"
              />
              <div
                className={
                  "bg-white py-8 px-4 rounded-md shadow-lg flex items-center"
                }
              >
                <h3 className={"text-lg font-medium text-center"}>
                  If you're interested in sponsoring our contest, send us an
                  email at{" "}
                  <a className={"link"} href="mailto:contact@algirlithm.org">
                    contact@algirlithm.org
                  </a>
                </h3>
              </div>
              {/*<Sponsor
                image={replit}
                title="Repl.it"
                link="https://replit.com"
              />
              <Sponsor
                image={breakout_mentors}
                title="Breakout Mentors"
                link="https://breakoutmentors.com/usaco-competitive-programming-academy/"
              />*/}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
