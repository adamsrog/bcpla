import DS from 'ember-data';

var Occupation = DS.Model.extend({
	startDate: DS.attr('string'),
	endDate: DS.attr('string'),
	title: DS.attr('string'),
	category: DS.attr('string')
});

Occupation.reopenClass({
	FIXTURES: [
    {
      "id":"AF-1402-0082",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Journeyman by Correspondence (4/08-Present)",
      "category":"Software Development"
    },
    {
      "id":"AF-1408-0115",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Craftsman by Correspondence (6/05-Present)",
      "category":"Software Development"
    },
    {
      "id":"AF-1704-0252",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Aircraft Maintenance Officer (Accelerated Field Grade) (10/05-Present)",
      "category":"Software Development"
    },
    {
      "id":"AF-1722-0006",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Fire Instructor III by Correspondence (4/11-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1402-0210",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist, ALC (11/07-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1404-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1405-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Capabilities Developments (10/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1406-0177",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Unit Trainer (UTC) (4/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1601-0246",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Combat Engineer Advanced Senior Leader (10/05-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1704-0246",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Unmanned Aerial Vehicle Operator (10/04-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1704-0268",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Short Range (SR) Aerial Vehicle (AV) Operator (10/04-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-0918",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Advanced Leader (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-2201-0431",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Bradley Infantry Fighting Vehicle System Master Gunner (4/03-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-2201-0478",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"M1A1 Abrams Master Gunner (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-2201-0684",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Mobile Gun System Master Gunner (4/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-2201-0767",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"M1A2 SEP Master Gunner (10/14-Present)",
      "category":"Software Development"
    },
    {
      "id":"AR-2202-0007",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Air Traffic and Airspace Management Technician (10/07-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-0326-0001",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Boat Force Command Cadre (3/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-0326-0002",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Company Commander (3/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0012",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0018",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Course Development (1/08-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0019",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Course Development: Nonresident (CDC-NR) (1/08-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0020",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"Maritime Law Enforcement Facilitator (12/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1406-0022",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Organizational Performance Consultant (1/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1708-0004",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Boatswain's Mate First Class Performance Qualification Guide (1/08-Present)",
      "category":"Software Development"
    },
    {
      "id":"CG-1717-0013",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Leadership and Management School (LAMS) (8/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"DD-1408-0013",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Intermediate Software Acquisition Management (8/04-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-1401-0014",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Financial Management Officer - Finance (FMOC) (2/05-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-1402-0055",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Financial Management Resource Analysis (5/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-1402-0071",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Advanced Finance (2/05-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-1403-0015",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Intermediate Personnel Administration (11/03-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-1405-0035",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Enlisted Supply Basic (ESBC) (10/06-Present)",
      "category":"Software Development"
    },
    {
      "id":"MC-2204-0198",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological and Nuclear (CBRN) Basic Warrant Officer (5/11-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1406-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Navy Instructor Training (10/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1406-0055",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Navy Incident Command System Train-the-Trainer (8/10-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1406-0060",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Task Based Curriculum Development (9/12-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1715-2250",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Marine Gas Turbine Inspector Training and Certification (8/06-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-1728-0030",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Senior Legalman Leadership (7/06-Present)",
      "category":"Software Development"
    },
    {
      "id":"NV-2202-0175",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Senior Enlisted Academy Resident (8/09-Present)",
      "category":"Software Development"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1402-0090",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Operations Journeyman by Correspondence (8/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1408-0114",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Communications - Computers Systems Planning and Implementation Management Journeyman by Correspondence (11/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1715-0961",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Basic Communications Officer Training (4/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1715-0962",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Communications Officer Engineer (12/06-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1715-0970",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Common Journeyman by Correspondence (5/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1715-0972",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Network Integration Journeyman by Correspondence (12/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1304-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"FA Meteorological Section Sergeant BNCOC (10/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0169",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0176",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"USAF Tactical Receive System Maintenance (10/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0202",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Signal Systems Support Warrant Officer Basic (WOB) (10/02-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0224",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (24A) (10/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0225",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (53A) (10/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0229",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0233",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (1/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0236",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0239",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0243",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0244",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0246",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0249",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Technology Specialist Basic Noncommissioned Officer (BNCOC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0250",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0251",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0266",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0270",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (4/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0272",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0275",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Signal Warrant Officer Staff Follow-On (5/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0037",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0065",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1404-0068",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operators/Maintainer Advanced Leaders (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1408-0298",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Basic Officer Leader Branch (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0618",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cable Systems Installer-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0734",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Signals Intelligence (SIGINT) Analyst Advanced Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0918",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Advanced Leader (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0921",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0925",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Satellite Systems/Network Coordinator (1/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-0988",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Computer Detection Systems Repairer (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1053",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Command and Control Systems Integrator Warrant Officer Basic (7/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1078",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Common Core (6/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1111",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-1) (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1116",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"SF Qual (SF Communications Sergeant) ALC (2/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1129",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer ECB-1 (11/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1130",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer EAC-2 (10/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1141",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (CP34) (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1142",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Professional (CP34) (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1164",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS TNG) (8/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1176",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1186",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer Advanced Leader (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1190",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1198",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"MLRS Fire Direction Specialist (10/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2201-0636",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System (MLRS) Fire Direction Specialist (11/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2201-0658",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advanced (4/06-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0008",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0019",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0021",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0022",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (6/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0023",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network System Operator-Maintainer Y2 Transition (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2202-0024",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-2204-0110",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense Battle Management Systems Operator (7/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"CG-1715-0176",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"378' WHEC Shipboard Command and Control System (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"DD-1709-0007",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Television Equipment Maintenance (10/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1402-0088",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Technical Controller (4/06-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1402-0092",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Enhanced Position Location Reporting System (EPLRS) Managers (7/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1402-0093",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (7/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1402-0094",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Data Systems Technician (7/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1715-0191",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Technical Controller Chief (9/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-1715-0238",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Support Wide Area Network (SWAN) RF Incidental (10/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0132",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Integrated Submarine Automated Broadcast Processing System (ISABPS) Maintenance (4/02-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0203",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Intelligence Center Maintenance (ICM) (5/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0224",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"LHD Computer and Peripheral Equipment Maintenance (4/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1402-0298",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Submarine Local Area Network (3/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1704-0625",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Wire Bundle/Connector/Fiber Optic Cable Repair Organizational Maintenance (11/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1714-0059",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Construction Electrician Power and Communications Cable Splicing (5/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1714-0094",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Fiber Optic Data Multiplex System, AN/USQ-82 (V), Operation and Maintenance (6/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-0546",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Advanced Integrated Voice Communications Network (IVCN) System Maintenance (3/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1659",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician Maintenance Class A (7/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1715",
      "startDate":"11/1/1997",
      "endDate":"Present",
      "title":"AN/USQ-82(V) Data Multiplex System Technician (11/97-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1745",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Aegis Combat System Maintenance Manager (CG-65-73/DDG) (9/02-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1751",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapon System MK7 Operation and Maintenance TRK 2 (12/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1874",
      "startDate":"6/1/2003",
      "endDate":"Present",
      "title":"Combat Direction Finding (CDF) Maintenance Technician (6/03-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1875",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Advanced Communications Signals Analysis (8/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-1962",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AN/AQS-13 Sonar Systems Intermediate Level Maintenance (7/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2016",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Naval Modular Automated Communication Systems (NAVMACS) II Maintenance (6/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2023",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-53D(V) Maintenance (2/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2040",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Information and Communication Manager (7/04-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2041",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Electronic Key Management System (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2078",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapons System MK7 Operation and Maintenance Trk 3 (11/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2084",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Track Data Coordinator (TDC) (2/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2090",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Ship Self Defense System (SSDS) MK 1 MOD 0 Maintenance Technician (11/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2094",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"AN/SYQ-24(V) LHA Advanced Combat Direction System Maintenance (2/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2137",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"CG-47 Smart Ship Maintenance Training (10/03-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2155",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician Operation and Maintenance (ACNT Trk 2) (2/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2221",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Ship Self Defense System Mark 2 Maintenance (6/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2227",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"NATO SeaSparrow Surface Missile System MK57 MODS 4-9 Operation and Maintenance Differences (7/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2240",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"NATO Sea Sparrow Surface Missile System (NSSM) Mk 57 MOD 10-13 Operation and Maintenance (O&M) Differences (1/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2258",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AEGIS Milspec Fire Control Systems/400 HZ Virtual Training Path (7/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2261",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Littoral Combat Ship Computer Technician Fundamentals Virtual Training Path (1/07-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2268",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/UYQ-21 CVN/LHD Display System Virtual Training Path (10/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2285",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Common Submarine Radio Room Basic Maintenance (4/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2297",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"TOC and Mobile Systems Automated Data Processing (ADP) Suite Maintenance (6/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2306",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Journeyman Communications (JCC) (1/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2319",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Gigabit Ethernet Data Multiplex System (GEDMS) Maintenance and Operations Training (6/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2323",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Ship Self-Defense System (SSDS) Open Architecture (OA) Maintenance (9/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2328",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Global Command And Control-Maritime (GCCS-M) 4.1 System Administrator (2/13-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2330",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89A (V) 15 Maintenance (5/12-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"Network Analyst"
    },
    {
      "id":"AR-1715-1203",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief Senior Leader (10/14-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-1717-0219",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"High Speed Craft Deck Systems (10/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-1717-0221",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Unmanned Aircraft Systems (UAS) Operator Supervisor (15W40) ANCOC (6/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0008",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0019",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0020",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0021",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0022",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (6/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0023",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network System Operator-Maintainer Y2 Transition (10/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2202-0024",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AR-2204-0110",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense Battle Management Systems Operator (7/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1704-0032",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Hydraulic Systems and Equipment (4/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1704-0071",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"HC-144A Airframe Systems and Powerplant Training (10/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1710-0025",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Weapons Systems Fundamentals (CG-WSF) (1/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0138",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"NAVMACS/SATCOM Systems II (COM-05A) (3/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0169",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician \"A\" School (9/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-1715-0192",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"National Security Cutter External Communications Systems Maintainer (4/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-2202-0007",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"110' A & B WPB Control Systems (10/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-2205-0047",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Weapons Systems Operator (WSO) (6/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"CG-2205-0049",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"National Security Cutter Tactical Systems Maintenance (5/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"DD-1408-0058",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Systems Sustainment Management Fundamentals (10/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"DD-1408-0068",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Technical Leadership in Systems Engineering (4/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"DD-1408-0069",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Intermediate Information Systems Acquisition (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"DD-1715-0022",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Broadcast Radio/ Television Systems Maintenance (3/02-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1402-0093",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (7/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1402-0094",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Data Systems Technician (7/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1703-0031",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Tactical Vehicle Fuel and Exhaust Systems by Correspondence (5/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1710-0047",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Tank Systems Mechanic (9/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1714-0014",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Basic Engineer Equipment Electrical Systems Technician (3/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0217",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Telephone Systems/Personal Computer Intermediate Repair (9/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0238",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Support Wide Area Network (SWAN) RF Incidental (10/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0246",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Telephone Systems Installer Maintainer (2/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"MC-1715-0247",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Air Defense Systems Technician (8/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1402-0115",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Machinery Systems Console Maintenance, LSD-41 Console (11/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1402-0265",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Tomahawk Land Attack Missile Planning Systems Afloat Route Planner (9/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1402-0298",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Submarine Local Area Network (3/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1406-0050",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Combat Systems Senior Enlisted (5/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1601-0029",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Air Compressor and Compressed Air Systems Component Maintenance (4/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1601-0045",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Engineering Bulk Fuel Systems Shore Technician (6/02-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1701-0016",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"E-2/C-2A Environmental Systems Organizational Maintenance (6/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1701-0019",
      "startDate":"6/1/2001",
      "endDate":"Present",
      "title":"Refrigeration and Air Conditioning Systems Technician (6/01-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1702-0002",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Shipboard Laundry Systems Maintenance (3/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1703-0030",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"Hydraulic and Pneumatic Systems (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0358",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"EA-6B Electrical and Instrument Systems (Career) Organizational Maintenance (12/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0360",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"C-2A T56-A-425 Powerplant and Related Systems (Career) Organizational Maintenance (4/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0369",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"E-2/C-2 Airframe and Hydraulic Systems (Career) Organizational Maintenance (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0371",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"C-2A Avionics Systems Integrated Organizational Maintenance (9/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0390",
      "startDate":"8/1/1995",
      "endDate":"Present",
      "title":"FFG-7 Fin Stabilizer Systems (8/95-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0404",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"AV-8B Avionics Technician Organizational Maintenance (1/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0405",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Fixed-Wing Electrical/Instrument Systems Intermediate Maintenance (2/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0411",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"EA-6B Hydraulic/Structures Systems (Career) Organizational Maintenance (7/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0445",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"E-6A Power Plant and Related Systems Organizational Maintenance (6/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0447",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"E-6 Environmental Control Systems Organizational Maintenance (10/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0448",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"E-6 Electrical and Instrument Systems Organizational Maintenance (6/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0449",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"E-6 Power Plant and Related Systems (Career) Organizational Maintenance (3/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0450",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"E-6 Airframes and Hydraulics Systems (Initial) Organizational Maintenance (8/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0451",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"E6 Airframes and Hydraulics Systems (Career) Organizational Maintenance (10/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0467",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Damage Control Console/Fuel Systems Control (10/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0471",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"F/A-18 Avionics Systems Organizational Maintenance (11/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0474",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"F/A-18 Avionics Systems (Career) Organizational Maintenance (5/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0475",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"F/A-18A/B/C/D Environmental Control Systems and Safety Equipment (Initial) Organizational Maintenance (12/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0476",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"F/A-18A/B/C/D Power Plants and Related Systems Organizational Maintenance (11/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0477",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"AH-1W Powertrains, Rotors and Related Systems Organizational Maintenance (5/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0478",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"UH-1N Power Trains, Rotors and Related Systems Organizational Maintenance (7/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0483",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"H-1 Airframes Systems Organizational Maintenance (2/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0513",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"H-60 Powerplant and Related Systems (Career) Organizational Maintenance (6/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0514",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"H-60 Powerplants and Related Systems Organizational Maintenance (5/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0515",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"H-60 Airframes and Related Systems (Initial) Organizational Maintenance (2/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0527",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"P-3 Power Plant and Related Systems (Initial) Organizational Maintenance (7/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0529",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"P-3 Environmental Control Systems Organizational Maintenance (12/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0532",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"P-3 Powerplant and Related Systems (Career) Organizational Maintenance (3/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0533",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"P-3C Electrical Systems (Career) Organizational Maintenance (2/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0536",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"EA-6B Communication, Navigation, and Radar Systems (Career) Organizational Maintenance (1/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0537",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"EA-6B Communication, Navigation, and Radar Systems (Initial) Organizational Maintenance (6/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0538",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"EA-6B Hydraulic/Structures Systems (Initial) Organizational Maintenance (6/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0541",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"EA-6B Power Plants and Related Systems (Initial) Organizational Maintenance (6/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0544",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"EP-3E Communication/Navigation Systems Organizational Maintenance (3/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0546",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"E6 Electric and Instrument Systems (Career) Organizational Maintenance (12/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0553",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"CH-53D/E Communication/Navigation/Identification/Electronic Countermeasure Systems OMA (8/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0578",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Helo Automatic Flight Control Systems Intermediate Maintenance (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0590",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"C-2A (R) T56-A-425 Power Plant and Related Systems Organizational Maintenance (10/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0600",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"E-2C Group II Electrical and Instrument Systems (CAREER) Organizational Maintenance (11/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0601",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"E-2/C-2 Airframe and Hydraulic Systems (Initial) Organizational Maintenance (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0603",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"E-2C Powerplant and Related Systems Organizational Maintenance (5/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0605",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"E-2C Electrical and Instruments Systems (Initial) Organizational Maintenance (12/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0608",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"MH-53E Power Plants, Rotors and Related Systems Organizational Maintenance (5/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0609",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"E-2C (Group II) T-56-A-427 Powerplant and Related Systems (Initial) Organizational Maintenance (9/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0611",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"E-2C Group II AEW Systems Organizational Maintenance (4/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0623",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Powerplants and Related Systems (Initial) Organizational Maintenance (11/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0626",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Powerplants and Related Systems (Career) Organizational Maintenance (11/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0627",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Powerplant and Related Systems (Difference) Organizational Maintenance (11/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0652",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"V-22 Flight Control Systems (Initial) Organizational Maintenance (1/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0654",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"V-22 Hydraulic Systems (Initial) Organizational Maintenance (10/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0658",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"V-22 Powerplants and Related Systems (Initial) Organizational Maintenance (6/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0663",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"V-22 Cockpit Management Systems (Initial) Organizational Maintenance (3/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0664",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"V-22 Electrical Systems (Initial) Organizational Maintenance Course (9/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0665",
      "startDate":"8/1/2003",
      "endDate":"Present",
      "title":"KC-130J Electrical Systems Organizational Maintenance (8/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0670",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"H-60 Electrical/Instrument and Flight Control Systems Organizational Maintenance (4/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0681",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"V-22 Flight Control Systems (Transition) Organizational Maintenance (3/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0683",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"V-22 Hydraulic Systems (Transition) Organizational Maintenance (3/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0686",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"E-2C HE2K AEW Systems Organizational Maintenance (2/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0693",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"AH-1Z/UH-1Y Powertrains, Rotors and Related Systems Organizational Level Differences Training (8/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0695",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Communication, Navigation, Identification, and Fire Control Systems Organizational Maintenance Differences (10/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0696",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"H-1 Airframe and Hydraulic Systems Organizational Maintenance Differences (2/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0697",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"AH-1Z Armament Systems Organizational Maintenance (6/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0698",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"UH-1Y Armament Systems Organizational Maintenance (5/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0704",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"E-2D Power Plant and Related Systems Initial Organizational Maintenance (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1704-0705",
      "startDate":"9/1/2013",
      "endDate":"Present",
      "title":"E-2D Power Plant and Related Systems Career Organizational Maintenance (9/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1710-0135",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Landing Craft, Air Cushion (LCAC) Craft Control Systems Maintenance (1/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1710-0137",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Propulsion Alarms and Indicators (4/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1710-0147",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Mechanical Maintenance Core (3/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1710-0162",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DDG-51/AOE-6 (10/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1710-0278",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Engines, Fuel, and Electrical Systems (5/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1712-0030",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Submarine Steering and Diving Systems Advanced Maintenance (5/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0069",
      "startDate":"8/1/2003",
      "endDate":"Present",
      "title":"F/A-18 Electrical Systems WRA Repair Intermediate Maintenance (8/03-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0093",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"FFG-7 Auxiliary Electrical Subsystems Maintenance (1/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0097",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"F/A-18 Electrical/Instrument Systems Organizational Maintenance (4/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0100",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"H-1 Electrical and Stability Control Augmentation Systems Organizational Maintenance (2/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0107",
      "startDate":"8/1/2000",
      "endDate":"Present",
      "title":"EA-6B Electrical and Instrument Systems (Initial) Organizational Maintenance (8/00-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0112",
      "startDate":"12/1/2011",
      "endDate":"Present",
      "title":"F/A-18E/F Electrical/Instruments Systems Organizational Maintenance (12/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1714-0115",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"F/A-18E/F Electrical/Instruments Systems (Difference) Organizational Maintenance (3/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-0546",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Advanced Integrated Voice Communications Network (IVCN) System Maintenance (3/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1288",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Lamps MK-III Recovery Assist, Securing and Transversing (RAST) Mechanical Technician (5/02-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1340",
      "startDate":"9/1/2001",
      "endDate":"Present",
      "title":"High Frequency Systems Maintenance Technician (9/01-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1537",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Carrier-Based Tactical Support Center (CV-TSC) Combat Systems Maintenance Technician (3/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1761",
      "startDate":"7/1/2000",
      "endDate":"Present",
      "title":"AN/FSC-104(V) Standard Emergency Communication Systems, Class G1 (7/00-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1762",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radio Maintenance (8/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1776",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Ultra High Frequency Systems (UHF) Technician (6/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1943",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"F/A-18 Infrared Detection Systems Organizational Maintenance (12/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1957",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"H-60 Armament and Related Systems Organizational Maintenance (4/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1958",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"SH-60F / HH-60H Electronic Systems (Initial) Organizational Maintenance (6/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1960",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"SH-60F / HH-60H Electronic Systems (Career) Organizational Maintenance (6/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1962",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AN/AQS-13 Sonar Systems Intermediate Level Maintenance (7/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-1971",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"SH-60B LAMPS MK III Weapons Systems Technician (Initial) Organizational Maintenance (3/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2015",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SYQ-7 (V) 2 Naval Modular Automated Communications Systems Maintenance (2/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2016",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Naval Modular Automated Communication Systems (NAVMACS) II Maintenance (6/04-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2065",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"E-6B Avionics Systems (Career) Organizational Maintenance (11/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2085",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Self Defense Surface Missile Systems Technician (11/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2151",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"CH-46/CH53E Automatic Flight Control Systems Intermediate Maintenance (1/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2154",
      "startDate":"5/1/1997",
      "endDate":"Present",
      "title":"SH-60B LAMPS MK III Weapon Systems Technician (Career) Organizational Maintenance (5/97-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2155",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician Operation and Maintenance (ACNT Trk 2) (2/05-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2171",
      "startDate":"12/1/2002",
      "endDate":"Present",
      "title":"Electronic Auxiliary Control Systems Component Maintenance (12/02-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2178",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician Electrical Apprentice Technical Training (8/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2196",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"E-2C HE2K (Career) AEW Systems Organizational Maintenance (5/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2247",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"E-6B Flight Deck Avionics Systems Multifunction Display Organizational Maintenance (12/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2258",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AEGIS Milspec Fire Control Systems/400 HZ Virtual Training Path (7/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2259",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"AEGIS Cots Fire Control Systems/400HZ Virtual Training Path (9/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2271",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"V-22 Electrical Systems (Transition) Organizational Maintenance (9/09-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2294",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Tactical Mobile Systems Fundamentals (10/08-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2297",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"TOC and Mobile Systems Automated Data Processing (ADP) Suite Maintenance (6/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2308",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Global Command And Control System-Maritime (GCCS-M) 4.0.3 Systems Administrator (11/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2311",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"H-1 Y/Z Electrical and Flight Control Systems Organizational Maintenance (8/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2312",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"H-1 Communications and Navigation Systems Organizational Maintenance (12/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2313",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"AH-1Z/UH-1Y Electrical Systems Organizational Maintenance Differences (12/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2316",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"AH-1Z/UH-1Y Weapons Delivery Systems Organizational Maintenance (12/10-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2335",
      "startDate":"9/1/2013",
      "endDate":"Present",
      "title":"E-2D AEW Systems Initial Organizational Maintenance (9/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2336",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"E-2D Electrical and Instruments Systems Career Organizational Maintenance (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2337",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"E-2D Electrical and Instruments Systems Career Organizational Maintenance (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2343",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"E-2D AEW Systems Career Organizational Maintenance (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2345",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Automated Digital Networking System AN/USQ 144 H (V) 2/4 (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2346",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Automated Digital Network System (ADNS) AN/USQ-144D (V) 1/K (V) 1 (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2347",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Automated Digital Network System (ADNS) Kilo (V) 2 (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2348",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 4.0 (6/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2349",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Automated Digital Network System Juliet (V) 2/4 (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2350",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 3.5 (8/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2352",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Charlie 3.X (7/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1715-2353",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Automated Digital Network System (ADNS) AN/USQ-144K (V) 5 Broadcast Command Authority (BCA) (10/13-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1720-0011",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Power, Distribution Systems, and Line Vehicles (3/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1722-0027",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Basic Integrated Voice Communications Network System Maintenance (10/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1731-0003",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Landing Craft, Air Cushion (LCAD) Propulsion and Lift Systems Maintenance (1/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-1732-0023",
      "startDate":"8/1/1995",
      "endDate":"Present",
      "title":"FFG-7 Auxiliary Mechanical Systems Maintenance (8/95-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-2202-0202",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"EA-6B Armament Systems Organizational Maintenance (1/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-2202-0215",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Theater Battle Management Core Systems (TBMCS V1.1.3) User (3/07-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-2202-0216",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Tomahawk All-Up-Round Handling and Maintenance for Capsule Launching System, Vertical Launching Systems (6/06-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-2202-0220",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Littoral Combat Ship-1 Spiral 0 Capstone Defensive Systems Operator (DSO) (2/11-Present)",
      "category":"Network Systems"
    },
    {
      "id":"NV-2202-0221",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Littoral Combat Ship-2 Spiral 0 Combat Systems Manager (CSM) Capstone (1/12-Present)",
      "category":"Network Systems"
    },
    {
      "id":"AF-0802-0038",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Mishap Investigation Non-aviation (MINA) (1/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-0802-0043",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Aircraft Mishap Investigation (AMIC) (10/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1304-0028",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Weather Craftsman (1/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1406-0134",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"F-16C/D Initial Qualification (ANG) (9/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1406-0138",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"F-16C/D Requalification (ANG) (5/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1406-0140",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"F-16C/D Requalification (3/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1406-0142",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"F-16 C/D Initial Qualification (3/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1408-0145",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Financial Management Officer (10/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1606-0198",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"KC-10 Pilot Initial Qualification (7/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1606-0201",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"KC-10 Aircraft Commander Initial Qualification (9/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1606-0202",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"KC-10 Pilot Re-Qualification (9/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1704-0270",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Basic Operational Training F-16C/D (5/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1715-0871",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Airborne Mission System Specialty Journeyman (5/01-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1715-0899",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Computer, Network, Switching, and Cryptographic Systems Journeyman by Correspondence (6/02-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1715-0940",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Communications Cable and Antenna Systems Journeyman by Correspondence (11/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1715-0961",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Basic Communications Officer Training (4/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-0707-0031",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Captains Career (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-0707-0032",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Civil Affairs Medical Sergeant (1/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1205-0012",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Band Basic Noncommissioned Officer (BNCOC) (10/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1304-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"FA Meteorological Section Sergeant BNCOC (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1304-0023",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Battlefield Weather (1/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0244",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0257",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Oracle DBA I (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0267",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1402-0278",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Operations Research Systems Analysis (ORSA) Military Application (1/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1405-0307",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Acquisition Intermediate Contracting (10/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1406-0125",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Senior Leader (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0213",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Captains Career (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0293",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Departmental Resource Management and Logistics (5/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0344",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense (AD) Battle Management Systems Operator (7/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0346",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Acquisition Intermediate Contracting (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0350",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery TAC data SYS spec Advanced Leader (ALC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1408-0351",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Field Artillery TAC Data SYS spec Advanced Leader (ALC) (11/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1512-0020",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Psychological Operations Qualification (PSYOP Specialist) (9/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1601-0030",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Petroleum Laboratory Specialist AIT (10/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1601-0109",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Fire Support Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1601-0246",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Combat Engineer Advanced Senior Leader (10/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1601-0247",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Combat Engineer Senior Leaders (SLC) (10/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1601-0263",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"NBC Reconnaissance for Brigade Combat Teams (5/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1606-0229",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Intelligence Analyst, Advanced Leader (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1606-0234",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Human Intelligence Collector Advanced Leader (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1606-0272",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"All-Source Intelligence Technician (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1704-0246",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Unmanned Aerial Vehicle Operator (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1710-0275",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Technical Engineer (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-0991",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Radio/Communication Security (COMSEC) Repairer (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1071",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Common Ground Station Operator (3/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1169",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Human Intelligence Collector (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1174",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Human Intelligence Collector (1/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1182",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Hunter Unmanned Aircraft System Repairer (7/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1715-1183",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Unmanned Aircraft System Repairer (10/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1717-0169",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Operational Fire Direction Specialist, Senior Leader (SLC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1717-0195",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"OH-58D (R) Maintenance Test Pilot (2/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1720-0012",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Prime Power Production Specialist (1/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1720-0015",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leaders (ALC) (1/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1720-0240",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (1/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1720-0241",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leader (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1720-0242",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1728-0084",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Human Intelligence Collector (10/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1728-0125",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-1728-0151",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Intelligence Analyst (10/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0501",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0511",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant Advanced Noncommissioned Officer (ANCOC) (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0619",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Special Forces Qualification (18A AOC Training) (6/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0621",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Special Forces Qualification (18C MOS Training) (6/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0638",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist (10/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0653",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0654",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0659",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advance (4/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0768",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Mechanized Leader (10/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AR-2201-0769",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Bradley Commander Certification (10/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"CG-1304-0022",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Marine Science Technician, First Class (8/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"CG-1715-0169",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician \"A\" School (9/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"CG-2202-0010",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Intelligence Specialist (9/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"DD-1512-0003",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Advisor (EOAC) (10/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"DD-1601-0022",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Advanced Geodetic Survey (AGS) (2/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"DD-1601-0035",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"12Y30 Geospatial Engineering- Advanced Leaders (GE-ALC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"DD-1601-0036",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"21Y Geospatial Engineer (GEC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"DD-1601-0044",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician- Warrant Officer Advanced (GET-WOAC) (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1402-0055",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Financial Management Resource Analysis (5/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1402-0084",
      "startDate":"1/1/1998",
      "endDate":"Present",
      "title":"Communications Security by Correspondence (1/98-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1405-0054",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Ground Supply Chiefs (10/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0018",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Marine Ground Task Force Intelligence Specialist Career (6/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0019",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Marine Ground Task Force Intelligence Specialist Career (3/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0020",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"United States Marine Corps Ground Intelligence Officer (11/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0021",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Marine Ground Task Force Counterintelligence/HUMINT Basic (3/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0023",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Tactical Imagery Analysis (3/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0024",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"European I West Cryptologic Linguist(Spanish) (1/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0025",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Apprentice Cryptologic Language Analyst (Korean) (2/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1606-0026",
      "startDate":"12/1/2011",
      "endDate":"Present",
      "title":"Individual Training- MSOS (12/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1715-0116",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Basic Electronics (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-1715-0225",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Advanced Electronics (6/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"MC-2204-0194",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Marine Ground Task Force Intelligence Analysis Career (3/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1304-0013",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Aerographer's Mate, Class C1 (10/02-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1304-0028",
      "startDate":"12/1/2000",
      "endDate":"Present",
      "title":"Surface Ship ASW Specialist (12/00-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1304-0029",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89(V)15 Surface Ship Undersea Warfare Combat System Journeyman (10/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0211",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Data Link Communication System Maintenance Technician (DLCSMT) (9/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0224",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"LHD Computer and Peripheral Equipment Maintenance (4/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0253",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Structureborne Noise Vibration Monitoring (6/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0265",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Tomahawk Land Attack Missile Planning Systems Afloat Route Planner (9/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0270",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Similar to Automated Maintenance Environment (2/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0271",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"AN/SPS-48E Operation and Maintenance (11/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0277",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance IMA Data Base Administrator/Analyst Optimize (2/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0281",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Interface Control Officer (6/02-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0287",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"AN/USQ-149(V)2 Cluster Snoop System (12/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1405-0060",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Stock Control Supervisor/Force Level Relational Supply (12/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1408-0062",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Expeditionary Ground Intelligence Analyst (4/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1511-0017",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Intelligence Specialist Class A (IS A) (4/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1511-0022",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Naval Intelligence Officer Basic (NIOBC) (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1601-0032",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Water Well Drilling Technician (10/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1606-0087",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operational Intelligence Analyst \"C\" School (7/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1704-0471",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"F/A-18 Avionics Systems Organizational Maintenance (11/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1704-0529",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"P-3 Environmental Control Systems Organizational Maintenance (12/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1710-0137",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Propulsion Alarms and Indicators (4/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1233",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Tactical/Mobile (TACMOBILE) System Operator (7/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1426",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"AN/GPN-27 (V) Maintenance, Class C1 (12/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1436",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Aviation Warfare Operator, Class A1 (11/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1505",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Advanced Acoustic Analysis (7/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1533",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Tactical Support Communications (TSCOMM) Maintenance Technician (6/11-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1588",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Beacon Identification Friend or Foe MK XII System Maintenance (4/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1613",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"EA-6B Integrated Electronic Attack System (Career) Organizational Maintenance (3/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1856",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Sonar Technician Surface \"A\" School (4/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1868",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Combat Direction Finding Operator (3/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1875",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Advanced Communications Signals Analysis (8/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1886",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Intermediate Communications Signals Analyst (8/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1940",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Combined Digital Data Link/Carrier Landing System Intermediate Maintenance (3/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1942",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Combined Electronic Identification Friend or Foe (IFF) Intermediate Maintenance (6/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-1943",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"F/A-18 Infrared Detection Systems Organizational Maintenance (12/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2001",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AN/ARC-161 HF Radio Set Intermediate Maintenance (7/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2002",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"P-3C Avionics (Career) Organizational Level Maintenance (11/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2087",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"AN/SYS-2 (V) 4, 5 Operator (4/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2097",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) System Administration (3/02-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2119",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Tactical Tomahawk Weapon Control System Watch Officer (10/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2124",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89(V) 15 Surface Ship Undersea Warfare Combat System Operator (5/04-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2135",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"CG-47 Smart Ship Console Operator Training (10/03-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2198",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance OMA System Administrator/Analyst Optimize (2/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2222",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Gun Computer System MK 160 MOD 9 & 10 Operation and Maintenance Differences (2/07-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2243",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"AN/SLQ - 32B (V) 2 Maintenance (2/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2250",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Marine Gas Turbine Inspector Training and Certification (8/06-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1715-2285",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Common Submarine Radio Room Basic Maintenance (4/13-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-1728-0064",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Littoral Combat Ship (LCS) Mine Warfare and Environmental Decision Aids Library (MEDAL) Build 10 (3/08-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-2202-0013",
      "startDate":"5/1/2000",
      "endDate":"Present",
      "title":"Submarine Officers Advanced (SOAC) (5/00-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-2202-0217",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Advanced Maritime OPINTEL Analysis (AMOC) (10/10-Present)",
      "category":"Data analysis"
    },
    {
      "id":"NV-2205-0027",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"FCS Mk 98 Mod 6 Missile Technician Replacement (3/14-Present)",
      "category":"Data analysis"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"database"
    },
    {
      "id":"AR-1304-0023",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Battlefield Weather (1/07-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0257",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Oracle DBA I (10/10-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0267",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"database"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"database"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"database"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"database"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"database"
    },
    {
      "id":"AR-1408-0350",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery TAC data SYS spec Advanced Leader (ALC) (10/09-Present)",
      "category":"database"
    },
    {
      "id":"AR-1408-0351",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Field Artillery TAC Data SYS spec Advanced Leader (ALC) (11/10-Present)",
      "category":"database"
    },
    {
      "id":"AR-1717-0169",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Operational Fire Direction Specialist, Senior Leader (SLC) (10/09-Present)",
      "category":"database"
    },
    {
      "id":"AR-2201-0501",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"database"
    },
    {
      "id":"AR-2201-0511",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant Advanced Noncommissioned Officer (ANCOC) (10/04-Present)",
      "category":"database"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"database"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"database"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"database"
    },
    {
      "id":"NV-1402-0270",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Similar to Automated Maintenance Environment (2/07-Present)",
      "category":"database"
    },
    {
      "id":"NV-1402-0277",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance IMA Data Base Administrator/Analyst Optimize (2/13-Present)",
      "category":"database"
    },
    {
      "id":"NV-1405-0060",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Stock Control Supervisor/Force Level Relational Supply (12/13-Present)",
      "category":"database"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"database"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"database"
    },
    {
      "id":"NV-1715-2097",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) System Administration (3/02-Present)",
      "category":"database"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"database"
    },
    {
      "id":"NV-1715-2198",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance OMA System Administrator/Analyst Optimize (2/13-Present)",
      "category":"database"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"database"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0703-0026",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman, Part II by Correspondence (8/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0705-0004",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Diagnostic Medical Sonography Journeyman (6/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0036",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Nursing Service Management (1/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0132",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0133",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0137",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Chaplain Assistant Craftsman by Correspondence (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0153",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Civilian Personnel Management (4/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0155",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Labor-Management Relations (4/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0156",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Position Classification (11/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1709-0031",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Visual Information Photographic Specialty by Correspondence (5/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1715-0842",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Electronic Warfare Systems Journeyman by Correspondence (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1722-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Fire Officer I by Correspondence (4/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1728-0062",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Fire Officer II (2/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0063",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Acquisition Foundations (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0701-0025",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Dental Advanced Leader (7/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0021",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Clinical Nurse OIC and NCOIC Leader Development (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0043",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Advanced Nurse Leadership (ANCL) (DL) (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0044",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Advanced Nurse Leadership (ANCL) (DL) (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0059",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Patient Administration Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0799-0045",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Army Aviation Medicine Clinic Noncommissioned Officer (NCO) (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0006",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Band Advanced Noncommissioned Officer (NCO) (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0010",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Bandmaster Warrant Officer Basic (BWOBC) (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0015",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Army Bands Basic Officer Phase III (6/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1304-0023",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Battlefield Weather (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1401-0052",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Unit Pay Administration (11/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0237",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0257",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Oracle DBA I (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0258",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0267",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0268",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1405-0303",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Medical Logistics Officer (RC) (8/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1406-0225",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Military Human Resources Technician Warrant Officer Basic (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0104",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Army Medical Department Officer (AMEDD) Basic Uniformed Services University of Health Sciences (USUHS) (6/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0334",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Army National Guard Liaison/Initial Active Duty Training (IADT) Managers (11/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0350",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery TAC data SYS spec Advanced Leader (ALC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0351",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Field Artillery TAC Data SYS spec Advanced Leader (ALC) (11/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1409-0013",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Postal Operations (Resident) (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0037",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0038",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0040",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Advanced Noncommissioned Officer Course (ANCOC) (5/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1512-0033",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Information Operations (2/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0166",
      "startDate":"10/1/1998",
      "endDate":"Present",
      "title":"Aircraft Component Repairer Supervisor Advanced Noncommissioned Officer (ANCOC) (10/98-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0175",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Air Traffic Control Operator Advanced Leaders (ALC) (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0199",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician Warrant Officer Basic (10/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0169",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Operational Fire Direction Specialist, Senior Leader (SLC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0242",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Human Resources Noncommissioned Officer (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0125",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0138",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Military Police Warrant Officer Advanced (6/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0139",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Criminal Investigation Division Special Agent Warrant Officer Basic (4/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0140",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Military Police Warrant Officer Advanced (3/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0143",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Military Police Senior Leader (4/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0189",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Internment/Resettlement Specialist Advanced leaders (ALC) (TATS) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0190",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Military Police Officer Transition (4/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0191",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Military Police Officer Transition (MPOTC) (11/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0501",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0511",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant Advanced Noncommissioned Officer (ANCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0655",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Military Police Basic Officer Leader (BOLC) (1/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2204-0096",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Financial Management Basic Officer Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2204-0107",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Financial Management Technician, Advanced Leaders (ALC) (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1405-0006",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Storekeeper A School (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1409-0003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Yeoman \"A\" School (3/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1715-0169",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician \"A\" School (9/12-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1722-0018",
      "startDate":"7/1/1996",
      "endDate":"Present",
      "title":"Contingency Preparedness Command and Control (7/96-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1722-0020",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Contingency Preparedness Combined Planner and Exercise (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1728-0021",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Boarding Officer (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1728-0045",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Boarding Team Member (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1402-0012",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Attach Staff Training Program (ASTP) (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0010",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Advanced Production, Quality, and Manufacturing (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0033",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Joint Contingency Contracting (6/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0067",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Federal Acquisition Regulation (FAR) Fundamentals (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0069",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Intermediate Information Systems Acquisition (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0071",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Intermediate Cost and Price Analysis (11/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0003",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Advisor (EOAC) (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Equal Employment Opportunity (EEO) Specialist (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0006",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Counselor (2/11-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1401-0013",
      "startDate":"12/1/2011",
      "endDate":"Present",
      "title":"Basic Finance Technician (BFTC) (12/11-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1401-0016",
      "startDate":"9/1/1997",
      "endDate":"Present",
      "title":"Basic Pay and Allowances By Correspondence (9/97-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0096",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Advanced Administrative Specialist (12/10-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0097",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intermediate Administrative Specialist (9/10-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0098",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Intelligence Analysis System Workstation Administration (IWAC) (6/08-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1403-0015",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Intermediate Personnel Administration (11/03-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1405-0032",
      "startDate":"12/1/2001",
      "endDate":"Present",
      "title":"Advanced Personnel Administration (12/01-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0706-0007",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Optician NEC HM-8463 (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0803-0007",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Diver First Class (4/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0205",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Afloat C4ISR Architecture Management (4/03-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0270",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Similar to Automated Maintenance Environment (2/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0277",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance IMA Data Base Administrator/Analyst Optimize (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0278",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Intelligence Operations Server (V2) System Administration (8/02-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0054",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Aviation Support Equipment Maintenance Manager (7/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0060",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Stock Control Supervisor/Force Level Relational Supply (12/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1406-0020",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Command Career Counselor (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1408-0042",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Marine Aviation Supply Officer Qualification (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1408-0043",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Aircraft Group Fiscal Officer (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1409-0014",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Logistics Specialists A School (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1606-0016",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Master Diver Qualification (4/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0004",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Traffic Controller (3/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0416",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate Aircraft Handling- Advance (ABH-V) (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0650",
      "startDate":"1/1/2003",
      "endDate":"Present",
      "title":"Marine Air Traffic Control Officers (1/03-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-1537",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Carrier-Based Tactical Support Center (CV-TSC) Combat Systems Maintenance Technician (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-1868",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Combat Direction Finding Operator (3/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2097",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) System Administration (3/02-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2198",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance OMA System Administrator/Analyst Optimize (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2261",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Littoral Combat Ship Computer Technician Fundamentals Virtual Training Path (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2308",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Global Command And Control System-Maritime (GCCS-M) 4.0.3 Systems Administrator (11/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2328",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Global Command And Control-Maritime (GCCS-M) 4.1 System Administrator (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2348",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 4.0 (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2350",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 3.5 (8/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2352",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Charlie 3.X (7/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1728-0060",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Legalman/Legal Specialist Mid-Career (2/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-2202-0013",
      "startDate":"5/1/2000",
      "endDate":"Present",
      "title":"Submarine Officers Advanced (SOAC) (5/00-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-2204-0001",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Officer Candidate School- Class P6 (2/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0703-0026",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman, Part II by Correspondence (8/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0705-0004",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Diagnostic Medical Sonography Journeyman (6/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0036",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Nursing Service Management (1/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0132",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0133",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0137",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Chaplain Assistant Craftsman by Correspondence (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0153",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Civilian Personnel Management (4/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0155",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Labor-Management Relations (4/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0156",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Position Classification (11/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1709-0031",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Visual Information Photographic Specialty by Correspondence (5/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1715-0842",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Electronic Warfare Systems Journeyman by Correspondence (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1722-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Fire Officer I by Correspondence (4/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1728-0062",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Fire Officer II (2/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0063",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Acquisition Foundations (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0701-0025",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Dental Advanced Leader (7/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0021",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Clinical Nurse OIC and NCOIC Leader Development (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0043",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Advanced Nurse Leadership (ANCL) (DL) (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0703-0044",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Advanced Nurse Leadership (ANCL) (DL) (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0059",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Patient Administration Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-0799-0045",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Army Aviation Medicine Clinic Noncommissioned Officer (NCO) (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0006",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Band Advanced Noncommissioned Officer (NCO) (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0010",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Bandmaster Warrant Officer Basic (BWOBC) (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1205-0015",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Army Bands Basic Officer Phase III (6/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1304-0023",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Battlefield Weather (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1401-0052",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Unit Pay Administration (11/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0237",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0257",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Oracle DBA I (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0258",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0267",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0268",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1405-0303",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Medical Logistics Officer (RC) (8/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1406-0225",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Military Human Resources Technician Warrant Officer Basic (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0104",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Army Medical Department Officer (AMEDD) Basic Uniformed Services University of Health Sciences (USUHS) (6/02-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0334",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Army National Guard Liaison/Initial Active Duty Training (IADT) Managers (11/03-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0350",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery TAC data SYS spec Advanced Leader (ALC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1408-0351",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Field Artillery TAC Data SYS spec Advanced Leader (ALC) (11/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1409-0013",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Postal Operations (Resident) (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0037",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0038",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1511-0040",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Advanced Noncommissioned Officer Course (ANCOC) (5/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1512-0033",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Information Operations (2/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0166",
      "startDate":"10/1/1998",
      "endDate":"Present",
      "title":"Aircraft Component Repairer Supervisor Advanced Noncommissioned Officer (ANCOC) (10/98-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0175",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Air Traffic Control Operator Advanced Leaders (ALC) (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1704-0199",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician Warrant Officer Basic (10/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0169",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Operational Fire Direction Specialist, Senior Leader (SLC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1717-0242",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Human Resources Noncommissioned Officer (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0125",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0138",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Military Police Warrant Officer Advanced (6/11-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0139",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Criminal Investigation Division Special Agent Warrant Officer Basic (4/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0140",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Military Police Warrant Officer Advanced (3/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0143",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Military Police Senior Leader (4/13-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0189",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Internment/Resettlement Specialist Advanced leaders (ALC) (TATS) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0190",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Military Police Officer Transition (4/08-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1728-0191",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Military Police Officer Transition (MPOTC) (11/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0501",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0511",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant Advanced Noncommissioned Officer (ANCOC) (10/04-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2201-0655",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Military Police Basic Officer Leader (BOLC) (1/10-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2204-0096",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Financial Management Basic Officer Leader (10/12-Present)",
      "category":"database administration"
    },
    {
      "id":"AR-2204-0107",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Financial Management Technician, Advanced Leaders (ALC) (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1405-0006",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Storekeeper A School (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1409-0003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Yeoman \"A\" School (3/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1715-0169",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician \"A\" School (9/12-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1722-0018",
      "startDate":"7/1/1996",
      "endDate":"Present",
      "title":"Contingency Preparedness Command and Control (7/96-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1722-0020",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Contingency Preparedness Combined Planner and Exercise (7/02-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1728-0021",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Boarding Officer (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"CG-1728-0045",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Boarding Team Member (10/08-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1402-0012",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Attach Staff Training Program (ASTP) (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0010",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Advanced Production, Quality, and Manufacturing (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0033",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Joint Contingency Contracting (6/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0067",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Federal Acquisition Regulation (FAR) Fundamentals (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0069",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Intermediate Information Systems Acquisition (10/10-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1408-0071",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Intermediate Cost and Price Analysis (11/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0003",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Advisor (EOAC) (10/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Equal Employment Opportunity (EEO) Specialist (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"DD-1512-0006",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Counselor (2/11-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1401-0013",
      "startDate":"12/1/2011",
      "endDate":"Present",
      "title":"Basic Finance Technician (BFTC) (12/11-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1401-0016",
      "startDate":"9/1/1997",
      "endDate":"Present",
      "title":"Basic Pay and Allowances By Correspondence (9/97-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0096",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Advanced Administrative Specialist (12/10-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0097",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intermediate Administrative Specialist (9/10-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1402-0098",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Intelligence Analysis System Workstation Administration (IWAC) (6/08-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1403-0015",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Intermediate Personnel Administration (11/03-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1405-0032",
      "startDate":"12/1/2001",
      "endDate":"Present",
      "title":"Advanced Personnel Administration (12/01-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0706-0007",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Optician NEC HM-8463 (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-0803-0007",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Diver First Class (4/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0205",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Afloat C4ISR Architecture Management (4/03-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0270",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Similar to Automated Maintenance Environment (2/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0277",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance IMA Data Base Administrator/Analyst Optimize (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1402-0278",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Intelligence Operations Server (V2) System Administration (8/02-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0054",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Aviation Support Equipment Maintenance Manager (7/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0060",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Stock Control Supervisor/Force Level Relational Supply (12/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1406-0020",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Command Career Counselor (9/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1408-0042",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Marine Aviation Supply Officer Qualification (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1408-0043",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Aircraft Group Fiscal Officer (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1409-0014",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Logistics Specialists A School (10/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1606-0016",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Master Diver Qualification (4/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0004",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Traffic Controller (3/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0416",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate Aircraft Handling- Advance (ABH-V) (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1704-0650",
      "startDate":"1/1/2003",
      "endDate":"Present",
      "title":"Marine Air Traffic Control Officers (1/03-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-1537",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Carrier-Based Tactical Support Center (CV-TSC) Combat Systems Maintenance Technician (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-1868",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Combat Direction Finding Operator (3/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2097",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) System Administration (3/02-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2198",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance OMA System Administrator/Analyst Optimize (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2261",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Littoral Combat Ship Computer Technician Fundamentals Virtual Training Path (1/07-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2308",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Global Command And Control System-Maritime (GCCS-M) 4.0.3 Systems Administrator (11/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2328",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Global Command And Control-Maritime (GCCS-M) 4.1 System Administrator (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2348",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 4.0 (6/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2350",
      "startDate":"8/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Delta 3.5 (8/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1715-2352",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Integrated Shipboard Network System Charlie 3.X (7/13-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-1728-0060",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Legalman/Legal Specialist Mid-Career (2/10-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-2202-0013",
      "startDate":"5/1/2000",
      "endDate":"Present",
      "title":"Submarine Officers Advanced (SOAC) (5/00-Present)",
      "category":"database administration"
    },
    {
      "id":"NV-2204-0001",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Officer Candidate School- Class P6 (2/09-Present)",
      "category":"database administration"
    },
    {
      "id":"AF-1408-0153",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Civilian Personnel Management (4/04-Present)",
      "category":"business analytics"
    },
    {
      "id":"AF-1408-0155",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Labor-Management Relations (4/04-Present)",
      "category":"business analytics"
    },
    {
      "id":"AF-1408-0156",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Position Classification (11/04-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-0707-0014",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Preventive Medicine Senior Leaders (1/05-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1205-0010",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Bandmaster Warrant Officer Basic (BWOBC) (5/10-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1205-0038",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Army Band Basic Officer Leader- B (BOLC-B) (6/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1405-0288",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Medical Logistics Officer (RC) (3/10-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1406-0096",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Special Forces Warrant Officer Basic Course (5/07-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1408-0162",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Special Forces Warrant Officer Advanced (U) (1/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1408-0347",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Basic Contracting (10/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1601-0089",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"21C10 Bridge Crewmember (1/05-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1601-0254",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Engineer Captains' Career - Reserve Component (10/07-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1703-0083",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Motor Transport Operator Advanced Leader (10/13-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1703-0084",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Motor Transport Operator Advanced Leader (10/14-Present)",
      "category":"business analytics"
    },
    {
      "id":"AR-1717-0220",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Simulation Operations Course (4/02-Present)",
      "category":"business analytics"
    },
    {
      "id":"CG-1304-0017",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Marine Science Technician \"A\" (1/10-Present)",
      "category":"business analytics"
    },
    {
      "id":"CG-1405-0006",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Storekeeper A School (10/08-Present)",
      "category":"business analytics"
    },
    {
      "id":"CG-1408-0006",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Yeoman First Class Non-Resident (6/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"CG-1409-0003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Yeoman \"A\" School (3/10-Present)",
      "category":"business analytics"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"DD-1402-0012",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Attach Staff Training Program (ASTP) (1/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"DD-1408-0010",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Advanced Production, Quality, and Manufacturing (1/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"DD-1601-0044",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician- Warrant Officer Advanced (GET-WOAC) (10/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"DD-1709-0006",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Visual Information Management (10/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"MC-0327-0001",
      "startDate":"3/1/1999",
      "endDate":"Present",
      "title":"Basic Recruiter (3/99-Present)",
      "category":"business analytics"
    },
    {
      "id":"MC-1401-0016",
      "startDate":"9/1/1997",
      "endDate":"Present",
      "title":"Basic Pay and Allowances By Correspondence (9/97-Present)",
      "category":"business analytics"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"MC-1403-0006",
      "startDate":"8/1/2003",
      "endDate":"Present",
      "title":"Correspondence Procedures by Correspondence (8/03-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1405-0028",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"Ship's Serviceman, Class A (12/04-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1405-0057",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Ship's Store Afloat Resale Operation Management (ROM-II) (11/08-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1407-0004",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Yeoman Flagwriter (7/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1408-0029",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Limited Duty Officer/Chief Warrant Officer Academy (1/14-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1408-0042",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Marine Aviation Supply Officer Qualification (1/07-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-1717-0028",
      "startDate":"6/1/1996",
      "endDate":"Present",
      "title":"Advanced Leadership Development Program (6/96-Present)",
      "category":"business analytics"
    },
    {
      "id":"NV-2202-0175",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Senior Enlisted Academy Resident (8/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1402-0082",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Journeyman by Correspondence (4/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1405-0075",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Maintenance Management Production Craftsman by Correspondence (1/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1405-0076",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Maintenance Management Production Journeyman by Correspondence (12/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1601-0054",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Engineering Journeyman (11/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0188",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Mobility Officer Warrant Officer Basic (1/14-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1405-0238",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Automated Logistical Specialist (4/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0262",
      "startDate":"3/1/1997",
      "endDate":"Present",
      "title":"Director of Information Management (3/97-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0289",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Human Resources Technician Warrant Officer Advanced (4/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0291",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Human Resources Technician Warrant Officer Advanced (4/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1511-0037",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1606-0231",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Imagery Analyst Advanced Leader (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1704-0154",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"CH-47D/F Helicopter Repairer (10/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1704-0204",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"UH-60 A/L Helicopter Repairer (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1704-0253",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AH-64D Attack Helicopter Repairer (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1704-0328",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1717-0243",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Ground-Based Midcourse Defense (GMD) (3/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1720-0015",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leaders (ALC) (1/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1720-0240",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (1/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1720-0241",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leader (10/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1720-0242",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1728-0217",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"TC- AIMS II Functional User (10/13-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0618",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Maneuver Captains Career (11/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0622",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS Training) (6/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0635",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Artillery Basic Officer Leader (7/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0640",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Tactical Information Operations (7/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2201-0692",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Army National Guard Automation Noncommissioned Officer (10/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-2202-0010",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Intelligence Specialist (9/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1408-0069",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Intermediate Information Systems Acquisition (10/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0029",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician-Warrant Officer Basic (GET-WOBC) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0035",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"12Y30 Geospatial Engineering- Advanced Leaders (GE-ALC) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0036",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"21Y Geospatial Engineer (GEC) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0042",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Basic Geographic Intelligence Specialist (BGIS) (4/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0043",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"21Y40 Geospatial Engineer -Senior Leader (GE-SLC) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"DD-1601-0044",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician- Warrant Officer Advanced (GET-WOAC) (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-1406-0054",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Information Assurance Manager (6/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-1715-0236",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"A+ Certification (4/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-1717-0015",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Expeditionary Warfare (EWS) (8/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-0803-0008",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Marine Engineer Diving Officer (10/05-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0153",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"3-M System Coordinator/Inspector (11/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0295",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Information Professional Officer Basic (7/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1406-0050",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Combat Systems Senior Enlisted (5/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1407-0005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Individual Material Readiness List (IMRL) Asset Manager (10/12-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1408-0062",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Expeditionary Ground Intelligence Analyst (4/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1606-0102",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Army Engineer Diver (Army Second Class Diver) (10/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1606-0103",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Engineer Diver, BNCOC (Phase 3) Army First Class Diver (1/06-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1710-0196",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Technician Basic (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1233",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Tactical/Mobile (TACMOBILE) System Operator (7/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1697",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Integrated Voice Communication System AN/STC-2(V) Maintenance AEGIS (1/01-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1745",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Aegis Combat System Maintenance Manager (CG-65-73/DDG) (9/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1780",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) - T On-Board Trainer Operator /Administration (1/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-1929",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Information Warfare Officer Basic (9/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2098",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) Operator (6/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2119",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Tactical Tomahawk Weapon Control System Watch Officer (10/08-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2304",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Naval Aviation Logistics Command Management Information System (NALCOMIS) Optimized Intermediate Maintenance Activity (OIMA) Supply Application Administrator (SAA) (1/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1715-2314",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Naval Aviation Maintenance Control Management for Optimized Organizational Maintenance Activity (OOMA) (1/11-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1729-0022",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Culinary Specialist Records Keeper (1/04-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-2201-0129",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator 4.X (4/07-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"NV-2202-0208",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Tactical/Mobile Operations Control Operator (7/02-Present)",
      "category":"Health Information technology"
    },
    {
      "id":"AF-1408-0153",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Civilian Personnel Management (4/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AF-1408-0155",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Labor-Management Relations (4/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AF-1408-0156",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Position Classification (11/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AF-1704-0441",
      "startDate":"1/1/1999",
      "endDate":"Present",
      "title":"U-2S Mission Qualification Training (1/99-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-0707-0014",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Preventive Medicine Senior Leaders (1/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1205-0010",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Bandmaster Warrant Officer Basic (BWOBC) (5/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1205-0038",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Army Band Basic Officer Leader- B (BOLC-B) (6/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1404-0041",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Communications Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1405-0288",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Medical Logistics Officer (RC) (3/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1406-0096",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Special Forces Warrant Officer Basic Course (5/07-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1408-0162",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Special Forces Warrant Officer Advanced (U) (1/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1408-0234",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Army Reconnaissance (ARC) (10/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1408-0347",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Basic Contracting (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1601-0089",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"21C10 Bridge Crewmember (1/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1601-0254",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Engineer Captains' Career - Reserve Component (10/07-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1606-0203",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Common Ground Station Operator Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1606-0229",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Intelligence Analyst, Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1606-0231",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Imagery Analyst Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1606-0234",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Human Intelligence Collector Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1606-0258",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"G2/ACE Chief (10/01-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1703-0083",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Motor Transport Operator Advanced Leader (10/13-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1703-0084",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Motor Transport Operator Advanced Leader (10/14-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-0734",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Signals Intelligence (SIGINT) Analyst Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1144",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Linguist Supervisor, Advanced Leader (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1145",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Signals Collector/Analyst, Advanced Leader (10/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1146",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Military Intelligence Basic Officer Leader (BOLC-B) (1/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1169",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Human Intelligence Collector (10/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1174",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Human Intelligence Collector (1/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1195",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Electronic Warfare Technician Basic- 2 (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1196",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Electronic Warfare Officer Qualification- 3 (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1197",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Electronic Warfare Specialist Basic- 2 (10/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1715-1199",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1717-0220",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Simulation Operations Course (4/02-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-1728-0155",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Counterintelligence (CI) Agent Advanced Leader (ALC) (10/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-2201-0401",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Weapons Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-2201-0459",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Special Forces Intelligence Sergeant (1/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AR-2201-0608",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Counter Narco-Terrorist (9/06-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-1304-0017",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Marine Science Technician \"A\" (1/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-1405-0006",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Storekeeper A School (10/08-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-1408-0006",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Yeoman First Class Non-Resident (6/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-1409-0003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Yeoman \"A\" School (3/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-2202-0010",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Intelligence Specialist (9/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CG-2202-0013",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist First Class PQG (7/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"DD-1402-0012",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Attach Staff Training Program (ASTP) (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"DD-1408-0010",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Advanced Production, Quality, and Manufacturing (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"DD-1601-0042",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Basic Geographic Intelligence Specialist (BGIS) (4/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"DD-1601-0044",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician- Warrant Officer Advanced (GET-WOAC) (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"DD-1709-0006",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Visual Information Management (10/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-0327-0001",
      "startDate":"3/1/1999",
      "endDate":"Present",
      "title":"Basic Recruiter (3/99-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1401-0016",
      "startDate":"9/1/1997",
      "endDate":"Present",
      "title":"Basic Pay and Allowances By Correspondence (9/97-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1403-0006",
      "startDate":"8/1/2003",
      "endDate":"Present",
      "title":"Correspondence Procedures by Correspondence (8/03-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0018",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Marine Ground Task Force Intelligence Specialist Career (6/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0019",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Marine Ground Task Force Intelligence Specialist Career (3/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0020",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"United States Marine Corps Ground Intelligence Officer (11/08-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0021",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Marine Ground Task Force Counterintelligence/HUMINT Basic (3/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0022",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Marine Air-Ground Task Force Intelligence Specialist Entry (4/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0023",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Tactical Imagery Analysis (3/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0024",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"European I West Cryptologic Linguist(Spanish) (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0025",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Apprentice Cryptologic Language Analyst (Korean) (2/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1606-0026",
      "startDate":"12/1/2011",
      "endDate":"Present",
      "title":"Individual Training- MSOS (12/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MC-1715-0248",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Tactical SIGINT Operators (2/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1402-0205",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Afloat C4ISR Architecture Management (4/03-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1402-0265",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Tomahawk Land Attack Missile Planning Systems Afloat Route Planner (9/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1402-0297",
      "startDate":"6/1/2014",
      "endDate":"Present",
      "title":"Cryptologic Fleet Operator (6/14-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1405-0028",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"Ship's Serviceman, Class A (12/04-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1405-0057",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Ship's Store Afloat Resale Operation Management (ROM-II) (11/08-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1407-0004",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Yeoman Flagwriter (7/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1408-0029",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Limited Duty Officer/Chief Warrant Officer Academy (1/14-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1408-0042",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Marine Aviation Supply Officer Qualification (1/07-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1408-0062",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Expeditionary Ground Intelligence Analyst (4/06-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1511-0017",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Intelligence Specialist Class A (IS A) (4/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1511-0022",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Naval Intelligence Officer Basic (NIOBC) (10/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1511-0040",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Maritime Security Intelligence Operations (8/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1606-0087",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operational Intelligence Analyst \"C\" School (7/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1606-0099",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Navy Collection Managers (6/05-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1715-1873",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Intermediate Operational Electronic Intelligence (ELINT) Analyst (10/06-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1715-2332",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Global Command and Control System-Maritime (GCCS-M) 4.1 Force/Unit Level Operator (1/13-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1715-2333",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"Global Command and Control System-Maritime (GCCS-M) 4.1 Force/Unit Level Watch Officer (12/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-1717-0028",
      "startDate":"6/1/1996",
      "endDate":"Present",
      "title":"Advanced Leadership Development Program (6/96-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-2202-0175",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Senior Enlisted Academy Resident (8/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NV-2202-0217",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Advanced Maritime OPINTEL Analysis (AMOC) (10/10-Present)",
      "category":"business intelligence"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-0703-0028",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Craftsman by Correspondence (10/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-0802-0031",
      "startDate":"3/1/2000",
      "endDate":"Present",
      "title":"Firefighter Certification System by Correspondence (3/00-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1402-0082",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Journeyman by Correspondence (4/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1405-0075",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Maintenance Management Production Craftsman by Correspondence (1/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1405-0076",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Maintenance Management Production Journeyman by Correspondence (12/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1601-0053",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Pavements and Construction Equipment Operator Journeyman (4/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1601-0054",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Engineering Journeyman (11/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1704-0463",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Conventional Munitions Maintenance Officer (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1704-0464",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Conventional Munitions Maintenance Officer (Bridge) (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1728-0059",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Fire Fighter I by Correspondence (8/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1728-0061",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Fire Fighter II by Correspondence (8/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1728-0062",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Fire Officer II (2/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0104-0012",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Animal Care Advanced Leader (10/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0702-0014",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Medical Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0702-0020",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0702-0034",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Ear, Nose, & Throat (ENT) Specialty (9/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0703-0041",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"68W Transition (1/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0709-0040",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Flight Medic (1/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-0709-0088",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Operating Room Specialist (5/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1205-0006",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Band Advanced Noncommissioned Officer (NCO) (10/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0188",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Mobility Officer Warrant Officer Basic (1/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1405-0238",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Automated Logistical Specialist (4/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1408-0262",
      "startDate":"3/1/1997",
      "endDate":"Present",
      "title":"Director of Information Management (3/97-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1408-0289",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Human Resources Technician Warrant Officer Advanced (4/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1408-0291",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Human Resources Technician Warrant Officer Advanced (4/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1511-0037",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Generalist MOS-T (10/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1512-0021",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Psychological Operations Specialist (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1512-0022",
      "startDate":"6/1/2001",
      "endDate":"Present",
      "title":"Psychological Operations Specialist RECLASS (6/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1601-0263",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"NBC Reconnaissance for Brigade Combat Teams (5/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1601-0272",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"RC WOAC Utilities Operations and Maintenance Technician (MOS 210A) (6/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1606-0231",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Imagery Analyst Advanced Leader (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0154",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"CH-47D/F Helicopter Repairer (10/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0204",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"UH-60 A/L Helicopter Repairer (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0230",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Railway Section Repairer (10/00-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0253",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AH-64D Attack Helicopter Repairer (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0254",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aircraft Pneudraulic Repairer (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1704-0328",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1710-0244",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Special Forces Engineer Sergeant (11/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1710-0257",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Wheel Vehicle Recovery Specialist (7/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1710-0258",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Artillery Mechanic (10/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1712-0020",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Marine Engineering Officer-WO Basic (WOBC) (4/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-0974",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Test Measurement and Diagnostic Equipment Maintenance Support Specialist Advanced Leaders (ALC) (4/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-1113",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer (STRAT-1) (6/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1715-1194",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Stryker Systems Maintainer (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1716-0015",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Shower/Laundry and Clothing Repair Specialist (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1717-0243",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Ground-Based Midcourse Defense (GMD) (3/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0011",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Prime Power Production Mechanical Specialist (1/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0012",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Prime Power Production Specialist (1/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0015",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leaders (ALC) (1/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0240",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (1/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0241",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leader (10/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0242",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1720-0245",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Identification of Biological Warfare Agents (7/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1722-0014",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Watercraft Engineer (3/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1728-0139",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Criminal Investigation Division Special Agent Warrant Officer Basic (4/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1728-0217",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"TC- AIMS II Functional User (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1729-0048",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Veterinary Food Inspection Advanced Leader (1/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-1732-0010",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Water Treatment Specialist AIT (5/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0404",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Engineer Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0596",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"TATS Special Forces Engineer Sergeant Advanced Noncommissioned Officer (NCO) (2/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0618",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Maneuver Captains Career (11/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0622",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS Training) (6/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0635",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Artillery Basic Officer Leader (7/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0640",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Tactical Information Operations (7/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0692",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Army National Guard Automation Noncommissioned Officer (10/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0695",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Diver General Engineering (MOS 21D) (6/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0763",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist (EOD) Advanced Leaders (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"AR-2201-0764",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist(EOD) Advanced Leaders (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1708-0016",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Boatswain's Mate \"A\" School (3/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1708-0029",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Boatswain's Mate Advanced Navigation and Piloting (10/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1710-0014",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Damage Controlman School (11/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1710-0019",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Damage Controlman Third Class by Correspondence (11/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1710-0020",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Damage Controlman First Class (DC1) Performance Qualification Guide (PQG) (6/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1714-0027",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Gunner's Mate First Class Performance Qualification Guide (8/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1715-0047",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Communication System Development (COM-06) (6/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1715-0154",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (AMT) A (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-1723-0007",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Machinery Technician Third Class Performance Qualification Guide (3/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"CG-2202-0010",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Intelligence Specialist (9/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1408-0069",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Intermediate Information Systems Acquisition (10/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0022",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Advanced Geodetic Survey (AGS) (2/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0029",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician-Warrant Officer Basic (GET-WOBC) (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0035",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"12Y30 Geospatial Engineering- Advanced Leaders (GE-ALC) (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0036",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"21Y Geospatial Engineer (GEC) (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0042",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Basic Geographic Intelligence Specialist (BGIS) (4/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0043",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"21Y40 Geospatial Engineer -Senior Leader (GE-SLC) (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"DD-1601-0044",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"125D Geospatial Engineering Technician- Warrant Officer Advanced (GET-WOAC) (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1402-0070",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Engineer Assistant Chiefs (11/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1403-0018",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Field Radio Operator (11/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1406-0054",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Information Assurance Manager (6/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1601-0024",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Basic Combat Engineer (3/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1601-0033",
      "startDate":"8/1/1997",
      "endDate":"Present",
      "title":"Interior Wiring by Correspondence (8/97-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1601-0043",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineer Equipment Officer (5/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1601-0044",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Advanced Water Support Technician (4/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1710-0047",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Tank Systems Mechanic (9/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1710-0058",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Engineer Estimations by Correspondence (5/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1715-0217",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Telephone Systems/Personal Computer Intermediate Repair (9/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1715-0236",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"A+ Certification (4/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1717-0015",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Expeditionary Warfare (EWS) (8/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-1729-0034",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Food Service Noncommissioned Officer (USMC) (4/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"MC-2201-0005",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Ground Ordnance Supervisor by Correspondence (7/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0101-0002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Medical Entomology and Pest Management Technology (5/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0702-0017",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Hemodialysis Technician School (5/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0801-0009",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Operational Water Chemistry and Radiological Controls (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0801-0012",
      "startDate":"1/1/1999",
      "endDate":"Present",
      "title":"Shipboard Chemical, Biological, and Radiological Defense Specialist (1/99-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0801-0015",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Chemical and Biological/Homemade Explosive (HME) Hazards (5/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0803-0008",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Marine Engineer Diving Officer (10/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1205-0012",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Sound Reinforcement Technician (11/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1304-0030",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"AN/SQQ-32 (V) 3 Minehunting Sonar Set (MSS) Operator (2/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0115",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Machinery Systems Console Maintenance, LSD-41 Console (11/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0153",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"3-M System Coordinator/Inspector (11/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0286",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Tactical Exploitation System, AN/SSQ(V)X, Maintenance (9/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0295",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Information Professional Officer Basic (7/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1406-0050",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Combat Systems Senior Enlisted (5/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1407-0005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Individual Material Readiness List (IMRL) Asset Manager (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1408-0062",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Expeditionary Ground Intelligence Analyst (4/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1601-0048",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Main/Auxiliary Turbine, Ship's Service Turbogenerator, and Lube Oil Purifier Maintenance (12/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1606-0016",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Master Diver Qualification (4/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1606-0079",
      "startDate":"9/1/2013",
      "endDate":"Present",
      "title":"Navy Diver \"A\" School (Second Class Diver) (9/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1606-0102",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Army Engineer Diver (Army Second Class Diver) (10/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1606-0103",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Engineer Diver, BNCOC (Phase 3) Army First Class Diver (1/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1606-0105",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Marine Engineering Duty Officer (MEDO) \"Navy\" (11/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1701-0012",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"R-114 York 200 Ton Air Conditioning Technician (7/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1701-0019",
      "startDate":"6/1/2001",
      "endDate":"Present",
      "title":"Refrigeration and Air Conditioning Systems Technician (6/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1704-0403",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AV-8B Aircraft Ordnance Technician Organizational Maintenance (8/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1704-0672",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Mine Countermeasures (5/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1704-0673",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Underwater Ordnance (5/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1704-0674",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Nuclear Hazards (5/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1704-0675",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Surface Ordnance/Improvised Explosive Device (2/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0117",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Construction Mechanic \"A\" School (6/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0162",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DDG-51/AOE-6 (10/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0188",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Electronic Automatic Boiler Controls Maintenance (2/05-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0189",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Automatic Boiler Controls Console Operator (4/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0196",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Technician Basic (1/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0204",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Advanced Steam Engineering (7/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1710-0271",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Construction Management Crew Member (6/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1712-0028",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Submarine Diesel Engine Maintenance (8/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1712-0055",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Power Train and Chassis (7/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1713-0003",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Advanced Engineering Aid (12/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1713-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Construction Design (7/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1714-0046",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"500KW 60HZ Motor Generator Set GE Electrical Maintenance (5/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1714-0047",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"500 kW 60 Hertz Motor Generator Set GE Mechanical Maintenance (9/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1714-0078",
      "startDate":"8/1/1999",
      "endDate":"Present",
      "title":"Aviation Ordnanceman Navy Difference (8/99-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1714-0089",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Mineman Class \"A\" School (9/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-0235",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Sonar AN/SQS-56 Operator (7/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-0449",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"AN/BRD-7 Maintenance (2/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1229",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Integrated Launch and Recovery Television Surveillance System Maintenance (6/00-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1230",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Shipboard Information, Training, and Entertainment (SITE) Closed Circuit Television (CCTV) (1/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1233",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Tactical/Mobile (TACMOBILE) System Operator (7/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1273",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQS-53B (V) Maintenance (7/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1330",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Microminiature Electronics Repair (6/00-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1697",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Integrated Voice Communication System AN/STC-2(V) Maintenance AEGIS (1/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1712",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"Gunner's Mate Class A School (12/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1716",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DD-963/DDG-993/CG-47 (10/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1717",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance (FFG-7) (10/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1745",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Aegis Combat System Maintenance Manager (CG-65-73/DDG) (9/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1780",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) - T On-Board Trainer Operator /Administration (1/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1841",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Controllers and Circuit Breakers Combined Maintenance (4/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1848",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"AN/SQQ-89(V) Mk 116 Antisubmarine Warfare Control System Maintenance (6/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1851",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) Sonar Watch Supervisor (1/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1929",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Information Warfare Officer Basic (9/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-1988",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"AN/USM-636A (V) Consolidated Automated Support System (CASS) Common Core Intermediate Maintenance (4/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2098",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) Operator (6/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2119",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Tactical Tomahawk Weapon Control System Watch Officer (10/08-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2142",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"AN/SQQ-32(V) 3 Minehunting Sonar Set Maintenance (4/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2201",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"AN/FSQ-204 Standard Terminal Air Replacement System (STARS) Maintenance (11/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2216",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Machinist Mate (Engineering) Auxiliary Equipment SSN/SSBN (11/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2218",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Integrated Low Pressure Electrolyzer Electrical Maintenance (6/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2242",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"MK 48 Heavy Weight Torpedo Technician (8/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2304",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Naval Aviation Logistics Command Management Information System (NALCOMIS) Optimized Intermediate Maintenance Activity (OIMA) Supply Application Administrator (SAA) (1/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2314",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Naval Aviation Maintenance Control Management for Optimized Organizational Maintenance Activity (OOMA) (1/11-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2315",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AN/USM-725 (V) Reconfigurable Transportable Consolidated Automated Support System- High Power Operation and Maintenance (10/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1715-2331",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89A (V) 15 Journeyman (5/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1722-0026",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Crew Served Weapons Operations and Maintenance (1/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1723-0015",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Machine Tool Operator (2/12-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1728-0060",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Legalman/Legal Specialist Mid-Career (2/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1728-0071",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Engineering Professional Apprenticeship Career (5/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1729-0022",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Culinary Specialist Records Keeper (1/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1732-0014",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Senior Enlisted Propulsion Engineering (11/04-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1732-0026",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Naval Power School, Enlisted (11/06-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-1732-0030",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Water Treatment 2 (9/09-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2201-0125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Basic Navy (Underwater) (10/13-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2201-0126",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Department of Defense Joint Explosive Ordnance Disposal (Common Core) (4/14-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2201-0129",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator 4.X (4/07-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2202-0174",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Naval Science Institute (5/03-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2202-0177",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"AN/SLQ-48 Mine Neutralization System Operator (9/10-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2202-0208",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Tactical/Mobile Operations Control Operator (7/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2202-0210",
      "startDate":"12/1/2001",
      "endDate":"Present",
      "title":"Seaman to Admiral 21st Century-Naval Science Institute (12/01-Present)",
      "category":"Information technology"
    },
    {
      "id":"NV-2202-0211",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Seaman to Admiral 21st Century-Naval Science Institute (Follow-on) (10/02-Present)",
      "category":"Information technology"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1402-0090",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Operations Journeyman by Correspondence (8/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1408-0114",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Communications - Computers Systems Planning and Implementation Management Journeyman by Correspondence (11/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0936",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Visual Imagery and Intrusion Detection Systems Journeyman by Correspondence (4/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0961",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Basic Communications Officer Training (4/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0962",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Communications Officer Engineer (12/06-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0970",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Common Journeyman by Correspondence (5/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0972",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Network Integration Journeyman by Correspondence (12/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-1715-0977",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (1/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-2203-0056",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Squadron Officer School Distributed Learning (11/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1304-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"FA Meteorological Section Sergeant BNCOC (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0169",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0176",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"USAF Tactical Receive System Maintenance (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0202",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Signal Systems Support Warrant Officer Basic (WOB) (10/02-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0224",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (24A) (10/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0225",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (53A) (10/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0229",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0233",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (1/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0236",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0239",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0243",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0244",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0245",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0246",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0249",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Technology Specialist Basic Noncommissioned Officer (BNCOC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0250",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0251",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0261",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0266",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0270",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (4/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0272",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0275",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Signal Warrant Officer Staff Follow-On (5/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0037",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0065",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1404-0068",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operators/Maintainer Advanced Leaders (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1408-0298",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Basic Officer Leader Branch (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1512-0033",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Information Operations (2/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0618",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cable Systems Installer-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0734",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Signals Intelligence (SIGINT) Analyst Advanced Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0918",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Advanced Leader (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0921",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0925",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Satellite Systems/Network Coordinator (1/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-0988",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Computer Detection Systems Repairer (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1053",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Command and Control Systems Integrator Warrant Officer Basic (7/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1078",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Common Core (6/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1111",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-1) (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1116",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"SF Qual (SF Communications Sergeant) ALC (2/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1129",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer ECB-1 (11/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1130",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer EAC-2 (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1141",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (CP34) (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1142",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Professional (CP34) (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1164",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS TNG) (8/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1176",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1186",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer Advanced Leader (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1190",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1715-1198",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1720-0239",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0125",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0137",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Conventional Physical Security/Crime Prevention (CPS/CP) (ITRO) (2/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0141",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Protective Services Training and Antiterrorism Evasive Driving - Staff Driver (11/03-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0174",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Corrections and Detention Specialist Advanced Leader (5/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0175",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Corrections and Detention Specialist Senior Leader (3/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0180",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Criminal Antiterrorism and Police Intelligence Management (CAPIM) (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0188",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"U.S. Army Civilian Police Academy (8/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0192",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Internment/Resettlement Specialist (3/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-1728-0203",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"High-Risk Personnel Security (5/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"MLRS Fire Direction Specialist (10/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0636",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System (MLRS) Fire Direction Specialist (11/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0653",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0654",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Military Police Captains' Career - Reserve Component (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0658",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advanced (4/06-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0755",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Advanced Situational Awareness-Advanced (10/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0763",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist (EOD) Advanced Leaders (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2201-0764",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist(EOD) Advanced Leaders (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0008",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0012",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Basic Military Police (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0019",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0021",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0022",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (6/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0023",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network System Operator-Maintainer Y2 Transition (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2202-0024",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"AR-2204-0110",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense Battle Management Systems Operator (7/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1304-0016",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Marine Science Technician, Second Class (8/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1304-0017",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Marine Science Technician \"A\" (1/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1708-0031",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Port Security Unit (PSU) Tactical Coxswain (7/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1708-0033",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Port Security Unit (PSU) Basic Skills (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1708-0042",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Sector Command Center Watchstander (CWC) (1/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1715-0176",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"378' WHEC Shipboard Command and Control System (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1728-0040",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Port Security Specialist (5/01-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1728-0043",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Maritime Search and Rescue Planning (11/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1728-0050",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"Coast Guard Investigative Service Indoctrination Training (12/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1728-0053",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Maritime Safety and Security Team (MSST) Tactical Boat Crew (4/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-1728-0061",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Maritime Enforcement Specialist First Class (MEI) (2/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"CG-2201-0006",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Basic Preparedness and Exercise (6/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"DD-1709-0007",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Television Equipment Maintenance (10/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-0801-0016",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Nuclear, Biological, and Chemical (NBC) Individual Survival Measures By Correspondence (2/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0084",
      "startDate":"1/1/1998",
      "endDate":"Present",
      "title":"Communications Security by Correspondence (1/98-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0088",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Technical Controller (4/06-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0092",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Enhanced Position Location Reporting System (EPLRS) Managers (7/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0093",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1402-0094",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Data Systems Technician (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1408-0025",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Command and Staff College Distance Education Program by Correspondence (10/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1715-0191",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Technical Controller Chief (9/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1715-0238",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Support Wide Area Network (SWAN) RF Incidental (10/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1717-0019",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"USMC Sensor Surveillance Operator (9/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-1728-0012",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Military Police Basic (7/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0132",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Integrated Submarine Automated Broadcast Processing System (ISABPS) Maintenance (4/02-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0203",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Intelligence Center Maintenance (ICM) (5/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0224",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"LHD Computer and Peripheral Equipment Maintenance (4/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0285",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Fleet Cryptologic Carry-On Program Maintenance (4/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0295",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Information Professional Officer Basic (7/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1402-0298",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Submarine Local Area Network (3/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1408-0061",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Non-Compliant Boarding Visit, Board, Search, and Seizure (7/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1511-0017",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Intelligence Specialist Class A (IS A) (4/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1511-0022",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Naval Intelligence Officer Basic (NIOBC) (10/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1511-0039",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Naval Intelligence Officer Basic - Reserve (4/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1704-0625",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Wire Bundle/Connector/Fiber Optic Cable Repair Organizational Maintenance (11/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1714-0059",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Construction Electrician Power and Communications Cable Splicing (5/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1714-0094",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Fiber Optic Data Multiplex System, AN/USQ-82 (V), Operation and Maintenance (6/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-0546",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Advanced Integrated Voice Communications Network (IVCN) System Maintenance (3/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1542",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Air Intercept Controller Basic (11/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1659",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician Maintenance Class A (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1715",
      "startDate":"11/1/1997",
      "endDate":"Present",
      "title":"AN/USQ-82(V) Data Multiplex System Technician (11/97-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1745",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Aegis Combat System Maintenance Manager (CG-65-73/DDG) (9/02-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1751",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapon System MK7 Operation and Maintenance TRK 2 (12/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1875",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Advanced Communications Signals Analysis (8/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1929",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Information Warfare Officer Basic (9/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-1962",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AN/AQS-13 Sonar Systems Intermediate Level Maintenance (7/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2016",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Naval Modular Automated Communication Systems (NAVMACS) II Maintenance (6/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2023",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-53D(V) Maintenance (2/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2040",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Information and Communication Manager (7/04-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2041",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Electronic Key Management System (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2078",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapons System MK7 Operation and Maintenance Trk 3 (11/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2084",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Track Data Coordinator (TDC) (2/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2090",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Ship Self Defense System (SSDS) MK 1 MOD 0 Maintenance Technician (11/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2094",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"AN/SYQ-24(V) LHA Advanced Combat Direction System Maintenance (2/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2137",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"CG-47 Smart Ship Maintenance Training (10/03-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2155",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician Operation and Maintenance (ACNT Trk 2) (2/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2193",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Maritime Cryptologic Systems (MCS) Basic Operator (6/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2221",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Ship Self Defense System Mark 2 Maintenance (6/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2227",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"NATO SeaSparrow Surface Missile System MK57 MODS 4-9 Operation and Maintenance Differences (7/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2240",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"NATO Sea Sparrow Surface Missile System (NSSM) Mk 57 MOD 10-13 Operation and Maintenance (O&M) Differences (1/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2258",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AEGIS Milspec Fire Control Systems/400 HZ Virtual Training Path (7/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2261",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Littoral Combat Ship Computer Technician Fundamentals Virtual Training Path (1/07-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2268",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/UYQ-21 CVN/LHD Display System Virtual Training Path (10/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2285",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Common Submarine Radio Room Basic Maintenance (4/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2297",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"TOC and Mobile Systems Automated Data Processing (ADP) Suite Maintenance (6/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2306",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Journeyman Communications (JCC) (1/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2319",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Gigabit Ethernet Data Multiplex System (GEDMS) Maintenance and Operations Training (6/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2323",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Ship Self-Defense System (SSDS) Open Architecture (OA) Maintenance (9/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2328",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Global Command And Control-Maritime (GCCS-M) 4.1 System Administrator (2/13-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2330",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89A (V) 15 Maintenance (5/12-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-1728-0034",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Armed Sentry/Security Reaction Force - Basic (4/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-2201-0124",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Armed Sentry/Security Reaction Force - Advanced (4/05-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-2201-0126",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Department of Defense Joint Explosive Ordnance Disposal (Common Core) (4/14-Present)",
      "category":"Network Security"
    },
    {
      "id":"NV-2202-0218",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Riverine Security Team Member (8/09-Present)",
      "category":"Network Security"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0082",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Journeyman by Correspondence (4/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0084",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"F-15 Avionic Test Station and Component Journeyman (9/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0090",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Operations Journeyman by Correspondence (8/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0091",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Airborne Surveillance Radar Systems Journeyman by Correspondence (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0092",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Airborne Mission System Specialty Journeyman (9/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1408-0114",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Communications - Computers Systems Planning and Implementation Management Journeyman by Correspondence (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1408-0147",
      "startDate":"12/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Craftsman by Correspondence (12/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0837",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Communications - Computer Systems Control Journeyman (1/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0867",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman by Correspondence (4/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0899",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Computer, Network, Switching, and Cryptographic Systems Journeyman by Correspondence (6/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0961",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Basic Communications Officer Training (4/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0962",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Communications Officer Engineer (12/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0970",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Common Journeyman by Correspondence (5/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0972",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Network Integration Journeyman by Correspondence (12/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-0326-0063",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Army Acquisition Foundations (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-0419-0061",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Transportation Management Coordinator (7/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-0419-0070",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Transportation Basic Officer Leader Course (TBOLC) (1/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-0801-0048",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Chemical Operations Specialist Basic Noncommissioned Officer (NCO) (3/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1304-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"FA Meteorological Section Sergeant BNCOC (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1401-0033",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Financial Management Technician Advanced Individual Training (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1401-0057",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Financial Management Technician Advanced Individual Training (MOS-T) (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0169",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0176",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"USAF Tactical Receive System Maintenance (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0186",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Integrated Computerized Deployment System (ICODES) (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0187",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Global Air Transportation Execution System (GATES) Surface (1/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0188",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Mobility Officer Warrant Officer Basic (1/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0197",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"SUN Server and Workstation Maintenance (1/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0202",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Signal Systems Support Warrant Officer Basic (WOB) (10/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0205",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Automated Communications Engineering Software/Joint Automated CEOI System (ACES/JACS) (1/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0210",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist, ALC (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0213",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist, SLC (10/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0219",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0224",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (24A) (10/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0225",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (53A) (10/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0229",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0230",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist ANCOC (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0232",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist BNCOC (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0233",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (1/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0236",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0239",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0242",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Ammunition Stock Control and Accounting Specialist (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0243",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0244",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0245",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0246",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0249",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Technology Specialist Basic Noncommissioned Officer (BNCOC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0250",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0251",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0258",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0261",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0266",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0270",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (4/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0272",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0275",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Signal Warrant Officer Staff Follow-On (5/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1403-0017",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Advanced Individual Training (6/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1403-0030",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"27D Senior Leaders (3/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0037",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0065",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1404-0068",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operators/Maintainer Advanced Leaders (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1405-0235",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Unit Supply Specialist (1/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1405-0238",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Automated Logistical Specialist (4/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1405-0269",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Aviation Warrant Officer Advanced (AWOAC) (6/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1406-0215",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Fire Support Sergeant, Advanced Leader (ALC) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1406-0218",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Air Defense Artillery Senior Leader (SLC) (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0072",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Warrant Officer Staff (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0193",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Marine Warrant Officer Advanced WO (5/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0298",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Basic Officer Leader Branch (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1408-0344",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense (AD) Battle Management Systems Operator (7/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1512-0033",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Information Operations (2/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1601-0109",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Fire Support Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1601-0248",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Engineer Basic Officer Leader (BOLC III) (6/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1601-0255",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System (MLRS) Crewmember (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1606-0203",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Common Ground Station Operator Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1606-0273",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Intelligence Officer Basic (5/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1704-0300",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Small Unmanned Aerial Vehicle (Raven) Operator (4/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1704-0302",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Aviation Operations Specialist, Advanced Leaders (AL) (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1710-0177",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Utilities Operation and Maintenance Technician Warrant Officer Basic (10/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0618",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cable Systems Installer-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0660",
      "startDate":"10/1/1999",
      "endDate":"Present",
      "title":"Avionic Systems Repairer (10/99-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0734",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Signals Intelligence (SIGINT) Analyst Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0797",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Patriot System Technician- WO Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0918",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Advanced Leader (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0921",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0925",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Satellite Systems/Network Coordinator (1/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0974",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Test Measurement and Diagnostic Equipment Maintenance Support Specialist Advanced Leaders (ALC) (4/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-0988",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Computer Detection Systems Repairer (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1042",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1053",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Command and Control Systems Integrator Warrant Officer Basic (7/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1065",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Electronic Maintenance Advanced Leader (ALC) (1/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1078",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Common Core (6/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1099",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Patriot Fire Control Enhanced Operator/Maintainer (OPR/MAINT) (2/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1111",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-1) (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1116",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"SF Qual (SF Communications Sergeant) ALC (2/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1129",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer ECB-1 (11/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1130",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer EAC-2 (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1141",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (CP34) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1142",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Professional (CP34) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1146",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Military Intelligence Basic Officer Leader (BOLC-B) (1/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1147",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Automated Logistical Specialist Reclass (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1148",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Automated Logistical Specialist Reclass (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1164",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS TNG) (8/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1176",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1186",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer Advanced Leader (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1190",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1715-1198",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1720-0015",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leaders (ALC) (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1720-0239",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1720-0240",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1720-0241",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1720-0242",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Chemical, Biological, Radiological, and Nuclear Senior Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1728-0139",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Criminal Investigation Division Special Agent Warrant Officer Basic (4/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1728-0162",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Intelligence Officer (2/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1728-0198",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"35th Court Reporter (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-1733-0004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Parachute Rigger Advanced Noncommissioned Officer (NCO) (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0440",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Advanced Leader Course (Indirect Fire Infantryman) (1/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0530",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Air Defense Artillery, Advanced Leader (ALC) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0558",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Bradley Fighting Vehicle Master Gunner (M2A3) (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"MLRS Fire Direction Specialist (10/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0607",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Basic Officer Leader, Phase III Resident (6/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0608",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Counter Narco-Terrorist (9/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0632",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Fire Support Sergeant, Senior Leader (SLC) (4/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0636",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System (MLRS) Fire Direction Specialist (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0638",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Field Artillery Tactical Data System Specialist (10/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0652",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Military Police Basic Officer Leader (BOLC) Phase III (8/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0655",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Military Police Basic Officer Leader (BOLC) (1/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0658",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advanced (4/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0680",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Electromagnetic Spectrum Manager, Senior Leader (SL) (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0681",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Joint Spectrum Manager (4/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0685",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"11th Redictation (1/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2201-0760",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Electromagnetic Spectrum Manager Senior Leader (1/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0008",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0019",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0021",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0022",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (6/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0023",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network System Operator-Maintainer Y2 Transition (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2202-0024",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AR-2204-0110",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense Battle Management Systems Operator (7/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1304-0017",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Marine Science Technician \"A\" (1/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1304-0022",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Marine Science Technician, First Class (8/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1704-0066",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (AMT) H-65 Roto Tune (1/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1704-0067",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (AMT) H-60J Roto Tune (1/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1704-0070",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"110' WPB Shipboard Command and Control System (SCCS) Maintenance and Management (12/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0103",
      "startDate":"8/1/2001",
      "endDate":"Present",
      "title":"Fire Control System Mk 92 Mod 1 Operation and Maintenance (8/01-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0176",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"378' WHEC Shipboard Command and Control System (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0186",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"AN/SPS-73 Surface Search Radar Maintenance and Repair (NAV-08) (6/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-1715-0195",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Internal Communications Maintainer (3/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"CG-2202-0010",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Intelligence Specialist (9/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"DD-1402-0012",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Attach Staff Training Program (ASTP) (1/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"DD-1709-0007",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Television Equipment Maintenance (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"DD-1719-0014",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Basic Multimedia Illustrator (6/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"DD-1719-0018",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Digital Multimedia (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1401-0014",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Financial Management Officer - Finance (FMOC) (2/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0055",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Financial Management Resource Analysis (5/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0057",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Basic Maintenance Management Specialist (2/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0070",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Engineer Assistant Chiefs (11/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0071",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Advanced Finance (2/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0088",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Technical Controller (4/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0092",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Enhanced Position Location Reporting System (EPLRS) Managers (7/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0093",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (7/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0094",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Data Systems Technician (7/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0095",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Administrative Specialist (9/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0096",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Advanced Administrative Specialist (12/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1402-0097",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intermediate Administrative Specialist (9/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1403-0015",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Intermediate Personnel Administration (11/03-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1405-0035",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Enlisted Supply Basic (ESBC) (10/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1405-0052",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Ground Supply Officer (10/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1406-0052",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Infantry Operations Chief (10/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1714-0019",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Electro-Optical Ordnance Repairer (3/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0116",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Basic Electronics (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0191",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Technical Controller Chief (9/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0217",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Telephone Systems/Personal Computer Intermediate Repair (9/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0219",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (9/03-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0236",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"A+ Certification (4/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1715-0238",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Support Wide Area Network (SWAN) RF Incidental (10/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-1717-0016",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Marine Corps Integrated Maintenance Management System by Correspondence (5/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"MC-2204-0109",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Ammunition Technician (USMC) (3/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1304-0011",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Meteorological Equipment Maintenance, Class C1 USMC (9/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1304-0013",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Aerographer's Mate, Class C1 (10/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0040",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"P-3C Avionics Organizational Level Maintenance (4/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0115",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Machinery Systems Console Maintenance, LSD-41 Console (11/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0132",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Integrated Submarine Automated Broadcast Processing System (ISABPS) Maintenance (4/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0153",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"3-M System Coordinator/Inspector (11/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0155",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Harpoon Weapon System AN/SWG-1A (V) Maintenance (11/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0203",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Intelligence Center Maintenance (ICM) (5/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0211",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Data Link Communication System Maintenance Technician (DLCSMT) (9/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0214",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"LHD Exterior Communications System Maintenance (6/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0216",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"FFG-7/36/61 Class Ships Computer/Peripheral Subsystem Maintenance (5/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0221",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"CV/CVN/LHD Combat Direction System AN/UYQ-21 Display Maintenance Technician (4/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0224",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"LHD Computer and Peripheral Equipment Maintenance (4/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0244",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Gun Computer System (GCS) MK 160 MOD 4/6 and Optical Sight System (OSS) MK 46 MOD 0 Operation and Main (4/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0253",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Structureborne Noise Vibration Monitoring (6/08-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0265",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Tomahawk Land Attack Missile Planning Systems Afloat Route Planner (9/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0266",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Afloat Planning System (APS) Maintenance Technician (8/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0271",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"AN/SPS-48E Operation and Maintenance (11/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0287",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"AN/USQ-149(V)2 Cluster Snoop System (12/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0298",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Submarine Local Area Network (3/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1402-0300",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Integrated Submarine Imaging System (ISIS) TI-10 Maintenance (9/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0028",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"Ship's Serviceman, Class A (12/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0044",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Senior Supply Officer Department Head (6/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0058",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Aviation Supply System Specialist NALCOMOIS Optimized (4/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0059",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Unit Level RSUPPLY (12/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1406-0024",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Religious Program Specialist, Class A (9/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1407-0005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Individual Material Readiness List (IMRL) Asset Manager (10/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1408-0034",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Construction Planning and Estimating Specialist (7/06-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1408-0042",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Marine Aviation Supply Officer Qualification (1/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1409-0012",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Yeoman, Class A1 (3/02-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1704-0625",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Wire Bundle/Connector/Fiber Optic Cable Repair Organizational Maintenance (11/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1709-0043",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Intelligence Specialist \"C\" Imagery Interpretation (11/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1709-0047",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Mine Warfare & Environmental Decision Aids Library 10 Operator (8/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1710-0162",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DDG-51/AOE-6 (10/03-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1714-0059",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Construction Electrician Power and Communications Cable Splicing (5/07-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1714-0094",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Fiber Optic Data Multiplex System, AN/USQ-82 (V), Operation and Maintenance (6/09-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-0546",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Advanced Integrated Voice Communications Network (IVCN) System Maintenance (3/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-1233",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Tactical/Mobile (TACMOBILE) System Operator (7/11-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-1273",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQS-53B (V) Maintenance (7/10-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-1394",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"MK 57 NATO Seasparrow Surface Missile System (NSSMS) Operation and Maintenance (8/12-Present)",
      "category":"Computer Network"
    },
    {
      "id":"NV-1715-1407",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"MK 41 Vertical Launching System Operation and Maintenance Core (11/13-Present)",
      "category":"Computer Network"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"Health Informatics"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-0702-0024",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Hematology/Oncology Phar Services (10/03-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-0707-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-0709-0057",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Pharmacy Basic Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-0709-0077",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (Pharmacy) (10/04-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-0799-0024",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Nuclear Pharmacy Orientation (10/04-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"pharmacy"
    },
    {
      "id":"CG-0709-0010",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Health Services Dental Technician \"C\" School (9/03-Present)",
      "category":"pharmacy"
    },
    {
      "id":"NV-0707-0036",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"pharmacy"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0706-0006",
      "startDate":"12/1/2000",
      "endDate":"Present",
      "title":"Optometry Journeyman by Correspondence (12/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1115-0010",
      "startDate":"10/1/1994",
      "endDate":"Present",
      "title":"Maintenance Management Analysis (10/94-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1404-0005",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Voice Network Systems Journeyman by Correspondence (9/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1405-0075",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Maintenance Management Production Craftsman by Correspondence (1/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1405-0076",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Maintenance Management Production Journeyman by Correspondence (12/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1406-0064",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"USAF Weapons Instructor F-16 (1/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1406-0066",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Weapons Instructor F-15C (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1408-0132",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1408-0144",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"USAF Weapons Instructor Rivet Joint Tactical Coordinator (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1408-0147",
      "startDate":"12/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Craftsman by Correspondence (12/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1606-0159",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"USAF F-15 Transition/Requalification Course (3/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1606-0188",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"USAF Weapons Instructor Compass Call Mission Crew Commander (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0288",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Missile and Space Systems Electronic Maintenance Journeyman by Correspondence (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0298",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Communication/Navigation/Mission Systems Journeyman by Correspondence (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0310",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Aircraft Electrical and Environmental Systems Craftsman by Correspondence (8/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0318",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Instrument and Flight Control Systems Journeyman by Correspondence (10/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0328",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Aircraft Hydraulic Systems Journeyman by Correspondence (2/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0365",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Aircraft Electrical and Environmental Systems Journeyman by Correspondence (10/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0452",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"USAF Weapons Instructor AC-130 (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0453",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"USAF Weapons Instructor MC-130 (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0455",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"USAF Weapons Instructor, Intelligence Sensor (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1704-0459",
      "startDate":"7/1/2003",
      "endDate":"Present",
      "title":"Space Systems Operations Journeyman (7/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1714-0051",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Electrical Systems Journeyman by Correspondence (3/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1714-0053",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Electrical Power Production Journeyman by Correspondence (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0839",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Precision Measurement Equipment Laboratory Craftsman by Correspondence (1/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0840",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Missile and Space Systems Electronic Maintenance Craftsman by Correspondence (4/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0842",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Electronic Warfare Systems Journeyman by Correspondence (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0867",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman by Correspondence (4/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0871",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Airborne Mission System Specialty Journeyman (5/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0874",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Avionics Test Station and Aircraft Component Journeyman by Correspondence (2/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0877",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"A-10/F-15/U-2 Avionic Systems Journeyman (1/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0879",
      "startDate":"7/1/1998",
      "endDate":"Present",
      "title":"Integrated Avionic Systems Journeyman (7/98-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0899",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Computer, Network, Switching, and Cryptographic Systems Journeyman by Correspondence (6/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0928",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"MC-130H Mission Electronic Warfare Officer Initial Qualification (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0931",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Airborne Warning and Control/Interrogator Systems Journeyman by Correspondence (7/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0933",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Communications-Computer Systems Control Journeyman by Correspondence (9/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0934",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Avionic Sensor Systems Journeyman (6/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0936",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Visual Imagery and Intrusion Detection Systems Journeyman by Correspondence (4/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0937",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Avionics Test Station and Components - Electronic Warfare Systems Journeyman by Correspondence (10/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0939",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Ground Radio Communications Journeyman (6/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0940",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Communications Cable and Antenna Systems Journeyman by Correspondence (11/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0943",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Avionic Test Station and Aircraft Component Journeyman by Correspondence (B-1B, C-17, B-2, and F-117 Test Equipment) (11/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0947",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Electromagnetic Spectrum Management by Correspondence (12/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0948",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Precision Measurement Equipment Laboratory Journeyman by Correspondence (12/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0949",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Airborne Mission System Specialty Journeyman by Correspondence (4/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0951",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Avionic Test Station and Aircraft Component Journeyman by Correspondence (Conventional Avionics Systems) (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0954",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Airfield Systems Journeyman (5/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0957",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Aircraft Armament Systems Journeyman by Correspondence (2/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0958",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Communications - Electronics Journeyman by Correspondence (4/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1715-0971",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Electrical Power Production Journeyman by Correspondence (6/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1717-0029",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Aircrew Egress Systems Journeyman by Correspondence (7/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1402-0224",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (24A) (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1402-0225",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (53A) (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1402-0229",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1404-0041",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Communications Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1404-0072",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (10/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1405-0235",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Unit Supply Specialist (1/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1405-0238",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Automated Logistical Specialist (4/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1405-0247",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Property Accounting Technician Warrant Officer Basic Reserve Component, PH II (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1405-0278",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"OH-58D Armament/Electrical Avionic Systems Repairer Supervisor Advanced Leaders (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1408-0336",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Basic Officer Leader (1/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1512-0033",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Information Operations (2/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0154",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"CH-47D/F Helicopter Repairer (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0191",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"AH-64A Armament/Electrical/ Avionic Systems Repairer (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0194",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0204",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"UH-60 A/L Helicopter Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0223",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"UH-60/CH-47 Helicopter Electrician (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0252",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AH-64D Armament/ Electrical/ Avionic Systems Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0253",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AH-64D Attack Helicopter Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0273",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Observation/Scout Helicopter Repairer (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0274",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"AH-64A Armament Maintenance Technician (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0277",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AH-64D Armament/Electrical/Avionic Systems Repairer Supervisor Advanced Leaders (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0278",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"AH-64A Armament/Electrical/Avionics Systems Repairer Supervisor (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0279",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"AH-64A Armament/Electrical/Avionics Systems Repairer Supervisor (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0326",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AH-64D Armament/Electrical/Avionic Systems Repairer Supervisor Advanced Leader (ALC) (Modified) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1704-0328",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1710-0159",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Quartermaster/Chemical Equipment Repairer (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1710-0262",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Armament Repairer Advanced Leader (ALC) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1710-0263",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Armament Repairer Advanced Leader (ALC) (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1710-0264",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Armament Repairer Advanced Leader (ALC) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1710-0284",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Radio/COMSEC Repairer (10/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1714-0047",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Fire Control Systems Repairer (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1714-0052",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"OH-58D Armament/ Electrical/ Avionic Systems Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0060",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Operations Communications System Operator (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0299",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Land Combat Electronic Missile System Repairer (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0658",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Avionic Mechanic (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0660",
      "startDate":"10/1/1999",
      "endDate":"Present",
      "title":"Avionic Systems Repairer (10/99-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0759",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Specialist (1/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0797",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Patriot System Technician- WO Basic (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0971",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Integrated Family Test Equipment Operator/Maintainer (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0974",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Test Measurement and Diagnostic Equipment Maintenance Support Specialist Advanced Leaders (ALC) (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0988",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Computer Detection Systems Repairer (10/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0989",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Avenger System Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-0991",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Radio/Communication Security (COMSEC) Repairer (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1012",
      "startDate":"1/1/1998",
      "endDate":"Present",
      "title":"Satellite Communications Set AN/USC-28 (V) (1/98-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1017",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Visual Information Equipment Operator Maintainer, Advanced Leader (ALC) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1021",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Battlefield Spectrum Management (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1038",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Radar Section Chief, Advanced Leader (ALC) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1053",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Command and Control Systems Integrator Warrant Officer Basic (7/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1057",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Patriot Launching Station ENH OPR/MAINT (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1063",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Electronic Missile Maintenance Warrant Officer (WOAC) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1064",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Test Measurement and Diagnostic Equipment Maintenance Support Specialist (1/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1071",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Common Ground Station Operator (3/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1077",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer (TACT-1) (6/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1078",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Common Core (6/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1093",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Paladin Commander's (9/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1099",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Patriot Fire Control Enhanced Operator/Maintainer (OPR/MAINT) (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1103",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Hunter (RQ-5A) UAV Electronic Maintenance Specialist (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1104",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Shadow (RQ-7A) UAV Electronic Maintenance Specialist (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1107",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Common Core (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1108",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Network Switching Systems Operator/Maintainer EAC-1 (9/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1109",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Network Switching Systems Operator/Maintainer ECB-1 (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1111",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-1) (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1112",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-2) (12/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1114",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (TACT-1) (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1115",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (TACT-2) (12/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1116",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"SF Qual (SF Communications Sergeant) ALC (2/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1122",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Electronic Missile Maintenance Warrant Officer (Basic) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1123",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Electronic Missile Maintenance Warrant Officer (Basic) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1124",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Electronic Systems Maintenance Technician Warrant Officer Basic (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1127",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer (TACT-2) (6/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1129",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer ECB-1 (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1130",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer EAC-2 (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1150",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Radar Repairer (MOS 94M) (6/10-4/15)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1151",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Electronic Technology (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1155",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Test Measure/Diagnostic Equipment Maintenance Support Specialist Basic Level Technician Refresher (MOS 94H10) (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1157",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"MI Systems Maintainer/Integrator Basic Electronics (MOS 35T10) (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1159",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"RC WOBC Field Artillery Targeting Technician (MOS 131A) (6/10-11/14)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1160",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Basic Electricity and Electronics Special (CMF 33) (6/10-4/15)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1182",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Hunter Unmanned Aircraft System Repairer (7/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1183",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Unmanned Aircraft System Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1198",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1200",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer (1/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1206",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Avionics and Survivability Equipment Repairer (10/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1715-1207",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Wheeled Vehicle Mechanic (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0170",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Senior Electronic Missile Maintenance Technician Warrant Officer Advanced (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1720-0009",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Prime Power Production Electrical Specialty (1/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1720-0010",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Prime Power Production Instrumentation Specialist (1/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1722-0013",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Watercraft Operator Certification (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-1732-0013",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Power Generation Equipment Repairer (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0659",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advance (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2201-0684",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Mobile Gun System Master Gunner (4/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2204-0091",
      "startDate":"1/1/2003",
      "endDate":"Present",
      "title":"Reconnaissance and Surveillance Leader RC 1 (1/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1704-0057",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AET HU-25A Avionics \"C\" School (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1704-0059",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AET HH-60J Avionics \"C\" School (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1710-0013",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"270' WMEC Machinery Plant Control and Monitoring System (EM-25) (2/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1714-0018",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Electrician's Mate \"A\" School (6/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1714-0029",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (AET) A (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0038",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Electronics Technician, First Class PQG (ET1) (5/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0103",
      "startDate":"8/1/2001",
      "endDate":"Present",
      "title":"Fire Control System Mk 92 Mod 1 Operation and Maintenance (8/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0104",
      "startDate":"8/1/2001",
      "endDate":"Present",
      "title":"Mark 27 Gyrocompass (8/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0108",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Electronics Technician Class \"A\" School (11/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0138",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"NAVMACS/SATCOM Systems II (COM-05A) (3/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0146",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Electronics Technician Second Class (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0148",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Advanced Digital Electronics Technology (8/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0149",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Advanced Analog Electronics Technology (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0159",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"AIMS MK XII IFF System Maintenance and Repair (IFF-02A) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0162",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"IFF Transponder Maintenance (IFF-01A) (6/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0167",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"MK 75 Gun Mount System Operation and Maintenance (4/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0169",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician \"A\" School (9/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0175",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AET HH-65B Avionics \"C\" School (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0176",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"378' WHEC Shipboard Command and Control System (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0178",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"WLM Integrated Ships Control System (ISCS) Maintenance and Management (1/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0179",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"175' WLM Integrated Ship Control System (ISCS) Operation and Navigation (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0184",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"225' WLB Integrated Ship Control System (ISCS) Operation and Navigation (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0185",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"WLB Integrated Ships Control System (ISCS) Maintenance and Management (3/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0186",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"AN/SPS-73 Surface Search Radar Maintenance and Repair (NAV-08) (6/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0187",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Shipboard Command and Control System (SCCS) Operator (CGC-220) (11/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0188",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"140' WTGB Electronic Chart Precise Integrated Navigation System (ECPINS Basic Operator (CGC-215) (3/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0198",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (AET) HC-144A Avionics (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0199",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (AET) MH-60T Avionics (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0201",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (AET) MH-65 Avionics (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1715-0203",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"SEAWATCH Operator (Tactical) (CGC-227) (1/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-1722-0024",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"TMF-90 HF Low Power Transmitter System (COM-03A) (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-2202-0014",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"SEAWATCH Vega- Electronic Chart Display and Information System (ECDIS) Operator (1/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"CG-2205-0049",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"National Security Cutter Tactical Systems Maintenance (5/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-0504-0022",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Advanced Electronic Journalism (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-0504-0023",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Electronic Journalism (10/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-0504-0031",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Basic Combat Correspondent-60 (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-0504-0032",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Intermediate Electronic Journalism (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-1709-0004",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Basic Still Photography (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-1709-0007",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Television Equipment Maintenance (10/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-1709-0008",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Video Production Documentation (12/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-1715-0019",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Electronic Fundamentals (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"DD-1719-0019",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Basic Lithographer (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1402-0095",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Administrative Specialist (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1405-0035",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Enlisted Supply Basic (ESBC) (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1714-0014",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Basic Engineer Equipment Electrical Systems Technician (3/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1714-0019",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Electro-Optical Ordnance Repairer (3/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0113",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Aviation Radar Fundamentals (1/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0116",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Basic Electronics (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0129",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Introduction to Electronic Test Equipment By Correspondence (5/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0136",
      "startDate":"7/1/2001",
      "endDate":"Present",
      "title":"Antenna Construction and Propagation of Radio Waves by Correspondence (7/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0140",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Microminiature/Automated Test Equipment Repair (6/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0160",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Radio Fundamentals (9/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0192",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Electronic Switching Equipment Technician (7/02-11/14)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0204",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"AN/TRC-170 Repair (2/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0217",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Telephone Systems/Personal Computer Intermediate Repair (9/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0218",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Ground Communications Organizational Repair (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0219",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (9/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0221",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Ground Radio Intermediate Repair (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0222",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Lightweight Multiband Satellite Terminal Operator (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0225",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Advanced Electronics (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0226",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Intermediate Electronics (5/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0232",
      "startDate":"11/1/2001",
      "endDate":"Present",
      "title":"Remote Multiplexer-Combiner (TD-1234) Operations by Correspondence (11/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0242",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Introduction to Satellite Communications (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0247",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Air Defense Systems Technician (8/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1715-0248",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Tactical SIGINT Operators (2/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-1717-0019",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"USMC Sensor Surveillance Operator (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1304-0011",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Meteorological Equipment Maintenance, Class C1 USMC (9/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0115",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Machinery Systems Console Maintenance, LSD-41 Console (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0132",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Integrated Submarine Automated Broadcast Processing System (ISABPS) Maintenance (4/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0155",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Harpoon Weapon System AN/SWG-1A (V) Maintenance (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0203",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Intelligence Center Maintenance (ICM) (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0211",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Data Link Communication System Maintenance Technician (DLCSMT) (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0214",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"LHD Exterior Communications System Maintenance (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0221",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"CV/CVN/LHD Combat Direction System AN/UYQ-21 Display Maintenance Technician (4/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0244",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Gun Computer System (GCS) MK 160 MOD 4/6 and Optical Sight System (OSS) MK 46 MOD 0 Operation and Main (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0271",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"AN/SPS-48E Operation and Maintenance (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1402-0287",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"AN/USQ-149(V)2 Cluster Snoop System (12/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1405-0054",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Aviation Support Equipment Maintenance Manager (7/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1407-0005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Individual Material Readiness List (IMRL) Asset Manager (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0352",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aircraft Sealed Instrument Repair Intermediate Maintenance (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0354",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"MEP-009A/105A Generator Set Intermediate Maintenance (12/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0468",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Cargo Weapons (Mechanical Track) Maintenance (7/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0471",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"F/A-18 Avionics Systems Organizational Maintenance (11/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0474",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"F/A-18 Avionics Systems (Career) Organizational Maintenance (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0536",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"EA-6B Communication, Navigation, and Radar Systems (Career) Organizational Maintenance (1/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0540",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"EA-6B Electrical Components Intermediate Maintenance (7/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0553",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"CH-53D/E Communication/Navigation/Identification/Electronic Countermeasure Systems OMA (8/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0576",
      "startDate":"7/1/2000",
      "endDate":"Present",
      "title":"Integrated Navigation and Tactical Plotting System (INTPS) Maintenance (7/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0578",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Helo Automatic Flight Control Systems Intermediate Maintenance (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0600",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"E-2C Group II Electrical and Instrument Systems (CAREER) Organizational Maintenance (11/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1704-0606",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"MH-53E Electrical/Instrument and DAFCS Organizational Maintenance (5/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1710-0117",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Construction Mechanic \"A\" School (6/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1712-0053",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Caterpillar 3500B Electronically Controlled Engine Advanced Maintenance (1/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0049",
      "startDate":"4/1/2000",
      "endDate":"Present",
      "title":"400 Hertz Motor Generator Electrical System Maintenance (4/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0058",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Advanced Construction Electrician (1/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0061",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"P-3 Connector and Wire Repair Organizational Maintenance (8/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0062",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Interior Communications Electrician Class A (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0065",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"EA-6B Electrical Connector/Wire Repair (6/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0073",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Nuclear Field \"A \" School (Electrician's Mates) (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0085",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"DD-963 CL CG-47 CL DD-963 Class SSM Automatic Degaussing Equipment Maintenance (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0086",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"FFG-7 60/400 Hertz Static Frequency Charger (Water-Cooled) Maintenance (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0088",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Underway Replenishment (UNREP) Electrical and Electronic Controls Maintenance (5/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0093",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"FFG-7 Auxiliary Electrical Subsystems Maintenance (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0097",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"F/A-18 Electrical/Instrument Systems Organizational Maintenance (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0105",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"NC-10B-1/C and A/M32A-108 Mobile Electric Power Plant Intermediate Maintenance (3/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1714-0124",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"N/BQQ-10 (V) 1 & (V) 2 TI08 Sub Sonar Maintenance Conversion (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-0075",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Missile Compensation and Associated PCU Equipment Maintenance (3/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-0449",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"AN/BRD-7 Maintenance (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-0836",
      "startDate":"6/1/2014",
      "endDate":"Present",
      "title":"Manual Morse Training (6/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1010",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Electronics Technician Maintenance School (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1020",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"CU-2070/ARC Automatic Antenna Coupler Intermediate Maintenance P-3 (12/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1075",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"FFG-7 Class Ship Interior Communications (IC) Subsystem Technician (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1089",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Gyrocompass Technician MK- 27 Maintenance (9/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1093",
      "startDate":"6/1/1999",
      "endDate":"Present",
      "title":"AN/SPS-49 (V) 1 Radar Maintenance (6/99-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1230",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Shipboard Information, Training, and Entertainment (SITE) Closed Circuit Television (CCTV) (1/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1273",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQS-53B (V) Maintenance (7/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1328",
      "startDate":"2/1/2000",
      "endDate":"Present",
      "title":"AN/SRQ-4 Light Airborne Multipurpose System (LAMPS) MK III Data Link Transceiver Maintenance (2/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1330",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Microminiature Electronics Repair (6/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1335",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"AN/SPS-40E Radar Set Solid State Transmitter (SSTX) Maintenance (3/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1336",
      "startDate":"12/1/1999",
      "endDate":"Present",
      "title":"AN/SPS-49(V) 8 Radar Set Maintenance (12/99-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1340",
      "startDate":"9/1/2001",
      "endDate":"Present",
      "title":"High Frequency Systems Maintenance Technician (9/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1349",
      "startDate":"2/1/2001",
      "endDate":"Present",
      "title":"Electromagnetic Compatibility Technician (Surface) (2/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1394",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"MK 57 NATO Seasparrow Surface Missile System (NSSMS) Operation and Maintenance (8/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1407",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"MK 41 Vertical Launching System Operation and Maintenance Core (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1426",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"AN/GPN-27 (V) Maintenance, Class C1 (12/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1468",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Static Control Device Theory (1/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1533",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Tactical Support Communications (TSCOMM) Maintenance Technician (6/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1534",
      "startDate":"6/1/2003",
      "endDate":"Present",
      "title":"Fire Control System MK 92 Maintenance (6/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1537",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Carrier-Based Tactical Support Center (CV-TSC) Combat Systems Maintenance Technician (3/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1546",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"AN/BSY-1 Acoustic Combined Maintenance (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1564",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"AN/ASA-65(V) Magnetic Compensator Group Intermediate Maintenance (11/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1578",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"AN/AQH-4 (V) 2 and AN/AQH-4A (V)2 Sound Recorder/Reproducer Set Intermediate Maintenance (3/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1581",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"AN/ASQ-81 (V) Magnetic Anomaly Detection Set Intermediate Maintenance (12/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1583",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"2M Technician Recertifier (5/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1588",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Beacon Identification Friend or Foe MK XII System Maintenance (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1594",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AN/SPS-49A (V) 1 Radar Set Technician (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1602",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Single Audio System Maintenance (8/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1606",
      "startDate":"10/1/1997",
      "endDate":"Present",
      "title":"Dead Reckoning Analyzer Indicator MK-9 MOD-4 Dead Reckoning Tracer MK-6 (10/97-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1608",
      "startDate":"10/1/1997",
      "endDate":"Present",
      "title":"Integrated Voice Communication System Terminal Maintenance (10/97-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1613",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"EA-6B Integrated Electronic Attack System (Career) Organizational Maintenance (3/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1639",
      "startDate":"7/1/2003",
      "endDate":"Present",
      "title":"AN/SLQ-32A (V) 3 Journeyman Maintenance (7/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1650",
      "startDate":"6/1/2014",
      "endDate":"Present",
      "title":"AN/SLQ-32 (V) 4 Maintenance (6/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1655",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"AN/SLQ-32A (V) 3 Maintenance (7/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1659",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician Maintenance Class A (7/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1681",
      "startDate":"9/1/1999",
      "endDate":"Present",
      "title":"AN/APS-115B Search Radar System Intermediate Maintenance (9/99-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1697",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Integrated Voice Communication System AN/STC-2(V) Maintenance AEGIS (1/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1702",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"AN/ARN-118(V) TACAN System Intermediate Maintenance (5/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1710",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"DD-963 60/400 Hertz Frequency Converter (Air Cooled) Maintenance (9/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1712",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"Gunner's Mate Class A School (12/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1715",
      "startDate":"11/1/1997",
      "endDate":"Present",
      "title":"AN/USQ-82(V) Data Multiplex System Technician (11/97-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1716",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DD-963/DDG-993/CG-47 (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1717",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance (FFG-7) (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1726",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"AN/ARC-159(V) Transceivers and Associated Equipment Intermediate Maintenance (9/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1728",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"AV-8B Wire/Connector Repair (8/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1729",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"AN/ALQ-157A (V)1 Infrared Countermeasures Set Intermediate Maintenance (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1732",
      "startDate":"9/1/1995",
      "endDate":"Present",
      "title":"AN/ALQ-144 (V)1 Countermeasures Set Intermediate Maintenance (9/95-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1736",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Nuclear Field \"A\" School (Electronics Technician) (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1738",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"MK-23 Target Acquisition System (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1743",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"FFG-7/36/61 Class Ships Data Display Group Subsystem Maintenance (5/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1751",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapon System MK7 Operation and Maintenance TRK 2 (12/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1760",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"AN/SPN-43C Maintenance (3/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1761",
      "startDate":"7/1/2000",
      "endDate":"Present",
      "title":"AN/FSC-104(V) Standard Emergency Communication Systems, Class G1 (7/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1762",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radio Maintenance (8/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1763",
      "startDate":"11/1/2000",
      "endDate":"Present",
      "title":"AN/TPS-73 Radar Maintenance, Class M3 (11/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1765",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"AN/TRN-44 Maintenance, Class M3 (7/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1767",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"AN/TSQ-131 Maintenance (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1768",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"AN/TRN-46 Maintenance (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1776",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Ultra High Frequency Systems (UHF) Technician (6/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1780",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) - T On-Board Trainer Operator /Administration (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1785",
      "startDate":"11/1/2001",
      "endDate":"Present",
      "title":"AN/SPS-67(V)1 and AN/SPS-67(V)3 Radar Set Maintenance (11/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1786",
      "startDate":"11/1/1998",
      "endDate":"Present",
      "title":"Lamps MK-III Rast Electrical Technician (11/98-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1787",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Dead Reckoning Analyzer Indicator Mk-10 Mod-0 Dead Reckoning Tracer Mk-6 Mod-4C Maintenance (10/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1795",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Fire Controlman Class A School (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1811",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Trident STS Consolidated Maintenance (4/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1816",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Aviation Technician Level 1, Class A1 (8/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1817",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Aviation Technician Organizational Level (6/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1820",
      "startDate":"10/1/1995",
      "endDate":"Present",
      "title":"Aviation Electrician's Mate Strand, Class A1 (10/95-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1828",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"General Purpose Electronic Test Equipment Calibration and Maintenance (8/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1829",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Advanced Calibration Technician (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1831",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Trident II Launcher Control Group Advanced Circuitry and Fault Isolation (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1841",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Controllers and Circuit Breakers Combined Maintenance (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1848",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"AN/SQQ-89(V) Mk 116 Antisubmarine Warfare Control System Maintenance (6/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1853",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Sonar AN/SQS-53C (V) Maintenance (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1855",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Sonar AN/SQS-56 Maintenance (9/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1856",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Sonar Technician Surface \"A\" School (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1861",
      "startDate":"2/1/2001",
      "endDate":"Present",
      "title":"Vertical and Short Take-Off and Landing Optical Landing System Maintenance (2/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1867",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"Subsurface Cryptologic Maintenance Technician (2/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1875",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Advanced Communications Signals Analysis (8/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1886",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"Intermediate Communications Signals Analyst (8/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1897",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Periscopes/ADF (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1902",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"AN/WLR-8 (V) Maintenance (5/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1913",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pre-Electronics Technician Training (Prerequisite Electronic Technical Training-PETT) (5/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1917",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Underwater Mine Test Set Maintenance Technician (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1924",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"AN/FSC-127 Enhanced Terminal Voice Switch Hardware Maintenance (3/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1929",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Information Warfare Officer Basic (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1942",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Combined Electronic Identification Friend or Foe (IFF) Intermediate Maintenance (6/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1944",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"AN/ARC-182 (V) Communication Equipment Intermediate Maintenance (9/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1949",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"AH-IW Navy Armament Rocket Control and Delivery System (NARCADS)/Turret System Intermediate Maintenance (8/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1950",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AH-1W Tow Hellfire Control Display System Organizational Maintenance (8/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1951",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Rotary Wing Electrical and Instruments Intermediate Level Maintenance (1/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1956",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"H-1 Automatic Flight Control System/ Stability Control Augmentation System (AFCS/SCAS) Intermediate Maintenance (4/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1958",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"SH-60F / HH-60H Electronic Systems (Initial) Organizational Maintenance (6/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1959",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Combined Radar Altimeter Intermediate Maintenance (3/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1960",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"SH-60F / HH-60H Electronic Systems (Career) Organizational Maintenance (6/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1962",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AN/AQS-13 Sonar Systems Intermediate Level Maintenance (7/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1971",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"SH-60B LAMPS MK III Weapons Systems Technician (Initial) Organizational Maintenance (3/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1983",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Attitude Heading References System Intermediate Maintenance (11/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1988",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"AN/USM-636A (V) Consolidated Automated Support System (CASS) Common Core Intermediate Maintenance (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1990",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"AN/USM-636A(V) Consolidated Automated Support System (CASS) Advanced Maintenance/Calibration Intermediate Maintenance (3/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1993",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"AN/USM-449A (V) Automatic Test System (ATS) Operator (11/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-1994",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"AN/USM-449b (V) Automatic Test System (ATS) Intermediate Maintenance (11/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2002",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"P-3C Avionics (Career) Organizational Level Maintenance (11/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2011",
      "startDate":"8/1/2003",
      "endDate":"Present",
      "title":"Communications Security COMSEC Maintenance Technician (8/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2012",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Miniature Electronics Repair (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2014",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"AN/SPS-67 (V) Radar Set Maintenance (10/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2015",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SYQ-7 (V) 2 Naval Modular Automated Communications Systems Maintenance (2/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2016",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Naval Modular Automated Communication Systems (NAVMACS) II Maintenance (6/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2017",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Navy Extremely High Frequency Satellite Communications Program AN/USC-38 (V) 2/3 Ship/Shore Maintainer (8/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2020",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) 10 Surface Ship Antisubmarine Warfare (ASW) Combat System Sensor Maintenance (7/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2022",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) Adjunct Subsystem Maintenance (7/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2023",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-53D(V) Maintenance (2/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2026",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"EA-6B Integrated Electronic Attack and Protection System Organizational Maintenance (4/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2033",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Trident Internal Communications Maintenance (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2037",
      "startDate":"9/1/1992",
      "endDate":"Present",
      "title":"MK 92 MOD 6 Fire Control System Difference (9/92-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2040",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Information and Communication Manager (7/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2043",
      "startDate":"3/1/1998",
      "endDate":"Present",
      "title":"AN/URC-131 High Frequency Radio Group (HFRG) Maintenance Technician (3/98-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2044",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"E-6B Mission Avionics Organizational Maintenance (1/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2046",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Stabilized Glide Slope Indicator and Wave Off Light System Maintenance (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2067",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"AN/USM-636A (V) 9 High Power Device Test Station/Radar Intermediate Maintenance (1/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2068",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"AN/USM-636 Series Common Operator/Maintainer Intermediate Maintenance (1/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2073",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"AN/WSN-7(V) INS and AN/WSN-7B(V) RLG Operations and Maintenance (2/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2078",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapons System MK7 Operation and Maintenance Trk 3 (11/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2080",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Rolling Airframe Missile Mod 1 Maintenance (5/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2081",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"5-Inch 54 Caliber Gun Mount MK 45 Mod 2 (6/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2082",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Mk 86 Gun Fire Control System MOD-9 Maintenance (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2085",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Self Defense Surface Missile Systems Technician (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2090",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Ship Self Defense System (SSDS) MK 1 MOD 0 Maintenance Technician (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2095",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Vertical Launching System MK 41 Baseline V/VII Operations and Maintenance (11/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2096",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"AN/TSQ-216 Maintenance (12/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2098",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) Operator (6/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2104",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"SSN Exterior Communications Subsystem (ECS) Maintenance Technician Module 1 (10/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2105",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"SSN Exterior Communications Subsystem (ECS) High Frequency (HF) Maintenance (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2106",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"SSN Exterior Communications Subsystem (ECS) Ultra High Frequency (UHF) Maintenance Technician (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2107",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"SSN Exterior Communications Subsystem (ECS) Extremely High Frequency (EHF) Auxiliary Equipment Basic Maintenance (10/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2111",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Extremely High Frequency (EHF) Basic Maintenance (1/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2112",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"AN/WSN-7A&B (V) 1, 2 Maintenance (2/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2113",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"AN/BQQ-10 TI-04 Submarine Sonar Maintenance Conversion (1/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2118",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"AN/BPS-15H Maintenance (6/00-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2121",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Tactical Tomahawk Weapons Control System (TTWCS) Operations and Maintenance (10/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2123",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89(V) 15 Surface Ship Undersea Warfare Combat System Maintenance (8/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2126",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Close-In Weapon System MK 12 MODs 11-14 to MODs 21, 22 & 25-28 Difference (3/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2127",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Gun Mount 5\"/62 Caliber Mk45 MOD4 Operation and Maintenance Difference (9/03-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2131",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Single Channel Ground and Airborne Radio System (SINCGARS) AN/SRC-54 Combined Maintenance (5/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2132",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Naval Special Warfare Crewman Qualification Training (8/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2133",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Naval Special Warfare Communications (6/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2134",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Electronics Technician (ET) \"A\" (9/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2138",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"ARS-50 Console Maintenance (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2142",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"AN/SQQ-32(V) 3 Minehunting Sonar Set Maintenance (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2143",
      "startDate":"3/1/2001",
      "endDate":"Present",
      "title":"Underwater Mine Mk-67 Weapons System SLMM (Submarine Launched Mobile Mine) Technician (3/01-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2150",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"AN/SYQ-27 Mission Planning System, Naval Fires Control System (NFCS) Operation and Maintenance (11/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2151",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"CH-46/CH53E Automatic Flight Control Systems Intermediate Maintenance (1/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2152",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"MH-60S Avionics (Initial) Organizational Maintenance (3/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2155",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician Operation and Maintenance (ACNT Trk 2) (2/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2156",
      "startDate":"12/1/2004",
      "endDate":"Present",
      "title":"AN/SPY-1D/(V) Operation and Maintenance (Trk 3) (12/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2157",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Weapon System Operation and Maintenance (Trk 4) (2/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2158",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"AN/UYQ-21 Display Common Core Operation and Maintenance (10/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2160",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Fire Control System MK98 MOD4 Advanced Maintenance (5/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2166",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"D5 Backfit Indication, Control, and Alarm System Advanced Maintenance (4/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2174",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Cryptologic Technician Technical (CTT) Apprentice Technical Training (ATT) (3/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2177",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Electrician's Mate Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2178",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician Electrical Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2181",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (Intermediate) \"ATI\" Apprentice Technical Training (ATT) (4/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2182",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (Intermediate) \"ATI\" Apprentice Technical Training (ATT) (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2183",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Aviation Electronics Technician Organizational (AT\"O\") Apprentice Technical Training (ATT) (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2185",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Cryptologic Technician Maintenance (CTM) Apprentice Technician Training (ATT) (3/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2186",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Mineman Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2187",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Marine Avionics (MV) Apprentice Technical Training (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2188",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Interior Communications Electrician Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2190",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman Apprentice Technical Training (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2191",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Electronics Technician Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2192",
      "startDate":"8/1/2010",
      "endDate":"Present",
      "title":"Sonar Technician Surface Apprentice Technical Training (8/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2196",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"E-2C HE2K (Career) AEW Systems Organizational Maintenance (5/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2200",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"AN/TPX-42 (V) 14 Maintenance (10/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2201",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"AN/FSQ-204 Standard Terminal Air Replacement System (STARS) Maintenance (11/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2202",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Gator Class SEAL Delivery Vehicle (SDV) MK 8 Mod 1 Electronic Maintenance (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2211",
      "startDate":"12/1/2002",
      "endDate":"Present",
      "title":"AN/ USM-670 Electronic Test Set (JSECST) Operator Maintainer (12/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2214",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Electrical Theory (7/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2222",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Gun Computer System MK 160 MOD 9 & 10 Operation and Maintenance Differences (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2223",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Gun Computer System MK 160 8/Optical Sight System MK 46 MOD 1 Differences (2/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2236",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Ships Signals Exploitation Equipment Increments \"Echo\" Maintenance (2/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2240",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"NATO Sea Sparrow Surface Missile System (NSSM) Mk 57 MOD 10-13 Operation and Maintenance (O&M) Differences (1/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2241",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"AN/SPS-67 (V) 5, Surface Search Radar Set Maintenance (3/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2243",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"AN/SLQ - 32B (V) 2 Maintenance (2/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2251",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Digital Modular Radio AN/USC-61 (V) CMB - Navy Maintenance (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2252",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"MarCom Integrated Voice Communications System (IVCS) (2/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2253",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"EA-18G Avionics Organizational Maintenance (4/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2254",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"EP-3E Connector and Wire Repair Maintenance (2/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2255",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/Spy-1B/B (V)/D Operations and Maintenance Virtual Training Path (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2256",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"AN/Spy-1D (V) Operations and Maintenance Virtual Training Path (6/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2257",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/Spy-1A (V) Operation and Maintenance Virtual Training Path (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2258",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AEGIS Milspec Fire Control Systems/400 HZ Virtual Training Path (7/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2259",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"AEGIS Cots Fire Control Systems/400HZ Virtual Training Path (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2268",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/UYQ-21 CVN/LHD Display System Virtual Training Path (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2271",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"V-22 Electrical Systems (Transition) Organizational Maintenance (9/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2277",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"AN/USM-636 (V) Consolidated Automated Support System (CASS) Electronic Warfare Intermediate Maintenance (10/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2285",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Common Submarine Radio Room Basic Maintenance (4/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2286",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Trident Fire Control Technician Data Processing Subsystem Basic Maintenance (Ship Control Subsystem, UGC-143A (V) 3 Teleprinter, Trident Signal Data Converter) (3/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2287",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Trident Fire Control Technician Data Processing Subsystem Basic Maintenance (UYK-43 (V) Computer Set and Subsystem Maintenance) (3/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2294",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Tactical Mobile Systems Fundamentals (10/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2298",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"AN/SPQ-9B Radar Maintenance (6/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2306",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Journeyman Communications (JCC) (1/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2316",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"AH-1Z/UH-1Y Weapons Delivery Systems Organizational Maintenance (12/10-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2320",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Gun Computer System (GCS) MK 160 MOD 11/Electro-Optical Sensor System (EOSS) MK 20 MOD 0 Operation and Maintenance (2/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2325",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"TMR-8092 HF Communications System (10/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1715-2341",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"D5 Backfit MOD 6 Advanced Maintenance (11/11-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1721-0012",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Meteorological Equipment Maintenance (2/13-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1722-0018",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Landing Craft, Air Cushion (LCAC) Navigator Crew Training (10/09-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1722-0022",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Gator Class SEAL Delivery Vehicle (SDV) MK 8 Mod 1 Operator (10/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1722-0027",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Basic Integrated Voice Communications Network System Maintenance (10/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1723-0033",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Gator Class SEAL Delivery Vehicle (SDV) MK 8 Mod 1 Hull, Mechanical and Electrical Maintenance (HM&E) (8/06-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1729-0022",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Culinary Specialist Records Keeper (1/04-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2202-0194",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Strike Armament Intermediate Maintenance Repair (9/05-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0008",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"AN/BQQ-10 TI -06 Submarine Sonar Maintenance Conversion (5/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0009",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Photonics Mast Maintenance (9/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0010",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"SSN 774 Ship Control Maintenance (4/07-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0011",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"SSN 774 Interior Communication System Maintenance (9/08-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0027",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"FCS Mk 98 Mod 6 Missile Technician Replacement (3/14-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"NV-2205-0028",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"AN/BQQ-10 (V) TI-10 Submarine Sonar Maintenance (2/12-Present)",
      "category":"Electronic health records"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0031",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Critical Care Nursing (9/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0042",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68W30) (10/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0704-0016",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Orthopedic Specialty (3/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0704-0024",
      "startDate":"2/1/1996",
      "endDate":"Present",
      "title":"Respiratory Specialist (2/96-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1304-0023",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Battlefield Weather (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0257",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Oracle DBA I (10/10-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0267",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0273",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1404-0060",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Imagery Analyst (10/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1408-0350",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery TAC data SYS spec Advanced Leader (ALC) (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1408-0351",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Field Artillery TAC Data SYS spec Advanced Leader (ALC) (11/10-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0169",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Operational Fire Direction Specialist, Senior Leader (SLC) (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1729-0057",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Detachment (VS) Pre-Deployment (RC) (10/05-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1729-0065",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (8/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0501",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant, Senior Leader (SLC) (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0511",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Field Artillery Senior Radar/Targeting Sergeant Advanced Noncommissioned Officer (ANCOC) (10/04-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1406-0007",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruiter School (6/09-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"health care database"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-1402-0059",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Expeditionary Deployment Systems (EDS) Resident (11/08-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-1406-0056",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Career Retention Specialist by Correspondence (9/05-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"health care database"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0703-0008",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Hospital Corpsman Basic (5/14-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1402-0270",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Similar to Automated Maintenance Environment (2/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1402-0277",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance IMA Data Base Administrator/Analyst Optimize (2/13-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1405-0060",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Stock Control Supervisor/Force Level Relational Supply (12/13-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1405-0061",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Relational Supply - Force Level OPS Tech (1/14-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1606-0093",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Tomahawk Mission Distribution System (MDS) Operator and Database Administrator (3/05-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-2097",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) System Administration (3/02-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-2198",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Maintenance OMA System Administrator/Analyst Optimize (2/13-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"health care database"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"health care database"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0703-0028",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Craftsman by Correspondence (10/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0706-0006",
      "startDate":"12/1/2000",
      "endDate":"Present",
      "title":"Optometry Journeyman by Correspondence (12/00-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0709-0041",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Aerospace Medical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0709-0042",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Medical Service Journeyman by Correspondence (10/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-0799-0013",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Biomedical Equipment Craftsman by Correspondence (1/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1115-0010",
      "startDate":"10/1/1994",
      "endDate":"Present",
      "title":"Maintenance Management Analysis (10/94-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1405-0075",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Maintenance Management Production Craftsman by Correspondence (1/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1405-0076",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Maintenance Management Production Journeyman by Correspondence (12/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1408-0117",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Journeyman by Correspondence (10/02-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1408-0131",
      "startDate":"11/1/2005",
      "endDate":"Present",
      "title":"Information Management Craftsman by Correspondence (11/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1408-0132",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Personnel Journeyman by Correspondence (5/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1408-0147",
      "startDate":"12/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Craftsman by Correspondence (12/02-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1704-0328",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Aircraft Hydraulic Systems Journeyman by Correspondence (2/03-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1715-0842",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Electronic Warfare Systems Journeyman by Correspondence (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1715-0867",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman by Correspondence (4/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AF-1715-0949",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Airborne Mission System Specialty Journeyman by Correspondence (4/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0701-0013",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Dental Specialist (10/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0702-0014",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Medical Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0702-0022",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (5/14-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0702-0023",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (11/14-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0702-0025",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (12/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0702-0035",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Radiology Specialist (9/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0037",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0041",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"68W Transition (1/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0707-0034",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Basic Officer Leader (3/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Special Forces Diving Medical Technician (11/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0040",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Flight Medic (1/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0066",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Medical Assistance (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0076",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Health Care Advanced Leader (10/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0079",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"EMT - Basic Recertification (DL) (9/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0799-0018",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Evacuation Doctrine (10/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0799-0019",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Health Services Warrant Officer Basic (3/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0801-0046",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"M93 Series Chemical, Biological, Radiological, and Nuclear (CBRN) Reconnaissance System (Fox) Operators (10/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0202",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (6/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0235",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Unit Supply Specialist (1/13-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0238",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Automated Logistical Specialist (4/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0247",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Property Accounting Technician Warrant Officer Basic Reserve Component, PH II (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0280",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Medical Logistics Specialist (1/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0300",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68J30) (10/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0301",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (91J30) (10/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1405-0302",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (8/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1406-0252",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Human Resources Specialist (10/11-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1408-0171",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Unit Administration Basic (6/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1408-0212",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aviation Life Support Equipment Technician Phase 2 (Resident) (10/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0154",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"CH-47D/F Helicopter Repairer (10/11-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0194",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0204",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"UH-60 A/L Helicopter Repairer (10/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0253",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AH-64D Attack Helicopter Repairer (10/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0273",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Observation/Scout Helicopter Repairer (10/03-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1704-0328",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"OH-58D Helicopter Repairer (10/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1715-0759",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Specialist (1/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1715-1011",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Basic Noncommissioned Officer (5/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1720-0245",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Identification of Biological Warfare Agents (7/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-1729-0066",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Veterinary Corps Officer Basic (OBLC HPSP/RC/VC64) (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-2201-0715",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"160th SOAR(A) - Special Operations Aviation Medic Indoctrination - SOAMIC (11/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Medical Records"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-1402-0095",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Administrative Specialist (9/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-1405-0035",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Enlisted Supply Basic (ESBC) (10/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"MC-1513-0019",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Expeditionary Training for Chaplains (5/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0101-0002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Medical Entomology and Pest Management Technology (5/13-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0702-0015",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (5/14-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0703-0010",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (11/14-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0803-0006",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Amphibious Reconnaissance Corpsman (6/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-0803-0013",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Surface Rescue Swimmer (1/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1405-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Marine Aviation Supply Specialist (7/13-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1405-0054",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Aviation Support Equipment Maintenance Manager (7/08-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1406-0037",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman/Personnelman Advanced Administration (5/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1407-0005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Individual Material Readiness List (IMRL) Asset Manager (10/12-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1409-0011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Administration, Class A1 (9/10-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1606-0103",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Engineer Diver, BNCOC (Phase 3) Army First Class Diver (1/06-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1715-1780",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) - T On-Board Trainer Operator /Administration (1/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-1729-0022",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Culinary Specialist Records Keeper (1/04-Present)",
      "category":"Medical Records"
    },
    {
      "id":"NV-2201-0125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Basic Navy (Underwater) (10/13-Present)",
      "category":"Medical Records"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"health care"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"health care"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-0703-0028",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Craftsman by Correspondence (10/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-0802-0031",
      "startDate":"3/1/2000",
      "endDate":"Present",
      "title":"Firefighter Certification System by Correspondence (3/00-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1402-0082",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Communications - Computer Systems Programming Journeyman by Correspondence (4/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1601-0053",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Pavements and Construction Equipment Operator Journeyman (4/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1704-0463",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Conventional Munitions Maintenance Officer (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1704-0464",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Conventional Munitions Maintenance Officer (Bridge) (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1728-0059",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Fire Fighter I by Correspondence (8/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1728-0061",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Fire Fighter II by Correspondence (8/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AF-1728-0062",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Fire Officer II (2/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0104-0012",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Animal Care Advanced Leader (10/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0702-0014",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Medical Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0702-0020",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0702-0034",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Ear, Nose, & Throat (ENT) Specialty (9/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0703-0041",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"68W Transition (1/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0040",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Flight Medic (1/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0088",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Operating Room Specialist (5/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1205-0006",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Army Band Advanced Noncommissioned Officer (NCO) (10/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1408-0307",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Human Resource Information System Management Specialist (12/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1512-0021",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Psychological Operations Specialist (10/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1512-0022",
      "startDate":"6/1/2001",
      "endDate":"Present",
      "title":"Psychological Operations Specialist RECLASS (6/01-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1601-0263",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"NBC Reconnaissance for Brigade Combat Teams (5/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1601-0272",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"RC WOAC Utilities Operations and Maintenance Technician (MOS 210A) (6/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1704-0230",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Railway Section Repairer (10/00-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1704-0254",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aircraft Pneudraulic Repairer (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1710-0244",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Special Forces Engineer Sergeant (11/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1710-0257",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Wheel Vehicle Recovery Specialist (7/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1710-0258",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Artillery Mechanic (10/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1712-0020",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Marine Engineering Officer-WO Basic (WOBC) (4/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-0974",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Test Measurement and Diagnostic Equipment Maintenance Support Specialist Advanced Leaders (ALC) (4/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-1113",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer (STRAT-1) (6/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1715-1194",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Stryker Systems Maintainer (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1716-0015",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Shower/Laundry and Clothing Repair Specialist (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1720-0011",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Prime Power Production Mechanical Specialist (1/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1720-0012",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Prime Power Production Specialist (1/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1720-0245",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Identification of Biological Warfare Agents (7/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1722-0014",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Watercraft Engineer (3/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1728-0139",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Criminal Investigation Division Special Agent Warrant Officer Basic (4/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1729-0048",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Veterinary Food Inspection Advanced Leader (1/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-1732-0010",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Water Treatment Specialist AIT (5/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0404",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Engineer Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0596",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"TATS Special Forces Engineer Sergeant Advanced Noncommissioned Officer (NCO) (2/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0622",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS Training) (6/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0692",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Army National Guard Automation Noncommissioned Officer (10/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0695",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Diver General Engineering (MOS 21D) (6/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0763",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist (EOD) Advanced Leaders (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-2201-0764",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Specialist(EOD) Advanced Leaders (10/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1708-0016",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Boatswain's Mate \"A\" School (3/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1708-0029",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Boatswain's Mate Advanced Navigation and Piloting (10/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1710-0014",
      "startDate":"11/1/2008",
      "endDate":"Present",
      "title":"Damage Controlman School (11/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1710-0019",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Damage Controlman Third Class by Correspondence (11/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1710-0020",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Damage Controlman First Class (DC1) Performance Qualification Guide (PQG) (6/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1714-0027",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Gunner's Mate First Class Performance Qualification Guide (8/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1715-0047",
      "startDate":"6/1/2006",
      "endDate":"Present",
      "title":"Communication System Development (COM-06) (6/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1715-0154",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (AMT) A (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"CG-1723-0007",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Machinery Technician Third Class Performance Qualification Guide (3/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"DD-1601-0022",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"Advanced Geodetic Survey (AGS) (2/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1402-0058",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Basic Logistics/Embarkation Specialist (3/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1402-0070",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Engineer Assistant Chiefs (11/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1403-0018",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Field Radio Operator (11/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1601-0024",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Basic Combat Engineer (3/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1601-0033",
      "startDate":"8/1/1997",
      "endDate":"Present",
      "title":"Interior Wiring by Correspondence (8/97-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1601-0043",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineer Equipment Officer (5/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1601-0044",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Advanced Water Support Technician (4/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1710-0047",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Tank Systems Mechanic (9/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1710-0058",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Engineer Estimations by Correspondence (5/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1715-0217",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Telephone Systems/Personal Computer Intermediate Repair (9/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1715-0236",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"A+ Certification (4/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-1729-0034",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Food Service Noncommissioned Officer (USMC) (4/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"MC-2201-0005",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Ground Ordnance Supervisor by Correspondence (7/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0101-0002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Medical Entomology and Pest Management Technology (5/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0702-0017",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Hemodialysis Technician School (5/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0801-0009",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Operational Water Chemistry and Radiological Controls (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0801-0012",
      "startDate":"1/1/1999",
      "endDate":"Present",
      "title":"Shipboard Chemical, Biological, and Radiological Defense Specialist (1/99-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0801-0015",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Chemical and Biological/Homemade Explosive (HME) Hazards (5/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0803-0008",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Marine Engineer Diving Officer (10/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1205-0012",
      "startDate":"11/1/2003",
      "endDate":"Present",
      "title":"Sound Reinforcement Technician (11/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1304-0030",
      "startDate":"2/1/2006",
      "endDate":"Present",
      "title":"AN/SQQ-32 (V) 3 Minehunting Sonar Set (MSS) Operator (2/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1402-0115",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Machinery Systems Console Maintenance, LSD-41 Console (11/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1402-0296",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Joint Cyber Analysis (10/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1601-0048",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Main/Auxiliary Turbine, Ship's Service Turbogenerator, and Lube Oil Purifier Maintenance (12/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1606-0016",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Master Diver Qualification (4/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1606-0079",
      "startDate":"9/1/2013",
      "endDate":"Present",
      "title":"Navy Diver \"A\" School (Second Class Diver) (9/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1606-0102",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Army Engineer Diver (Army Second Class Diver) (10/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1606-0105",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Marine Engineering Duty Officer (MEDO) \"Navy\" (11/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1701-0012",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"R-114 York 200 Ton Air Conditioning Technician (7/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1701-0019",
      "startDate":"6/1/2001",
      "endDate":"Present",
      "title":"Refrigeration and Air Conditioning Systems Technician (6/01-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1704-0403",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AV-8B Aircraft Ordnance Technician Organizational Maintenance (8/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1704-0672",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Mine Countermeasures (5/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1704-0673",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Underwater Ordnance (5/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1704-0674",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Nuclear Hazards (5/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1704-0675",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Surface Ordnance/Improvised Explosive Device (2/08-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0117",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Construction Mechanic \"A\" School (6/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0162",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DDG-51/AOE-6 (10/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0188",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Electronic Automatic Boiler Controls Maintenance (2/05-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0189",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Automatic Boiler Controls Console Operator (4/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0196",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Technician Basic (1/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0204",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Advanced Steam Engineering (7/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1710-0271",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Construction Management Crew Member (6/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1712-0028",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Submarine Diesel Engine Maintenance (8/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1712-0055",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Power Train and Chassis (7/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1713-0003",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Advanced Engineering Aid (12/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1713-0030",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Construction Design (7/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1714-0046",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"500KW 60HZ Motor Generator Set GE Electrical Maintenance (5/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1714-0047",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"500 kW 60 Hertz Motor Generator Set GE Mechanical Maintenance (9/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1714-0078",
      "startDate":"8/1/1999",
      "endDate":"Present",
      "title":"Aviation Ordnanceman Navy Difference (8/99-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1714-0089",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Mineman Class \"A\" School (9/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-0235",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Sonar AN/SQS-56 Operator (7/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-0449",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"AN/BRD-7 Maintenance (2/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1229",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Integrated Launch and Recovery Television Surveillance System Maintenance (6/00-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1230",
      "startDate":"1/1/2001",
      "endDate":"Present",
      "title":"Shipboard Information, Training, and Entertainment (SITE) Closed Circuit Television (CCTV) (1/01-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1273",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"AN/SQS-53B (V) Maintenance (7/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1330",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Microminiature Electronics Repair (6/00-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1712",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"Gunner's Mate Class A School (12/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1716",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance DD-963/DDG-993/CG-47 (10/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1717",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Gas Turbine Electrical Maintenance (FFG-7) (10/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1841",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Controllers and Circuit Breakers Combined Maintenance (4/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1848",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"AN/SQQ-89(V) Mk 116 Antisubmarine Warfare Control System Maintenance (6/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1851",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89 (V) Sonar Watch Supervisor (1/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-1988",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"AN/USM-636A (V) Consolidated Automated Support System (CASS) Common Core Intermediate Maintenance (4/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2098",
      "startDate":"6/1/2002",
      "endDate":"Present",
      "title":"Tactical Electronic Reconnaissance Processing and Evaluation System (TERPES) Operator (6/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2142",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"AN/SQQ-32(V) 3 Minehunting Sonar Set Maintenance (4/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2201",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"AN/FSQ-204 Standard Terminal Air Replacement System (STARS) Maintenance (11/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2216",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Machinist Mate (Engineering) Auxiliary Equipment SSN/SSBN (11/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2218",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Integrated Low Pressure Electrolyzer Electrical Maintenance (6/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2242",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"MK 48 Heavy Weight Torpedo Technician (8/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2315",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"AN/USM-725 (V) Reconfigurable Transportable Consolidated Automated Support System- High Power Operation and Maintenance (10/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1715-2331",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89A (V) 15 Journeyman (5/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1722-0026",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Crew Served Weapons Operations and Maintenance (1/07-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1723-0015",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Machine Tool Operator (2/12-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1728-0060",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Legalman/Legal Specialist Mid-Career (2/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1728-0071",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Engineering Professional Apprenticeship Career (5/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1729-0022",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Culinary Specialist Records Keeper (1/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1732-0014",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Senior Enlisted Propulsion Engineering (11/04-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1732-0026",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Naval Power School, Enlisted (11/06-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-1732-0030",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Water Treatment 2 (9/09-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2201-0125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Basic Navy (Underwater) (10/13-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2201-0126",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Department of Defense Joint Explosive Ordnance Disposal (Common Core) (4/14-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2202-0174",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Naval Science Institute (5/03-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2202-0177",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"AN/SLQ-48 Mine Neutralization System Operator (9/10-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2202-0210",
      "startDate":"12/1/2001",
      "endDate":"Present",
      "title":"Seaman to Admiral 21st Century-Naval Science Institute (12/01-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"NV-2202-0211",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Seaman to Admiral 21st Century-Naval Science Institute (Follow-on) (10/02-Present)",
      "category":"Healthcare Technology"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Healthcare analyst"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Healthcare analyst"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0703-0028",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Craftsman by Correspondence (10/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0706-0005",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Ophthalmology Journeyman (4/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0706-0006",
      "startDate":"12/1/2000",
      "endDate":"Present",
      "title":"Optometry Journeyman by Correspondence (12/00-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0709-0041",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Aerospace Medical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0709-0042",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Medical Service Journeyman by Correspondence (10/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0799-0013",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Biomedical Equipment Craftsman by Correspondence (1/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-1408-0117",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Journeyman by Correspondence (10/02-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-1715-0867",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman by Correspondence (4/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0104-0012",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Animal Care Advanced Leader (10/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0701-0013",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Dental Specialist (10/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0014",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Medical Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0022",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (5/14-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0023",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (11/14-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0025",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (12/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0027",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Basic Expanded Functions Dental Assistant (1/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0702-0035",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Radiology Specialist (9/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0037",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0041",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"68W Transition (1/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0704-0014",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Physical Therapy Specialty (3/11-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0707-0034",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Basic Officer Leader (3/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Special Forces Diving Medical Technician (11/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0040",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Flight Medic (1/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0066",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Medical Assistance (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0076",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Health Care Advanced Leader (10/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0079",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"EMT - Basic Recertification (DL) (9/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0799-0018",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Evacuation Doctrine (10/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0799-0019",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Health Services Warrant Officer Basic (3/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0801-0046",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"M93 Series Chemical, Biological, Radiological, and Nuclear (CBRN) Reconnaissance System (Fox) Operators (10/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0202",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (6/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0280",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Medical Logistics Specialist (1/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0300",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68J30) (10/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0301",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (91J30) (10/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1405-0302",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (8/04-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1408-0212",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aviation Life Support Equipment Technician Phase 2 (Resident) (10/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1715-0759",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Specialist (1/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1715-1011",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Basic Noncommissioned Officer (5/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1720-0245",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Identification of Biological Warfare Agents (7/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-1729-0066",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Veterinary Corps Officer Basic (OBLC HPSP/RC/VC64) (10/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AR-2201-0715",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"160th SOAR(A) - Special Operations Aviation Medic Indoctrination - SOAMIC (11/10-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"MC-1513-0019",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Expeditionary Training for Chaplains (5/12-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0101-0002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Medical Entomology and Pest Management Technology (5/13-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0701-0016",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Advanced Dental Assistant (9/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0702-0015",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (5/14-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0703-0010",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (11/14-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0704-0004",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Physical Therapy Technician (HM-8466) (3/11-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0803-0006",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Amphibious Reconnaissance Corpsman (6/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-0803-0013",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Surface Rescue Swimmer (1/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-1606-0103",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Engineer Diver, BNCOC (Phase 3) Army First Class Diver (1/06-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"NV-2201-0125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Basic Navy (Underwater) (10/13-Present)",
      "category":"Medical Assistant"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0706-0005",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Ophthalmology Journeyman (4/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0042",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Medical Service Journeyman by Correspondence (10/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0104-0012",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Animal Care Advanced Leader (10/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0702-0027",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Basic Expanded Functions Dental Assistant (1/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0031",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Critical Care Nursing (9/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0042",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68W30) (10/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0704-0014",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Physical Therapy Specialty (3/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0704-0016",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Orthopedic Specialty (3/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0704-0024",
      "startDate":"2/1/1996",
      "endDate":"Present",
      "title":"Respiratory Specialist (2/96-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1729-0057",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Detachment (VS) Pre-Deployment (RC) (10/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1729-0065",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (8/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-1406-0056",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Career Retention Specialist by Correspondence (9/05-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0701-0016",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Advanced Dental Assistant (9/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0703-0008",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Hospital Corpsman Basic (5/14-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0704-0004",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Physical Therapy Technician (HM-8466) (3/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"Health Care Assistant"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0031",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Critical Care Nursing (9/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0042",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68W30) (10/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0704-0016",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Orthopedic Specialty (3/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0704-0024",
      "startDate":"2/1/1996",
      "endDate":"Present",
      "title":"Respiratory Specialist (2/96-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1729-0057",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Detachment (VS) Pre-Deployment (RC) (10/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1729-0065",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (8/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-1732-0010",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Water Treatment Specialist AIT (5/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-1406-0056",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Career Retention Specialist by Correspondence (9/05-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0703-0008",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Hospital Corpsman Basic (5/14-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0705-0013",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Radiation Safety Officer (RSO) (10/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0707-0007",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Bearings (11/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0709-0003",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Aerospace Medicine Technician (HM-8406) (7/10-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0709-0027",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-0802-0014",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Engineering Laboratory Technician) (2/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1406-0045",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Recruit Division Command (3/08-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1715-1274",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Sonar Technician Submarines (STS) Class A (1/11-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1715-1473",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Submarine Fire Control Technician Class A (12/13-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1715-2239",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Navigation) Class \"A\" (5/04-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1728-0053",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Master-At-Arms \"A\" School (8/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1732-0028",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Electrician's Mates/Electronics Technician) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-1732-0029",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Prototype Training (Machinist's Mates) (1/07-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"NV-2202-0165",
      "startDate":"8/1/2002",
      "endDate":"Present",
      "title":"Recruit Training (8/02-Present)",
      "category":"health care Specialist"
    },
    {
      "id":"AF-0701-0019",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0701-0020",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Dental Assistant Journeyman by Correspondence (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0709-0049",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"Health Services Administration (4/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0802-0039",
      "startDate":"6/1/2000",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman Special Programs (CD) (6/00-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0802-0041",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Bioenvironmental Engineering Journeyman (9/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-1722-0003",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector II by Correspondence (3/03-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-1722-0004",
      "startDate":"2/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector III by Correspondence (2/03-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-1722-0016",
      "startDate":"3/1/2003",
      "endDate":"Present",
      "title":"Fire Inspector 1 by Correspondence (3/03-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-1723-0017",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Aircraft Structural Maintenance Journeyman by Correspondence (5/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0326-0064",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"AMEDD Captains Career (7/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0701-0014",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Dental Laboratory Specialty (11/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0701-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Preventive Dentistry Specialty (10/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0702-0020",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0702-0021",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0702-0023",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (11/14-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0704-0019",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Orthopedic Specialty (4/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0705-0019",
      "startDate":"5/1/2004",
      "endDate":"Present",
      "title":"Radiological Safety (5/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0706-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Eye Specialty (3/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Special Forces Diving Medical Technician (11/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0063",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Ear, Nose, and Throat (ENT) Specialty (3/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0074",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Platoon Leader Officer Basic (7/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0076",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Health Care Advanced Leader (10/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0079",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"EMT - Basic Recertification (DL) (9/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0087",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Operating Room Specialist (11/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0799-0018",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Evacuation Doctrine (10/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-0801-0049",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Analytical Laboratory System Operator (GWOT) (10/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1403-0027",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Medical Information Management (8/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1408-0212",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aviation Life Support Equipment Technician Phase 2 (Resident) (10/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1511-0034",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer Course (BNCOC) Phase 2 (9/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1511-0036",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist Basic Noncommissioned Officer (BNCOC) (9/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1511-0039",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Civil Affairs Specialist AIT (4/06-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1606-0174",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Army Aviation Safety Officer (4/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-1729-0068",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (7/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0539",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (2/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0642",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0643",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0644",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0645",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0646",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0647",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0648",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0650",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2201-0651",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"United States Army Drill Sergeant School (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AR-2205-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (3/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-1406-0013",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Chief Warrant Officer Professional Development (5/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-1511-0002",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Chief Petty Officer Academy (1/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-1708-0045",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Direct Entry Petty Officer Training (Depot) (10/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-1717-0015",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Reserve Officer Candidate Indoctrination (12/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-2202-0005",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Officer Candidate School (5/10-Present)",
      "category":"Health Technician"
    },
    {
      "id":"CG-2205-0035",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Recruit Training (6/09-Present)",
      "category":"Health Technician"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"Health Technician"
    },
    {
      "id":"NV-0701-0010",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Dental Laboratory Technician, Basic (11/12-Present)",
      "category":"Health Technician"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Health Technician"
    },
    {
      "id":"NV-0702-0016",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Orthopedic Cast Room Technician (4/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"NV-0702-0017",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Hemodialysis Technician School (5/11-Present)",
      "category":"Health Technician"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AF-1723-0017",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Aircraft Structural Maintenance Journeyman by Correspondence (5/09-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0701-0014",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Dental Laboratory Specialty (11/12-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0702-0020",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Specialty (7/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0702-0023",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (11/14-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0702-0024",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Hematology/Oncology Phar Services (10/03-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0704-0019",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Orthopedic Specialty (4/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0706-0003",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Eye Specialty (3/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0707-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Special Forces Diving Medical Technician (11/10-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0057",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Pharmacy Basic Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0063",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Ear, Nose, and Throat (ENT) Specialty (3/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0076",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Health Care Advanced Leader (10/09-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0077",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (Pharmacy) (10/04-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0079",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"EMT - Basic Recertification (DL) (9/04-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0709-0087",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Operating Room Specialist (11/10-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0799-0018",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Evacuation Doctrine (10/05-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0799-0024",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Nuclear Pharmacy Orientation (10/04-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-1408-0212",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aviation Life Support Equipment Technician Phase 2 (Resident) (10/10-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"CG-0709-0010",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Health Services Dental Technician \"C\" School (9/03-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0701-0010",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Dental Laboratory Technician, Basic (11/12-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0702-0016",
      "startDate":"4/1/2011",
      "endDate":"Present",
      "title":"Orthopedic Cast Room Technician (4/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0702-0017",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Hemodialysis Technician School (5/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0703-0010",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (11/14-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0707-0036",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0709-0028",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Cardiovascular Technician (7/11-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Pharmacy Technician"
    },
    {
      "id":"AF-0799-0012",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Pharmacy Journeyman by Correspondence (5/08-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-0702-0024",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Hematology/Oncology Phar Services (10/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-0707-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-0709-0057",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Pharmacy Basic Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-0709-0077",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (Pharmacy) (10/04-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-0799-0024",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Nuclear Pharmacy Orientation (10/04-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AR-1732-0010",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Water Treatment Specialist AIT (5/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CG-0709-0010",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Health Services Dental Technician \"C\" School (9/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NV-0707-0036",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Pharmacy Technician (11/10-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"AF-1402-0085",
      "startDate":"7/1/2002",
      "endDate":"Present",
      "title":"Supply Systems Analyst Journeyman (7/02-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1402-0090",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Operations Journeyman by Correspondence (8/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1402-0093",
      "startDate":"4/1/2001",
      "endDate":"Present",
      "title":"Communications and Information Officer (4/01-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1408-0114",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Communications - Computers Systems Planning and Implementation Management Journeyman by Correspondence (11/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1408-0146",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Knowledge Operations Management Journeyman by Correspondence (1/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1715-0961",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"Basic Communications Officer Training (4/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1715-0962",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Communications Officer Engineer (12/06-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1715-0970",
      "startDate":"5/1/2008",
      "endDate":"Present",
      "title":"Communications-Computer Systems Common Journeyman by Correspondence (5/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1715-0972",
      "startDate":"12/1/2007",
      "endDate":"Present",
      "title":"Network Integration Journeyman by Correspondence (12/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AF-1715-0976",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Undergraduate Cyber Training (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1304-0016",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"FA Meteorological Section Sergeant BNCOC (10/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0119",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Data Processing Advanced Noncommissioned Officer (NCO) (10/03-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0156",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0169",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0176",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"USAF Tactical Receive System Maintenance (10/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0202",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Signal Systems Support Warrant Officer Basic (WOB) (10/02-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0224",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (24A) (10/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0225",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Information Systems Operations Leveler (53A) (10/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0228",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Information Systems Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0229",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0233",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (1/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0234",
      "startDate":"3/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (3/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0236",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Advanced (7/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0239",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0240",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (11/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0241",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Advanced (1/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0243",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0244",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Advanced (WOAC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0246",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0247",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Signal Systems Support Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0249",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Technology Specialist Basic Noncommissioned Officer (BNCOC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0250",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0251",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Information Systems Technician Warrant Officer Basic (WOBC) (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0253",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0254",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (ISM) (1/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0256",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0260",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0262",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0263",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0264",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist Advanced Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0266",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Information Technology Specialist Senior Leader (1/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0269",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0270",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Network Management Technician Warrant Officer Basic (4/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0271",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0272",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0274",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0275",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Signal Warrant Officer Staff Follow-On (5/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0276",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0277",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Information Services Technician Warrant Officer Advanced (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0037",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0044",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0046",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (11/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0047",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operator-Maintainer (BNCOC) (10/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0056",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"Defense Message System (DMS)/Tactical Message System (TMS) System Administrator (10/03-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0057",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator/Maintainer, Advanced Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0059",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintenance/Integrator, Advanced Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0065",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1404-0068",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operators/Maintainer Advanced Leaders (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1408-0209",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Signal Officer Basic (10/00-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1408-0280",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Equipment Technician Warrant Officer Basic (5/06-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1408-0298",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Basic Officer Leader Branch (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0618",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cable Systems Installer-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0734",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Signals Intelligence (SIGINT) Analyst Advanced Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0770",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Signal Captains Career (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0840",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0917",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist Advanced Leader (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0918",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Advanced Leader (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0920",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0921",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Signal Support Systems Supervisor Senior Leader (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0922",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Satellite/Microwave Systems Chief, Senior Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0925",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Satellite Systems/Network Coordinator (1/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0928",
      "startDate":"1/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (1/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0932",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer, Advanced Leader (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-0988",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Computer Detection Systems Repairer (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1016",
      "startDate":"2/1/2002",
      "endDate":"Present",
      "title":"Strategic SHF Satellite Communications (SATCOM) Systems Maintenance (2/02-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1053",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Command and Control Systems Integrator Warrant Officer Basic (7/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1073",
      "startDate":"5/1/2001",
      "endDate":"Present",
      "title":"Telecommunications Systems Engineer (5/01-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1074",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Military Intelligence Systems Maintainer/Integrator (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1078",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator-Maintainer Common Core (6/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1110",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer Common Core (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1111",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Microwave Systems Operator-Maintainer (STRAT-1) (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1116",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"SF Qual (SF Communications Sergeant) ALC (2/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1129",
      "startDate":"11/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer ECB-1 (11/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1130",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer EAC-2 (10/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1141",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (CP34) (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1142",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Professional (CP34) (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1143",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"Signal Captains Career (2/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1164",
      "startDate":"8/1/2008",
      "endDate":"Present",
      "title":"Special Forces Qualification (18E MOS TNG) (8/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1176",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1186",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer Advanced Leader (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1187",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Satellite Communications Systems Operator/Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1190",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1192",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief Senior Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1193",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Signal-Digital Master Gunner (1/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1715-1198",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Field Artillery Targeting Technician Warrant Officer Basic (10/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2201-0386",
      "startDate":"10/1/2014",
      "endDate":"Present",
      "title":"Battalion S6 Officer (10/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"MLRS Fire Direction Specialist (10/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2201-0598",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System Fire Direction Specialist (10/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2201-0636",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Multiple Launch Rocket System (MLRS) Fire Direction Specialist (11/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2201-0658",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Air Defense Artillery Warrant Officer Advanced (4/06-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0008",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0019",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0021",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer Advanced Leader (10/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0022",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (6/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0023",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Nodal Network System Operator-Maintainer Y2 Transition (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2202-0024",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-2204-0110",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Air Defense Battle Management Systems Operator (7/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"CG-1408-0043",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Information Systems Management (11/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"CG-1715-0176",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"378' WHEC Shipboard Command and Control System (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"CG-1715-0177",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"210' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"CG-1715-0183",
      "startDate":"4/1/2007",
      "endDate":"Present",
      "title":"270' WMEC Shipboard Command and Control Systems (SCCS) Maintenance and Management (4/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"CG-1715-0191",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance Networks Management (3/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"DD-1709-0007",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Basic Television Equipment Maintenance (10/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1402-0088",
      "startDate":"4/1/2006",
      "endDate":"Present",
      "title":"Technical Controller (4/06-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1402-0089",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Data Network Supervisor (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1402-0092",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Enhanced Position Location Reporting System (EPLRS) Managers (7/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1402-0093",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cisco Certified Network Associate (7/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1402-0094",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Data Systems Technician (7/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1715-0191",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Technical Controller Chief (9/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1715-0223",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Tactical Data Systems Administrator (7/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1715-0227",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (12/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-1715-0238",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Support Wide Area Network (SWAN) RF Incidental (10/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"MC-2201-0009",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Basic Communications Officer (2/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0203",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Intelligence Center Maintenance (ICM) (5/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0232",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Navy Tactical Command Support System (NTCSS) II Manager (11/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0242",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator (6/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0251",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Network Security Vulnerability Technician (7/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0292",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Joint Network Attack (9/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1402-0298",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Submarine Local Area Network (3/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1408-0045",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Information Systems Security Manager (6/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1704-0625",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"F/A-18E/F Wire Bundle/Connector/Fiber Optic Cable Repair Organizational Maintenance (11/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1714-0059",
      "startDate":"5/1/2007",
      "endDate":"Present",
      "title":"Construction Electrician Power and Communications Cable Splicing (5/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1714-0094",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Fiber Optic Data Multiplex System, AN/USQ-82 (V), Operation and Maintenance (6/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-0546",
      "startDate":"3/1/2011",
      "endDate":"Present",
      "title":"Advanced Integrated Voice Communications Network (IVCN) System Maintenance (3/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1295",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Electrician's Mate Surface Ship Electrical Advanced Maintenance (4/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1659",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician Maintenance Class A (7/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1715",
      "startDate":"11/1/1997",
      "endDate":"Present",
      "title":"AN/USQ-82(V) Data Multiplex System Technician (11/97-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1745",
      "startDate":"9/1/2002",
      "endDate":"Present",
      "title":"Aegis Combat System Maintenance Manager (CG-65-73/DDG) (9/02-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1751",
      "startDate":"12/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapon System MK7 Operation and Maintenance TRK 2 (12/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1870",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Communications Signals Collection and Processing (5/14-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1875",
      "startDate":"8/1/2005",
      "endDate":"Present",
      "title":"Advanced Communications Signals Analysis (8/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-1962",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AN/AQS-13 Sonar Systems Intermediate Level Maintenance (7/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2016",
      "startDate":"6/1/2004",
      "endDate":"Present",
      "title":"Naval Modular Automated Communication Systems (NAVMACS) II Maintenance (6/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2023",
      "startDate":"2/1/2004",
      "endDate":"Present",
      "title":"AN/SQQ-53D(V) Maintenance (2/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2040",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Information and Communication Manager (7/04-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2041",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Electronic Key Management System (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2050",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Journeyman-Networking Core (1/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2052",
      "startDate":"7/1/2007",
      "endDate":"Present",
      "title":"Advanced Network Analyst (7/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2078",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"AEGIS Weapons System MK7 Operation and Maintenance Trk 3 (11/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2084",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Track Data Coordinator (TDC) (2/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2089",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Information Systems Maintenance Technician (11/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2090",
      "startDate":"11/1/2013",
      "endDate":"Present",
      "title":"Ship Self Defense System (SSDS) MK 1 MOD 0 Maintenance Technician (11/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2094",
      "startDate":"2/1/2007",
      "endDate":"Present",
      "title":"AN/SYQ-24(V) LHA Advanced Combat Direction System Maintenance (2/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2114",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Tactical Computer Network Operator (TCNO) (1/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2137",
      "startDate":"10/1/2003",
      "endDate":"Present",
      "title":"CG-47 Smart Ship Maintenance Training (10/03-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2155",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician Operation and Maintenance (ACNT Trk 2) (2/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2197",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"NALCOMIS/Aviation Information System Analyst Core (12/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2221",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Ship Self Defense System Mark 2 Maintenance (6/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2227",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"NATO SeaSparrow Surface Missile System MK57 MODS 4-9 Operation and Maintenance Differences (7/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2231",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Global Command and Control System - Maritime (GCCS-M) 4.0 System (9/05-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2232",
      "startDate":"6/1/2013",
      "endDate":"Present",
      "title":"Theatre Battle Management Core System, Version 1.1.3, System Administrator Afloat (6/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2240",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"NATO Sea Sparrow Surface Missile System (NSSM) Mk 57 MOD 10-13 Operation and Maintenance (O&M) Differences (1/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2258",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"AEGIS Milspec Fire Control Systems/400 HZ Virtual Training Path (7/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2261",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Littoral Combat Ship Computer Technician Fundamentals Virtual Training Path (1/07-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2262",
      "startDate":"8/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7/1 Virtual Training Path (8/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2263",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician B/L 7.1 Virtual Training Path (7/08-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2267",
      "startDate":"4/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computers Virtual Training Path (4/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2268",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"AN/UYQ-21 CVN/LHD Display System Virtual Training Path (10/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2269",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"AEGIS Computer Network Technician (ACNT) 6.3 Virtual Training Path (9/09-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2285",
      "startDate":"4/1/2013",
      "endDate":"Present",
      "title":"Common Submarine Radio Room Basic Maintenance (4/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2297",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"TOC and Mobile Systems Automated Data Processing (ADP) Suite Maintenance (6/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2306",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Journeyman Communications (JCC) (1/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2307",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Information Systems Technician Class \"A\" (7/10-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2319",
      "startDate":"6/1/2011",
      "endDate":"Present",
      "title":"Gigabit Ethernet Data Multiplex System (GEDMS) Maintenance and Operations Training (6/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2323",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Ship Self-Defense System (SSDS) Open Architecture (OA) Maintenance (9/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2328",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Global Command And Control-Maritime (GCCS-M) 4.1 System Administrator (2/13-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2330",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"AN/SQQ-89A (V) 15 Maintenance (5/12-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"NV-1715-2351",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician System Administration (1/11-Present)",
      "category":"Network Administrator"
    },
    {
      "id":"AR-1402-0168",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Information Technology Specialist (6/12-Present)",
      "category":"help desk"
    },
    {
      "id":"AR-1404-0009",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (4/12-Present)",
      "category":"help desk"
    },
    {
      "id":"DD-1719-0014",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Basic Multimedia Illustrator (6/10-Present)",
      "category":"help desk"
    },
    {
      "id":"DD-1719-0020",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Basic Multimedia Reproduction-USMC (10/06-Present)",
      "category":"help desk"
    },
    {
      "id":"MC-1402-0098",
      "startDate":"6/1/2008",
      "endDate":"Present",
      "title":"Intelligence Analysis System Workstation Administration (IWAC) (6/08-Present)",
      "category":"help desk"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0709-0045",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Journeyman by Correspondence (2/08-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0709-0047",
      "startDate":"1/1/2002",
      "endDate":"Present",
      "title":"Health Services Administration (1/02-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0102-0007",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Animal Care Specialist (10/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0104-0014",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Veterinary Services Tech WO Basic (10/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0326-0062",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Army Medical Department Captains Career (1/09-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0023",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Obstetrical/Gynecologic (OB/GYN) Nursing (3/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0031",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Critical Care Nursing (9/08-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0038",
      "startDate":"2/1/2005",
      "endDate":"Present",
      "title":"Joint Operations Medical Managers (2/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0042",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68W30) (10/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0704-0016",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Orthopedic Specialty (3/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0704-0023",
      "startDate":"4/1/2002",
      "endDate":"Present",
      "title":"Respiratory Specialist (4/02-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0704-0024",
      "startDate":"2/1/1996",
      "endDate":"Present",
      "title":"Respiratory Specialist (2/96-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0709-0059",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Patient Administration Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0709-0073",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"MS - Audiology Officer Basic (7/06-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0709-0078",
      "startDate":"3/1/2002",
      "endDate":"Present",
      "title":"Patient Administration/Association Healthcare Administrator (3/02-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0709-0090",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Basic Healthcare Administration (10/12-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0240",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (BOLC) (1/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1729-0057",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Detachment (VS) Pre-Deployment (RC) (10/05-Present)",
      "category":"patient care"
    },
    {
      "id":"AR-1729-0065",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Nutrition Care Specialist (8/07-Present)",
      "category":"patient care"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"patient care"
    },
    {
      "id":"CG-0709-0006",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician First Class (HS1) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"patient care"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"patient care"
    },
    {
      "id":"CG-1408-0004",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Yeoman Second Class (5/10-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-1406-0056",
      "startDate":"9/1/2005",
      "endDate":"Present",
      "title":"Career Retention Specialist by Correspondence (9/05-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-2204-0175",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Phase I (7/04-Present)",
      "category":"patient care"
    },
    {
      "id":"MC-2204-0176",
      "startDate":"7/1/2004",
      "endDate":"Present",
      "title":"Field Medical Service Technician, Reserve Phase II (7/04-Present)",
      "category":"patient care"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"patient care"
    },
    {
      "id":"NV-0703-0008",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Hospital Corpsman Basic (5/14-Present)",
      "category":"patient care"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"patient care"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"patient care"
    },
    {
      "id":"AF-0703-0024",
      "startDate":"4/1/2005",
      "endDate":"Present",
      "title":"Mental Health Service Journeyman (4/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0703-0025",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0703-0028",
      "startDate":"10/1/2008",
      "endDate":"Present",
      "title":"Surgical Service Craftsman by Correspondence (10/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0704-0008",
      "startDate":"9/1/2003",
      "endDate":"Present",
      "title":"Physical Therapy Journeyman by Correspondence (9/03-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0706-0006",
      "startDate":"12/1/2000",
      "endDate":"Present",
      "title":"Optometry Journeyman by Correspondence (12/00-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0709-0041",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Aerospace Medical Service Journeyman by Correspondence (3/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0709-0042",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Medical Service Journeyman by Correspondence (10/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0709-0043",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Public Health Journeyman by Correspondence (12/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0709-0046",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Health Services Management Craftsman (9/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-0799-0013",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Biomedical Equipment Craftsman by Correspondence (1/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-1408-0117",
      "startDate":"10/1/2002",
      "endDate":"Present",
      "title":"Medical Materiel Journeyman by Correspondence (10/02-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-1715-0866",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman (9/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AF-1715-0867",
      "startDate":"4/1/2004",
      "endDate":"Present",
      "title":"Biomedical Equipment Journeyman by Correspondence (4/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0701-0013",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Dental Specialist (10/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0702-0014",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Special Forces Medical Sergeant Advanced Noncommissioned Officer (NCO) (10/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0702-0022",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (5/14-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0702-0023",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (11/14-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0702-0025",
      "startDate":"12/1/2005",
      "endDate":"Present",
      "title":"Medical Laboratory Specialist (12/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0702-0035",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Radiology Specialist (9/10-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0030",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Emergency Nursing (6/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0034",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Special Forces (Special Forces Medical Sergeant) Advance Leader (8/14-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0036",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0037",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Practical Nurse (1/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0041",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"68W Transition (1/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0703-0045",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Healthcare with Prehospital Trauma Life Support Basic Noncommissioned Officer (BNCOC) (10/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0707-0016",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Specialist (5/11-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0707-0034",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Basic Officer Leader (3/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0039",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Special Forces Diving Medical Technician (11/10-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0040",
      "startDate":"1/1/2004",
      "endDate":"Present",
      "title":"Flight Medic (1/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0065",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Health Care Specialist (10/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0066",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Medical Assistance (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0076",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Health Care Advanced Leader (10/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0079",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"EMT - Basic Recertification (DL) (9/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0709-0083",
      "startDate":"7/1/2009",
      "endDate":"Present",
      "title":"Special Forces Qualification (SF Medical SGT) - 18D MOS Medical (7/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0799-0018",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Medical Evacuation Doctrine (10/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0799-0019",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Health Services Warrant Officer Basic (3/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0799-0041",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Army Medical Department (AMEDD) Captains Career (670A) (9/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0801-0036",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Special Operations Combat Medic (SOCM) (10/11-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0801-0046",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"M93 Series Chemical, Biological, Radiological, and Nuclear (CBRN) Reconnaissance System (Fox) Operators (10/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-0801-0047",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Operations Independent Duty Corpsman (10/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1403-0010",
      "startDate":"9/1/2012",
      "endDate":"Present",
      "title":"Patient Administration Specialist (9/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1403-0028",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Patient Administration Specialist (3/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0202",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (6/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0280",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Medical Logistics Specialist (1/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0299",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Health Services Plans, Operations, Intelligence, Security and Training (3/10-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0300",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (68J30) (10/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0301",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"TATS Army Medical Department (AMEDD) Basic Noncommissioned Officer (BNCOC) (91J30) (10/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1405-0302",
      "startDate":"8/1/2004",
      "endDate":"Present",
      "title":"Medical Logistics Specialist Reclass (8/04-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1408-0212",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aviation Life Support Equipment Technician Phase 2 (Resident) (10/10-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1408-0332",
      "startDate":"9/1/2007",
      "endDate":"Present",
      "title":"Combined Logistics Captains Career (9/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1715-0759",
      "startDate":"1/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Specialist (1/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1715-1011",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Biomedical Equipment Basic Noncommissioned Officer (5/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0228",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Optometry Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0229",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic (HPSP/RC) (6/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0230",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Public Health Officer Basic OBLC (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0231",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Dental Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0232",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Specialist Corps (OT/PT/RD) Officer Basic (OLBC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0233",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Behavioral SCI Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0234",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Pharmacy Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0235",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Laboratory Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0236",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"Nurse Corps Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0239",
      "startDate":"1/1/2007",
      "endDate":"Present",
      "title":"MS- Platoon Leader Officer Basic (OBLC) (1/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1717-0241",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"AMEDD Officer Basic Leaders (OBLC USUHS) (6/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1720-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Chemical Captain Career (CMC3) PCS Version (10/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1720-0245",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Field Identification of Biological Warfare Agents (7/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-1729-0066",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Veterinary Corps Officer Basic (OBLC HPSP/RC/VC64) (10/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"AR-2201-0715",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"160th SOAR(A) - Special Operations Aviation Medic Indoctrination - SOAMIC (11/10-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"CG-0709-0004",
      "startDate":"1/1/2012",
      "endDate":"Present",
      "title":"Emergency Medical Technician (1/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"CG-0709-0005",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Health Services Technician Second Class (HS2) Performance Qualification Guide (PQG) (5/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"CG-0709-0009",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician \"A\" School (3/05-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"CG-0709-0012",
      "startDate":"2/1/2008",
      "endDate":"Present",
      "title":"Independent Duty Health Services Technician (2/08-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"MC-0707-0002",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Officer (7/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"MC-0709-0002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Field Medical Service Technician (4/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"MC-0803-0009",
      "startDate":"12/1/2006",
      "endDate":"Present",
      "title":"Marine Combat Instructor (12/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"MC-1513-0019",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Expeditionary Training for Chaplains (5/12-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0101-0002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Medical Entomology and Pest Management Technology (5/13-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0702-0013",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Deep Sea Diving Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0702-0015",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (5/14-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0703-0010",
      "startDate":"11/1/2014",
      "endDate":"Present",
      "title":"Medical Laboratory Technician (11/14-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0705-0009",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Radiation Health Technician (8/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0707-0002",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Preventive Medicine Technician (5/11-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0709-0019",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Surface Force Independent Duty Corpsman (10/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0709-0021",
      "startDate":"11/1/2009",
      "endDate":"Present",
      "title":"Submarine Force Independent Duty Corpsman (11/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0803-0006",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Amphibious Reconnaissance Corpsman (6/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0803-0010",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Medical Deep Sea Diving Technician (Diving Medical Technician) (6/09-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-0803-0013",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Surface Rescue Swimmer (1/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-1606-0103",
      "startDate":"1/1/2006",
      "endDate":"Present",
      "title":"Engineer Diver, BNCOC (Phase 3) Army First Class Diver (1/06-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-1710-0197",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"Underwater Construction Advanced (8/07-Present)",
      "category":"Medical Charting"
    },
    {
      "id":"NV-2201-0125",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Basic Navy (Underwater) (10/13-Present)",
      "category":"Medical Charting"
    }
  ]
});

export default Occupation;
