// importing youtube api library
const YouTube = require('youtube-node');

// importing the settings to be used by the youtube library
const config = require('./configs/youtube.json');

// creating a youtube instance
const youtube = new YouTube();

// setting the key on the youtube instance so we can do the searches
youtube.setKey(config.key);

// video search function
function searchVideoURL(message, queryText) {
  // encapsulating the search function in a promise so that we can return the results of the callback
    return new Promise((resolve, _) => {
      // performing the search based on the concatenation of the sring and the queryText
        youtube.search(`Exercise at home for ${queryText}`, 2, function(error, result) {
            if (error) {
              // If an error occurs, this message will be returned.
              // remember that best practice would be to reject this promise at this point
              resolve("We couldn't find a video right now, please try again later");
            } else { 
              // generating an array of videoIds
              const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);

              // generating an array of youtube links
              const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');

              // returning the initial message concatenated with the youtube links to the index.js file
              resolve(`${message} ${youtubeLinks}`);
            }
          });
    });
}

// exporting video search function
module.exports.searchVideoURL = searchVideoURL;
