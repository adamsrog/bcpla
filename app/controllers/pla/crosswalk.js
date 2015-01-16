import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({

	// filter query
	filterQuery: '',

	// booleans
	selectedBusinessAnalytics: false,
	selectedBusinessIntelligence: false,
	selectedComputerNetwork: false,
	selectedDataAnalysis: false,
	selectedDatabase: false,
	selectedDatabaseAdministration: false,
	selectedElectronicHealthRecords: false,
	selectedHealthCare: false,
	selectedHealthCareAssistant: false,
	selectedHealthCareDatabase: false,
	selectedHealthCareSpecialist: false,
	selectedHealthInformatics: false,
	selectedHealthInformationTechnology: false,
	selectedHealthTechnician: false,
	selectedHealthcareAnalyst: false,
	selectedHealthcareTechnology: false,
	selectedHelpDesk: false,
	selectedInformationTechnology: false,
	selectedMedicalAssistant: false,
	selectedMedicalCharting: false,
	selectedMedicalRecords: false,
	selectedNetworkAdministrator: false,
	selectedNetworkAnalyst: false,
	selectedNetworkSecurity: false,
	selectedNetworkSystems: false,
	selectedPatientCare: false,
	selectedPharmacy: false,
	selectedPharmacySpecialist: false,
	selectedPharmacyTechnician: false,
	selectedSoftwareDevelopment: false,

	// set up sorting of the occupations
	sortCategories: Ember.computed('selectedBusinessAnalytics','selectedBusinessIntelligence','selectedComputerNetwork','selectedDataAnalysis','selectedDatabase','selectedDatabaseAdministration','selectedElectronicHealthRecords','selectedHealthCare','selectedHealthCareAssistant','selectedHealthCareDatabase','selectedHealthCareSpecialist','selectedHealthInformatics','selectedHealthInformationTechnology','selectedHealthTechnician','selectedHealthcareAnalyst','selectedHealthcareTechnology','selectedHelpDesk','selectedInformationTechnology','selectedMedicalAssistant','selectedMedicalCharting','selectedMedicalRecords','selectedNetworkAdministrator','selectedNetworkAnalyst','selectedNetworkSecurity','selectedNetworkSystems','selectedPatientCare','selectedPharmacy','selectedPharmacySpecialist','selectedPharmacyTechnician','selectedSoftwareDevelopment', function() {
		var categories = [];
		if (this.get('selectedBusinessAnalytics')) { categories.push('business analytics'); }
		if (this.get('selectedBusinessIntelligence')) { categories.push('business intelligence'); }
		if (this.get('selectedComputerNetwork')) { categories.push('computer network'); }
		if (this.get('selectedDataAnalysis')) { categories.push('data analysis'); }
		if (this.get('selectedDatabase')) { categories.push('database'); }
		if (this.get('selectedDatabaseAdministration')) { categories.push('database administration'); }
		if (this.get('selectedElectronicHealthRecords')) { categories.push('electronic health records'); }
		if (this.get('selectedHealthCare')) { categories.push('health care'); }
		if (this.get('selectedHealthCareAssistant')) { categories.push('health care assistant'); }
		if (this.get('selectedHealthCareDatabase')) { categories.push('health care database'); }
		if (this.get('selectedHealthCareSpecialist')) { categories.push('health care specialist'); }
		if (this.get('selectedHealthInformatics')) { categories.push('health informatics'); }
		if (this.get('selectedHealthInformationTechnology')) { categories.push('health information technology'); }
		if (this.get('selectedHealthTechnician')) { categories.push('health technician'); }
		if (this.get('selectedHealthcareAnalyst')) { categories.push('healthcare analyst'); }
		if (this.get('selectedHealthcareTechnology')) { categories.push('healthcare technology'); }
		if (this.get('selectedHelpDesk')) { categories.push('help desk'); }
		if (this.get('selectedInformationTechnology')) { categories.push('information technology'); }
		if (this.get('selectedMedicalAssistant')) { categories.push('medical assistant'); }
		if (this.get('selectedMedicalCharting')) { categories.push('medical charting'); }
		if (this.get('selectedMedicalRecords')) { categories.push('medical records'); }
		if (this.get('selectedNetworkAdministrator')) { categories.push('network administrator'); }
		if (this.get('selectedNetworkAnalyst')) { categories.push('Network analyst'); }
		if (this.get('selectedNetworkSecurity')) { categories.push('network security'); }
		if (this.get('selectedNetworkSystems')) { categories.push('network systems'); }
		if (this.get('selectedPatientCare')) { categories.push('patient care'); }
		if (this.get('selectedPharmacy')) { categories.push('pharmacy'); }
		if (this.get('selectedPharmacySpecialist')) { categories.push('pharmacy specialist'); }
		if (this.get('selectedPharmacyTechnician')) { categories.push('pharmacy technician'); }
		if (this.get('selectedSoftwareDevelopment')) { categories.push('Software development'); }
		return categories;
	}),

	sortedCourses: Ember.computed('model.content', 'sortCategories', 'filterQuery', function() {

		var model = this.get('model');
		var query = this.get('filterQuery');
		var categories = this.get('sortCategories');
		var courses = [];
		var uniqueCourses = [];

		if (categories.length === 0 && query === '') { return model; }

		// return any courses that contain any matching categories
		if (categories.length > 0) {
			categories.forEach(function(category) {
				model.forEach(function(course) {
					if (course.get('category').contains(category)) { courses.push(course); }
				});
			});

			// filter out duplicates
			Ember.$.each(courses, function(i, el){
	    	if(Ember.$.inArray(el, uniqueCourses) === -1) {
	    		uniqueCourses.push(el);
	    	}
			});

			courses = uniqueCourses;
		}

		// apply search query
		if (query) {
			if (categories.length === 0) { courses = model; }
      courses = courses.filter(function(item) {
        if (item.get('title').toLowerCase().indexOf(query.toLowerCase()) > -1) { return true; }
      });
    }

		return courses;
	}),

	// set up pagination
	pagedContent: pagedArray('sortedCourses', { pageBinding: "page", perPageBinding: 'perPage' }),
	page: 1,
  perPage: 10,

  actions: {
  	clearFilterQuery: function() {
  		this.set('filterQuery', '');
  	}
  }

});
