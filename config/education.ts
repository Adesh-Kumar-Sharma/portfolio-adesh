export interface EducationInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  companyUrl?: string;
  logo?: string;
}

export const educations: EducationInterface[] = [
  {
    id: "jec",
    position: "Bachelor of Technology",
    company: "Jabalpur Engineering College",
    location: "Jabalpur, India",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2022-06-01"),
    description: [
      "Achieved my Bachelor of Technology degree in Electrical Engineering. Passed in First Division with Distinction, CGPA: 7.71/10, Credits: 170 (ECTS: 255)"
    ],
    companyUrl: "https://www.jecjabalpur.ac.in/index.aspx",
    logo: "/education/jec.png",
  },
  {
    id: "joseph",
    position: "Higher Secondary Certificate",
    company: "St. Joseph Public School",
    location: "Ranpur, Kota, India",
    startDate: new Date("2016-04-01"),
    endDate: new Date("2017-04-01"),
    description: [
      "Achieved 79.2% in Higher Secondary Certificate from CBSE.",
    ],
    companyUrl: "https://stjosephschools.org/",
    logo: "/education/joseph.png",
  },
  {
    id: "gabriel",
    position: "Senior Secondary Certificate",
    company: "St. Gabriel's Senior Secondary School",
    location: "Jabalpur, India",
    startDate: new Date("2014-04-01"),
    endDate: new Date("2015-04-01"),
    description: [
      "Achieved CGPA of 9.6/10 in Senior Secondary Certificate from CBSE.",
    ],
    companyUrl: "https://www.gabrielsjbp.org/",
    logo: "/education/gabriel.png",
  },
];
