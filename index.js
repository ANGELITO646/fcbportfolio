console.log("Hello World!");

// current date for title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);

dateElement.innerHTML = currentDate;
let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// rapid API code to retrive the trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '8e6634f7aemsh512fcdc4c77c2b1p108593jsndc6ef5164daf',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};


let myPost={
	name: "Lee Sung kyung",
	queryUrl: "search?q=%22Lee+Sung+kyung%22",
	volume:31799,
	followers: 3895734
};
console.log(myPost);
console.log(myPost.name);
console.log(myPost.queryUrl);
console.log(myPost.volume);
console.log(myPost.followers);

let graphData = [
		{name: "#PorDeeReunion", queryUrl: "search?q=23PorDeeReunion", volume: 67000},
		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=23BGYO3rdAnniversary", volume: 27400}
];

console.log(graphData);
console.log(graphData[1]);
console.log(graphData[1].name);

console.log(graphData);
// el
graphData.push(myPost);
console.log(graphData);


// =====================================
// dummy data to comment out later (start)
// =====================================

// // this fetch request allows us to retrieve the data from twitter Trens API Server.
fetch(url, options)
.then(res => res.json())
.then(data =>{
	console.log(data);

	console.log(graphData.length);

// for loops are used to do repitive task, in this case each individual elements in the graghData array and their properties.
for (let i = 0; i < 25; i++) {
	// console.log(graphData[i])
	// console.log(graphData[i].name);
	// console.log(graphData[i].queryUrl);
	// console.log(graphData[i].volume);
	graphData.push(
	{
		"name": data.trends[i].name,
		"volume": data.trends[i].volume

	}
	)
};

let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
	return object.name;
});
console.log(topics);

let volume = graphData.map(object => {
	return object.volume;
});
console.log(volume);

// chart template from chartJS
const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volume,
        borderWidth: 2,
        backgroundColor: [
        	'rgba(255, 99, 132, 0.2)',
        	'rgba(255, 159, 64, 0.2)',
        	'rgba(255, 205, 86, 0.2)',
        	'rgba(75, 192, 192, 0.2)',
        	'rgba(54, 162, 235, 0.2)',
        	'rgba(153, 102, 255, 0.2)',
        	'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
        	'rgba(255, 99, 132)',
        	'rgba(255, 159, 64)',
        	'rgba(255, 205, 86)',
        	'rgba(75, 192, 192)',
        	'rgba(54, 162, 235)',
        	'rgba(153, 102, 255)',
        	'rgba(201, 203, 207)',
        ],
        hoverBackgroundColor: [
        	'rgba(255, 99, 132)',
        	'rgba(255, 159, 64)',
        	'rgba(255, 205, 86)',
        	'rgba(75, 192, 192)',
        	'rgba(54, 162, 235)',
        	'rgba(153, 102, 255)',
        	'rgba(201, 203, 207)',
        ]
      }]
    },
    options: {
      	indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


});




// ===========================
// copy paste to fetch request(start)
// ===========================
// console.log(graphData.length);

// // for loops are used to do repitive task, in this case each individual elements in the graghData array and their properties.
// for (let i = 0; i < 2; i++) {
// 	console.log(graphData[i])
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].queryUrl);
// 	console.log(graphData[i].volume);
// };

// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// });
// console.log(topics);

// let volume = graphData.map(object => {
// 	return object.volume;
// });
// console.log(volume);

// // chart template from chartJS
// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: '# of tweets/xeets',
//         data: volume,
//         borderWidth: 2,
//         backgroundColor: [
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         	'rgba(255, 99, 132, 0.2',
//         ],
//         borderColor: [
//         'rgba(255, 99, 32, 0.2',
//         	'rgba(255, 39, 132, 0.2',
//         	'rgba(255, 89, 132, 0.2',
//         	'rgba(255, 19, 132, 0.2',
//         	'rgba(255, 69, 132, 0.2',
//         	'rgba(255, 59, 132, 0.2',
//         	'rgba(255, 39, 132, 0.2',
//         ],
//         hoverBackgroundColor: [
//         'rgba(255, 99, 32, 0.2',
//         	'rgba(255, 299, 132, 0.2',
//         	'rgba(255, 49, 132, 0.2',
//         	'rgba(255, 69, 132, 0.2',
//         	'rgba(255, 19, 132, 0.2',
//         	'rgba(255, 89, 132, 0.2',
//         	'rgba(255, 29, 132, 0.2',
//         ]
//       }]
//     },
//     options: {
//       	indexAxis: 'y',
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

// ===========================
// copy paste to fetch request(end)
// ===========================













