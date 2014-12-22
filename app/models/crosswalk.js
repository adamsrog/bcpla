import DS from 'ember-data';

var Crosswalk = DS.Model.extend({
	startDate: DS.attr('string'),
	endDate: DS.attr('string'),
	title: DS.attr('string'),
	category: DS.attr('string')
});

Crosswalk.reopenClass({
	FIXTURES: [
    {
      "id":"CER-MTS-003",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Master Training Specialist (MTS) (2/13-Present)",
      "category":"Software development"
    },
    {
      "id":"CGR-AET-001",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (12/03-Present)",
      "category":"Software development"
    },
    {
      "id":"CGR-AMT-002",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (12/03-Present)",
      "category":"Software development"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-0193-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Personnel/Administrative Chief (6/98-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-0291-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Intelligence Chief (8/12-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-2181-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Senior Ground Ordnance Weapons Chief (6/98-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-4691-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Camera Chief (6/98-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-5517-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Bandmaster (6/98-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-6132-001",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Helicopter/Tiltrotor Dynamic Components Mechanic (10/00-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-7242-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Air Support Operations Operator (2/13-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-7257-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Controller (6/98-Present)",
      "category":"Software development"
    },
    {
      "id":"MCE-8412-001",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Career Recruiter (10/12-Present)",
      "category":"Software development"
    },
    {
      "id":"NEC-9580-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Command Master Chief (3/07-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-ABE-004",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Launching and Recovery Equipment (11/06-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-ABF-004",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Fuels (11/06-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-ABH-004",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Aircraft Handling (11/06-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-AG-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aerographer's Mate (1/11-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-AW-011",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Warfare Systems Operator, Master Chief (AWCM) (9/10-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-BM-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Boatswain's Mate (8/06-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-DC-003",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Damage Controlman (4/10-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-EM-007",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Electrician's Mate (8/06-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-EN-004",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Engineman (4/10-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-EOD-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (3/07-Present)",
      "category":"Software development"
    },
    {
      "id":"NER-ET-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"Software development"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"Network analyst"
    },
    {
      "id":"CGW-ELC-003",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Electronics (2/09-Present)",
      "category":"Network analyst"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"Network analyst"
    },
    {
      "id":"LDO-642X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"LDO-644X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptology (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"LDO-645X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"LDO-646X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Meteorology/Oceanography (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MCE-2823-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Technical Control Chief (6/98-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MCE-2862-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (6/98-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MOS-14J-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer (3/09-Present)",
      "category":"Network analyst"
    },
    {
      "id":"MOS-25U-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/04-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-FC-003",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NER-MT-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"Network analyst"
    },
    {
      "id":"CGA-C130-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Co Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-C130-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 First Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-C130-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Aircraft Commander (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-C130-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Instructor Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH60-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Co Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH60-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 First Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH60-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Aircraft Commander (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH60-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Instructor Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH65-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Co Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH65-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 First Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH65-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Aircraft Commander (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HH65-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Instructor Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HU25-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Co Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HU25-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 First Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HU25-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Aircraft Commander (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGA-HU25-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Instructor Pilot (8/07-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-AET-001",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (12/03-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-AMT-002",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (12/03-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-AST-002",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Aviation Survival Technician (2/10-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-EM-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Electrician's Mate (3/05-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-ET-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Electronics Technician (6/05-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-GM-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Gunner's Mate (3/05-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-MK-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Machinery Technician (3/05-Present)",
      "category":"network systems"
    },
    {
      "id":"CGW-ELC-003",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Electronics (2/09-Present)",
      "category":"network systems"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"network systems"
    },
    {
      "id":"CGW-OSS-001",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operations Systems (7/05-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-631X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Deck (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-632X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Operations (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-633X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-636X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnance (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-639X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Air Traffic Control (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-642X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-644X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptology (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-645X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"LDO-646X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Meteorology/Oceanography (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-1391-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Bulk Fuel Specialist (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-2823-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Technical Control Chief (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-2834-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Satellite Communications (SATCOM) Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-2862-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-3043-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Supply Administration and Operations Clerk (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-5939-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (AVCOMM SYSTECHS) (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-5952-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Navigational Aids Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-5953-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-5954-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Communications Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6033-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Nondestructive Inspection Technician (6/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6048-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Flight Equipment Technician (6/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6062-001",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Aircraft Intermediate Level Hydraulic/Pneumatic Mechanic (10/00-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6072-003",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Maintenance Supply Equipment Hydraulic/Pneumatic/Structure Mechanic (6/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6113-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Helicopter Mechanic (CH-53) (12/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6114-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Helicopter Mechanic (U/AH-1) (12/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6116-002",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Tiltrotor Mechanic, MV-22 (12/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6122-003",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Helicopter Power Plants Mechanic, T-58 (10/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6152-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Helicopter Airframe Mechanic (CH-46) (5/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6153-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Helicopter Airframe Mechanic (CH-53) (5/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6154-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Helicopter Airframe Mechanic (UH/AH-1) (12/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6156-002",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Tiltrotor Airframe Mechanic, MV-22 (1/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6232-001",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Flight Mechanic, KC-130 (10/00-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6242-001",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Flight Engineer KC-130 (10/00-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6252-002",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, AV-8/TAV-8 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6253-002",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, EA-6 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6256-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, KC-130 (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6257-002",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, F/A-18 (5/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6282-002",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, AV-8/TAV-8 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6283-002",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, EA-6 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6286-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, KC-130/V-22 (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6287-002",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, F/A-18 (5/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6312-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Weapon Systems Technician, AV-8 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6313-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technician, EA-6 (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6316-003",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation Systems Technician, KC-130 (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6317-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technicians F/A-18 (5/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6324-003",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Weapon Systems Technician (U/AH-1) (1/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6326-002",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Systems Technician, V-22 (1/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6386-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, EA-6B (12/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6472-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System (CASS), Electro-Optical (EO) / Forward Looking Infrared Technician (FLIR) (4/03-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6473-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System High Power/Radar Technician (4/03-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-6842-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Meteorology and Oceanography Analyst Forecaster (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-7011-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Expeditionary Airfield Systems Technician (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MCE-7257-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Controller (6/98-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-12Y-001",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Terrain Data Specialist (10/10-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-14J-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer (3/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-14T-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"PATRIOT Launching Station Enhanced Operator/Maintainer (3/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-25U-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/04-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-91A-004",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"M1 Abrams Tank System Maintainer (10/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-91M-004",
      "startDate":"10/1/2009",
      "endDate":"Present",
      "title":"Bradley Fighting Vehicle System Maintainer (10/09-Present)",
      "category":"network systems"
    },
    {
      "id":"MOS-92F-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Petroleum Supply Specialist (4/03-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ABF-004",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Fuels (11/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AD-006",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Aviation Machinist's Mate (3/08-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AE-005",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Aviation Electrician's Mate (3/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AME-004",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Aviation Structural Mechanic, Safety Equipment (3/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AO-004",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnanceman (3/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AS-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Support Equipment Technician (AS) (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AT-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (AT) (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AWV-001",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aircrewmen Avionics (AWV) (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-BU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Builder (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CE-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Electrician (CE) (8/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CM-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Mechanic (CM) (8/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CS-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Culinary Specialist (3/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-CU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Constructionman, Master Chief (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-DC-003",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Damage Controlman (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-EA-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineering Aid (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-EM-007",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Electrician's Mate (8/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-EN-004",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Engineman (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-EO-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipment Operator (8/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-EOD-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (3/07-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ET-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ET-008",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Electronics Technician (Submarine) (6/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ETN-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Nuclear) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-ETV-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronic Technician (Navigation) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-FC-003",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-FN-004",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Fireman (4/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-FT-005",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-GM-004",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Gunner's Mate (9/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-GS-003",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Gas Turbine System Technician, Senior Chief and Master Chief (9/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-GSE-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Electrical (10/07-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-GSM-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Mechanical (10/07-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-IC-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Interior Communications Electrician (9/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MM-006",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Machinist's Mate (10/07-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MME-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mate (Auxiliary) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MMN-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mate (Nuclear) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MMW-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mates (Weapons) (1/13-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MN-004",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Mineman (7/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-MT-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-PR-004",
      "startDate":"7/1/2008",
      "endDate":"Present",
      "title":"Aircrew Survival Equipmentman (7/08-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-PS-001",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Personnel Specialist (10/05-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-STG-004",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Sonar Technician, Surface (6/09-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-STS-005",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-SW-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Steelworker (5/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NER-UT-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman (UT) (8/11-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-731X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Boatswain (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-732X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Operations Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-734X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-736X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnance Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-738X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"network systems"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"data analysis"
    },
    {
      "id":"CGR-IS-002",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (2/12-Present)",
      "category":"data analysis"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"data analysis"
    },
    {
      "id":"LDO-646X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Meteorology/Oceanography (9/10-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-0231-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/12-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-5939-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (AVCOMM SYSTECHS) (6/98-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-6842-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Meteorology and Oceanography Analyst Forecaster (6/98-Present)",
      "category":"data analysis"
    },
    {
      "id":"MOS-12B-005",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Combat Engineer (10/10-Present)",
      "category":"data analysis"
    },
    {
      "id":"MOS-12Y-001",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Terrain Data Specialist (10/10-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-FC-003",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"data analysis"
    },
    {
      "id":"NER-NC-004",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Navy Counselor (11/07-Present)",
      "category":"data analysis"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"database"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"database"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"database"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"database"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"database"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"database",
      "FIELD6":" "
    },
    {
      "id":"CGA-C130-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Co Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-C130-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 First Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-C130-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Aircraft Commander (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-C130-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HC-130 Instructor Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH60-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Co Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH60-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 First Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH60-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Aircraft Commander (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH60-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-60 Instructor Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH65-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Co Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH65-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 First Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH65-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Aircraft Commander (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HH65-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HH-65 Instructor Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HU25-005",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Co Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HU25-006",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 First Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HU25-007",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Aircraft Commander (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGA-HU25-008",
      "startDate":"8/1/2007",
      "endDate":"Present",
      "title":"HU-25 Instructor Pilot (8/07-Present)",
      "category":"database administration"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"database administration"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"database administration"
    },
    {
      "id":"CGW-BOSN-003",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Boatswain (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"database administration"
    },
    {
      "id":"CGW-WEPS-003",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Weapons (9/06-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-0411-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Maintenance Management Specialist (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-0491-002",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Logistics/Mobility Chief (12/08-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-3529-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Motor Transport Maintenance Chief (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-3537-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Motor Transport Operations Chief (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5519-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Conductor (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5521-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Drum Major (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5522-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Ensemble Leader (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5524-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Musician (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5811-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Military Police (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-6842-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Meteorology and Oceanography Analyst Forecaster (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MCE-7051-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aircraft, Rescue and Firefighting Specialist (6/98-Present)",
      "category":"database administration"
    },
    {
      "id":"MOS-31B-002",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Military Police (4/03-Present)",
      "category":"database administration"
    },
    {
      "id":"MOS-42A-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Specialist (4/03-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-AC-004",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Traffic Controller (3/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-FT-005",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-MU-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Musician (3/05-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"database administration"
    },
    {
      "id":"NER-YN-004",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Yeoman (6/10-Present)",
      "category":"database administration"
    },
    {
      "id":"CGR-OS-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Operations Specialist (11/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"CGR-YN-004",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Yeoman (3/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0431-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Logistics/Embarkation Specialist (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0481-002",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Landing Support Specialist (12/08-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0619-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Wire Chief (9/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0629-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Radio Chief (9/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-2111-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Arms Repairer/Technician (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-2161-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Machinist (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-2171-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electro-Optical Ordnance Repairer (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-2181-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Senior Ground Ordnance Weapons Chief (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MCE-3044-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Contract Specialist (6/98-Present)",
      "category":"business analytics"
    },
    {
      "id":"MOS-42A-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Specialist (4/03-Present)",
      "category":"business analytics"
    },
    {
      "id":"NEC-9515-003",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Advisor (2/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-AB-003",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Master Chief (11/06-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-AG-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aerographer's Mate (1/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-NC-004",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Navy Counselor (11/07-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-SB-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Warfare Boat Operator (10/06-Present)",
      "category":"business analytics"
    },
    {
      "id":"NER-SO-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Warfare Operator (10/06-Present)",
      "category":"business analytics"
    },
    {
      "id":"",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (2/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Operations Specialist (11/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CGR-IS-002",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Yeoman (3/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CGR-OS-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Counterintelligence/Human Source Intelligence Specialist (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"CGR-YN-004",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Technical Surveillance Countermeasures Specialist (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0211-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0212-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0231-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Logistics/Embarkation Specialist (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0431-001",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Landing Support Specialist (12/08-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Wire Chief (9/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0481-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Radio Chief (9/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0619-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0629-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Arms Repairer/Technician (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Machinist (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-2111-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electro-Optical Ordnance Repairer (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-2161-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Senior Ground Ordnance Weapons Chief (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-2171-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Contract Specialist (6/98-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-2181-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Specialist (4/03-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MCE-3044-001",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Equal Opportunity Advisor (2/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"MOS-42A-001",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Master Chief (11/06-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NEC-9515-003",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aerographer's Mate (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-AB-003",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-AG-004",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-IS-004",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Navy Counselor (11/07-Present)",
      "category":"business intelligence"
    },
    {
      "id":"NER-IT-003",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Boatswain's Mate (2/12-Present)",
      "category":"network security"
    },
    {
      "id":"NER-NC-004",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"network security"
    },
    {
      "id":"CGR-BM-005",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Investigator (10/12-Present)",
      "category":"network security"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Maritime Enforcement Specialist (ME) (1/10-Present)",
      "category":"network security"
    },
    {
      "id":"CGR-IV-003",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Electronics (2/09-Present)",
      "category":"network security"
    },
    {
      "id":"CGR-ME-001",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"network security"
    },
    {
      "id":"CGW-ELC-003",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operations Systems (7/05-Present)",
      "category":"network security"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"CGW-OSS-001",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptology (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"LDO-642X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"LDO-644X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Meteorology/Oceanography (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"LDO-645X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Security (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"LDO-646X-004",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Technical Surveillance Countermeasures Specialist (8/12-Present)",
      "category":"network security"
    },
    {
      "id":"LDO-649X-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-0212-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Technical Control Chief (6/98-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (6/98-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-2823-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-2862-001",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer (3/09-Present)",
      "category":"network security"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/04-Present)",
      "category":"network security"
    },
    {
      "id":"MOS-14J-002",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"network security"
    },
    {
      "id":"MOS-25U-001",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (3/07-Present)",
      "category":"network security"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"network security"
    },
    {
      "id":"NER-EOD-001",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"network security"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"network security"
    },
    {
      "id":"NER-FC-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"network security"
    },
    {
      "id":"NER-FT-005",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mates (Weapons) (1/13-Present)",
      "category":"network security"
    },
    {
      "id":"NER-IT-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"network security"
    },
    {
      "id":"NER-MMW-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Navy Diver (3/07-Present)",
      "category":"network security"
    },
    {
      "id":"NER-MT-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"NER-ND-001",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Security Technician (9/10-Present)",
      "category":"network security"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (12/03-Present)",
      "category":"computer network"
    },
    {
      "id":"NWO-749X-003",
      "startDate":"12/1/2003",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (12/03-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-AET-001",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Aviation Survival Technician (2/10-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-AMT-002",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Electrician's Mate (3/05-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-AST-002",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Gunner's Mate (3/05-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-EM-003",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-GM-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Machinery Technician (3/05-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Operations Specialist (11/11-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-MK-003",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Storekeeper (5/03-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-OS-002",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Yeoman (3/12-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-SK-003",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Electronics (2/09-Present)",
      "category":"computer network"
    },
    {
      "id":"CGR-YN-004",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"computer network"
    },
    {
      "id":"CGW-ELC-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptology (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"LDO-642X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"LDO-644X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Meteorology/Oceanography (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"LDO-645X-003",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Personnel/Administrative Chief (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"LDO-646X-004",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0193-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Infantry Unit Leader (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Maintenance Management Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0369-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Logistics/Embarkation Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0411-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0431-001",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Landing Support Specialist (12/08-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Wire Chief (9/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0481-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Radio Chief (9/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0619-002",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Data Chief (9/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0629-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0659-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"M1A1 Tank Crewman (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Assault Amphibious Vehicle (AAV) (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-1812-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Arms Repairer/Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-1833-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Assault Amphibious Vehicle (AAV) Repairer/Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2111-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Machinist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2141-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electro-Optical Ordnance Repairer (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2161-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Senior Ground Ordnance Weapons Chief (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2171-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Technical Control Chief (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2181-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"AN/TRC-170 Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2823-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Contract Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-2862-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Warehouse Clerk (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3044-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Packaging Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3051-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Traffic Management Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3052-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Finance Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3112-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Financial Management Resource Analyst (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3432-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Motor Transport Maintenance Chief (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Motor Transport Operations Chief (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3529-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Correspondent (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-3537-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Legal Services Specialist (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-4341-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Camera Production Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-4421-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Photographer (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-4612-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Videographer (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-4641-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Military Police (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-4671-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Correctional Specialist (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5811-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Navigational Aids Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5952-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Communications Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5953-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5954-001",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Aircraft Maintenance Chief (5/02-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Power Plants Mechanic, T-76 (2/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6019-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Nondestructive Inspection Technician (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6023-002",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Aircraft Nondestructive Inspection Operator (10/00-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6033-002",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Individual Material Readiness List Asset Manager (10/00-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6034-001",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Welder (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6042-001",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Flight Equipment Technician (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6043-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Maintenance Supply Equipment Hydraulic/Pneumatic/Structure Mechanic (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6048-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Maintenance Support Equipment Electrician/Refrigeration Mechanic (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6072-003",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Cryogenics Equipment Operator (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6073-003",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Intermediate Level Structures Mechanic (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6074-002",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Helicopter Mechanic (CH-46) (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6092-003",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Helicopter Power Plants Mechanic, T-64 (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6112-003",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Helicopter Power Plants Mechanic, T-400/T-700 (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6123-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Helicopter/Tiltrotor Dynamic Components Mechanic (10/00-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6124-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Helicopter Airframe Mechanic (CH-46) (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6132-001",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Helicopter Airframe Mechanic (CH-53) (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6152-003",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Tiltrotor Airframe Mechanic, MV-22 (1/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6153-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Mechanics, F/A-18 (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6156-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Power Plants Mechanic, J-52 (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6217-002",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Flight Engineer KC-130 (10/00-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6223-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, KC-130 (4/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6242-001",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Airframe Mechanic, F/A-18 (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6256-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, KC-130/V-22 (4/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6257-002",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Safety Equipment Mechanic, F/A-18 (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6286-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation Systems Technician, KC-130 (4/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6287-002",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technicians F/A-18 (5/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6316-003",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Electrical Systems Technician, AV-8 (2/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6317-003",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Electrical Systems Technician, EA-6 (2/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6332-002",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Electrical Systems Technician, KC-130/OV-10 (2/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6333-002",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Electrical Systems Technician, F/A-18 (2/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6336-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Avionics Maintenance Chief (5/02-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6337-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Aircraft Communications/Navigation Systems Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6391-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Aircraft Electrical Instrument/Flight Control Systems Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6414-002",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aviation Precision Measurement Equipment/Calibration and Repair Technician, IMA (4/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6434-002",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Aircraft Ordnance Technician (5/03-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6492-004",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Aviation Ordnance Equipment Repair Technician (5/03-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6531-002",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Aviation Ordnance Chief (5/03-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6541-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Meteorology and Oceanography Analyst Forecaster (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6591-002",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Expeditionary Airfield Systems Technician (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-6842-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Controller (6/98-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-7011-001",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Terrain Data Specialist (10/10-Present)",
      "category":"computer network"
    },
    {
      "id":"MCE-7257-001",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer (3/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-12Y-001",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air and Missile Defense (AMD) Crewmember (3/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-14J-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"PATRIOT Launching Station Enhanced Operator/Maintainer (3/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-14S-003",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Radio Operator-Maintainer (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-14T-002",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25C-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25F-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Multichannel Transmission Systems Operator-Maintainer (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25N-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25Q-002",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Telecommunications Operations Chief (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25U-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Senior Signal Sergeant (10/04-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25W-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Specialist (4/03-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-25X-001",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Command Career Counselor (9/09-Present)",
      "category":"computer network"
    },
    {
      "id":"MOS-42A-001",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Launching and Recovery Equipment (11/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NEC-9588-003",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Fuels (11/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ABE-004",
      "startDate":"11/1/2006",
      "endDate":"Present",
      "title":"Aviation Boatswain's Mate, Aircraft Handling (11/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ABF-004",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Air Traffic Controller (3/09-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ABH-004",
      "startDate":"3/1/2008",
      "endDate":"Present",
      "title":"Aviation Machinist's Mate (3/08-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AC-004",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Aviation Electrician's Mate (3/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AD-006",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aerographer's Mate (1/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AE-005",
      "startDate":"11/1/2012",
      "endDate":"Present",
      "title":"Aviation Structural Mechanic, Senior Chief (11/12-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AG-004",
      "startDate":"3/1/2006",
      "endDate":"Present",
      "title":"Aviation Structural Mechanic, Safety Equipment (3/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AM-006",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnanceman (3/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AME-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Support Equipment Technician (AS) (5/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AO-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (AT) (5/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AS-005",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AT-005",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Boatswain's Mate (8/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Builder (5/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-BM-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Electrician (CE) (8/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-BU-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Mechanic (CM) (8/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CE-004",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Culinary Specialist (3/09-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CM-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CS-002",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Communications Intelligence Collection Operator (10/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTR-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineering Aid (5/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Electrician's Mate (8/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-EA-005",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipment Operator (8/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-EM-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-EO-004",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Nuclear) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ET-007",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ETN-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronic Technician (Navigation) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-ETV-001",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-FC-003",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Electrical (10/07-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-FT-005",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Mechanical (10/07-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-GSE-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Hull Maintenance Technician (10/07-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-GSM-004",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-HT-004",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Legalman (6/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-IT-003",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Logistics Specialist (5/09-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-LN-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Machinist's Mate (10/07-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-LS-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mate (Auxiliary) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MM-006",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mate (Nuclear) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MME-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Machinist's Mates (Weapons) (1/13-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MMN-001",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Machinery Repairman (4/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MMW-001",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MR-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Operations Specialist (8/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-MT-003",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Quartermaster (8/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-OS-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Warfare Boat Operator (10/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-QM-004",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Ship's Serviceman (6/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-SB-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Special Warfare Operator (10/06-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-SH-004",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Sonar Technician, Surface (6/09-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-SO-001",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-STG-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Steelworker (5/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-STS-005",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman (UT) (8/11-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-SW-004",
      "startDate":"6/1/2010",
      "endDate":"Present",
      "title":"Yeoman (6/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-UT-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NER-YN-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"computer network"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health informatics"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"health informatics"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"health informatics"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"health informatics"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"pharmacy"
    },
    {
      "id":"NER-HN-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"pharmacy"
    },
    {
      "id":"CGR-DC-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Damage Controlman (6/05-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGR-GM-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Gunner's Mate (3/05-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGR-MST-003",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Marine Science Technician (5/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"health information technology"
    },
    {
      "id":"LDO-641X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Administration (9/10-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6172-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, CH-46 (5/02-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6173-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, CH-53 (5/02-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6174-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, UH-1 (5/02-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6176-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Tiltrotor Crew Chief, MV-22 (5/02-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6243-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-9 (4/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6244-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-12 (4/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6246-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-20 (4/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6247-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, UC-35 (4/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6276-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Crew Chief, KC-130 (4/03-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6469-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Automatic Test Equipment Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"health information technology"
    },
    {
      "id":"MCE-6484-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Advanced Aircraft Electronic Countermeasures Technician, Intermediate Maintenance Activity (IMA) (10/00-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-11C-005",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Indirect Fire Infantryman (9/04-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-11Z-003",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Infantry Senior Sergeant (9/04-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-12Z-004",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Combat Engineering Senior Sergeant (10/10-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-270A-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Legal Administrator (5/13-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-35F-005",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Intelligence Analyst (4/12-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-35G-006",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Geospatial Intelligence Imagery Analyst (3/12-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-35N-004",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Signals Intelligence Analyst (7/12-Present)",
      "category":"health information technology"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-BU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Builder (5/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-CE-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Electrician (CE) (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-CM-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Mechanic (CM) (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-CU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Constructionman, Master Chief (5/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-EA-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineering Aid (5/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-EO-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipment Operator (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-EOD-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (3/07-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-EQ-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipmentman, Master Chief (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-FC-003",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-HN-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-MN-004",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Mineman (7/10-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-PS-001",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Personnel Specialist (10/05-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-STS-005",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-SW-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Steelworker (5/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-UC-003",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman, Master Chief (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NER-UT-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman (UT) (8/11-Present)",
      "category":"health information technology"
    },
    {
      "id":"NWO-741X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Ship's Clerk (9/10-Present)",
      "category":"health information technology"
    },
    {
      "id":"CGR-DC-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Damage Controlman (6/05-Present)",
      "category":"information technology"
    },
    {
      "id":"CGR-GM-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Gunner's Mate (3/05-Present)",
      "category":"information technology"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"information technology"
    },
    {
      "id":"CGR-MST-003",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Marine Science Technician (5/03-Present)",
      "category":"information technology"
    },
    {
      "id":"CGW-ISM-001",
      "startDate":"9/1/2008",
      "endDate":"Present",
      "title":"Information Systems Management (9/08-Present)",
      "category":"information technology"
    },
    {
      "id":"LDO-641X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Administration (9/10-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6172-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, CH-46 (5/02-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6173-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, CH-53 (5/02-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6174-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Helicopter Crew Chief, UH-1 (5/02-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6176-002",
      "startDate":"5/1/2002",
      "endDate":"Present",
      "title":"Tiltrotor Crew Chief, MV-22 (5/02-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6243-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-9 (4/03-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6244-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-12 (4/03-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6246-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-20 (4/03-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6247-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, UC-35 (4/03-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6276-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Aircraft Crew Chief, KC-130 (4/03-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6469-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Automatic Test Equipment Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"information technology"
    },
    {
      "id":"MCE-6484-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Advanced Aircraft Electronic Countermeasures Technician, Intermediate Maintenance Activity (IMA) (10/00-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-11C-005",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Indirect Fire Infantryman (9/04-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-11Z-003",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Infantry Senior Sergeant (9/04-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-12Z-004",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Combat Engineering Senior Sergeant (10/10-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-270A-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Legal Administrator (5/13-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-35F-005",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Intelligence Analyst (4/12-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-35G-006",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Geospatial Intelligence Imagery Analyst (3/12-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-35N-004",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Signals Intelligence Analyst (7/12-Present)",
      "category":"information technology"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-AZ-004",
      "startDate":"1/1/2011",
      "endDate":"Present",
      "title":"Aviation Maintenance Administrationman (1/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-BU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Builder (5/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-CE-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Electrician (CE) (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-CM-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Construction Mechanic (CM) (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-CU-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Constructionman, Master Chief (5/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-EA-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Engineering Aid (5/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-EO-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipment Operator (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-EOD-001",
      "startDate":"3/1/2007",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (3/07-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-EQ-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Equipmentman, Master Chief (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-FC-003",
      "startDate":"7/1/2011",
      "endDate":"Present",
      "title":"Fire Controlman (7/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-MN-004",
      "startDate":"7/1/2010",
      "endDate":"Present",
      "title":"Mineman (7/10-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-PS-001",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Personnel Specialist (10/05-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-STS-005",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-SW-004",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Steelworker (5/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-UC-003",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman, Master Chief (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NER-UT-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Utilitiesman (UT) (8/11-Present)",
      "category":"information technology"
    },
    {
      "id":"NWO-741X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Ship's Clerk (9/10-Present)",
      "category":"information technology"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health informatics"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"health informatics"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"health informatics"
    },
    {
      "id":"NER-HN-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"health informatics"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"pharmacy"
    },
    {
      "id":"NER-HN-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"pharmacy"
    },
    {
      "id":"CGR-ET-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Electronics Technician (6/05-Present)",
      "category":"electronic health records"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"electronic health records"
    },
    {
      "id":"CGW-ELC-003",
      "startDate":"2/1/2009",
      "endDate":"Present",
      "title":"Electronics (2/09-Present)",
      "category":"electronic health records"
    },
    {
      "id":"LDO-618X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Electronics (9/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"LDO-628X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Electronics (9/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-2862-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (4/14-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-2887-001",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Artillery Electronics Technician (4/14-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-2891-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Electronics Maintenance Chief (4/14-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-5993-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electronics Maintenance Chief (6/98-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-6386-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, EA-6B (12/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-6483-003",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, Helicopter, Intermediate Maintenance Activity (IMA) (10/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MCE-6484-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Advanced Aircraft Electronic Countermeasures Technician, Intermediate Maintenance Activity (IMA) (10/00-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MOS-353T-001",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Systems Maintenance Technician (5/12-Present)",
      "category":"electronic health records"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-AT-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (AT) (5/11-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-ET-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-ET-008",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Electronics Technician (Submarine) (6/09-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-ETN-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Nuclear) (1/13-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NER-ETV-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronic Technician (Navigation) (1/13-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NWO-718X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Electronics Technician (9/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NWO-728X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Electronics Technician (9/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"NWO-738X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (9/10-Present)",
      "category":"electronic health records"
    },
    {
      "id":"CGR-HS-001",
      "startDate":"1/1/1983",
      "endDate":"2/28/1993",
      "title":"Health Services Technician (1/83-2/93)",
      "category":"health care database"
    },
    {
      "id":"CGR-HS-002",
      "startDate":"3/1/1993",
      "endDate":"2/28/1998",
      "title":"Health Services Technician (3/93-2/98)",
      "category":"health care database"
    },
    {
      "id":"CGR-HS-003",
      "startDate":"3/1/1998",
      "endDate":"4/30/2005",
      "title":"Health Services Technician (3/98-4/05)",
      "category":"health care database"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health care database"
    },
    {
      "id":"CGR-HSD-001",
      "startDate":"3/1/1993",
      "endDate":"5/31/2009",
      "title":"Health Services Technician, Dental (3/93-5/09)",
      "category":"health care database"
    },
    {
      "id":"MCE-8412-001",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Career Recruiter (10/12-Present)",
      "category":"health care database"
    },
    {
      "id":"MOS-00E-001",
      "startDate":"10/1/1973",
      "endDate":"2/28/1978",
      "title":"Recruiter and Career Counselor (10/73-2/78)",
      "category":"health care database"
    },
    {
      "id":"MOS-670A-002",
      "startDate":"6/1/1992",
      "endDate":"4/30/1999",
      "title":"Health Services Maintenance Technician (6/92-4/99)",
      "category":"health care database"
    },
    {
      "id":"MOS-670A-003",
      "startDate":"5/1/1999",
      "endDate":"5/31/2009",
      "title":"Health Services Maintenance Technician (5/99-5/09)",
      "category":"health care database"
    },
    {
      "id":"MOS-68M-004",
      "startDate":"10/1/2006",
      "endDate":"12/31/2011",
      "title":"Nutrition Care Specialist (10/06-12/11)",
      "category":"health care database"
    },
    {
      "id":"MOS-68T-001",
      "startDate":"10/1/2006",
      "endDate":"12/31/2011",
      "title":"Animal Care Specialist (10/06-12/11)",
      "category":"health care database"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"health care database"
    },
    {
      "id":"MOS-79S-001",
      "startDate":"8/1/1995",
      "endDate":"5/31/2009",
      "title":"Career Counselor (8/95-5/09)",
      "category":"health care database"
    },
    {
      "id":"MOS-91C-002",
      "startDate":"9/1/1976",
      "endDate":"8/31/1982",
      "title":"Patient Care Specialist (9/76-8/82)",
      "category":"health care database"
    },
    {
      "id":"MOS-91M-001",
      "startDate":"3/1/1990",
      "endDate":"2/28/1995",
      "title":"Hospital Food Service Specialist (3/90-2/95)",
      "category":"health care database"
    },
    {
      "id":"MOS-91M-002",
      "startDate":"3/1/1995",
      "endDate":"11/30/2001",
      "title":"Nutrition Care Specialist (3/95-11/01)",
      "category":"health care database"
    },
    {
      "id":"MOS-91M-003",
      "startDate":"12/1/2001",
      "endDate":"10/31/2006",
      "title":"Nutrition Care Specialist (12/01-10/06)",
      "category":"health care database"
    },
    {
      "id":"MOS-91S-002",
      "startDate":"9/1/1976",
      "endDate":"2/29/1980",
      "title":"Environmental Health Specialist (9/76-2/80)",
      "category":"health care database"
    },
    {
      "id":"MOS-91S-003",
      "startDate":"3/1/1980",
      "endDate":"6/30/1986",
      "title":"Environmental Health Specialist (3/80-6/86)",
      "category":"health care database"
    },
    {
      "id":"MOS-91T-002",
      "startDate":"9/1/1976",
      "endDate":"2/28/1978",
      "title":"Animal Care Specialist (9/76-2/78)",
      "category":"health care database"
    },
    {
      "id":"MOS-91T-004",
      "startDate":"6/1/1992",
      "endDate":"11/30/2001",
      "title":"Animal Care Specialist (6/92-11/01)",
      "category":"health care database"
    },
    {
      "id":"MOS-91T-005",
      "startDate":"12/1/2001",
      "endDate":"10/31/2006",
      "title":"Animal Care Specialist (12/01-10/06)",
      "category":"health care database"
    },
    {
      "id":"MOS-91W-004",
      "startDate":"10/1/2001",
      "endDate":"9/30/2006",
      "title":"Health Care Specialist (10/01-9/06)",
      "category":"health care database"
    },
    {
      "id":"MOS-91X-001",
      "startDate":"9/1/1983",
      "endDate":"12/31/1994",
      "title":"Health Physics Specialist (9/83-12/94)",
      "category":"health care database"
    },
    {
      "id":"MOS-91X-002",
      "startDate":"8/1/1996",
      "endDate":"9/30/2009",
      "title":"Mental Health Specialist (8/96-9/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-001",
      "startDate":"1/1/1990",
      "endDate":"9/1/1999",
      "title":"Career Recruiter'Recruiter (1/90-9/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-002",
      "startDate":"1/1/1990",
      "endDate":"9/1/1999",
      "title":"Career Recruiter'Recruiter-In-Charge (1/90-9/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-003",
      "startDate":"1/1/1990",
      "endDate":"9/1/1999",
      "title":"Career Recruiter'Zone Supervisor (1/90-9/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-004",
      "startDate":"1/1/1990",
      "endDate":"9/1/1999",
      "title":"Career Recruiter'Chief Recruiter (1/90-9/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-005",
      "startDate":"10/1/1999",
      "endDate":"8/1/2009",
      "title":"Career Recruiter'Recruiter (10/99-8/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-006",
      "startDate":"10/1/1999",
      "endDate":"8/1/2009",
      "title":"Career Recruiter'Recruiter-In-Charge (10/99-8/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-007",
      "startDate":"10/1/1999",
      "endDate":"8/1/2009",
      "title":"Career Recruiter'Zone Supervisor (10/99-8/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-008",
      "startDate":"10/1/1999",
      "endDate":"8/1/2009",
      "title":"Career Recruiter'Chief Recruiter (10/99-8/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-2186-009",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Career Recruiter (9/09-Present)",
      "category":"health care database"
    },
    {
      "id":"NEC-9588-001",
      "startDate":"1/1/1990",
      "endDate":"9/1/1999",
      "title":"Collateral Duty Career Information Coordinator (1/90-9/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-9588-002",
      "startDate":"10/1/1999",
      "endDate":"8/1/2009",
      "title":"Career Information Program Advisor (10/99-8/09)",
      "category":"health care database"
    },
    {
      "id":"NEC-9588-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Command Career Counselor (9/09-Present)",
      "category":"health care database"
    },
    {
      "id":"NEC-9589-001",
      "startDate":"1/1/1990",
      "endDate":"10/1/1999",
      "title":"Command Career Information Retention Counselor/Coordinator (1/90-10/99)",
      "category":"health care database"
    },
    {
      "id":"NEC-9592-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Reserve Career Information Program Advisor (11/11-Present)",
      "category":"health care database"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"medical records"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"health care"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health care"
    },
    {
      "id":"NER-HM-004",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Hospital Corpsman (10/05-Present)",
      "category":"health care"
    },
    {
      "id":"NER-HN-004",
      "startDate":"8/1/2011",
      "endDate":"Present",
      "title":"Hospitalman (8/11-Present)",
      "category":"health care"
    },
    {
      "id":"NER-NC-004",
      "startDate":"11/1/2007",
      "endDate":"Present",
      "title":"Navy Counselor (11/07-Present)",
      "category":"health care"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"health care"
    },
    {
      "id":"MOS-25B-003",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Information Technology Specialist (7/14-Present)",
      "category":"healthcare technology"
    },
    {
      "id":"MOS-51C-003",
      "startDate":"7/1/2013",
      "endDate":"Present",
      "title":"Acquisition, Logistics and Technology (AL&T) Contracting Non-Commissioned Officer (CMF51) (7/13-Present)",
      "category":"healthcare technology"
    },
    {
      "id":"MCE-3451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Financial Management Resource Analyst (6/98-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MCE-6049-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"NALCOMIS Application Administrator/Analyst (4/03-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MCE-6842-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Meteorology and Oceanography Analyst Forecaster (6/98-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MOS-350F-002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"All-Source Intelligence Analyst Technician (4/12-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MOS-35F-005",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"Intelligence Analyst (4/12-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MOS-35G-006",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Geospatial Intelligence Imagery Analyst (3/12-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MOS-35N-004",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Signals Intelligence Analyst (7/12-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"MOS-35S-005",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Signals Collector/Analyst (6/12-Present)",
      "category":"healthcare analyst"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"medical assistant"
    },
    {
      "id":"MCE-1361-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Engineer Assistant (6/98-Present)",
      "category":"medical assistant"
    },
    {
      "id":"NEC-14NV-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN/SSBN Assistant Navigator (ANAV) (3/14-Present)",
      "category":"medical assistant"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health care assistant"
    },
    {
      "id":"MCE-1361-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Engineer Assistant (6/98-Present)",
      "category":"health care assistant"
    },
    {
      "id":"MCE-8412-001",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Career Recruiter (10/12-Present)",
      "category":"health care assistant"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"health care assistant"
    },
    {
      "id":"NEC-14NV-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN/SSBN Assistant Navigator (ANAV) (3/14-Present)",
      "category":"health care assistant"
    },
    {
      "id":"NEC-2186-009",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Career Recruiter (9/09-Present)",
      "category":"health care assistant"
    },
    {
      "id":"NEC-9588-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Command Career Counselor (9/09-Present)",
      "category":"health care assistant"
    },
    {
      "id":"NEC-9592-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Reserve Career Information Program Advisor (11/11-Present)",
      "category":"health care assistant"
    },
    {
      "id":"CER-MTM-001",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Navy Master Training Specialist, Mentor (4/08-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CER-MTS-003",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Master Training Specialist (MTS) (2/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGC-MTS-001",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Master Training Specialist (11/10-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-FS-002",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Food Service Specialist (5/05-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-IS-002",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (2/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-ME-001",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Maritime Enforcement Specialist (ME) (1/10-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-OS-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Operations Specialist (11/11-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-PA-005",
      "startDate":"9/1/2014",
      "endDate":"Present",
      "title":"Public Affairs Specialist (9/14-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGW-MSSD-001",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Safety Specialist Deck (MSSD) (1/08-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGW-MSSE-001",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Safety Specialist Engineering (MSSE) (1/08-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGW-OSS-001",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operations Systems Specialist (7/05-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0211-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Counterintelligence/Human Source Intelligence Specialist (8/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0212-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Technical Surveillance Countermeasures Specialist (8/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0231-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0411-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Maintenance Management Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0431-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Logistics/Embarkation Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-0481-002",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Landing Support Specialist (12/08-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-1142-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electrical Equipment Repair Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-1391-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Bulk Fuel Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-3043-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Supply Administration and Operations Specialist (5/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-3044-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Basic Contingency Contract Specialist (5/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-3052-002",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Packaging Specialist (10/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-3112-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Traffic Management Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-4421-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Legal Services Specialist (1/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-4612-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Camera Production Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-5831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Correctional Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-6046-002",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Maintenance Administration Specialist (2/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-6243-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-9 (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-6244-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-12 (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-6246-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-20 (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-6247-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, UC-35 (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-7051-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aircraft, Rescue and Firefighting Specialist (6/98-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MCE-8412-001",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Career Recruiter (10/12-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-15P-002",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"Aviation Operations Specialist (Aviation Ops Sp), CMF 15 (3/14-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-25B-003",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Information Technology Specialist (7/14-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-25U-002",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (7/14-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-25V-002",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Combat Document Production Specialist (7/14-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-27D-003",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Paralegal Specialist (5/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-35Q-002",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Network Warfare Specialist (10/11-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-42A-002",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Human Resources Specialist (12/13-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-42F-002",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Information Systems Management Specialist (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-74D-005",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Chemical Operations Specialist (9/04-Present)",
      "category":"health care specialist"
    },
    {
      "id":"MOS-92F-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Petroleum Supply Specialist (4/03-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NEC-2186-009",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Career Recruiter (9/09-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NEC-2813-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Independent Duty Ashore Logistics Specialist (11/11-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NEC-9588-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Command Career Counselor (9/09-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NEC-9592-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Reserve Career Information Program Advisor (11/11-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-CS-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Culinary Specialist (3/09-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-LS-001",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Logistics Specialist (5/09-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-MC-001",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Mass Communication Specialist (7/06-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-OS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Operations Specialist (8/06-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-PS-001",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Personnel Specialist (10/05-Present)",
      "category":"health care specialist"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"health care specialist"
    },
    {
      "id":"CGR-AET-002",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (5/14-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-AMT-003",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (5/14-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-AST-002",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Aviation Survival Technician (2/10-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-ET-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Electronics Technician (6/05-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-MK-004",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Machinery Technician (8/14-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-MST-003",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Marine Science Technician (5/03-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2111-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Arms Repairer/Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2141-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Assault Amphibious Vehicle (AAV) Repairer/Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2336-002",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (EOD)Technician (2/11-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"AN/TRC-170 Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2834-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Digital Wideband Technician (4/14-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2862-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (4/14-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2874-001",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Metrology Technician (4/14-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-2887-001",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Artillery Electronics Technician (4/14-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-3432-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Finance Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5523-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Instrument Repair Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5939-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (AVCOMM SYSTECHS) (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5948-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Radar Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5952-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Navigational Aids Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5953-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5954-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Communications Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6033-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Nondestructive Inspection Technician (6/09-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6048-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Flight Equipment Technician (6/09-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6312-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Weapon Systems Technician, AV-8 (3/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6313-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technician, EA-6 (3/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6316-003",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation Systems Technician, KC-130 (4/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6317-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technicians F/A-18 (5/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6324-003",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Weapon Systems Technician (U/AH-1) (1/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6326-002",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Systems Technician, V-22 (1/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6386-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, EA-6B (12/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6469-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Automatic Test Equipment Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6472-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System (CASS), Electro-Optical (EO) / Forward Looking Infrared Technician (FLIR) (4/03-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6473-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System High Power/Radar Technician (4/03-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6483-003",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, Helicopter, Intermediate Maintenance Activity (IMA) (10/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6484-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Advanced Aircraft Electronic Countermeasures Technician, Intermediate Maintenance Activity (IMA) (10/00-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-6492-004",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aviation Precision Measurement Equipment/Calibration and Repair Technician, IMA (4/10-Present)",
      "category":"health technician"
    },
    {
      "id":"MCE-7011-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Expeditionary Airfield Systems Technician (6/98-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-350F-002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"All-Source Intelligence Analyst Technician (4/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-350G-002",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Geospatial-Intelligence Imagery Technician (3/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-351L-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Counterintelligence Technician (2/13-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-351M-002",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"Human Intelligence (HUMINT) Collection Technician (12/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-352N-001",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Signals Intelligence Analysis Technician (7/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-352S-001",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Signals Collector Technician (6/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-353T-001",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Systems Maintenance Technician (5/12-Present)",
      "category":"health technician"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"health technician"
    },
    {
      "id":"NEC-14CM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN Radio Frequency (RF) Equipment Technician (3/14-Present)",
      "category":"health technician"
    },
    {
      "id":"NEC-14EM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN ESM Equipment Maintenance Technician (3/14-Present)",
      "category":"health technician"
    },
    {
      "id":"NEC-14NM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"Navigation Equipment Maintenance Technician (3/14-Present)",
      "category":"health technician"
    },
    {
      "id":"NEC-4234-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN 774 Class Advanced Auxiliary Equipment Technician (3/14-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-AS-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Support Equipment Technician (AS) (5/11-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-AT-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (AT) (5/11-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-AV-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Avionics Technician, Master Chief (3/05-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-ET-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-ET-008",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Electronics Technician (Submarine) (6/09-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-ETN-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Nuclear) (1/13-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-ETV-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronic Technician (Navigation) (1/13-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-FT-005",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-GS-003",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Gas Turbine System Technician, Senior Chief and Master Chief (9/06-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-GSE-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Electrical (10/07-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-GSM-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Mechanical (10/07-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-HT-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Hull Maintenance Technician (10/07-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-MT-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-STG-004",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Sonar Technician, Surface (6/09-Present)",
      "category":"health technician"
    },
    {
      "id":"NER-STS-005",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-712X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Operations Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-713X-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Engineering Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-715X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Special Warfare Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-716X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Ordnance Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-718X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Electronics Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-723X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Engineering Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-726X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Ordnance Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-728X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Electronics Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-732X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Operations Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-734X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-736X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnance Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-738X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-740X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Nuclear Power Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-748X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"NWO-749X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Security Technician (9/10-Present)",
      "category":"health technician"
    },
    {
      "id":"CGR-AET-002",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Avionics Electrical Technician (5/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-AMT-003",
      "startDate":"5/1/2014",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (5/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-AST-002",
      "startDate":"2/1/2010",
      "endDate":"Present",
      "title":"Aviation Survival Technician (2/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-ET-003",
      "startDate":"6/1/2005",
      "endDate":"Present",
      "title":"Electronics Technician (6/05-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-HS-004",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Health Services Technician (5/05-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-IT-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Information Systems Technician (11/11-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-MK-004",
      "startDate":"8/1/2014",
      "endDate":"Present",
      "title":"Machinery Technician (8/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"CGR-MST-003",
      "startDate":"5/1/2003",
      "endDate":"Present",
      "title":"Marine Science Technician (5/03-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-0689-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Information Assurance Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2111-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Small Arms Repairer/Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2141-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Assault Amphibious Vehicle (AAV) Repairer/Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2336-002",
      "startDate":"2/1/2011",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal (EOD)Technician (2/11-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"AN/TRC-170 Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2834-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Digital Wideband Technician (4/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2862-002",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Electronics Maintenance Technician (4/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2874-001",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Metrology Technician (4/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-2887-001",
      "startDate":"4/1/2014",
      "endDate":"Present",
      "title":"Artillery Electronics Technician (4/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-3432-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Finance Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5523-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Instrument Repair Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5939-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Communication Systems Technician (AVCOMM SYSTECHS) (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5948-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aviation Radar Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5952-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Navigational Aids Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5953-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Radar Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5954-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Air Traffic Control Communications Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-5974-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Tactical Data Systems Technician (2/13-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6033-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Aircraft Nondestructive Inspection Technician (6/09-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6048-002",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Flight Equipment Technician (6/09-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6312-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Weapon Systems Technician, AV-8 (3/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6313-003",
      "startDate":"3/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technician, EA-6 (3/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6316-003",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation Systems Technician, KC-130 (4/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6317-003",
      "startDate":"5/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Radar Systems Technicians F/A-18 (5/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6324-003",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Weapon Systems Technician (U/AH-1) (1/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6326-002",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Aircraft Communications/Navigation/Electrical/Systems Technician, V-22 (1/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6386-003",
      "startDate":"12/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, EA-6B (12/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6469-002",
      "startDate":"10/1/2001",
      "endDate":"Present",
      "title":"Advanced Automatic Test Equipment Technician, Intermediate Maintenance Activity (IMA) (10/01-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6472-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System (CASS), Electro-Optical (EO) / Forward Looking Infrared Technician (FLIR) (4/03-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6473-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Consolidated Automated Support System High Power/Radar Technician (4/03-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6483-003",
      "startDate":"10/1/2010",
      "endDate":"Present",
      "title":"Aircraft Electronic Countermeasures Systems Technician, Helicopter, Intermediate Maintenance Activity (IMA) (10/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6484-003",
      "startDate":"10/1/2000",
      "endDate":"Present",
      "title":"Advanced Aircraft Electronic Countermeasures Technician, Intermediate Maintenance Activity (IMA) (10/00-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-6492-004",
      "startDate":"4/1/2010",
      "endDate":"Present",
      "title":"Aviation Precision Measurement Equipment/Calibration and Repair Technician, IMA (4/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MCE-7011-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Expeditionary Airfield Systems Technician (6/98-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-350F-002",
      "startDate":"4/1/2012",
      "endDate":"Present",
      "title":"All-Source Intelligence Analyst Technician (4/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-350G-002",
      "startDate":"3/1/2012",
      "endDate":"Present",
      "title":"Geospatial-Intelligence Imagery Technician (3/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-351L-001",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Counterintelligence Technician (2/13-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-351M-002",
      "startDate":"12/1/2012",
      "endDate":"Present",
      "title":"Human Intelligence (HUMINT) Collection Technician (12/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-352N-001",
      "startDate":"7/1/2012",
      "endDate":"Present",
      "title":"Signals Intelligence Analysis Technician (7/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-352S-001",
      "startDate":"6/1/2012",
      "endDate":"Present",
      "title":"Signals Collector Technician (6/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-353T-001",
      "startDate":"5/1/2012",
      "endDate":"Present",
      "title":"Intelligence Electronic Warfare Systems Maintenance Technician (5/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NEC-14CM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN Radio Frequency (RF) Equipment Technician (3/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NEC-14EM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN ESM Equipment Maintenance Technician (3/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NEC-14NM-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"Navigation Equipment Maintenance Technician (3/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NEC-4234-001",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"SSN 774 Class Advanced Auxiliary Equipment Technician (3/14-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-AS-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Support Equipment Technician (AS) (5/11-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-AT-005",
      "startDate":"5/1/2011",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (AT) (5/11-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-AV-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Avionics Technician, Master Chief (3/05-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-CTA-005",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Cryptologic Technician, Administrative (10/06-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-CTI-005",
      "startDate":"9/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Technician, Interpretive (9/11-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-CTM-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician, Maintenance (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-CTT-005",
      "startDate":"1/1/2009",
      "endDate":"Present",
      "title":"Cryptologic Technician, Technical (1/09-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-ET-007",
      "startDate":"3/1/2004",
      "endDate":"Present",
      "title":"Electronics Technician (Surface) (3/04-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-ET-008",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Electronics Technician (Submarine) (6/09-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-ETN-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Nuclear) (1/13-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-ETR-002",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronics Technician, (Communications) (1/13-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-ETV-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Electronic Technician (Navigation) (1/13-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-FT-005",
      "startDate":"5/1/2006",
      "endDate":"Present",
      "title":"Fire Control Technician (Submarine) (5/06-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-GS-003",
      "startDate":"9/1/2006",
      "endDate":"Present",
      "title":"Gas Turbine System Technician, Senior Chief and Master Chief (9/06-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-GSE-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Electrical (10/07-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-GSM-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Gas Turbine Systems Technician, Mechanical (10/07-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-HT-004",
      "startDate":"10/1/2007",
      "endDate":"Present",
      "title":"Hull Maintenance Technician (10/07-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-IT-003",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Information Systems Technician (8/12-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-MT-003",
      "startDate":"3/1/2005",
      "endDate":"Present",
      "title":"Missile Technician (3/05-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-STG-004",
      "startDate":"6/1/2009",
      "endDate":"Present",
      "title":"Sonar Technician, Surface (6/09-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NER-STS-005",
      "startDate":"6/1/2007",
      "endDate":"Present",
      "title":"Sonar Technician, Submarine (6/07-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-712X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Operations Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-713X-005",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Engineering Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-715X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Special Warfare Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-716X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Ordnance Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-718X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Surface Electronics Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-723X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Engineering Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-726X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Ordnance Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-728X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Submarine Electronics Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-732X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Operations Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-734X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Maintenance Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-736X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Ordnance Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-738X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Aviation Electronics Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-740X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Nuclear Power Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-742X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Data Processing Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-744X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Cryptologic Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-745X-004",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Intelligence Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-748X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Explosive Ordnance Disposal Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"NWO-749X-003",
      "startDate":"9/1/2010",
      "endDate":"Present",
      "title":"Security Technician (9/10-Present)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-91Q-001",
      "startDate":"10/1/1973",
      "endDate":"8/31/1976",
      "title":"Pharmacy Specialist (10/73-8/76)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-91Q-002",
      "startDate":"9/1/1976",
      "endDate":"2/29/1984",
      "title":"Pharmacy Specialist (9/76-2/84)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-91Q-003",
      "startDate":"3/1/1984",
      "endDate":"7/31/1994",
      "title":"Pharmacy Specialist (3/84-7/94)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-91Q-004",
      "startDate":"8/1/1994",
      "endDate":"5/31/2009",
      "title":"Pharmacy Specialist (8/94-5/09)",
      "category":"pharmacy technician"
    },
    {
      "id":"MOS-91Q-001",
      "startDate":"10/1/1973",
      "endDate":"8/31/1976",
      "title":"Pharmacy Specialist (10/73-8/76)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-91Q-002",
      "startDate":"9/1/1976",
      "endDate":"2/29/1984",
      "title":"Pharmacy Specialist (9/76-2/84)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-91Q-003",
      "startDate":"3/1/1984",
      "endDate":"7/31/1994",
      "title":"Pharmacy Specialist (3/84-7/94)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-91Q-004",
      "startDate":"8/1/1994",
      "endDate":"5/31/2009",
      "title":"Pharmacy Specialist (8/94-5/09)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CER-MTM-001",
      "startDate":"4/1/2008",
      "endDate":"Present",
      "title":"Navy Master Training Specialist, Mentor (4/08-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CER-MTS-003",
      "startDate":"2/1/2013",
      "endDate":"Present",
      "title":"Master Training Specialist (MTS) (2/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGC-MTS-001",
      "startDate":"11/1/2010",
      "endDate":"Present",
      "title":"Master Training Specialist (11/10-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGR-FS-002",
      "startDate":"5/1/2005",
      "endDate":"Present",
      "title":"Food Service Specialist (5/05-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGR-IS-002",
      "startDate":"2/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (2/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGR-ME-001",
      "startDate":"1/1/2010",
      "endDate":"Present",
      "title":"Maritime Enforcement Specialist (ME) (1/10-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGR-OS-002",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Operations Specialist (11/11-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGR-PA-005",
      "startDate":"9/1/2014",
      "endDate":"Present",
      "title":"Public Affairs Specialist (9/14-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGW-MSSD-001",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Safety Specialist Deck (MSSD) (1/08-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGW-MSSE-001",
      "startDate":"1/1/2008",
      "endDate":"Present",
      "title":"Marine Safety Specialist Engineering (MSSE) (1/08-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"CGW-OSS-001",
      "startDate":"7/1/2005",
      "endDate":"Present",
      "title":"Operations Systems Specialist (7/05-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0211-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Counterintelligence/Human Source Intelligence Specialist (8/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0212-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Technical Surveillance Countermeasures Specialist (8/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0231-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0241-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Imagery Analysis Specialist (8/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0261-001",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Geographic Intelligence Specialist (8/12-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0411-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Maintenance Management Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0431-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Logistics/Embarkation Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0451-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Airborne and Air Delivery Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-0481-002",
      "startDate":"12/1/2008",
      "endDate":"Present",
      "title":"Landing Support Specialist (12/08-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-1142-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Electrical Equipment Repair Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-1391-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Bulk Fuel Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-3043-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Supply Administration and Operations Specialist (5/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-3044-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Basic Contingency Contract Specialist (5/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-3052-002",
      "startDate":"10/1/2013",
      "endDate":"Present",
      "title":"Packaging Specialist (10/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-3112-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Traffic Management Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-4421-001",
      "startDate":"1/1/2013",
      "endDate":"Present",
      "title":"Legal Services Specialist (1/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-4612-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Camera Production Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-5831-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Correctional Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6046-002",
      "startDate":"2/1/1998",
      "endDate":"Present",
      "title":"Aircraft Maintenance Administration Specialist (2/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6243-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-9 (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6244-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-12 (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6246-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, C-20 (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6247-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Fixed-Wing Transport Aircraft Specialist, UC-35 (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-7051-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Aircraft, Rescue and Firefighting Specialist (6/98-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-15P-002",
      "startDate":"3/1/2014",
      "endDate":"Present",
      "title":"Aviation Operations Specialist (Aviation Ops Sp), CMF 15 (3/14-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-25B-003",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Information Technology Specialist (7/14-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-25U-002",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Signal Support Systems Specialist (7/14-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-25V-002",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Combat Document Production Specialist (7/14-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-27D-003",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Paralegal Specialist (5/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-35Q-002",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Network Warfare Specialist (10/11-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-42A-002",
      "startDate":"12/1/2013",
      "endDate":"Present",
      "title":"Human Resources Specialist (12/13-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-42F-002",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Human Resources Information Systems Management Specialist (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-74D-005",
      "startDate":"9/1/2004",
      "endDate":"Present",
      "title":"Chemical Operations Specialist (9/04-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MOS-92F-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"Petroleum Supply Specialist (4/03-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NEC-2813-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Independent Duty Ashore Logistics Specialist (11/11-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-CS-002",
      "startDate":"3/1/2009",
      "endDate":"Present",
      "title":"Culinary Specialist (3/09-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-IS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Intelligence Specialist (8/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-LS-001",
      "startDate":"5/1/2009",
      "endDate":"Present",
      "title":"Logistics Specialist (5/09-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-MC-001",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Mass Communication Specialist (7/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-OS-004",
      "startDate":"8/1/2006",
      "endDate":"Present",
      "title":"Operations Specialist (8/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-PS-001",
      "startDate":"10/1/2005",
      "endDate":"Present",
      "title":"Personnel Specialist (10/05-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"NER-RP-004",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Religious Program Specialist (10/06-Present)",
      "category":"pharmacy specialist"
    },
    {
      "id":"MCE-6049-001",
      "startDate":"4/1/2003",
      "endDate":"Present",
      "title":"NALCOMIS Application Administrator/Analyst (4/03-Present)",
      "category":"network administrator"
    },
    {
      "id":"MOS-25F-001",
      "startDate":"10/1/2004",
      "endDate":"Present",
      "title":"Network Switching Systems Operator-Maintainer (10/04-Present)",
      "category":"network administrator"
    },
    {
      "id":"MOS-25N-002",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Nodal Network Systems Operator-Maintainer (7/14-Present)",
      "category":"network administrator"
    },
    {
      "id":"MOS-270A-002",
      "startDate":"5/1/2013",
      "endDate":"Present",
      "title":"Legal Administrator (5/13-Present)",
      "category":"network administrator"
    },
    {
      "id":"MOS-35Q-002",
      "startDate":"10/1/2011",
      "endDate":"Present",
      "title":"Cryptologic Network Warfare Specialist (10/11-Present)",
      "category":"network administrator"
    },
    {
      "id":"NER-CTN-002",
      "startDate":"8/1/2012",
      "endDate":"Present",
      "title":"Cryptologic Technician Networks (8/12-Present)",
      "category":"network administrator"
    },
    {
      "id":"MCE-4341-001",
      "startDate":"6/1/1998",
      "endDate":"Present",
      "title":"Combat Correspondent (6/98-Present)",
      "category":"help desk"
    },
    {
      "id":"MOS-25B-003",
      "startDate":"7/1/2014",
      "endDate":"Present",
      "title":"Information Technology Specialist (7/14-Present)",
      "category":"help desk"
    },
    {
      "id":"NER-MC-001",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Mass Communication Specialist (7/06-Present)",
      "category":"help desk"
    },
    {
      "id":"MCE-8412-001",
      "startDate":"10/1/2012",
      "endDate":"Present",
      "title":"Career Recruiter (10/12-Present)",
      "category":"patient care"
    },
    {
      "id":"MOS-68W-001",
      "startDate":"10/1/2006",
      "endDate":"Present",
      "title":"Health Care Specialist (10/06-Present)",
      "category":"patient care"
    },
    {
      "id":"NEC-2186-009",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Career Recruiter (9/09-Present)",
      "category":"patient care"
    },
    {
      "id":"NEC-9588-003",
      "startDate":"9/1/2009",
      "endDate":"Present",
      "title":"Command Career Counselor (9/09-Present)",
      "category":"patient care"
    },
    {
      "id":"NEC-9592-001",
      "startDate":"11/1/2011",
      "endDate":"Present",
      "title":"Reserve Career Information Program Advisor (11/11-Present)",
      "category":"patient care"
    },
    {
      "id":"CGW-MED-003",
      "startDate":"7/1/2006",
      "endDate":"Present",
      "title":"Medical Administration (7/06-Present)",
      "category":"medical charting"
    }
  ]
});

export default Crosswalk;
