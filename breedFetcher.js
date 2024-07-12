const needle = require('needle');

const search = function(catName) {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => { // note: needle requests must be written in this order, the name of the arguments doesn't matter, it could be (1, 2, 3), 1 will be the error, 2 will be the response, 3 will be the body.

    // console.log(error);
    // console.log(response)

    if (error) {
      console.log('An error occured before reading the body of the search page.');
      return;
    }

    if (body.length === 0) {
      console.log('That breed may not be on the list. At some point I may code this to show the list of names available. For now, try entering one or two letters to display a match.');
      return;
    }

    console.log(body[0].description); // since it is an array with an object inside it, we need to do body [0] . description to access description.

    // console.log('body is type:', typeof body)

  });
};

// search('sib')

search(process.argv[2]);