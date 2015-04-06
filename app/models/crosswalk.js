import DS from 'ember-data';

var Crosswalk = DS.Model.extend({
  branch: DS.attr('string'),
  branchImage: DS.attr('string'), 
  url: DS.attr('url'),
	title: DS.attr('string'),
	category: DS.attr(),
  match: DS.attr('string'),
  pdf: DS.attr('string')
});

Crosswalk.reopenClass({
	FIXTURES: [
    {
      "id":"CGR-HS-004",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-HS-004",
      "title":"Health Services Technician",
      "category":["electronic health records","health care","health care assistant", "health care database","health care specialist","health information technology","health technician","patient care","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"CGR-IS-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-IS-002",
      "title":"Intelligence Specialist",
      "category":["business intelligence","data analysis"],
      "match":"M"
    },
    {
      "id":"CGR-ISM-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ISM-001",
      "title":"Information Systems Management",
      "category":["computer network","database","help desk","information technology","network security","network systems"],
      "match":"H"
    },
    {
      "id":"CGR-IT-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-IT-002",
      "title":"Information Systems Technician",
      "category":["database administration","health information technology","health technician","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"CGR-MST-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-MST-003",
      "title":"Marine Science Technician",
      "category":["health technician","Marine Science Technician","information technology","network systems"],
      "match":"M"
    },
    {
      "id":"CGR-OS-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-OS-002",
      "title":"Operations Specialist",
      "category":["database","help desk"],
      "match":"M"
    },
    {
      "id":"CGR-YN-004",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-YN-004",
      "title":"Yeoman",
      "category":["computer network","database","electronic health records","health information technology","information technology"],
      "match":"M"
    },
    {
      "id":"CGW-ELC-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ELC-003",
      "title":"Electronics",
      "category":["computer network","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"CGW-ISM-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ISM-001",
      "title":"Information Systems Management",
      "category":["business analytics","computer network","data analysis","database","database administration","health information technology","information technology","Network analyst","network systems"],
      "match":"H"
    },
    {
      "id":"CGW-MED-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-MED-003",
      "title":"Medical Administration",
      "category":["business analytics","business intelligence","data analysis","database administration","health care","health informatics","health information technology","medical assistant","medical charting","medical records"],
      "match":"H"
    },
    {
      "id":"CGW-OSS-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-OSS-001",
      "title":"Operations Systems",
      "category":["computer network","help desk","information technology","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-642X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-642X-004",
      "title":"Data Processing",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-644X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-644X-004",
      "title":"Cryptology",
      "category":["computer network","data analysis","database","information technology","network administrator","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-645X-003",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-645X-003",
      "title":"Intelligence",
      "category":["business analytics","business intelligence","computer network","help desk","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-646X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-646X-004",
      "title":"Meteorology/Oceanography",
      "category":["computer network","data analysis","database","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MCE-0241-001",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-0241-001",
      "title":"Imagery Analysis Specialist",
      "category":["computer network"],
      "match":"M"
    },
    {
      "id":"MCE-0659-002",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-0659-002",
      "title":"Data Chief",
      "category":["business analytics","business intelligence","computer network","database administration","Network analyst","network security"],
      "match":"H"
    },
    {
      "id":"MCE-0689-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-0689-001",
      "title":"Information Assurance Technician",
      "category":["business analytics","business intelligence","computer network","data analysis","database","database administration","health information technology","health technician","information technology","Network analyst","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/MCE-0689-001_Information-Assurance-Technician.pdf"
    },
    {
      "id":"MCE-2171-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2171-001",
      "title":"Electro-Optical Ordnance Repairer",
      "category":["computer network","information technology","database"],
      "match":"M"
    },
    {
      "id":"MCE-2823-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2823-001",
      "title":"Technical Control Chief",
      "category":["computer network","database","health information technology","help desk","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MCE-2862-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2862-001",
      "title":"Electronics Maintenance Technician",
      "category":["computer network","help desk","information technology","network administrator","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MCE-2874-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2874-001",
      "title":"Metrology Technician",
      "category":["computer network","health information technology","health technician","help desk","information technology","network systems"],
      "match":"H"
    },
    {
      "id":"MCE-5974-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-5974-001",
      "title":"Tactical Data Systems Technician",
      "category":["computer network","data analysis","database","database administration","health information technology","help desk","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-14J-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-14J-002",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer",
      "category":["computer network","database","help desk","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-25B-003",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25B-003",
      "title":"Information Technology Specialist",
      "category":["business analytics","business intelligence","computer network","database administration","health information technology","health technician","healthcare technology","help desk","Network analyst","network security","network security"],
      "match":"H",
      "pdf":"assets/pdf/MOS-25B-003_Information-Technology-Specialist.pdf"
    },
    {
      "id":"MOS-25N-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25N-001",
      "title":"Nodal Network Systems Operator-Maintainer",
      "category":["computer network","database","health information technology","help desk","information technology","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-25N-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25N-001",
      "title":"Nodal Network Systems Operator-Maintainer",
      "category":["network administrator"],
      "match":"H"
    },
    {
      "id":"MOS-25Q-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25Q-002",
      "title":"Multichannel Transmission Systems Operator-Maintainer",
      "category":["computer network","database","health information technology","help desk","information technology","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-25U-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25U-001",
      "title":"Signal Support Systems Specialist",
      "category":["business analytics","computer network","data analysis","database","help desk","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-35F-005",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35F-005",
      "title":"Intelligence Analyst",
      "category":["health information technology","healthcare analyst","information technology"],
      "match":"H"
    },
    {
      "id":"MOS-670A-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-670A-002",
      "title":"Health Services Maintenance Technician",
      "category":["electronic health records","health care database","health information technology","health technician","help desk","health care assistant","health care database"],
      "match":"H"
    },
    {
      "id":"MOS-68W-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-68W-001",
      "title":"Health Care Specialist",
      "category":["health care specialist","health information technology","patient care","pharmacy specialist"],
      "match":"H"
    },
    {
      "id":"NER-AME-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AS-005",
      "title":"Aviation Support Equipment Technician (AS) ",
      "category":["computer network"],
      "match":"M"
    },
    {
      "id":"NER-AO-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AT-005",
      "title":"Aviation Electronics Technician (AT)",
      "category":["computer network","help desk","information technology","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-AS-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AT-005",
      "title":"Aviation Electronics Technician (AT)",
      "category":["computer network","help desk","information technology","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-AZ-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AZ-004",
      "title":"Aviation Maintenance Administrationman",
      "category":["computer network","data analysis","database","database administration","help desk","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-CTA-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTA-005",
      "title":"Cryptologic Technician, Administrative",
      "category":["computer network","data analysis","database","database administration","network security"],
      "match":"M"
    },
    {
      "id":"NER-CTI-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTI-005",
      "title":"Cryptologic Technician, Interpretive",
      "category":["computer network","data analysis","database","database administration","health information technology","information technology","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-CTM-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTM-005",
      "title":"Cryptologic Technician, Maintenance",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-CTN-002",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTN-002",
      "title":"Cryptologic Technician Networks",
      "category":["business analytics","business intelligence","computer network","computer network","data analysis","database","database administration","help desk","information technology","network administrator","network administrator","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-CTR-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTR-005",
      "title":"Communications Intelligence Collection Operator",
      "category":["business analytics","business intelligence","computer network","data analysis","database","database administration","help desk","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"NER-CTT-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTT-005",
      "title":"Cryptologic Technician, Technical",
      "category":["business analytics","business intelligence","computer network","data analysis","database","database administration","health information technology","information technology","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/NER-CTT-005_Cryptologic-Technician-Technical.pdf"
    },
    {
      "id":"NER-ETR-002",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-ETR-002",
      "title":"Electronics Technician, (Communications) ",
      "category":["computer network","database","database administration","help desk","information technology","network security","network systems"],
      "match":"M"
    },
    {
      "id":"NER-HM-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-HM-004",
      "title":"Hospital Corpsman",
      "category":["electronic health records","health care","health care assistant","health care database","health informatics","health information technology","information technology","patient care","pharmacy"],
      "match":"H",
      "pdf":"assets/pdf/NER-HM-004_Hospital-Corpsman.pdf"
    },
    {
      "id":"NER-HN-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-HN-004",
      "title":"Hospitalman",
      "category":["health care","health informatics","health information technology","pharmacy","patient care", "electronic health records","health care assistant"],
      "match":"M"
    },
    {
      "id":"NER-IS-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-IS-004",
      "title":"Intelligence Specialist",
      "category":["business intelligence","data analysis","health information technology","help desk","information technology","network systems"],
      "match":"M"
    },
    {
      "id":"NER-IT-003",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-IT-003",
      "title":"Information Systems Technician ",
      "category":["business analytics","business intelligence","computer network","database administration","health information technology","health technician","information technology","Network analyst","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/NER-IT-003_Information-Systems-Technician.pdf"
    },
    {
      "id":"NER-PS-001",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-PS-001",
      "title":"Personnel Specialist",
      "category":["business analytics","business intelligence","data analysis","database","electronic health records","health information technology","information technology"],
      "match":"M"
    },
    {
      "id":"NER-YN-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-YN-004",
      "title":"Yeoman",
      "category":["database","database administration","electronic health records","health information technology"],
      "match":"M"
    },
    {
      "id":"NWO-742X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-742X-004",
      "title":"Data Processing Technician",
      "category":["computer network","data analysis","database","database administration","health technician","help desk","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"NWO-744X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-744X-004",
      "title":"INFORMATION WARFARE OFFICER",
      "category":["business intelligence","computer network","database","database administration","network administrator","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"NWO-745X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-745X-004",
      "title":"Intelligence Technician",
      "category":["computer network","Network analyst","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-35L-005",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35L-005",
      "title":"Counterintelligence Agent ",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-35N-004",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35N-004",
      "title":"Signals Intelligence Analyst",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H" 
    },
    {
      "id":"MOS-25L-003",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25L-003",
      "title":"Cable Systems Installer-Maintainer",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"   
    },
    {
      "id":"MOS-25C-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25C-002",
      "title":"Radio Operator-Maintainer",
      "category":["computer network","database","information technology","Network analyst","network security","network systems"],
      "match":"M"   
    },
    {
      "id":"MOS-25E-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25E-001",
      "title":"Electro-Magnetic Spectrum Manager",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-25P-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25P-002",
      "title":"Microwave Systems Operator-Maintainer",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/MOS-25P-002_Microwave-Systems-Operator-Maintainer.pdf"
    },
    {
      "id":"MOS-27D-003",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-27D-003",
      "title":"Paralegal Specialist",
      "category":["computer network","database","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-35G-006",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35G-006",
      "title":"Geospatial Intelligence Imagery Analyst",
      "category":["computer network","database","information technology","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-25S-003",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25S-003",
      "title":"Satellite Communication Systems Operator-Maintainer",
      "category":["computer network","database","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-35Q-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35Q-002",
      "title":"Cryptologic Network Warfare Specialist",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-35S-005",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35S-005",
      "title":"Signals Collector/Analyst",
      "category":["computer network","information technology","network systems"],
      "match":"M"  
    },
    {
      "id":"MOS-35T-005",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-35T-005",
      "title":"Military Intelligence (MI) Systems Maintainer/Integrator",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-68G-005",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-68G-005",
      "title":"Patient Administration Specialist",
      "category":["electronic health records","health care","health care database","health information technology","health technician","patient care"],
      "match":"H"
    },
    {
      "id":"AFSC-4A2X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/biomedical-equipment/",
      "title":"Biomedical Equipment",
      "category":["health care","health care database","health information technology","health technician", "database", "database administration"],
      "match":"M",
      "pdf":"assets/pdf/AFSC-4A2X1_Biomedical-Equipment.pdf" 
    },
    {
      "id":"AFSC-4H0X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/cardiopulmonary-laboratory/",
      "title":"Cardiopulmonary Laboratory",
      "category":["health care","health informatics","health information technology","pharmacy","patient care", "electronic health records","health care assistant"],
      "match":"M",
      "pdf":"assets/pdf/AFSC-4H0X1_Cardiopulmonary-Laboratory.pdf" 
    },
    {
      "id":"AFSC-3D1X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/client-systems/",
      "title":"Client Systems",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/AFSC-3D1X1_Client-Systems.pdf" 
    },
    {
      "id":"AFSC-3D0X4",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/computer-systems-programming/",
      "title":"Computer Systems Programming",
      "category":["computer network","data analysis","database","database administration","information technology","Network analyst","network security","network systems"],
      "match":"H",
      "pdf":"assets/pdf/AFSC-3D0X4_Computer-Systems-Programming.pdf" 
    },
    {
      "id":"AFSC-3D1X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/cyber-surety/",
      "title":"Cyber Surety",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-3D0X3_Cyber-Surety.pdf"
    },
    {
      "id":"AFSC-3D0X2",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/cyber-systems-operations/",
      "title":"Cyber Systems Operation",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-3D0X2_Cyber-Systems-Operations.pdf"
    },
    {
      "id":"AFSC-3D1X2",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/cyber-transport-systems/",
      "title":"Cyber Transport Systems",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-3D1X2_Cyber-Transport-Systems.pdf"
    },
    {
      "id":"AFSC-1B4X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/cyber-systems-operations/",
      "title":"Cyberspace System Operations",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-1B4X1_Cyberspace-System-Operations.pdf"
    },
    {
      "id":"AFSC-4R0X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/diagnostic-imaging/",
      "title":"Diagnostic Imaging",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-4R0X1_Diagnostic-Imaging.pdf"
    },
    {
      "id":"AFSC-1N4X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://usmilitary.about.com/od/airforceenlistedjobs/a/afjob1n4x1.htm",
      "title":"Fusion Analyst",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-1N4X1_Fusion-Analyst.pdf"
    },
    {
      "id":"AFSC-4A0X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/health-services-management/",
      "title":"Health Services Management",
      "category":[],
      "match":"",
      "pdf":""
    },
    {
      "id":"AFSC-1N0X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/operations-intelligence-specialist/",
      "title":"Operations Intelligence",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-1N0X1_Operations-Intelligence.pdf"
    },
    {
      "id":"AFSC-4P0X1",
      "branch":"Air Force",
      "branchImage":"assets/images/air_force.gif",
      "url":"http://www.airforce.com/careers/detail/pharmacy-specialist/",
      "title":"Pharmacy",
      "category":[],
      "match":"",
      "pdf":"assets/pdf/AFSC-4P0X1_Pharmacy.pdf"
    }
  ]
});

export default Crosswalk;
