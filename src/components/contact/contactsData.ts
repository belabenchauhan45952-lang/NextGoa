export type Contact = {
  city: string;
  contactPerson: string;
  address: string;
  number: string;
  email: string;
};

export type ZoneData = {
  [stateName: string]: Contact[];
};

export type ContactsData = {
  [zoneName: string]: ZoneData;
};

export const contactsData: ContactsData = 
{
  "West Zone": {
    "GOA": [
      {
        "city": "Goa",
        "contactPerson": "Rohan Nanodkar",
        "address": "Shop No. CF-45, Alfran Plaza, opp. Don Bosco high school, Panjim - 403001, Goa",
        "number": "+91 6353211070",
        "email": "rohan.nanodkar19784@paruluniversity.ac.in"
      }
    ],
    "GUJARAT": [
      {
        "city": "Ahmedabad",
        "contactPerson": "Amar Vyas",
        "address": "102, First Floor, D&C Dynasty Building, Stadium Five Road, C.G. Road, Navrangpura, Ahmedabad \u2013 380009.",
        "number": "+91 9327919059",
        "email": "amar.vyas165000@paruluniversity.ac.in"
      },
      {
        "city": "Ahmedabad",
        "contactPerson": "Himani Shah",
        "address": "102, First Floor, D&C Dynasty Building, Stadium Five Road, C.G. Road, Navrangpura, Ahmedabad \u2013 380009.",
        "number": "+91 6352426327",
        "email": "himani.shah24100@paruluniversity.ac.in"
      },
      {
        "city": "Ahmedabad",
        "contactPerson": "Sandeep Singh",
        "address": "102, First Floor, D&C Dynasty Building, Stadium Five Road, C.G. Road, Navrangpura, Ahmedabad \u2013 380009.",
        "number": "+91 9879105563",
        "email": "sandeep.singh43949@paruluniversity.ac.in"
      },
      {
        "city": "Amreli",
        "contactPerson": "Yuvrajsinh Parmar",
        "address": "City Point Complex, First Floor \u2013 104, Opposite ST Bus Stand, Amreli \u2013 365601, Gujarat.",
        "number": "+91 9510971501",
        "email": "yuvrajsinh.parmar28402@paruluniversity.ac.in"
      },
      {
        "city": "Anand",
        "contactPerson": "Henry D'Souza",
        "address": "Sf-204- Aswa Jewellers K Roz Complex, Vv Nagar Road, Anand-388120, Gujarat",
        "number": "+91 9327919045",
        "email": "henry.dsouza121142@paruluniversity.ac.in"
      },
      {
        "city": "Anand",
        "contactPerson": "Pratik Desai",
        "address": "Sf-204- Aswa Jewellers K Roz Complex, Vv Nagar Road, Anand-388120, Gujarat",
        "number": "+91 7863810544",
        "email": "pratikkumar.desai33942@paruluniversity.ac.in"
      },
      {
        "city": "Anand",
        "contactPerson": "Devansh Soni",
        "address": "Sf-204- Aswa Jewellers K Roz Complex, Vv Nagar Road, Anand-388120, Gujarat",
        "number": "+91 9213019983",
        "email": "devansh.soni44041@paruluniversity.ac.in"
      },
      {
        "city": "Bharuch",
        "contactPerson": "Mayurkumar Naginbhai Makwana",
        "address": "FF-1, Shreeji Darshan Complex, Nr. Chamunda Mata Temple, Zadeshwar Road, Bharuch \u2013 392011, Gujarat.",
        "number": "+91 9510971617",
        "email": "mayurkumar.makwana18740@paruluniversity.ac.in"
      },
      {
        "city": "Bhavnagar",
        "contactPerson": "Jaspalsinh Sarvaiya",
        "address": "202, Second Floor, Krushna Darshan, Above Rangoli Showroom, Ghogha Circle Chowk, Waghawadi Road, Bhavnagar \u2013 364001, Gujarat.",
        "number": "+91 9099008861",
        "email": "jashpalsinh.sarvaiya6028@paruluniversity.ac.in"
      },
      {
        "city": "Botad",
        "contactPerson": "Divyesh Dodiya",
        "address": "Shop No. 58, 1st Floor, Parshvanath Complex, Paliyad Road, Botad Bus Stand, Botad - 364710, Gujarat",
        "number": "+91 9213019348",
        "email": "divyesh.dodiya45761@paruluniversity.ac.in"
      },
      {
        "city": "Bhuj",
        "contactPerson": "Krupali Thacker",
        "address": "Shop No. 25, 7 Arrows, Nirmalsinh Vadi, Bhuj-Kutch \u2013 370001, Gujarat.",
        "number": "+91 9099997067",
        "email": "krupali.thacker25680@paruluniversity.ac.in"
      },
      {
        "city": "Dahod",
        "contactPerson": "Viraj Baria",
        "address": "The Landmark Building, First Floor, Shop No. 40, Near Croma Store, Godhra Road, Dahod \u2013 389151, Gujarat.",
        "number": "+919870096293",
        "email": "viraj.baria26867@paruluniversity.ac.in"
      },
      {
        "city": "Gandhinagar",
        "contactPerson": "Vaibhav Porwal",
        "address": "232, The Edumall Suyash Soltaire Near Podar School Kudasan, Gandhinagar-382421, Gujarat",
        "number": "+91 9213020032",
        "email": "vaibhav.porwal45528@paruluniversity.ac.in"
      },
      {
        "city": "Godhra",
        "contactPerson": "Aakash Jaykishan Alwani",
        "address": "Shop No. 7, First Floor, Shankar Complex, Opp. Bus Stand, Godhra \u2013 389001, Gujarat.",
        "number": "+91 9510971512",
        "email": "akash.alwani6048@paruluniversity.ac.in"
      },
      {
        "city": "Himmatnagar",
        "contactPerson": "Ketul Patel",
        "address": "205, Block-A, One World, Behind Reliance Smart, Polytech Cross Road, Motipura, Himatnagar \u2013 383001, Gujarat.",
        "number": "+91 9510971463",
        "email": "ketul.patel@paruluniversity.ac.in"
      },
      {
        "city": "Jamnagar",
        "contactPerson": "Harshdeepsinh Sodha",
        "address": "G-51, Neo Square, P.N. Marg, Near Ambar Cinema, Jamnagar \u2013 361006, Gujarat.",
        "number": "+91 9316732685",
        "email": "harshadsinh.sodha270145@paruluniversity.ac.in"
      },
      {
        "city": "Junagadh",
        "contactPerson": "Smit Pradeepbhai Mori",
        "address": "201, The Earning Point, Above K.D. Bhindi Jewellers, Near Swaminarayan Temple, Zanzarda Road, Junagadh \u2013 362001, Gujarat.",
        "number": "+91 9099023370",
        "email": "smit.mori27167@paruluniversity.ac.in"
      },
      {
        "city": "Jamkhambhaliya",
        "contactPerson": "Mrugank Chhaya",
        "address": "First Floor, Under Mishti Classes, Upon Chola Insurance, Sharda Cinema Road, Khambhalia-361305, Devbhumi Dwarka, Gujarat",
        "number": "+91 9213019994",
        "email": "mrugank.chhaya44617@paruluniversity.ac.in"
      },
      {
        "city": "Lunawada",
        "contactPerson": "Krunal Patel",
        "address": "I - 01, 02 Nandan Arcade, Opposite Mahindra Showroom, Lunawada, Mahisagar District-389230, Gujarat",
        "number": "+91 9213020037",
        "email": "krunalkumar.patel45600@paruluniversity.ac.in"
      },
      {
        "city": "Mehsana",
        "contactPerson": "Abhishek Shashtri",
        "address": "J - 323, Hub Town, Third Floor, Above Cafe Amul Beside New Bus Stand Main Gate, Modhera Cross Road, Mehsana-384002, Gujarat",
        "number": "+91 9099023144",
        "email": "abhishek.shashtri45615@paruluniversity.ac.in"
      },
      {
        "city": "Navsari",
        "contactPerson": "Tushar Patel",
        "address": "Office Number 304, 3rd Floor, Shree Madhav The Business Hub, Opp Navsari District Court, Navsari-396445, Gujarat",
        "number": "+91 9510971484",
        "email": "tushar.patel46237@paruluniversity.ac.in"
      },
      {
        "city": "Palanpur",
        "contactPerson": "Nikesh Patel",
        "address": "35, Shiv Plaza, Kishan Oil Mill Road, In Front of Captain Industries, Ahmedabad Highway, Palanpur \u2013 385001, Gujarat.",
        "number": "+91 9510971462",
        "email": "nikeshkumar.patel82142@paruluniversity.ac.in"
      },
      {
        "city": "Patan",
        "contactPerson": "Nisha Gajjar",
        "address": "Office Address 6 Ground Floor The Grand Raveta Chanasma Highway , PATAN-384265",
        "number": "+91 9213019982",
        "email": "nishaben.gajjar43994@paruluniversity.ac.in"
      },
      {
        "city": "Porbandar",
        "contactPerson": "Sameer Vegad",
        "address": "S-5, 2nd Floor, Shiv Kuber Complex, Nr. Old Fountain Circle, Porbandar \u2013 360575, Gujarat.",
        "number": "+91 9316732682",
        "email": "sameer.vegad12756@paruluniversity.ac.in"
      },
      {
        "city": "Rajkot",
        "contactPerson": "Bhavin Chauhan",
        "address": "3rd Floor, Prism Complex, Nr. Modi School, Gandhigram Circle, 150 Feet Ring Road, Rajkot \u2013 360005, Gujarat.",
        "number": "+91 9099008877",
        "email": "bhavin.chauhan7073@paruluniversity.ac.in"
      },
      {
        "city": "Rajkot",
        "contactPerson": "Kushal Vala",
        "address": "3rd Floor, Prism Complex, Nr. Modi School, Gandhigram Circle, 150 Feet Ring Road, Rajkot \u2013 360005, Gujarat.",
        "number": "+91 6353211065",
        "email": "kushal.vala27113@paruluniversity.ac.in"
      },
      {
        "city": "Rajpipala",
        "contactPerson": "Shubhamkumar Shimpi",
        "address": "4, Avdhoot Avenue, nr Kalaghoda circle, Rajpipla, 393145",
        "number": "+91 9213020010",
        "email": "shubhamkumar.shimpi44681@paruluniversity.ac.in"
      },
      {
        "city": "Surat",
        "contactPerson": "Chirag Kayasth",
        "address": "107, 108, Shlok Business Center, Next to Apple Hospital, Udhna Darwaja, Surat \u2013 395009, Gujarat.",
        "number": "+91 9099997068",
        "email": "chirag.kayasth42095@paruluniversity.ac.in"
      },
      {
        "city": "Surat",
        "contactPerson": "Mohan Manuchari",
        "address": "107, 108, Shlok Business Center, Next to Apple Hospital, Udhna Darwaja, Surat \u2013 395009, Gujarat.",
        "number": "+91 9099997066",
        "email": "mohan.manuchari16211@paruluniversity.ac.in"
      },
      {
        "city": "Surat",
        "contactPerson": "Rajvi Noticewala",
        "address": "107, 108, Shlok Business Center, Next to Apple Hospital, Udhna Darwaja, Surat \u2013 395009, Gujarat.",
        "number": "+91 9213020024",
        "email": "rajvi.noticewala44508@paruluniversity.ac.in"
      },
      {
        "city": "Surendranagar",
        "contactPerson": "Pratik Sadhwani",
        "address": "124, Planet Square-3, Nr. Brahmakumaris Circle, 80 Feet Road, Surendranagar \u2013 363001, Gujarat.",
        "number": "+91 9327919050",
        "email": "pratik.sadhwani39618@paruluniversity.ac.in"
      },
      {
        "city": "Vapi",
        "contactPerson": "Dr. Digant Patel",
        "address": "110, Centre Point, Mahavir Nagar, Near IDBI Bank, GIDC Char Rasta, NH-8, Vapi \u2013 396195, Gujarat.",
        "number": "+91 9099008875",
        "email": "digant.patel@paruluniversity.ac.in"
      },
      {
        "city": "Valsad",
        "contactPerson": "Hitesh Pant",
        "address": "Office No 8, City Point Ground Floor Beside Croma Abrama Dharampur Road, Valsad-396002, Gujarat",
        "number": "+91 9510971600",
        "email": "hitesh.pant121125@paruluniversity.ac.in"
      },
      {
        "city": "Valsad",
        "contactPerson": "Sanket Patel",
        "address": "Office Number 304, 3rd Floor, Shree Madhav The Business Hub, Opp Navsari District Court, Navsari-396445, Gujarat",
        "number": "+91 9213019341",
        "email": "sanketkumar.patel43846@paruluniversity.ac.in"
      }
    ],
    "MAHARASHTRA": [
      {
        "city": "Amravati",
        "contactPerson": "Suhas Dhale",
        "address": "Shop No. 20, 1st Floor, Juzar Mega Mart, Jawahar Road, Jaistambh Chowk, Amravati \u2013 444601, Maharashtra.",
        "number": "+91 9213019981",
        "email": "suhas.dhale43596@paruluniversity.ac.in"
      },
      {
        "city": "Chhatrapati Sambhajinagar",
        "contactPerson": "Sachin Shinde",
        "address": "Shop No. A-4, Building Name: Prahlad Sankul, Near Prozone Mall, Osmanpura, Chhatrapati Sambhajinagar \u2013 431001, Maharashtra.",
        "number": "+91 9510971620",
        "email": "sachin.shinde17779@paruluniversity.ac.in"
      },
      {
        "city": "Jalgaon",
        "contactPerson": "Tejpalsing Mahendra Patil",
        "address": "51, Ground Floor, Unity Chamber, Besides LIC Office, Ganesh Colony, Jalgaon \u2013 425001, Maharashtra.",
        "number": "+91 9875163907",
        "email": "tejpalsing.patil23260@paruluniversity.ac.in"
      },
      {
        "city": "Kolhapur",
        "contactPerson": "Suraj Koushik",
        "address": "Office No. 304, C.S. No. 455 B/1, Matoshree Plaza, Station Road, Shahupuri, Kolhapur \u2013 416001, Maharashtra.",
        "number": "+91 9274412923",
        "email": "suraj.koushik38877@paruluniversity.ac.in"
      },
      {
        "city": "Mumbai",
        "contactPerson": "Mitanshu Kadakia",
        "address": "303, Modi House, 3rd Floor, Bajaj Cross Road, Next to Police Station, Kandivali (West), Mumbai \u2013 400067, Maharashtra.",
        "number": "+91 9510971478",
        "email": "mitanshu.kadakia@paruluniversity.ac.in"
      },
      {
        "city": "Mumbai",
        "contactPerson": "Sohail Dahanuwala",
        "address": "303, Modi House, 3rd Floor,bajaj Cross Road, Next To Mk Ghare Jewelers, Near Kandivali Railway Station, Kandivali(West) Mumbai - 400067, Maharastra",
        "number": "+91 9213019990",
        "email": "sohail.dahanuwala43595@paruluniversity.ac.in"
      },
      {
        "city": "Mumbai",
        "contactPerson": "Nomisha Khan",
        "address": "303, Modi House, 3rd Floor, Bajaj Cross Road, Next to Police Station, Kandivali (West), Mumbai \u2013 400067, Maharashtra.",
        "number": "+91 9510971480",
        "email": "nomisha.khan19133@paruluniversity.ac.in"
      },
      {
        "city": "Nagpur",
        "contactPerson": "Aarddeyya Ramteke",
        "address": "Plot No. 11, Hanuman Nagar, Near Medical Square, Medical Science College Road, Nagpur \u2013 440009, Maharashtra.",
        "number": "+91 9328920065",
        "email": "aarddeyya.ramteke38691@paruluniversity.ac.in"
      },
      {
        "city": "Nashik",
        "contactPerson": "Pratiksha Bhalekar",
        "address": "Shop No. 10, Pratik Arcade, Near Bytco Point, Nashik Road, Nashik \u2013 422101, Maharashtra.",
        "number": "+91 9316732686",
        "email": "pratiksha.bhalekar22159@paruluniversity.ac.in"
      },
      {
        "city": "Nashik",
        "contactPerson": "Diksha Gaware",
        "address": "Shop No. 10, Pratik Arcade, Near Bytco Point, Nashik Road, Nashik \u2013 422101, Maharashtra.",
        "number": "+91 6353211320",
        "email": "diksha.gaware22708@paruluniversity.ac.in"
      },
      {
        "city": "Palghar",
        "contactPerson": "Jayesh Dubla",
        "address": "Office No. 25, Neel Shrushti CHS, Ground Floor, Opp. Tembhode Road, Palghar West \u2013 401404, Maharashtra.",
        "number": "+91 9510971597",
        "email": "jayesh.dubla32146@paruluniversity.ac.in"
      },
      {
        "city": "Pune",
        "contactPerson": "Sagar Palve",
        "address": "Office Number 1, Yash Complex, 1st Floor, Shivganga Nagar, Opp. Hyundai Service, Warje, Pune \u2013 411058, Maharashtra.",
        "number": "+91 9510971594",
        "email": "sagar.palwe17801@paruluniversity.ac.in"
      },
      {
        "city": "Sangli",
        "contactPerson": "Pavan Manurkar",
        "address": "Office No. 202, Lakshmi Chambers, Opposite Zillha Parishad, Sangli Miraj Road, Sangli-416416, Maharashtra",
        "number": "+91 9274398117",
        "email": "pavan.manurkar38928@paruluniversity.ac.in"
      },
      {
        "city": "Sindhudurg",
        "contactPerson": "Prathmesh Ghatkar",
        "address": "Office No. S-33, First Floor, Rameshwar Plaza, Near Moti Talav, Sawantwadi- 416510, Sindhudurg, Maharashtra",
        "number": "+91 9274388498",
        "email": "prathamesh.ghatkar39870@paruluniversity.ac.in"
      },
      {
        "city": "Solapur",
        "contactPerson": "Dhananjay Ghorpade",
        "address": "102, Darshan Heights, Near Balaji Mandir, South Kasba, Chaupada, Solapur \u2013 413001, Maharashtra.",
        "number": "+91 9510971507",
        "email": "dhananjay.ghorpade32622@paruluniversity.ac.in"
      },
      {
        "city": "Thane",
        "contactPerson": "Santosh Jagtap",
        "address": "201, A Wing, Pramila Heights, 2nd Floor, Raghoba Shankar Road, Chendani, Thane West \u2013 400601, Maharashtra.",
        "number": "+91 6354905643",
        "email": "santosh.jagtap43132@paruluniversity.ac.in"
      },
      {
        "city": "Nandurbar",
        "contactPerson": "Tejas Patil",
        "address": "209\u2013210/1, Plot No. 10, Dongargaon Road, Ahinsa Chowk, Near Canara Bank, Shahada, Nandurbar \u2013 425409, Maharashtra.",
        "number": "+91 9213008464",
        "email": "tejas.patil43199@paruluniversity.ac.in"
      },
      {
        "city": "Satara",
        "contactPerson": "Jagadish Kamble",
        "address": "Office No. 103, Yashodham Complex, Opp. YC Science College, Satara \u2013 415001, Maharashtra.",
        "number": "+91 9213008461",
        "email": "jagadish.kamble43131@paruluniversity.ac.in"
      },
      {
        "city": "Ratnagiri",
        "contactPerson": "Saalim Kazi",
        "address": "Shop No. 201, 2nd Floor, Arihant Space Centre, Near Lotlikar Hospital, Maruti Mandir, Ratnagiri \u2013 415612, Maharashtra.",
        "number": "+91 9213008460",
        "email": "saalim.kazi43049@paruluniversity.ac.in"
      }
    ],
    "RAJASTHAN": [
      {
        "city": "Ajmer",
        "contactPerson": "Mayank Sharma",
        "address": "3rd Floor, Plot No. 11 & 17, Ashok Vihar, Vaishali Nagar Main Road, Ajmer \u2013 305001, Rajasthan.",
        "number": "+91 9227989551",
        "email": "mayank.sharma40202@paruluniversity.ac.in"
      },
      {
        "city": "Bikaner",
        "contactPerson": "Khushi Golchha",
        "address": "1st Floor, 4-D-12, Modi Square, JNV Colony, Bikaner \u2013 334003, Rajasthan.",
        "number": "+91 9227989550",
        "email": "khushi.golchha40113@paruluniversity.ac.in"
      },
      {
        "city": "Jaipur",
        "contactPerson": "Saransh Joshi",
        "address": "134, Sultan Nagar, Gopalpura Bypass, Near Gurjar Ki Thandi Underpass, Jaipur \u2013 302019, Rajasthan.",
        "number": "+91 9327919060",
        "email": "saransh.joshi28622@paruluniversity.ac.in"
      },
      {
        "city": "Jodhpur",
        "contactPerson": "Abhishek Choudhary",
        "address": "Plot No. 12, In Front of Hanwant School, Main Pal Road, Jodhpur \u2013 342001, Rajasthan.",
        "number": "+91 9316732689",
        "email": "abhishek.choudhary21234@paruluniversity.ac.in"
      },
      {
        "city": "Kota",
        "contactPerson": "Mukesh Sharma",
        "address": "2K 25, Vigyan Nagar, Main Jhalawar Road, Kota \u2013 324007, Rajasthan.",
        "number": "+91 9510971464",
        "email": "mukesh.sharma@paruluniversity.ac.in"
      },
      {
        "city": "Udaipur",
        "contactPerson": "Sandeep Lodha",
        "address": "Office No. 110, Archie The Divine Complex, Near Geetanjali Hospital, Sector 4, Udaipur \u2013 313001, Rajasthan.",
        "number": "+91 9510971580",
        "email": "sandeep.lodha22032@paruluniversity.ac.in"
      }
    ]
  },
  "South Zone": {
    "ANDHRA PRADESH": [
      {
        "city": "Anantapur",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Flat No. 1, Grand Kakathiya Apartments (Landmark), Grand Kakathiya Apartments Road, Ram Nagar, Anantapur \u2013 515001, Anantapur Dt., Andhra Pradesh.",
        "number": "+91 9558840393",
        "email": ""
      },
      {
        "city": "Chittoor",
        "contactPerson": "Parul University",
        "address": "Parul University Admissions Office, Chittoor, D/No. 47, Ground Floor, New Balaji Colony, Air Bypass Road, Landmark: Gowtham Children School Back Lane, M.R. Palli Circle, Tirupati, Chittoor (Dt), Andhra Pradesh \u2013 517501.",
        "number": "+91 9346033937",
        "email": ""
      },
      {
        "city": "Cuddapah",
        "contactPerson": "Parul University",
        "address": "Parul University Office, D. No. 42/347/42, Simhapuri Colony, Opposite Sri Mohan Hospital, Beside KFC Restaurant, Near New Bus Stand, Cuddapah \u2013 516001, YSR Cuddapah Dt., Andhra Pradesh.",
        "number": "+91 9951071440",
        "email": ""
      },
      {
        "city": "East-Godavari",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Flat No. 203, D.B.V. Raju Complex, Opp. Shiva Lingam, Pushkar Ghat, Rajahmundry \u2013 533101, East Godavari, Andhra Pradesh.",
        "number": "+91 9010101814",
        "email": ""
      },
      {
        "city": "Guntur",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Flat No. 302, Sama Happy Homes, Near Vikas Inn Restaurant, Jayanthi Nagar 2nd Line, J.K.C. Road, Guntur \u2013 522006, Guntur Dt., Andhra Pradesh.",
        "number": "+91 9848305326",
        "email": ""
      },
      {
        "city": "Kurnool",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, H. No. 46/1-M.V.S/401, New Ayyappa Swamy Temple Street, Landmark: Beside Agraseni Hospital & B.K. Singh Towers, Sapthagiri Nagar, Kurnool \u2013 518002, Kurnool (Dt), Andhra Pradesh.",
        "number": "+91 93810 49149",
        "email": ""
      },
      {
        "city": "Nellore",
        "contactPerson": "Parul University",
        "address": "Parul University Office, D. No. 16/1983, Near Pule Statue, Mutkur Gate Road, Nellore \u2013 524001, S.P.S.R. Nellore Dt., Andhra Pradesh.",
        "number": "+91 9391118789",
        "email": ""
      },
      {
        "city": "Ongole",
        "contactPerson": "Mr. Chundi Balaji-Parul University",
        "address": "Zonal Office: Parul University Office, 1-2-5 (1A), Opp. Vysya Hostel, Near Nagendra Swamy Temple, Hill Colony, Sitarama Puram, Ongole \u2013 523001, Andhra Pradesh.",
        "number": "+91 9849124813",
        "email": "zonaloffice.southindia@paruluniversity.ac.in"
      },
      {
        "city": "Prakasam",
        "contactPerson": "Parul University",
        "address": "Parul University Office, D. No. 1-2-5 (1A), Opp. Vysya Hostel, Near Nagendra Swamy Temple, Hill Colony, Sitarama Puram, Ongole \u2013 523001, Prakasam Dt., Andhra Pradesh.",
        "number": "+91 9985080088",
        "email": ""
      },
      {
        "city": "Srikakulam",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Plot No. 30, Dora Residency, Indiranagar Colony, Opp. Douglas School Main Gate Road, Srikakulam \u2013 532001, Andhra Pradesh.",
        "number": "+91 91541 22560",
        "email": ""
      },
      {
        "city": "Vijayawada",
        "contactPerson": "Mrs. Padmavathi Dharmanji-Parul University",
        "address": "D. No. 40-20-15/2, 1st Floor, D.V. Manor Opp. Road, Opp. A Convention, Tikkle Road, Labbipet, Vijayawada \u2013 520010, Krishna (District), Andhra Pradesh.",
        "number": "+91 77027 54944 / +91 98499 53713",
        "email": "rcc.andhrapradesh@paruluniversity.ac.in"
      },
      {
        "city": "Visakhapatnam",
        "contactPerson": "Parul University",
        "address": "Parul University Office, D. No. 1-84-13/2, F. No. 101, S.S. Woods, M.V.P. Colony, Sector-4, Visakhapatnam \u2013 530017, Andhra Pradesh.",
        "number": "+91 9154122561",
        "email": ""
      },
      {
        "city": "West Godavari",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, H. No. 25-12-21, John Street, Landmark: Near Siri Super Speciality Hospital, Narasimha Rao Peta, Eluru \u2013 534006, West Godavari (Dist.), Andhra Pradesh.",
        "number": "96764 68022",
        "email": ""
      }
    ],
    "KARNATAKA": [
      {
        "city": "Bagalkot",
        "contactPerson": "Parul University",
        "address": "",
        "number": "+91 63618 96287",
        "email": ""
      },
      {
        "city": "Belagavi",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, CTS No. 838, D02, 3rd Floor, Shiva Durga Apartment, 2nd Cross, Bhagya Nagar, Belagavi, Belagavi (Dt), Karnataka \u2013 590006.",
        "number": "+91 9353747616",
        "email": ""
      },
      {
        "city": "Bengaluru",
        "contactPerson": "Mr. Vasu Dev Chundi-Parul University",
        "address": "Parul University RCC \u2013 Karnataka State, H. No. 49, First Floor, 3rd Cross, Landmark Dry Fruit House, Horamavu, Bengaluru \u2013 560043, Karnataka.",
        "number": "+91 86390-67510",
        "email": "rcc.karnataka@paruluniversity.ac.in"
      },
      {
        "city": "Bidar",
        "contactPerson": "Parul University",
        "address": "Flat No. 219, 2nd Floor, Sapana Apartment, Nawander City, Near Gumpa Ring Road, Bidar \u2013 585403, Karnataka.",
        "number": "+91 99642 98145",
        "email": ""
      },
      {
        "city": "Davangere",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, D. No. 1659/3, First Floor, First Main, First Cross, Nuthan College Road, Landmark: Upstairs Star Mart, Vidya Nagara, Davangere, Davangere (Dt), Karnataka \u2013 577005.",
        "number": "+91 81438 75067",
        "email": ""
      },
      {
        "city": "Gulbarga",
        "contactPerson": "Parul University",
        "address": "House No. 83, Sri Hingulambe Nivas, 1st Floor, Behind Kalaburagi Garage, Near Ram Mandir, Kalaburagi \u2013 585101, Karnataka.",
        "number": "+91 8639569109",
        "email": ""
      },
      {
        "city": "Hosapete",
        "contactPerson": "Parul University",
        "address": "D.No. 158, Ground Floor,Lakshmi Pathi Shetty Nilaya, Patel Nagar, 3rd Cross, Opposite Gopinath School and PU College, Hosapete, Ballari District, \u2013 583201, Karnataka.",
        "number": "+91 70226 68666",
        "email": ""
      },
      {
        "city": "Hubli",
        "contactPerson": "Parul University",
        "address": "Parul Admission Office, 225, Brundavan, Ground Floor, Behind Base PU College, 2nd Phase Akshay Colony, Vidyanagar, Hubli \u2013 580030, Karnataka.",
        "number": "+91 7090845529",
        "email": ""
      },
      {
        "city": "Karwar",
        "contactPerson": "Parul University",
        "address": "",
        "number": "+91 84315 51452",
        "email": ""
      },
      {
        "city": "Mangalore",
        "contactPerson": "Parul University",
        "address": "Door No. 2-161/5, Mary Hill, Opp. Water Tank, Konchady, Mangalore City Corporation, Mangalore \u2013 575008, Karnataka.",
        "number": "+91 85220 65608",
        "email": ""
      },
      {
        "city": "Mysore",
        "contactPerson": "Parul University",
        "address": "Parul Admission Office, No. 1253, Vijayanagar, 1st Stage, 9th Cross, 8th Main Road, Mysore \u2013 570017, Karnataka.",
        "number": "+91 9880570354",
        "email": ""
      },
      {
        "city": "Raichur",
        "contactPerson": "Parul University",
        "address": "1-4-154/10 (Old) / 1-4-135/1 (New), Second Floor, Ramalingeshwar Colony, IB Road, Raichur \u2013 584101, Karnataka.",
        "number": "+91 93470 33704",
        "email": ""
      },
      {
        "city": "Shivamogga",
        "contactPerson": "Parul University",
        "address": "No. 28, Bhagy Nilaya, Opposite to Bhandari Gas, 1st Cross, Gandhinagar, Shivamogga \u2013 577201, Karnataka.",
        "number": "+91 81255 75150",
        "email": ""
      },
      {
        "city": "Tumkur",
        "contactPerson": "Parul University",
        "address": "Sri Hari Nilaya, 1st Cross, SIT Extension, Siddalingayyana Palya, Tumkur \u2013 572102, Karnataka.",
        "number": "+91 90321 65608",
        "email": ""
      },
      {
        "city": "Udupi",
        "contactPerson": "Parul University",
        "address": "Flat No. 310, Shiroor Tower, Udupi\u2013Manipal Main Road, Manipal, Udupi Dist., Karnataka \u2013 576104.",
        "number": "+91 73836 60034",
        "email": ""
      },
      {
        "city": "Vijayapura",
        "contactPerson": "Parul University",
        "address": "1st Floor, House No. 29, Ward No. 12, Opposite BLDE Hospital, Vijayapura \u2013 586101, Karnataka.",
        "number": "+91 91822 23258",
        "email": ""
      }
    ],
    "KERALA": [
      {
        "city": "Ernakulam",
        "contactPerson": "Ernakulam District Office-Parul University",
        "address": "Parul University Admission Office, D No:- 29/152-A1, Aiden Enclave, Toc H School road, Vytilla,Kochi-682019 Ernakulam-District, Kerala State,",
        "number": "+91 90328 11611, +91 96527 39785",
        "email": ""
      }
    ],
    "PUDUCHERRY": [
      {
        "city": "Puducherry",
        "contactPerson": "Mr.C T Rao-Parul University",
        "address": "",
        "number": "+91 8886800391",
        "email": "rcc.puducherry@paruluniversity.ac.in"
      }
    ],
    "TAMIL NADU": [
      {
        "city": "Tamil Nadu",
        "contactPerson": "Mr. C V RAO",
        "address": "Parul University",
        "number": "+91 98410 55844",
        "email": "rcc.tamilnadu@paruluniversity.ac.in"
      },
      {
        "city": "Chennai",
        "contactPerson": "Parul University",
        "address": "Parul University ,Ganapathy St, Ramakrishnapuram, Ashok Nagar, Chennai, Tamil Nadu- 600033",
        "number": "+91 95979 33806",
        "email": ""
      },
      {
        "city": "Hosur",
        "contactPerson": "Parul University",
        "address": "Plot no 27, Triveni Gardens, Rayakotta Road, Sanasandiram, Hosur, Krishnagiri,Tamil Nadu-635109",
        "number": "+91 7702601798",
        "email": ""
      },
      {
        "city": "Salem",
        "contactPerson": "Parul University",
        "address": "Flat No.178-8,Niharika Arabind Ashram Road,Sree Nagar Colony,Narasothipatty,Salem,Salem (Dist.),Tamilnadu-636005",
        "number": "+91 86374 21432",
        "email": ""
      }
    ],
    "TELANGANA": [
      {
        "city": "Adilabad",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, D/No: 11-40/2/A/1, Industrial Road, Landmark: Sagar Super Market, Dasnapur, Adilabad, Adilabad (Dt), Telangana \u2013 504001.",
        "number": "+91 87906 62983",
        "email": ""
      },
      {
        "city": "Hyderabad - Online Program Admissions Office",
        "contactPerson": "Parul University",
        "address": "7th Floor, Pranava Group, Beside Harsha Toyota Showroom, Land Mark Residency, Kothaguda, Hyderabad, Telangana \u2013 500084.",
        "number": "+91 90363 24123 +91 91481 09123",
        "email": ""
      },
      {
        "city": "Hyderabad - Regional Office",
        "contactPerson": "Mrs. Sailaja-Parul University",
        "address": "Flat No 101, Metro Residency, Beside Lake View Guest House, Raj Bhavan Road,Somajiguda, Ranga Reddy(Dist.) Telangana-509001",
        "number": "+91 96766 85308 +91 98499 73695",
        "email": "rcc.telangana@paruluniversity.ac.in"
      },
      {
        "city": "Karimnagar",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Flat No 401, Suraj Arcade, Road No. 2, Vidyaranyapuri, Opp. Apollo Reach Hospitals, Railway Station Road, KARIMNAGAR- 505001, Karimnagar Dt, Telangana.",
        "number": "+91 9154122571",
        "email": ""
      },
      {
        "city": "Khammam",
        "contactPerson": "Parul University",
        "address": "Parul University Office, Door No:- 15-15-180, Opp prasad Heights, Vdo,s Colony, Gattaya Center, Khammam - 507 002 Telangana.",
        "number": "+91 9154122565",
        "email": ""
      },
      {
        "city": "Mahabubnagar",
        "contactPerson": "Parul University",
        "address": "Admission Office, Flat No: 301, 3rd Floor, Lakshmi Enclave, Teachers Colony, Landmark: (Opp) Water Tank Park, Mettugadda, Mahbubnagar, Mahbubnagar Dist, Telangana \u2013 509001.",
        "number": "+91 88864 44051",
        "email": ""
      },
      {
        "city": "Medak",
        "contactPerson": "Parul University",
        "address": "Hno: 3-86/1, near black office, rangadam pally , Siddipet - 502103",
        "number": "+91-93904 63995",
        "email": ""
      },
      {
        "city": "Nizamabad",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, Divya Complex, Doctors Colony, Near New Housing Board, By-Pass Road, Kanteswar, Nizamabad, Telangana-503002",
        "number": "+91 9392660806",
        "email": ""
      },
      {
        "city": "Suryapet",
        "contactPerson": "Parul University",
        "address": "Parul University Admission Office, H No:-1-4-249/37/5/1, Vidya Nagar Colony, Road No:-1, Behind Hotel Tirumala Grand, Suryapet(Dist), Telangana-508213",
        "number": "+91 7708664339",
        "email": "rcc.telangana@paruluniversity.ac.in"
      },
      {
        "city": "Warangal",
        "contactPerson": "Parul University",
        "address": "Parul University Office, H.No - 6-1-121, Shiva Complex, 3rd Floor, Flat no :- 402, Kancharakunta, OPP :- KUDA OFFICE, Near Hanumakonda Bustand, Hanumakonda,Warangal \u2013 Telangana.",
        "number": "+91 9154122566",
        "email": ""
      }
    ]
  },
  "East Zone": {
    "BIHAR": [
      {
        "city": "Bhagalpur",
        "contactPerson": "Anurag Bhagat",
        "address": "Office No. 3, Ground Floor, Brihadeshwara Nath Apartment, Nath Chowk, Near SBI ATM, Bhagalpur \u2013 812001, Bihar.",
        "number": "+91 9316732693",
        "email": "anurag.bhagat42091@paruluniversity.ac.in"
      },
      {
        "city": "GAYA",
        "contactPerson": "Prashant Tiwari",
        "address": "Parul University, Bala Ji Gharana Complex, 4th Floor, A.P. Colony, Near Shanti Niketan School, Gaya \u2013 823001, Bihar.",
        "number": "+91 9213008465",
        "email": "prashant.tiwari43430@paruluniversity.ac.in"
      },
      {
        "city": "Muzzafarpur",
        "contactPerson": "Pawan Chaurasia",
        "address": "Ground Floor, Bandhu Complex, Amar Cinema Road, Muzaffarpur \u2013 842002, Bihar.",
        "number": "+91 7862880537",
        "email": "pawan.chaurasia33625@paruluniversity.ac.in"
      },
      {
        "city": "Patna",
        "contactPerson": "Ankur Priyesh",
        "address": "604, Maya Mahesh Pushpanjali Complex, S.K. Puri, Patna \u2013 800001, Bihar.",
        "number": "+91 9510971470",
        "email": "ankur.priyesh@paruluniversity.ac.in"
      }
    ],
    "JHARKHAND": [
      {
        "city": "Dhanbad",
        "contactPerson": "Sushanta Banerjee",
        "address": "Shop No. 206, Shri Ram Plaza, Bank More, Dhanbad \u2013 826001, Jharkhand.",
        "number": "+91 9510971481",
        "email": "sushanta.banerjee33592@paruluniversity.ac.in"
      },
      {
        "city": "Jamshedpur",
        "contactPerson": "Himanshu Singh",
        "address": "Office No. G2, Ground Floor, Birendu Trade Center, Penar Road, Sakchi, Jamshedpur \u2013 831001, Jharkhand.",
        "number": "+91 6354905723",
        "email": "himanshu.singh37694@paruluniversity.ac.in"
      },
      {
        "city": "Ranchi",
        "contactPerson": "Nitin Navin",
        "address": "Bansal Arcade, Shop No. 604, 6th Floor, PeePee Complex, Ranchi \u2013 834001, Jharkhand.",
        "number": "+91 9510971471",
        "email": "nitin.srivastava@paruluniversity.ac.in"
      }
    ],
    "ODISHA": [
      {
        "city": "Berhampur",
        "contactPerson": "-",
        "address": "Parul University Admission Office, D/No: 167/34, Aska Road, Berhampur, Ganjam, Odisha \u2013 760001.",
        "number": "+91 8885617246",
        "email": "-"
      },
      {
        "city": "Bhubaneswar",
        "contactPerson": "Sri Lakshmi",
        "address": "Parul University Office, Plot No. 22, Ground Floor, Near Regional Science Centre, Bhubaneswar \u2013 751013, Odisha.",
        "number": "+91 7487871609 +91 6300658513",
        "email": "-"
      },
      {
        "city": "Rourkela",
        "contactPerson": "Parul University",
        "address": "",
        "number": "+91 77802 04637",
        "email": "-"
      },
      {
        "city": "Sambalpur",
        "contactPerson": "",
        "address": "Flat No. 01, Jharsuguda Road, Behind Kamakshya Mandir, Ainthapali, Sambalpur \u2013 768006, Odisha.",
        "number": "+91 83094 50073",
        "email": ""
      }
    ],
    "WEST BENGAL": [
      {
        "city": "Kolkata",
        "contactPerson": "Prasun Datta",
        "address": "87/250, Raja S.C. Mullick Road, Ganguly Bagan, Near IRIS Hospital, Kolkata \u2013 700047, West Bengal.",
        "number": "+91 9510971472",
        "email": "prasun.datta24133@paruluniversity.ac.in"
      },
      {
        "city": "Malda",
        "contactPerson": "Sourabh Chowdhury",
        "address": "208/286(A), SBI Building, Ramkrishna Pally, NH 34, Opposite of Trends, P.O. Malda \u2013 732101, West Bengal.",
        "number": "+91 9274416243",
        "email": "sourabh.chowdhury38556@paruluniversity.ac.in"
      },
      {
        "city": "Siliguri",
        "contactPerson": "Biswadeep Sinha",
        "address": "220, Sachin Sarkar Sarani, College Para, Siliguri \u2013 734001, West Bengal.",
        "number": "+91 7862880771",
        "email": "biswadeep.sinha33593@paruluniversity.ac.in"
      }
    ]
  },
  "Central Zone": {
    "CHHATTISGARH": [
      {
        "city": "Bilaspur",
        "contactPerson": "Pradeep Gupta",
        "address": "Shop No. 217, First Floor, VR Plaza, Link Road, Bilaspur \u2013 495001, Chhattisgarh.",
        "number": "+91 9510971513",
        "email": "pradeep.gupta27425@paruluniversity.ac.in"
      },
      {
        "city": "Korba",
        "contactPerson": "Ullas Kumar Gopal",
        "address": "Plot No. 91A, Near Daxi Restaurant, TP Nagar, Korba \u2013 495677, Chhattisgarh.",
        "number": "+91 9274411599, +91 9522500888",
        "email": "ullas.nair39381@paruluniversity.ac.in"
      },
      {
        "city": "Raipur",
        "contactPerson": "Archana Pandey",
        "address": "521, 3rd Floor, SLT Waterfront, Telibandha, G.E. Road, Raipur \u2013 492001, Chhattisgarh.",
        "number": "+91 9510971473",
        "email": "archana.pandey26965@paruluniversity.ac.in"
      },
      {
        "city": "Raipur",
        "contactPerson": "Varun Sharma",
        "address": "521, 3rd Floor, SLT Waterfront, Telibandha, G.E. Road, Raipur \u2013 492001, Chhattisgarh.",
        "number": "+91 7862877956",
        "email": "varun.sharma36545@paruluniversity.ac.in"
      }
    ],
    "MADHYA PRADESH": [
      {
        "city": "Bhopal",
        "contactPerson": "Dharmendra Kumar",
        "address": "131/13, Suryoday Building, Third Floor, Zone 2 \u2013 Maharana Pratap Nagar, Bhopal \u2013 462011, Madhya Pradesh.",
        "number": "+91 9328920062",
        "email": "dharmendra.kumar39685@paruluniversity.ac.in"
      },
      {
        "city": "Bhopal",
        "contactPerson": "Praveen Prabhakaran",
        "address": "131/13, Suryoday Building, Third Floor, Zone 2 \u2013 Maharana Pratap Nagar, Bhopal \u2013 462011, Madhya Pradesh.",
        "number": "+91 9510971476",
        "email": "praveen.prabhakaran23043@paruluniversity.ac.in"
      },
      {
        "city": "Dhar",
        "contactPerson": "Sangram Singh Panwar",
        "address": "44/4, Plot No. 42, Nearby Rajkamal Bhojanalaya, Above ESAF Bank, Trimurti Square, Dhar \u2013 454001, Madhya Pradesh.",
        "number": "+91 9274412917",
        "email": "sangram.panwar39780@paruluniversity.ac.in"
      },
      {
        "city": "Gwalior",
        "contactPerson": "Kuldeep Singh",
        "address": "Pushpraj Annexe, Singhpur Road, Near MH Chauraha, Morar, Gwalior \u2013 474006, Madhya Pradesh.",
        "number": "+91 9510971546",
        "email": "kuldeep.singh27532@paruluniversity.ac.in"
      },
      {
        "city": "Indore",
        "contactPerson": "Hitesh Choudhary",
        "address": "M-29, Trade Centre, 18 South Tukoganj, Hotel Crown Palace Road, Indore \u2013 452001, Madhya Pradesh.",
        "number": "+91 9316732688",
        "email": "hitesh.choudhary22851@paruluniversity.ac.in"
      },
      {
        "city": "Indore",
        "contactPerson": "Kajal Upraliya",
        "address": "M-29, Trade Centre, 18 South Tukoganj, Hotel Crown Palace Road, Indore \u2013 452001, Madhya Pradesh.",
        "number": "+91 9510971581",
        "email": "kajal.upraliya27366@paruluniversity.ac.in"
      },
      {
        "city": "Jabalpur",
        "contactPerson": "Amrita Mishra",
        "address": "Shop No. G-1, Vimlasheel Heights, Labour Chowk, Yashwant Mala, Nehru Nagar, Jabalpur \u2013 482004, Madhya Pradesh.",
        "number": "+91 9510971486",
        "email": "amrita.mishra28950@paruluniversity.ac.in"
      },
      {
        "city": "Ratlam",
        "contactPerson": "Akash Khandker",
        "address": "125/5, 1st Floor, Opp. Hotel Ujala Palace, Station Road, Ratlam \u2013 457001, Madhya Pradesh.",
        "number": "+919510971577",
        "email": "akash.khandker42255@paruluniversity.ac.in"
      },
      {
        "city": "Rewa",
        "contactPerson": "Abhimanyu Tripathi",
        "address": "First Floor, Zamindar Complex, Next to Zudio Showroom, Allahabad Road, Bara, Rewa \u2013 486001, Madhya Pradesh.",
        "number": "+91 9510971552",
        "email": "abhimanyu.tripathi38368@paruluniversity.ac.in"
      },
      {
        "city": "Ujjain",
        "contactPerson": "Mr. Vivek Mehta",
        "address": "No. D-212, Second Floor, Vishala Complex, 30 Munj Marg, Above Red Tape Showroom, Shaheed Park, Freeganj, Ujjain.",
        "number": "+919213008442",
        "email": "vivek.mehta42752@paruluniversity.ac.in"
      }
    ]
  },
  "North Zone": {
    "DELHI": [
      {
        "city": "Delhi",
        "contactPerson": "Vipul Pareek",
        "address": "R-18, First Floor, Vikas Marg, Opp. PNB Bank, Laxmi Nagar, Delhi \u2013 110092.",
        "number": "+916353211251",
        "email": "vipul.pareek7168@paruluniversity.ac.in"
      },
      {
        "city": "Delhi",
        "contactPerson": "Jaidev Mohanty",
        "address": "R-18, First Floor, Vikas Marg, Opp. PNB Bank, Laxmi Nagar, Delhi \u2013 110092.",
        "number": "+91 9327919054",
        "email": "jaidev.mohanty144010@paruluniversity.ac.in"
      },
      {
        "city": "Delhi",
        "contactPerson": "Pankaj Kumar",
        "address": "R-18, First Floor, Vikas Marg, Opp. PNB Bank, Laxmi Nagar, Delhi \u2013 110092.",
        "number": "+91 9510971584",
        "email": "pankaj.singh32810@paruluniversity.ac.in"
      }
    ],
    "HARYANA": [
      {
        "city": "Ambala",
        "contactPerson": "Rozy Azad",
        "address": "SCO 1066\u20131067, Sec 22B, Chandigarh \u2013 160022, Chandigarh.",
        "number": "+91 9510971477",
        "email": "rozy.azad21301@paruluniversity.ac.in"
      },
      {
        "city": "Chandigarh",
        "contactPerson": "Jaspreet Kaur",
        "address": "SCO 1066\u20131067, Sec 22B, Chandigarh \u2013 160022, Chandigarh.",
        "number": "+91 9327919047",
        "email": "jaspreet.kaur21149@paruluniversity.ac.in"
      },
      {
        "city": "Chandigarh",
        "contactPerson": "Sulekha Sharma",
        "address": "SCO 1066\u20131067, Sec 22B, Chandigarh \u2013 160022, Chandigarh.",
        "number": "+91 9510971548",
        "email": "sulekha.sharma22648@paruluniversity.ac.in"
      },
      {
        "city": "Hisar",
        "contactPerson": "Rajesh Kumar",
        "address": "DSS 112, 1st Floor, Green Square Market, Hisar \u2013 125001, Haryana.",
        "number": "+91 9875164549",
        "email": "rajesh.kumar42634@paruluniversity.ac.in"
      },
      {
        "city": "Karnal",
        "contactPerson": "Shubham Arora",
        "address": "SCO-13, First Floor, Radha Swami Market, Model Town, Opp. Nirmal Dham, Karnal \u2013 132001, Haryana.",
        "number": "+91 9274388511",
        "email": "shubham.kumar40029@paruluniversity.ac.in"
      }
    ],
    "HIMACHAL PRADESH": [
      {
        "city": "Hamirpur",
        "contactPerson": "Shubhash Chand Chandel",
        "address": "City Tower, New Road, Near Bus Stand, Hamirpur \u2013 177001, Himachal Pradesh.",
        "number": "+91 9099997062",
        "email": "subhash.chandel22637@paruluniversity.ac.in"
      }
    ],
    "JAMMU & KASHMIR": [
      {
        "city": "Jammu",
        "contactPerson": "Sunaina Gill",
        "address": "2nd Floor, KC Plaza Complex, Above Silverlines, Opp. ICICI Bank, Residency Road, Jammu \u2013 180001.",
        "number": "+91 9316732695",
        "email": "sunaina.gill22796@paruluniversity.ac.in"
      },
      {
        "city": "Jammu",
        "contactPerson": "Joseph Kumar",
        "address": "2nd Floor, KC Plaza Complex, Above Silverlines, Opp. ICICI Bank, Residency Road, Jammu \u2013 180001.",
        "number": "+91 9099008854",
        "email": "joseph.kumar26869@paruluniversity.ac.in"
      },
      {
        "city": "Srinagar",
        "contactPerson": "Aaqib Parray",
        "address": "Parraypora, IG Airport Road, Near 14th Avenue, Behind Unacademy Centre, Srinagar \u2013 190005.",
        "number": "+91 9274686673",
        "email": "aaqib.parray41212@paruluniversity.ac.in"
      }
    ],
    "PUNJAB": [
      {
        "city": "Amritsar",
        "contactPerson": "Ajay Kumar",
        "address": "SCO 120, 6th Floor, Ranjit Avenue, B Block, Near Municipal Corporation Office, Amritsar \u2013 143001, Punjab.",
        "number": "+91 9510971520",
        "email": "ajay.kumar21300@paruluniversity.ac.in"
      },
      {
        "city": "Amritsar",
        "contactPerson": "Mamta Sharma",
        "address": "SCO 120, 5th Floor, Ranjit Avenue, B Block, Dist Shopping Center, Opp. Municipal, Corporation Office, Amritsar-143001, Punjab",
        "number": "+91 9510971520",
        "email": "mamta.sharma45743@paruluniversity.ac.in"
      },
      {
        "city": "Ludhiana",
        "contactPerson": "Harmandeep Singh",
        "address": "3782, Cabin No. 1, Rasia Complex, First Floor, Jagjit Nagar, Ludhiana \u2013 140002, Punjab.",
        "number": "+91 9510971541",
        "email": "harmandeep.sidhu22754@paruluniversity.ac.in"
      }
    ],
    "UTTAR PRADESH": [
      {
        "city": "Agra",
        "contactPerson": "Siddharth Duboliya",
        "address": "4-First Floor, Maadhav Plaza, Sec. 3B, Avas Vikas, Sikandra, Agra \u2013 282007, Uttar Pradesh.",
        "number": "+91 9510971466",
        "email": "siddharth.duboliya22625@paruluniversity.ac.in"
      },
      {
        "city": "Bareilly",
        "contactPerson": "Hemant Mishra",
        "address": "A-2, Akash Floors, City Station Road, Civil Lines, Bareilly \u2013 243001, Uttar Pradesh.",
        "number": "+91 9510971467",
        "email": "hemant.mishra28712@paruluniversity.ac.in"
      },
      {
        "city": "Gorakhpur",
        "contactPerson": "Siddharth Gupta",
        "address": "B-13, Buddh Vihar Phase 2, Gorakhpur \u2013 273017, Uttar Pradesh.",
        "number": "+91 9274398119",
        "email": "siddharth.gupta39169@paruluniversity.ac.in"
      },
      {
        "city": "Kanpur",
        "contactPerson": "Amit Singh",
        "address": "117/N/78, Near Suraj Nursing Home, Avon Market, Kakadeo, Kanpur \u2013 208024, Uttar Pradesh.",
        "number": "+919510971465",
        "email": "amit.singh28816@paruluniversity.ac.in"
      },
      {
        "city": "Lucknow",
        "contactPerson": "Shashank Shukla",
        "address": "2nd Floor, 27/2 Chandralok Colony, above Kama Medical, Aliganj Lucknow, Uttar Pradesh- 226024.",
        "number": "+91 9510971469",
        "email": "shahshank.shukla23077@paruluniversity.ac.in"
      },
      {
        "city": "PRAYAGRAJ",
        "contactPerson": "Rajveer Singh",
        "address": "3K, Thaskand Marg, Civil Lines, Prayagraj \u2013 211001, Uttar Pradesh.",
        "number": "+91 9213001680",
        "email": "raj.singh42722@paruluniversity.ac.in"
      },
      {
        "city": "Varanasi",
        "contactPerson": "Kuldeep Singh",
        "address": "D 57/3A-L, Hall No. 204, Shree Sai Complex, Sigra, Varanasi \u2013 221010, Uttar Pradesh.",
        "number": "+91 9687657418",
        "email": "kuldeep.singh26024@paruluniversity.ac.in"
      }
    ],
    "UTTARAKHAND": [
      {
        "city": "Dehradun",
        "contactPerson": "Rajendra Rawat",
        "address": "1st Floor, Raj Plaza, 75 Rajpur Road, Dehradun \u2013 248001, Uttarakhand.",
        "number": "+91 9099008865",
        "email": "rajendra.rawat36423@paruluniversity.ac.in"
      },
      {
        "city": "Dehradun",
        "contactPerson": "Jagmohan",
        "address": "1st Floor, Raj Plaza, 75 Rajpur Road, Dehradun \u2013 248001, Uttarakhand.",
        "number": "+91 9510971550",
        "email": "jagmohan.tamta21643@paruluniversity.ac.in"
      },
      {
        "city": "Haldwani",
        "contactPerson": "Ashish Sanwal",
        "address": "Ground Floor, Trishul Tower, Near Delhi Chat, Jagdamba Chauraha, Kathgodam Road, Haldwani \u2013 263139, Nainital, Uttarakhand.",
        "number": "+91 9875164765",
        "email": "ashish.sanwal38695@paruluniversity.ac.in"
      }
    ]
  },
  "North East Zone": {
    "ARUNACHAL PRADESH": [
      {
        "city": "Itanagar",
        "contactPerson": "Mukesh Nayak",
        "address": "Ground floor, Aruni complex, near APST bus station, upper Chimi, F - sector, Ganga, Itanagar-791111, Arunachal Pradesh",
        "number": "+91 9213001374",
        "email": "mukesh.nayak41250@paruluniversity.ac.in"
      }
    ],
    "ASSAM": [
      {
        "city": "Guwahati",
        "contactPerson": "Krishna Kanta Nath",
        "address": "Block 5(C), Mandovi Apartment, Tilotoma Enclave, Ambari, Guwahati, Kamrup Metro, Assam- 781001",
        "number": "+91 9510771421, +91 9510971578",
        "email": "krishna.nath23061@paruluniversity.ac.in"
      },
      {
        "city": "Dibrugarh",
        "contactPerson": "Vijay Punni",
        "address": "1st Floor, Besides Sampoorna Kendriya Vidyalaya, Khalihamari College Road, Dibrugarh-786001, Assam",
        "number": "+91 9510971534",
        "email": "vijay.punni42310@paruluniversity.ac.in"
      }
    ],
    "MANIPUR": [
      {
        "city": "Imphal",
        "contactPerson": "Krishna Nath",
        "address": "",
        "number": "+91 9510771421",
        "email": "krishna.nath23061@paruluniversity.ac.in"
      },
      {
        "city": "Churachandpur",
        "contactPerson": "Lalhousei Touthang",
        "address": "",
        "number": "+91 6353211072",
        "email": "lalhousei.touthang38174@paruluniversity.ac.in"
      }
    ],
    "MEGHALAYA": [
      {
        "city": "Shillong",
        "contactPerson": "Rupert Lyngdoh",
        "address": "2nd Floor, New Frank Tata Motors Building, Block-6, Jyllishop, Nongthymmai, Shillong \u2013 793014, EKHD, Meghalaya.",
        "number": "+91 9274398190",
        "email": "rupert.lyngdoh39185@paruluniversity.ac.in"
      }
    ],
    "MIZORAM": [
      {
        "city": "Aizawl",
        "contactPerson": "Chawngthu Lalrindiki",
        "address": "Hlimen, Dam Veng, Near Lalming Infrastructure and Construction Pvt. Ltd., Aizawl \u2013 796005, Mizoram.",
        "number": "+91 9016228504",
        "email": "lalrindiki.chawngthu22351@paruluniversity.ac.in"
      }
    ],
    "NAGALAND": [
      {
        "city": "Dimapur",
        "contactPerson": "Mughato Zhimo",
        "address": "House No. 136, United Colony, Nagarjan Police Point, Ward No. 20, Dimapur \u2013 797112, Nagaland.",
        "number": "+91 9313923532",
        "email": "mughato.zhimo22029@paruluniversity.ac.in"
      }
    ],
    "SIKKIM": [
      {
        "city": "Gangtok",
        "contactPerson": "Navin Nawbag",
        "address": "Deorali Bazaar, Besides Khadi Bhawan, NH 10, Gangtok \u2013 737101, Sikkim.",
        "number": "+91 9274398191",
        "email": "navin.nawbag39184@paruluniversity.ac.in"
      }
    ],
    "TRIPURA": [
      {
        "city": "Agartala",
        "contactPerson": "Sudakshina Chakraborty",
        "address": "Mathchowhumani, Adjacent to State Bank of India MBB College Branch, P.O. Dhalewsar, Agartala \u2013 799001, Tripura (W).",
        "number": "+91 6354905683 ,+91 9510971523, +91 9313923529",
        "email": "sudakshina.chakraborty24517@paruluniversity.ac.in"
      }
    ]
  }
};

export type HeadContact = {
  name: string;
  title: string;
  phone: string;
};

export const southZoneHeads: HeadContact[] = [
  {
    "name": "Mr.Chundi Balaji",
    "title": "Head - Admissions Zonal Office South India",
    "phone": "+91 9849124813"
  },
  {
    "name": "Mr. C.V. Rao",
    "title": "Head - Admissions (Gujarat & Goa Campuses) South India.",
    "phone": "+91 8886800391"
  },
  {
    "name": "Mr. C.T. Rao",
    "title": "Head - Students & Parents Affairs (Gujarat & Goa Campuses) South India.",
    "phone": "+91 8897431333"
  },
  {
    "name": "Mr.K Raja Reddy",
    "title": "Manager - Admissions (Goa Campus) South India.",
    "phone": "+91 9313923530"
  },
  {
    "name": "Mr.JL Srinivas Rao",
    "title": "Manager - Hospitality Students (Goa Campus ) South India.",
    "phone": "+91 9701729766"
  },
  {
    "name": "Mr.I Madhava Reddy",
    "title": "Manager - Admissions  (Gujarat Campuses) South India.",
    "phone": "+91 7981516530"
  },
  {
    "name": "Mr. N Srinivas Yadav",
    "title": "Asst Mgr - Admissions (Gujarat Campuses) South India.",
    "phone": "+91 7989275279"
  },
  {
    "name": "Mr.Pavan Kalyan",
    "title": "Asst Mgr - Student Affairs ( Vadodara Campus) South India.",
    "phone": "+91 7862875929"
  },
  {
    "name": "Mr.Sudeep",
    "title": "Asst Mgr - Hospitality for Hostle Students (Vadodara  Campus ) South India.",
    "phone": "+91 6351740969"
  }
];
