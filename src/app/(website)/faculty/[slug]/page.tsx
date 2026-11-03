import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgrammeData, getAllProgrammeSlugs } from "@/data/programmes";

import { DynamicHero } from "@/components/programme-template/DynamicHero";
import { DynamicSnapshotRow } from "@/components/programme-template/DynamicSnapshotRow";
import { DynamicCareerOutcomes } from "@/components/programme-template/DynamicCareerOutcomes";
import { DynamicSpecialisations } from "@/components/programme-template/DynamicSpecialisations";
import { DynamicWhyPUGoa } from "@/components/programme-template/DynamicWhyPUGoa";
import { DynamicLabsAndLearning } from "@/components/programme-template/DynamicLabsAndLearning";
import { DynamicDeanAndFaculty } from "@/components/programme-template/DynamicDeanAndFaculty";

import RecruitersAndDestinations from "@/components/programmes/RecruitersAndDestinations";
import ProgrammePicker from "@/components/programmes/ProgrammePicker";
import PharmacyProgrammePicker from "@/components/programmes/PharmacyProgrammePicker";
import ManagementProgrammePicker from "@/components/programmes/ManagementProgrammePicker";

import AppliedAndHealthSciencesProgrammePicker from "@/components/programmes/AppliedAndHealthSciencesProgrammePicker";
import HotelManagementProgrammePicker from "@/components/programmes/HotelManagementProgrammePicker";
import NursingProgrammePicker from "@/components/programmes/NursingProgrammePicker";
import PhysiotherapyProgrammePicker from "@/components/programmes/PhysiotherapyProgrammePicker";
import PhysiotherapyAccreditation from "@/components/programmes/PhysiotherapyAccreditation";
import PhysiotherapyNetwork from "@/components/programmes/PhysiotherapyNetwork";
import NursingAccreditation from "@/components/programmes/NursingAccreditation";
import AlliedHealthAccreditation from "@/components/programmes/AlliedHealthAccreditation";
import HotelManagementAccreditation from "@/components/programmes/HotelManagementAccreditation";
import NursingDestinations from "@/components/programmes/NursingDestinations";
import StudyAbroadModels from "@/components/study-abroad/StudyAbroadModels";
import AdmissionsSnapshot from "@/components/programmes/AdmissionsSnapshot";
import { DynamicFaq } from "@/components/programme-template/DynamicFaq";
import ManagementSpecialisations from "@/components/programmes/ManagementSpecialisations";
import ManagementLearningEnvironment from "@/components/programmes/ManagementLearningEnvironment";
import { FinalCta } from "@/components/landing/FinalCta";
import HotelManagementDestinations from "@/components/programmes/HotelManagementDestinations";

import PhdResearchAreas from "@/components/programmes/PhdResearchAreas";
import PhdProgrammePicker from "@/components/programmes/PhdProgrammePicker";
import PhdEntranceNotice from "@/components/programmes/PhdEntranceNotice";
import PhdDoctoralProcess from "@/components/programmes/PhdDoctoralProcess";
import FacultyBlogs from "@/components/programmes/FacultyBlogs";
export async function generateStaticParams() {
  const slugs = getAllProgrammeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60; // Revalidate the page every 60 seconds in production

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getProgrammeData(slug);
  if (!data) return { title: { absolute: "Programme Not Found | Parul University Goa" } };



  if (slug === "doctorate-programs") {
    return {
      title: { absolute: "Doctorate (PhD) Programs | Research & Innovation | Parul University Goa" },
      description: "Discover doctoral and PhD programs at Parul University Goa, designed to foster advanced research, innovation, academic excellence, and interdisciplinary learning across diverse fields.",
      alternates: { canonical: `/faculty/doctorate-programs` },
    };
  }

  if (slug === "applied-and-health-sciences") {
    return {
      title: { absolute: "Applied and Health Sciences Programs - Parul University Goa" },
      description: "Discover Applied and Health Sciences programs at Parul University Goa. Build a future in scientific innovation and healthcare excellence.",
      alternates: { canonical: `/faculty/${slug}` },
    };
  }

  if (slug === "management") {
    return {
      title: { absolute: "Management Studies Programs | BBA, MBA & Ph.D. Program - Parul University Goa" },
      description: "Explore Management Studies at Parul University Goa with BBA, MBA and Ph.D. programs. Gain leadership skills, industry exposure and entrepreneurial expertise. Apply now!",
      alternates: { canonical: `/faculty/management` },
    };
  }

  if (slug === "hotel-management") {
    return {
      title: { absolute: "Hotel Management Programs | BHMCT & B.Sc. Courses - Parul University Goa" },
      description: "Explore Hotel Management programs at Parul University Goa, including BHMCT and B.Sc. courses. Gain hands-on hospitality training, industry exposure and career-ready skills. Apply now!",
      alternates: { canonical: `/faculty/hotel-management` },
    };
  }

  if (slug === "pharmacy") {
    return {
      title: { absolute: "Pharmacy Programs | B.Pharm, D.Pharm & M.Pharm - Parul University Goa" },
      description: "Explore pharmacy programs at Parul University Goa, including B.Pharm, D.Pharm, M.Pharm and Ph.D. Gain hands-on training, research exposure and industry-ready skills. Apply now!",
      alternates: { canonical: `/faculty/pharmacy` },
    };
  }

  if (slug === "nursing") {
    return {
      title: { absolute: "Nursing Programs | GNM, B.Sc. Nursing & Ph.D. - Parul University Goa" },
      description: "Explore nursing programs at Parul University Goa, including GNM, B.Sc. Nursing and Ph.D. Gain hands-on clinical training, expert mentorship and industry-ready skills. Apply now!",
      alternates: { canonical: `/faculty/nursing` },
    };
  }

  if (slug === "physiotherapy") {
    return {
      title: { absolute: "Physiotherapy Programs | BPT Course Admission - Parul University Goa" },
      description: "Explore the Physiotherapy program at Parul University Goa with hands-on clinical training, expert faculty and modern rehabilitation facilities. Start your healthcare career. Apply now!",
      alternates: { canonical: `/faculty/physiotherapy` },
    };
  }

  return {
    title: { absolute: `${data.title} | Parul University Goa` },
    description: `Explore our ${data.title} programme.`,
    alternates: { canonical: `/faculty/${slug}` },
  };
}

export default async function DynamicProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getProgrammeData(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white font-[family-name:var(--font-poppins)]">

      <DynamicHero data={data.hero} />

      {data.slug !== "phd" && (
        <DynamicSnapshotRow data={data.snapshotRow} />
      )}

      <DynamicCareerOutcomes
        data={data.career}
        themeColor={data.themeColor}
        topBgColor={data.slug === "phd" ? "#FFFFFF" : "#FDE047"}
        isPhdLayout={data.slug === "phd"}
      />

      {data.slug === "pharmacy" ? (
        <PharmacyProgrammePicker />
      ) : data.slug === "nursing" ? (
        <NursingProgrammePicker />
      ) : data.slug === "physiotherapy" ? (
        <PhysiotherapyProgrammePicker />
      ) : data.slug === "management" ? (
        <ManagementProgrammePicker />
      ) : data.slug === "hotel-management" ? (
        <HotelManagementProgrammePicker />
      ) : data.slug === "applied-and-health-sciences" ? (
        <AppliedAndHealthSciencesProgrammePicker />
      ) : data.slug === "phd" ? (
        <>
          <PhdProgrammePicker />
          <PhdEntranceNotice />
        </>
      ) : (
        <ProgrammePicker />
      )}



      {data.slug === "physiotherapy" && (
        <PhysiotherapyAccreditation />
      )}

      {data.slug === "applied-and-health-sciences" && (
        <AlliedHealthAccreditation slug={data.slug} />
      )}



      {data.slug === "management" ? (
        <ManagementSpecialisations />
      ) : data.slug !== "pharmacy" && data.slug !== "nursing" && data.slug !== "physiotherapy" && data.slug !== "hotel-management" && data.slug !== "phd" ? (
        <DynamicSpecialisations data={data.specialisations} />
      ) : null}

      {data.slug === "nursing" && (
        <DynamicWhyPUGoa
          data={data.why}
          themeColor={data.themeColor}
        />
      )}



      {data.slug === "nursing" && (
        <NursingAccreditation />
      )}

      {data.slug !== "phd" && (
        <RecruitersAndDestinations slug={data.slug} />
      )}





      {data.slug === "management" && (
        <ManagementLearningEnvironment />
      )}

      {data.slug === "phd" && (
        <PhdDoctoralProcess />
      )}

      {data.slug !== "management" && data.slug !== "pharmacy" && data.slug !== "nursing" && data.slug !== "hotel-management" && (
        <DynamicWhyPUGoa
          data={data.why}
          themeColor={data.themeColor}
          bottomBgColor={data.slug === "applied-and-health-sciences" ? "#EAF7FD" : undefined}
        />
      )}

      {data.labs && data.slug !== "management" && data.slug !== "phd" && (
        <DynamicLabsAndLearning data={data.labs} />
      )}

      {data.slug !== "nursing" && data.slug !== "physiotherapy" && data.slug !== "hotel-management" && data.slug !== "pharmacy" && data.slug !== "phd" && (
        <StudyAbroadModels />
      )}


      {data.slug !== "phd" && (
        <DynamicDeanAndFaculty facultySlug={data.slug} />
      )}

      {data.slug !== "phd" && (
        <AdmissionsSnapshot slug={data.slug} />
      )}

      <FacultyBlogs facultySlug={slug} />
      <DynamicFaq data={data.faqs} />

      <FinalCta
        eyebrow="Admissions Open 2026"
        title={data.slug === "nursing" ? "Ready to begin nursing?" : data.slug === "pharmacy" ? "Ready to enter pharmacy?" : data.slug === "physiotherapy" ? "Ready to start physio?" : data.slug === "hotel-management" ? "Ready to enter hospitality?" : data.slug === "phd" ? "Begin your doctoral journey." : data.slug === "applied-and-health-sciences" ? "Ready to start Applied and Health Sciences?" : "Ready to lead?"}
        description={data.slug === "phd" ? "PU Goa entrance and PhD admissions are open for the 2026-27 cycle." : "Admissions are open for the 2026-27 academic year."}
        actions={[
          { label: "Apply Now", href: "#", variant: "primary", triggerEnquiry: true },
          { label: "Talk to Counsellor", href: "#", variant: "dark", triggerEnquiry: true },
          { label: "Chat on WhatsApp", href: "https://wa.me/919558210145", variant: "dark" },
          { label: "1800 890 9090", href: "tel:18008909090", variant: "dark", icon: "phone" }
        ]}
      />
    </main>
  );
}
