import React from "react";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  alternates: {
    canonical: "/grievances/staff",
  },
};

export default function StaffGrievancesPage() {
  const committeeMembers = [
    {
      sNo: 1,
      particulars: "Dr. Aseem Yadav, Principal, Parul College of Physiotherapy.",
      designation: "Chairperson",
      contact: "kshitiz.sharma112@goa.paruluniversity.ac.in\n9743368949"
    },
    {
      sNo: 2,
      particulars: "Dr. Dhawal Nimavat, Associate Professor, Parul College of Engineering, IT & CS.",
      designation: "Member",
      contact: "hemant.toshikhane@paruluniversity.ac.in\n8469496525"
    },
    {
      sNo: 3,
      particulars: "Dr. B. G. Poornima, Assistant Professor, Parul College of Management.",
      designation: "Member",
      contact: "hemant.toshikhane@paruluniversity.ac.in\n8469496525"
    },
    {
      sNo: 4,
      particulars: "Dr. Ashok Tejwani, Assistant Professor, Parul College of Engineering, IT & CS.",
      designation: "Member",
      contact: "hemant.toshikhane@paruluniversity.ac.in\n8469496525"
    },
    {
      sNo: 5,
      particulars: "Dr. Bravish R. Gujar, Assistant Professor, Parul College of Engineering, IT & CS.",
      designation: "Member",
      contact: "hemant.toshikhane@paruluniversity.ac.in\n8469496525"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#F8F9FA] flex flex-col font-poppins pb-24 sm:pb-32 md:pb-48 lg:pb-56">
      
      {/* Hero Section */}
      <section className="w-full overflow-hidden py-16 sm:py-24">
        <Image
          src="/grievances/Grievance.png"
          alt="Staff Grievances Background"
          width={1920}
          height={1080}
          className="w-full h-auto block -mt-[18%] sm:-mt-[15%] md:-mt-[12%] lg:-mt-[16%]"
          priority
        />
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 py-16 sm:py-24">
        
        {/* Red Text Box */}
        <div className="bg-[#E74C5E] text-white text-center py-8 px-6 sm:px-12 rounded-[20px] shadow-sm">
          <p className="text-[15px] sm:text-[17px] font-medium leading-relaxed">
            In pursuance of the provisions governing employee grievance redressal mechanisms in Higher Educational Institutions, the University hereby constitutes the Grievance Redressal Committee (GRC) to consider and decide upon grievances of employees. The composition of the Committee shall be as under:
          </p>
        </div>

        {/* Black Form Bar */}
        <div className="bg-[#222222] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-3 shadow-md gap-4">
          <p className="font-semibold text-[14px] sm:text-[16px]">
            Fill in the Form below to Share Your grievance
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhYO0ZmtJ2kLjV2k__tNXKul2FZsZiIS8lD9f5Wb-HKaNifA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FCE34B] hover:bg-[#f8db27] text-black font-bold px-6 py-2 rounded-xl text-[14px] whitespace-nowrap transition-colors"
          >
            Share Your Grievance
          </a>
        </div>

        {/* Table Section */}
         {/* <div className="w-full overflow-hidden rounded-[20px] shadow-sm bg-white mt-4 border border-zinc-200">
          {/* Cyan Header 
          <div className="bg-[#0CAADD] py-6 px-4 text-center">
            <h2 className="text-white font-bold text-[32px] sm:text-[40px] tracking-tight">
              Grievance Redressal Committee
            </h2>
          </div>

          {/* Responsive Table Wrapper 
        
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#E74C5E] text-white">
                  <th className="py-4 px-6 font-bold text-[15px] border-r border-white/20 w-[80px]">S.No.</th>
                  <th className="py-4 px-6 font-bold text-[15px] border-r border-white/20">Particulars of Member(s)</th>
                  <th className="py-4 px-6 font-bold text-[15px] border-r border-white/20 w-[160px]">Designated in SGRC as</th>
                  <th className="py-4 px-6 font-bold text-[15px] w-[280px]">Contact Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-[#333333]">
                {committeeMembers.map((member, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}>
                    <td className="py-4 px-6 font-medium text-[15px] align-top">{member.sNo}.</td>
                    <td className="py-4 px-6 text-[15px] leading-relaxed pr-10 align-top">
                      {member.particulars}
                    </td>
                    <td className="py-4 px-6 text-[15px] font-medium align-top">
                      {member.designation}
                    </td>
                    <td className="py-4 px-6 text-[14px] leading-relaxed align-top">
                      {member.contact.split('\n').map((line, i) => (
                        <span key={i} className="block break-all">{line}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
*/}
      </section>

    </main>
  );
}
