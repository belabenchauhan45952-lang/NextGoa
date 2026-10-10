import Image from "next/image";
import { Eyebrow } from "./Decor";
import { TwoThousandPlusIcon } from "./TwoThousandPlusIcon";

/**
 * "Numbers that matter" - the placement ecosystem in figures. The headline
 * package card + the stat trio. Figures are plain text (cited by AI engines);
 * keep the asterisked "ecosystem" caveat honest.
 */
const stats = [
  {
    title: (
      <>
        3x ASSOCHAM
        <br />
        Award
      </>
    ),
    titleClass: "text-[36px] sm:text-[32px] lg:text-[36px]",
    label: "Best University in Placements for 3 Consecutive Years",
  },
  {
    title: "58Cr+",
    titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
    label: "Govt. Research Grant",
  },
  {
    title: "120+",
    titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
    label: "Partnerships with Foreign Universities",
  },
];

export function Placements({ variant = "landing" }: { variant?: "landing" | "about" }) {
  const isAbout = variant === "about";

  const aboutExtraStats = [
    {
      title: "254",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Startups incubated",
    },
    {
      title: "800+",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Students in global programmes",
    },
    {
      title: "315",
      titleClass: "text-[40px] sm:text-[48px] lg:text-[56px]",
      label: "Funded research projects",
    },
  ];

  return (
    <section id="placements" className={isAbout ? "bg-gradient-to-b from-[#D6F0FA] via-[#F8F8F8]/50 to-brand-white -mt-10 pt-10 relative z-0" : "bg-brand-white"}>
      <div className="mx-auto max-w-6xl px-4 pt-15 pb-20 sm:py-15">
        <div className="flex justify-center mb-6">
          <img src="/Test.svg" alt="" aria-hidden="true" className="h-[97px] w-auto" />
        </div>
        <Eyebrow className="mt-3 text-ink">
          {isAbout ? "Legacy in Numbers" : "Numbers That Matter"}
        </Eyebrow>
        <h2 className="mt-2 text-center section-heading text-brand">
          {isAbout ? "Excellence That Needs No Introduction!" : "The ecosystem in figures."}
        </h2>
        <p className="mt-3 text-center section-body text-ink">
          {isAbout ? "Figures from Parul University, Gujarat." : "Three decades of placement results, distilled."}
        </p>

        {/* ── Headline package card ──────────────────────────────────────── */}
        <div className="relative mt-8 sm:pt-5 w-full rounded-[24px] overflow-hidden shadow-lg">
          <Image
            src="/placements/pu-goa-placement-banner-home.webp"
            alt="Placement Highlights"
            width={1200}
            height={600}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* Recruiting companies line */}
        <div className="mt-8 flex items-center justify-center gap-3.5 sm:gap-8">
          {/* Left: 2200 SVG image */}
          <div className="flex-shrink-0">
            <TwoThousandPlusIcon className="h-14 sm:h-[90px] w-auto" />
          </div>

          {/* Middle: Vertical divider */}
          <div className="h-14 sm:h-[90px] w-px bg-zinc-300" />

          {/* Right: Text block */}
          <div className="text-left">
            <h3 className="font-poppins font-semibold text-[18px] sm:text-[40px] leading-tight text-[#1F1F1F]">
              Recruiting companies*
            </h3>
            <p className="mt-0.5 sm:mt-2 font-[family-name:var(--font-poppins)] font-normal text-[11px] sm:text-[18px] text-zinc-500">
              Across the Parul University ecosystem, every year.
            </p>
          </div>
        </div>

        {/* Stat trio - Row 1 */}
        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`${idx === 0 ? "col-span-2 sm:col-span-1" : ""} flex flex-col items-center justify-center rounded-[16px] sm:rounded-[20px] border border-zinc-300 bg-white text-center shadow-sm ${idx === 0 ? "px-7 py-6" : "px-4 py-5 sm:px-7 sm:py-6"}`}
            >
              <dt className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${("titleClass" in s && s.titleClass) || "text-[22px] sm:text-[28px] lg:text-[30px]"}`}>
                {s.title}
              </dt>
              <dd className={`mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-ink leading-[1.45] text-[14px] sm:text-[15px]`}>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Stat trio - Row 2 (About page only) */}
        {isAbout && (
          <dl className="mt-5 grid grid-cols-2 sm:flex sm:flex-row justify-center gap-3 sm:gap-5">
            {aboutExtraStats.map((s, idx) => (
              <div
                key={idx}
                className={`${idx === 2 ? "col-span-2 sm:col-span-1" : ""} flex flex-col items-center justify-center w-full sm:w-[30%] sm:max-w-[280px] rounded-[20px] border border-zinc-300 bg-white px-4 py-5 sm:px-7 sm:py-6 text-center shadow-sm mx-auto sm:mx-0`}
              >
                <dt className={`font-sans font-bold leading-[1.15] text-[#0CAADD] tracking-tight ${s.titleClass}`}>
                  {s.title}
                </dt>
                <dd className={`mt-2 sm:mt-3 font-[family-name:var(--font-poppins)] font-normal text-[14px] sm:text-[15px] text-ink leading-[1.45]`}>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
