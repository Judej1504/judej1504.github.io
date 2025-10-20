var cmm = "0";
var raw = 0;
var m = "100m";
const params = new URLSearchParams(window.location.search);
var id = params.get("id") || "UC-9-kyTW8ZkZNDHQJ6FgpwQ";
var url = "https://mixerno.space/api/youtube-channel-counter/user/";
function spl(n) {
	n = "" + n + "";
	return n.split("", 9);
}

function settype(n) {
	if (n < 1000000000) {
		m = "100m";
		document.querySelector("#odo1a").style.display = "inline-block";
		document.querySelector("#odo2a").style.display = "inline-block";
		document.querySelector("#odo3a").style.display = "inline-block";
		document.querySelector("#odo4a").style.display = "inline-block";
		document.querySelector("#odo5a").style.display = "inline-block";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "inline-block";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 100000000) {
		m = "10m";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "inline-block";
		document.querySelector("#odo3a").style.display = "inline-block";
		document.querySelector("#odo4a").style.display = "inline-block";
		document.querySelector("#odo5a").style.display = "inline-block";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "inline-block";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 10000000) {
		m = "1m";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "inline-block";
		document.querySelector("#odo4a").style.display = "inline-block";
		document.querySelector("#odo5a").style.display = "inline-block";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "inline-block";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 1000000) {
		m = "100k";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "inline-block";
		document.querySelector("#odo5a").style.display = "inline-block";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 100000) {
		m = "10k";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "none";
		document.querySelector("#odo5a").style.display = "inline-block";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 10000) {
		m = "1k";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "none";
		document.querySelector("#odo5a").style.display = "none";
		document.querySelector("#odo6a").style.display = "inline-block";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "inline-block";
	}
	if (n < 1000) {
		m = "100";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "none";
		document.querySelector("#odo5a").style.display = "none";
		document.querySelector("#odo6a").style.display = "none";
		document.querySelector("#odo7a").style.display = "inline-block";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "none";
	}
	if (n < 100) {
		m = "10";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "none";
		document.querySelector("#odo5a").style.display = "none";
		document.querySelector("#odo6a").style.display = "none";
		document.querySelector("#odo7a").style.display = "none";
		document.querySelector("#odo8a").style.display = "inline-block";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "none";
	}
	if (n < 10) {
		m = "1";
		document.querySelector("#odo1a").style.display = "none";
		document.querySelector("#odo2a").style.display = "none";
		document.querySelector("#odo3a").style.display = "none";
		document.querySelector("#odo4a").style.display = "none";
		document.querySelector("#odo5a").style.display = "none";
		document.querySelector("#odo6a").style.display = "none";
		document.querySelector("#odo7a").style.display = "none";
		document.querySelector("#odo8a").style.display = "none";
		document.querySelector("#odo9a").style.display = "inline-block";
		document.querySelector("#comma1a").style.display = "none";
		document.querySelector("#comma2a").style.display = "none";
	}
	return m;
}

const chart = new Highcharts.chart({
	chart: {
		renderTo: "chart",
		type: "line",
		zoomType: "x",
		backgroundColor: "transparent",
		plotBorderColor: "transparent",
		height: "153px",
		animation: true,
		style: {
			fontFamily: "Roboto",
		},
	},
	title: {
		text: "",
	},
	xAxis: {
		type: "datetime",
		tickPixelInterval: 500,
		labels: {
			style: {
				color: "#AAAAAA",
			},
		},
		gridLineColor: "#9E9E9E",
		lineColor: "#9E9E9E",
		minorGridLineColor: "#858585",
		tickColor: "#858585",
		title: {
			style: {
				color: "#858585",
			},
		},
	},
	yAxis: {
		title: {
			text: "",
		},
		labels: {
			style: {
				color: "#AAAAAA",
			},
			formatter: function() {
				function abbreviate(count, withAbbr = true, decimals = 2) {
					if (String(count)[0] === "0") {
						if (count === 0) return "0";
						else return count.toFixed(decimals);
					}

					let neg = false;
					if (String(count)[0] == "-") {
						neg = true;
						count = ~Number(count) + 1;
					}

					const COUNT_ABBRS = ["", "K", "M", "B"];
					const i =
						count === 0 ? count : Math.floor(Math.log(count) / Math.log(1000));
					let result = parseFloat(
						(count / Math.pow(1000, i)).toFixed(decimals)
					).toString();
					if (withAbbr) result += `${COUNT_ABBRS[i]}`;
					if (neg) result = `-${result}`;
					return result;
				}

				return abbreviate(this.value);
			},
		},
		gridLineColor: "#3D3D3D",
		lineColor: "#3D3D3D",
		minorGridLineColor: "#3D3D3D",
		tickColor: "#3D3D3D",
		opposite: true,
	},
	credits: {
		enabled: false,
	},
	tooltip: {
		shared: true,
		formatter: function() {
			// @ts-ignore
			var index = this.points[0].series.xData.indexOf(this.x);
			// @ts-ignore
			var lastY = this.points[0].series.yData[index - 1];
			// @ts-ignore
			var dif = this.y - lastY;
			var r =
				// @ts-ignore
				Highcharts.dateFormat("%A %b %e, %H:%M:%S", new Date(this.x)) +
				'<br><span style="color:black">\u25CF </span>' +
				// @ts-ignore
				this.points[0].series.name +
				": <b>" +
				// @ts-ignore
				Highcharts.numberFormat(this.y, 0);
			if (dif < 0) {
				r +=
					'<span style="color:#ff0000;font-weight:bold;"> (' +
					Highcharts.numberFormat(dif, 0) +
					")</span>";
			}
			if (dif > 0) {
				r +=
					'<span style="color:#00bb00;font-weight:bold;"> (+' +
					Highcharts.numberFormat(dif, 0) +
					")</span>";
			}
			return r;
		},
	},
	series: [
		{
			showInLegend: false,
			name: "",
			marker: { enabled: false },
			color: "#3FABCD",
			lineColor: "#3FABCD",
			lineWidth: 2,
		},
	],
});

function getdata(a) {
	fetch(url + a)
		.then((res) => res.json())
		.then((data) => {
			cmm = spl(data.counts[0].count);
			raw = data.counts[0].count;
			document.getElementById("avatar").src = data.user[1].count;
			document.getElementById("title").textContent = data.user[0].count;
			if (chart.series[0].points.length >= 3600)
				chart.series[0].data[0].remove();
			chart.series[0].addPoint([Date.now(), data.counts[0].count]);
			return cmm;
		});
}

function render() {
	settype(raw);
	if (m == "100m") {
		odo1a.innerHTML = cmm[0];
		odo2a.innerHTML = cmm[1];
		odo3a.innerHTML = cmm[2];
		odo4a.innerHTML = cmm[3];
		odo5a.innerHTML = cmm[4];
		odo6a.innerHTML = cmm[5];
		odo7a.innerHTML = cmm[6];
		odo8a.innerHTML = cmm[7];
		odo9a.innerHTML = cmm[8];
	}
	if (m == "10m") {
		odo2a.innerHTML = cmm[0];
		odo3a.innerHTML = cmm[1];
		odo4a.innerHTML = cmm[2];
		odo5a.innerHTML = cmm[3];
		odo6a.innerHTML = cmm[4];
		odo7a.innerHTML = cmm[5];
		odo8a.innerHTML = cmm[6];
		odo9a.innerHTML = cmm[7];
	}
	if (m == "1m") {
		odo3a.innerHTML = cmm[0];
		odo4a.innerHTML = cmm[1];
		odo5a.innerHTML = cmm[2];
		odo6a.innerHTML = cmm[3];
		odo7a.innerHTML = cmm[4];
		odo8a.innerHTML = cmm[5];
		odo9a.innerHTML = cmm[6];
	}
	if (m == "100k") {
		odo4a.innerHTML = cmm[0];
		odo5a.innerHTML = cmm[1];
		odo6a.innerHTML = cmm[2];
		odo7a.innerHTML = cmm[3];
		odo8a.innerHTML = cmm[4];
		odo9a.innerHTML = cmm[5];
	}
	if (m == "10k") {
		odo5a.innerHTML = cmm[0];
		odo6a.innerHTML = cmm[1];
		odo7a.innerHTML = cmm[2];
		odo8a.innerHTML = cmm[3];
		odo9a.innerHTML = cmm[4];
	}
	if (m == "1k") {
		odo6a.innerHTML = cmm[0];
		odo7a.innerHTML = cmm[1];
		odo8a.innerHTML = cmm[2];
		odo9a.innerHTML = cmm[3];
	}
	if (m == "100") {
		odo7a.innerHTML = cmm[0];
		odo8a.innerHTML = cmm[1];
		odo9a.innerHTML = cmm[2];
	}
	if (m == "10") {
		odo8a.innerHTML = cmm[0];
		odo9a.innerHTML = cmm[1];
	}
	if (m == "1") {
		odo9a.innerHTML = cmm[0];
	}
}
setTimeout(() => {
	getdata(id);
	render();
}, 100);
setTimeout(() => {
	getdata(id);
	render();
}, 500);
setInterval(() => {
	getdata(id);
	render();
}, 2000);

function search() {
	const prompt = window.prompt("Enter channel name, ID, or URL.");
	if (prompt)
		fetch(
			`https://axern.space/api/search?platform=youtube&type=channel&query=${prompt}`
		)
			.then((res) => res.json())
			.then((data) => {
				window.location.href = "?id=" + data[0].id;
			});
}
