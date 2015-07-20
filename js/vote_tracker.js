function Photo(fileName) {
	this.fileName = fileName;
	this.votes = 0;
	this.recieveVote = function() {
		this.votes +=1;
	};
}

var tracker = {
	photoArray: [],
	imgL: null,
	imgR: null,
	leftDiv: document.getElementById('imgL'),
	rightDiv: document.getElementById('imgR'),
	isVoting: false,

	getRandomPhotos: function() {
		var rand1 = Math.floor(Math.random() * 14);
		var rand2 = Math.floor(Math.random() * 14);

		if(rand1 === rand2) {
			while (rand1 === rand2) {
				rand2 = Math.floor(Math.random() * 14);	
			}
		}
		this.imgL = this.photoArray[rand1];
		this.imgR = this.photoArray[rand2];
	},

	displayKittens: function() {
		
		this.leftDiv.innerHTML = '<img src = "img/' + this.imgL.fileName +'" />';
		this.rightDiv.innerHTML = '<img src = "img/' + this.imgR.fileName +'" />';
		this.isVoting = true;
	},

	voteResultLeft: function(element) {
		element.style.border = '5px solid gold';
		this.imgL.recieveVote();
	},

	voteResultRight: function(element) {
		element.style.border = '5px solid blue';
		this.imgR.recieveVote();
	}	
};


tracker.leftDiv.addEventListener('click', function(e) {
	tracker.voteResultLeft(e.target);
},false);

tracker.rightDiv.addEventListener('click', function(e) {
	tracker.voteResultRight(e.target);
},false);

var pic1 = new Photo("01 - pPA0iM0.jpg");
var pic2 = new Photo("02 - 7ykJ1xi.jpg");
var pic3 = new Photo("03 - n91EiPd.jpg");
var pic4 = new Photo("04 - LDiTFeQ.jpg");
var pic5 = new Photo("05 - ywavhKp.jpg");
var pic6 = new Photo("06 - 9Fg6CZS.jpg");
var pic7 = new Photo("07 - leaDJOY.jpg");
var pic8 = new Photo("08 - XA0PRs2.jpg");
var pic9 = new Photo("09 - rkO8XVX.jpg");
var pic10 = new Photo("10 - QBZjjMe.jpg");
var pic11 = new Photo("11 - aGJW6lS.jpg");
var pic12 = new Photo("12 - 60maZWt.jpg");
var pic13 = new Photo("13 - u9wzm0f.jpg");
var pic14 = new Photo("14 - vyz8MGP.jpg");

tracker.photoArray = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14];

tracker.getRandomPhotos();
tracker.displayKittens();








