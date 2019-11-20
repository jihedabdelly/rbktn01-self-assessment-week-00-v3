// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}

// filterFamilyMembers(familyTree, livesInBerkeley)

// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

function fullName(obj) {
	return obj.firstName + " " + obj.lastName;
}
var result = [];
var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
  
  // I got the weirdest message here "cannot read property length" but familyTree.children is an array, and when I put familyTree.children in a new variable and used that variable inside the if condition I still got the same error !!!
  if(familyTree.children.length === 0) {
  	return result;
  }
  
  else if (familyTree.children.length !== 0 ) {
  	if (truthTest(familyTree)) {
  		result.push(fullName(familyTree));
  	} else {
  		return result.join(filterFamilyMembers(familyTree.children, truthTest))
  	}
  }
};

