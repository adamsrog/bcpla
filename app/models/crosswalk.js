import DS from 'ember-data';

var Crosswalk = DS.Model.extend({
  branch: DS.attr('string'),
  branchImage: DS.attr('string'), 
  url: DS.attr('url'),
	title: DS.attr('string'),
	category: DS.attr(),
  match: DS.attr('string')
});

Crosswalk.reopenClass({
	FIXTURES: [
    {
      "id":"CGR-HS-004",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-HS-004",
      "title":"Health Services Technician",
      "category":["data analysis","database administration","electronic health records","health care","health care assistant","health care database","health care specialist","health informatics","health informatics","health information technology","health technician","pharmacy technician","Software development"],
      "match":"M"
    },
    {
      "id":"CGR-IS-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-IS-002",
      "title":"Intelligence Specialist",
      "category":["business intelligence","data analysis","health care specialist","pharmacy specialist"],
      "match":"M"
    },
    {
      "id":"CGR-ISM-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ISM-001",
      "title":"Information Systems Management",
      "category":["network security"],
      "match":"H"
    },
    {
      "id":"CGR-IT-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-IT-002",
      "title":"Information Systems Technician",
      "category":["database administration","health information technology","health technician","information technology","Network analyst","network security","network systems","pharmacy technician"],
      "match":"H"
    },
    {
      "id":"CGR-MST-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-MST-003",
      "title":"Marine Science Technician",
      "category":["health information technology","health technician","information technology","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"CGR-OS-002",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-OS-002",
      "title":"Operations Specialist",
      "category":["business analytics","health care specialist","pharmacy specialist"],
      "match":"M"
    },
    {
      "id":"CGR-YN-004",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGR-YN-004",
      "title":"Yeoman",
      "category":["business analytics","business intelligence","computer network"],
      "match":"M"
    },
    {
      "id":"CGW-ELC-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ELC-003",
      "title":"Electronics",
      "category":["computer network","electronic health records","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"CGW-ISM-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-ISM-001",
      "title":"Information Systems Management",
      "category":["computer network","health information technology","information technology","Network analyst","network systems"],
      "match":"H"
    },
    {
      "id":"CGW-MED-003",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-MED-003",
      "title":"Medical Administration",
      "category":["data analysis","database administration","health care","health informatics","health information technology","medical assistant","medical charting","medical records","health informatics"],
      "match":"H"
    },
    {
      "id":"CGW-OSS-001",
      "branch":"Coast Guard",
      "branchImage":"assets/images/coast_guard.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=CGW-OSS-001",
      "title":"Operations Systems",
      "category":["health care specialist","pharmacy specialist","network systems","network security"],
      "match":"M"
    },
    {
      "id":"LDO-642X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-642X-004",
      "title":"Data Processing",
      "category":["computer network","Network analyst","network security","network systems","computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-645X-003",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-645X-003",
      "title":"Intelligence",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"LDO-646X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=LDO-646X-004",
      "title":"Meteorology/Oceanography",
      "category":["computer network","data analysis","Network analyst","network security","network systems"],
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
      "category":["business analytics","business intelligence","computer network","database administration","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MCE-0689-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-0689-001",
      "title":"Information Assurance Technician",
      "category":["computer network","data analysis","database","database administration","health information technology","health technician","information technology","Network analyst","network security","network systems","pharmacy technician"],
      "match":"H"
    },
    {
      "id":"MCE-2161-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2161-00",
      "title":"Machinist",
      "category":["business analytics"],
      "match":"M"
    },
    {
      "id":"MCE-2171-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2171-001",
      "title":"Electro-Optical Ordnance Repairer",
      "category":["business analytics","business intelligence","computer network",],
      "match":"M"
    },
    {
      "id":"MCE-2181-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2181-001",
      "title":"Senior Ground Ordnance Weapons Chief",
      "category":["business analytics","business intelligence","computer network","Software development"],
      "match":"M"
    },
    {
      "id":"MCE-2823-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2823-001",
      "title":"Technical Control Chief",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MCE-2862-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2862-00",
      "title":"Electronics Maintenance Technician",
      "category":["computer network","Network analyst","network security","network systems","electronic health records","health technician","pharmacy technician"],
      "match":"H"
    },
    {
      "id":"MCE-2874-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-2874-001",
      "title":"Metrology Technician",
      "category":["health technician","network systems"],
      "match":"H"
    },
    {
      "id":"MCE-3432-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-3432-001",
      "title":"Finance Technician",
      "category":["computer network","health technician","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"MCE-5974-001",
      "branch":"Marine Corps",
      "branchImage":"assets/images/marine_corps.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MCE-5974-001",
      "title":"Tactical Data Systems Technician",
      "category":["computer network","database administration","health information technology","health technician","information technology","Network analyst","network security","network systems","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"MOS-14J-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-14J-002",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"M"
    },
    {
      "id":"MOS-25B-003",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25B-003",
      "title":"Information Technology Specialist",
      "category":["health care specialist","pharmacy specialist","help desk","healthcare technology"],
      "match":"H"
    },
    {
      "id":"MOS-25N-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25N-001",
      "title":"Nodal Network Systems Operator-Maintainer",
      "category":["computer network"],
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
      "category":["computer network"],
      "match":"M"
    },
    {
      "id":"MOS-25U-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25U-001",
      "title":"Signal Support Systems Specialist",
      "category":["computer network","Network analyst","network security","network systems"],
      "match":"H"
    },
    {
      "id":"MOS-25U-002",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-25U-001",
      "title":"Signal Support Systems Specialist",
      "category":["health care specialist"],
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
      "category":["health care database"],
      "match":"H"
    },
    {
      "id":"MOS-68W-001",
      "branch":"Army",
      "branchImage":"assets/images/army.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=MOS-68W-001",
      "title":"Health Care Specialist",
      "category":["electronic health records","health care assistant","health care database","health care specialist","health information technology","health technician","information technology","patient care","pharmacy specialist"],
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
      "category":["computer network"],
      "match":"M"
    },
    {
      "id":"NER-AS-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AT-005",
      "title":"Aviation Electronics Technician (AT)",
      "category":["computer network"],
      "match":"M"
    },
    {
      "id":"NER-AT-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AT-005",
      "title":"Aviation Electronics Technician (AT)",
      "category":["electronic health records","health technician","network systems","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"NER-AZ-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-AZ-004",
      "title":"Aviation Maintenance Administrationman",
      "category":["business analytics","health information technology","information technology","network systems"],
      "match":"M"
    },
    {
      "id":"NER-CTA-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTA-005",
      "title":"Cryptologic Technician, Administrative",
      "category":["computer network","data analysis","database","database administration","health technician","network security","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"NER-CTI-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTI-005",
      "title":"Cryptologic Technician, Interpretive",
      "category":["computer network","data analysis","database","database administration","health information technology","health technician","information technology","pharmacy technician","network systems","network security"],
      "match":"M"
    },
    {
      "id":"NER-CTM-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTM-005",
      "title":"Cryptologic Technician, Maintenance",
      "category":["network security","computer network","health technician","Network analyst","network systems","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"NER-CTN-002",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTN-002",
      "title":"Cryptologic Technician Networks",
      "category":["business analytics","business intelligence","data analysis","database","database administration","health technician","network administrator","Network analyst","network systems","pharmacy technician","computer network","network security"],
      "match":"H"
    },
    {
      "id":"NER-CTR-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTR-005",
      "title":"Communications Intelligence Collection Operator",
      "category":["network security","computer network","data analysis","database","database administration","Network analyst","network systems"],
      "match":"H"
    },
    {
      "id":"NER-CTT-005",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-CTT-005",
      "title":"Cryptologic Technician, Technical",
      "category":["business analytics","business intelligence","computer network","data analysis","database","database administration","health information technology","health technician","information technology","network security","network systems","pharmacy technician"],
      "match":"H"
    },
    {
      "id":"NER-ETR-002",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-ETR-002",
      "title":"Electronics Technician, (Communications) ",
      "category":["computer network","electronic health records","health information technology","health technician","information technology","network security","network systems","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"NER-HM-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-HM-004",
      "title":"Hospital Corpsman",
      "category":["database administration","health care","health informatics","health informatics","health information technology","information technology","pharmacy","pharmacy"],
      "match":"M"
    },
    {
      "id":"NER-HN-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-HN-004",
      "title":"Hospitalman",
      "category":["health care","health informatics","health information technology","pharmacy"],
      "match":"H"
    },
    {
      "id":"NER-IS-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-IS-004",
      "title":"Intelligence Specialist",
      "category":["business intelligence","data analysis","health care specialist","health information technology","information technology","network systems","pharmacy specialist"],
      "match":"M"
    },
    {
      "id":"NER-IT-003",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-IT-003",
      "title":"Information Systems Technician ",
      "category":["business analytics","business intelligence","computer network","database administration","health information technology","health technician","information technology","Network analyst","network security","network systems","pharmacy technician"],
      "match":"H"
    },
    {
      "id":"NER-PS-001",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-PS-001",
      "title":"Personnel Specialist",
      "category":["health care specialist","health information technology","information technology","network systems","pharmacy specialist"],
      "match":"M"
    },
    {
      "id":"NER-YN-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NER-YN-004",
      "title":"Yeoman",
      "category":["database administration"],
      "match":"M"
    },
    {
      "id":"NWO-742X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-742X-004",
      "title":"Data Processing Technician",
      "category":["computer network","health technician","Network analyst","network security","network systems","pharmacy technician","network security"],
      "match":"H"
    },
    {
      "id":"NWO-744X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-744X-004",
      "title":"Cryptologic Technician",
      "category":["computer network","health technician","Network analyst","network security","network systems","pharmacy technician"],
      "match":"M"
    },
    {
      "id":"NWO-745X-004",
      "branch":"Navy",
      "branchImage":"assets/images/navy.gif",
      "url":"http://www2.acenet.edu/militaryguide/ShowAceOccupations.cfm?ACEID=NWO-745X-004",
      "title":"Intelligence Technician",
      "category":["computer network","health technician","Network analyst","network systems","pharmacy technician"],
      "match":"M"
    }
  ]
});

export default Crosswalk;
