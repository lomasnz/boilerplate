// JavaScript File

/**
 * Funtion returns a json list of bolerplateSets. Containig attributes
 * name : string
 * description: string 
 */
function _retriveBoilerplateSets() {
    var result = [{
        name: 'Corporate',
        description: 'Bolierplates'
    }, {
        name: 'HR',
        description: 'Boilerplates'
    }, {
        name: 'Marketing',
        description: 'Boilerplates'
    }];
    return result;
}

var _boilerplateSet;

function _setBoilerplateSet(boilerplateSet) {
	_boilerplateSet = boilerplateSet;
}

function _getBoilerplateSet() {
	return _boilerplateSet;
}


/**
 * Function return json list of Bolierplates in a Boilerplate Set of the give setName passed.
 * Containig attributes
 * name : string
 * description: string 
 */
function _retreieveBoilerplatesForSet(setName) {
    var result;

    result = [{
        name: 'My CV',
        description: 'Boilerplate'
    }, {
        name: 'Jain CV',
        description: 'Boilerplate'
    }, {
        name: 'Joe CV',
        description: 'Boilerplate'
    }, {
        name: 'Jeff CV',
        description: 'Boilerplate'
    }, {
        name: 'Jack CV',
        description: 'Boilerplate'
    }, {
        name: 'Jill CV',
        description: 'Boilerplate'
    }, {
        name: 'Jon CV',
        description: 'Boilerplate'
    }, {
        name: 'Jo CV',
        description: 'Boilerplate'
    }, {
        name: 'John CV',
        description: 'Boilerplate'
    }, {
        name: 'Jedd CV',
        description: 'Boilerplate'
    }];
    return result;
}
