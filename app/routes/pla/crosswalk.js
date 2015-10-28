import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('crosswalk');
	},

	actions: {
		clearFilterQuery: function() {
			this.controllerFor('pla/crosswalk').set('filterQuery', '');
		},
		clearCategories: function() {
			this.controllerFor('pla/crosswalk').setProperties({
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
				selectedSoftwareDevelopment: false
			});
			this.controllerFor('pla/crosswalk').get('sortCategories').clear();
		},
		toggleFilters: function() {
			var showFilters = !this.controllerFor('pla/crosswalk').get('showFilters');
			this.controllerFor('pla/crosswalk').set('showFilters', showFilters);
		}
	}
});
