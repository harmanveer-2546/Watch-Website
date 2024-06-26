let watches = [
    {
      src: "T106.417.16.201.01_1.webp",
      h3: "TISSOT V8 ALPINE",
      h5: "$150",
    },
    {
      src: "T127.410.11.041.00_1.webp",
      h3: "TISSOT GENTLEMAN",
      h5: "$150",
    },
    {
      src: "T124.427.16.031.00_1.webp",
      h3: "TISSOT HERITAGE 1973",
      h5: "$169",
    },
    {
      src: "T110.420.46.051.00_1.webp",
      h3: "TISSOT T-TOUCH II",
      h5: "$230",
    },
    {
      src: "T112.210.22.113.01_1.webp",
      h3: "TISSOT T-WAVE Pro",
      h5: "$239",
    },
    {
      src: "T122.207.11.036.00_2.webp",
      h3: "TISSOT CARSON LADY",
      h5: "$250",
    },
    {
      src: "T063.610.36.047.00_1.webp",
      h3: "TISSOT TRADITION",
      h5: "$250",
    },
    {
      src: "T101.917.33.116.00_1.webp",
      h3: "TISSOT PR 100 PRO",
      h5: "$250",
    },
    {
      src: "T006.407.11.033.00_7.png",
      h3: "TISSOT V6 RADIANT",
      h5: "$299",
    },
    {
      src: "T006.407.16.033.00_7.png",
      h3: "TISSOT SABER ULTRA",
      h5: "$339",
    },
    {
      src: "T063.610.16.058.00_3.png",
      h3: "TISSOT GENTLEMAN",
      h5: "$339",
    },
    {
      src: "T099.407.16.048.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$339",
    },
    {
      src: "T101.417.23.061.00_2.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T101.417.33.051.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T106.417.16.201.01_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T110.420.44.051.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T115.417.27.057.01.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T116.407.37.091.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$399",
    },
    {
      src: "T116.410.16.047.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$499",
    },
    {
      src: "T116.617.37.051.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$499",
    },
    {
      src: "T120.417.17.421.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$499",
    },
    {
      src: "T122.407.11.033.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$550",
    },
    {
      src: "T122.410.16.033.00_2.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$579",
    },
    {
      src: "T125.617.16.031.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$579",
    },
    {
      src: "T125.617.16.051.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$579",
    },
    {
      src: "T125.617.17.051.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$579",
    },
    {
      src: "T125.617.36.051.01.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$579",
    },
    {
      src: "T127.407.16.041.01.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$629",
    },
    {
      src: "T127.410.16.031.01.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$639",
    },
    {
      src: "T927.407.41.031.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$719",
    },
    {
      src: "T055.427.17.057.00_3.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$739",
    },
    {
      src: "T110.420.46.051.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$799",
    },
    {
      src: "T116.617.16.047.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$800",
    },
    {
      src: "T127.407.11.041.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$990",
    },
    {
      src: "T127.410.16.041.00.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$990",
    },
    {
      src: "T128.505.36.012.00_1.png",
      h3: "TISSOT V8 ALPINE",
      h5: "$1000",
    },
  ];
   
let x = document.getElementById('shop-cards')

//Demo card code output.
/* <div class="card">
    <img src="./img/watches/T106.417.16.201.01_1.webp" alt="" />
    <h3>TISSOT V8 ALPINE</h3>
    <h5>35,500.00</h5>
    <button>Buy</button>
</div> */


for(let i=0; i<watches.length; i++)
{
    

    content = `<div class="card">
    <img src="${watches[i].src}" alt="">
    <h3>${watches[i].h3}</h3>
    <h5>${watches[i].h5}</h5>
    <button>Buy</button>
    </div>`

    x.innerHTML += content;
}