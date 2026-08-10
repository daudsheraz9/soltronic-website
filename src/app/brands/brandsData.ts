const brandWebsiteMap: Record<string, string> = {
  "solis": "https://www.solisinverters.com/",
  "inverex": "https://www.inverex.pk/",
  "pylontech": "https://www.pylontech.com.cn/",
  "jinko solar": "https://www.jinkosolar.com/",
  "jinko": "https://www.jinkosolar.com/",
  "narada": "https://www.naradapower.com/",
  "huawei": "https://solar.huawei.com/",
  "dyness": "https://www.dyness.com/",
  "deye": "https://www.deyeinverter.com/",
  "canadian solar": "https://www.canadiansolar.com/",
  "longi": "https://www.longi.com/",
  "trina": "https://www.trinasolar.com/",
  "growatt": "https://www.growatt.com/",
  "goodwe": "https://www.goodwe.com/",
  "sungrow": "https://www.sungrowpower.com/",
  "byd": "https://www.byd.com/",
  "catl": "https://www.catl.com/",
  "ae solar": "https://ae-solar.com/",
  "afore energy": "https://www.afore-power.com/",
  "afore": "https://www.afore-power.com/",
  "aiko": "https://www.aikosolar.com/",
  "anern": "https://www.anern.com/",
  "astronergy": "https://www.astronergy.com/",
  "chint": "https://chintglobal.com/",
  "crown micro": "https://www.crownmicro.com/",
  "daewoo battery": "https://daewoobattery.com/",
  "ecoworthy": "https://www.eco-worthy.com/",
  "atlas battery": "https://atlasbatteries.com.pk/",
  "atom power": "https://atompower.com/",
  "auxsol": "https://www.auxsolcloud.com/",
  "blue carbon": "https://www.bluecarbontech.com/",
  "calb": "https://www.calb-tech.com/",
  "felicity": "https://www.felicitysolar.com/",
  "must": "https://www.mustenergy.com/",
  "srne": "https://www.srnesolar.com/",
  "sunsyne": "https://sunsynk.org/",
  "sunsynk": "https://sunsynk.org/",
  "victron": "https://www.victronenergy.com/",
  "ziewnic": "https://ziewnic.com/"
};

export function getBrandWebsite(brandName: string): string {
  const key = brandName.toLowerCase().trim();
  if (brandWebsiteMap[key]) {
    return brandWebsiteMap[key];
  }
  return `https://www.google.com/search?q=${encodeURIComponent(brandName + " official website")}`;
}

export const allBrands = [
  {
    "name": "1ON",
    "logo": "https://api.gnrix.com/images/user-images/11/thumbnails/thumb_1781249728413_66270fce73da6ab5.png"
  },
  {
    "name": "AE Solar",
    "logo": "https://api.gnrix.com/images/user-images/14/thumbnails/thumb_1781249659864_b102ba8e967b19d4.png"
  },
  {
    "name": "Afore Energy",
    "logo": "https://api.gnrix.com/images/user-images/15/thumbnails/thumb_1781249641253_18bb58b71b408b8e.png"
  },
  {
    "name": "Aiko",
    "logo": "https://api.gnrix.com/images/user-images/16/thumbnails/thumb_1781249631163_30a1e59e92800d86.png"
  },
  {
    "name": "All Spark Power",
    "logo": "https://api.gnrix.com/images/user-images/17/thumbnails/thumb_1781249473429_6d0415c6845b6203.jpg"
  },
  {
    "name": "ANERN",
    "logo": "https://api.gnrix.com/images/user-images/18/thumbnails/thumb_1781248956594_c23ad3f36b2c8f50.jpg"
  },
  {
    "name": "Apex Solar",
    "logo": "https://api.gnrix.com/images/user-images/19/thumbnails/thumb_1781251384737_472c092fe7aed7f9.png"
  },
  {
    "name": "APSUN",
    "logo": "https://api.gnrix.com/images/user-images/20/thumbnails/thumb_1781245921294_d0b61b2303763cda.png"
  },
  {
    "name": "ARM Power",
    "logo": "https://api.gnrix.com/images/user-images/21/thumbnails/thumb_1781245906316_578fc65b552cdf7b.png"
  },
  {
    "name": "Astronergy",
    "logo": "https://api.gnrix.com/images/user-images/22/thumbnails/thumb_1781245880402_b7584fcf8f0e7f87.jpg"
  },
  {
    "name": "Atlas Battery",
    "logo": "https://api.gnrix.com/images/user-images/13/thumbnails/thumb_1781249674691_dcd0b99446969799.png"
  },
  {
    "name": "Atom Power",
    "logo": "https://api.gnrix.com/images/user-images/2801/thumbnails/thumb_1782291980967_bd59147e5781bd3c.jpg"
  },
  {
    "name": "Auxsol",
    "logo": "https://api.gnrix.com/images/user-images/23/thumbnails/thumb_1781245863216_f23be073aac8e06d.png"
  },
  {
    "name": "Badar Energy",
    "logo": "https://api.gnrix.com/images/user-images/24/thumbnails/thumb_1781245850529_97e157323542b7ca.png"
  },
  {
    "name": "Baykee",
    "logo": "https://api.gnrix.com/images/user-images/25/thumbnails/thumb_1781245837518_1196df85337a2da8.png"
  },
  {
    "name": "Blue Carbon",
    "logo": "https://api.gnrix.com/images/user-images/26/thumbnails/thumb_1781245825186_8cb6524246b738b7.png"
  },
  {
    "name": "Bounergy",
    "logo": "https://api.gnrix.com/images/user-images/27/thumbnails/thumb_1781245812184_ee3c6b47aae03a90.jpg"
  },
  {
    "name": "Bridge Power",
    "logo": "https://api.gnrix.com/images/user-images/28/thumbnails/thumb_1781245709514_771a7ef9bfd56ce3.jpg"
  },
  {
    "name": "Byd",
    "logo": "https://api.gnrix.com/images/user-images/29/thumbnails/thumb_1781245680681_3835c09b680fbc6d.png"
  },
  {
    "name": "Bytewatt",
    "logo": "https://api.gnrix.com/images/user-images/30/thumbnails/thumb_1781245658550_afd9e349dc634cbf.jpg"
  },
  {
    "name": "CALB",
    "logo": "https://api.gnrix.com/images/user-images/43/thumbnails/thumb_1781243087049_562c8366de99624f.jpg"
  },
  {
    "name": "Canadian Solar",
    "logo": "https://api.gnrix.com/images/user-images/31/thumbnails/thumb_1781244408185_847fd372bc911293.png"
  },
  {
    "name": "CATL",
    "logo": "https://api.gnrix.com/images/user-images/45/thumbnails/thumb_1781242948859_bfbb08984f4020f2.png"
  },
  {
    "name": "Chint",
    "logo": "https://api.gnrix.com/images/user-images/32/thumbnails/thumb_1781243863823_d6236d00687cd0e6.jpg"
  },
  {
    "name": "Cora Dawn Solar",
    "logo": "https://api.gnrix.com/images/user-images/3452/thumbnails/thumb_1784638689311_05a8b971efc7ccea.jpg"
  },
  {
    "name": "Coretech",
    "logo": "https://api.gnrix.com/images/user-images/33/thumbnails/thumb_1781243836406_8749e0694602fb02.jpg"
  },
  {
    "name": "Crown Micro",
    "logo": "https://api.gnrix.com/images/user-images/34/thumbnails/thumb_1781243824690_857d39b02d29359d.png"
  },
  {
    "name": "Crown Solar Energy",
    "logo": "https://api.gnrix.com/images/user-images/35/thumbnails/thumb_1781243806625_e7a9442a4c962fb9.png"
  },
  {
    "name": "Daewoo Battery",
    "logo": "https://api.gnrix.com/images/user-images/3402/thumbnails/thumb_1783929495762_7c2f2b53f6cc9c10.png"
  },
  {
    "name": "Deye",
    "logo": "https://api.gnrix.com/images/user-images/2824/thumbnails/thumb_1783335317283_37d8165f3ddb3b6f.png"
  },
  {
    "name": "DiPower",
    "logo": "https://api.gnrix.com/images/user-images/2828/thumbnails/thumb_1783500253924_0363857ecc9f1223.jpg"
  },
  {
    "name": "Dongjin",
    "logo": "https://api.gnrix.com/images/user-images/36/thumbnails/thumb_1781243787681_45a9064b31b38620.png"
  },
  {
    "name": "Dyness",
    "logo": "https://api.gnrix.com/images/user-images/37/thumbnails/thumb_1781243737997_c45e58a72ac34096.png"
  },
  {
    "name": "Dyque",
    "logo": "https://api.gnrix.com/images/user-images/38/thumbnails/thumb_1781245775311_eb8ebcebfb92de75.png"
  },
  {
    "name": "Ecosolex",
    "logo": "https://api.gnrix.com/images/user-images/39/thumbnails/thumb_1781243183024_523c34534284e6b8.png"
  },
  {
    "name": "Ecoworthy",
    "logo": "https://api.gnrix.com/images/user-images/40/thumbnails/thumb_1781243145744_e98537cf8ee3d39a.png"
  },
  {
    "name": "eelbattery",
    "logo": "https://api.gnrix.com/images/user-images/41/thumbnails/thumb_1781243126964_382ea86e10bfe4f0.png"
  },
  {
    "name": "Eenovance",
    "logo": "https://api.gnrix.com/images/user-images/42/thumbnails/thumb_1781243103655_3ef01d86a0c2a37b.png"
  },
  {
    "name": "EKOTEK ENERGY",
    "logo": "https://api.gnrix.com/images/user-images/151/thumbnails/thumb_1781172090021_95e90a25d151a2de.png"
  },
  {
    "name": "Epever",
    "logo": "https://api.gnrix.com/images/user-images/44/thumbnails/thumb_1781242994913_b32ed76fb1f57e61.jpg"
  },
  {
    "name": "Felicity Solar",
    "logo": "https://api.gnrix.com/images/user-images/2829/thumbnails/thumb_1783501599938_596162e7873ea26f.jpg"
  },
  {
    "name": "Fixon",
    "logo": "https://api.gnrix.com/images/user-images/46/thumbnails/thumb_1781242934932_cd1854e72adb6f41.png"
  },
  {
    "name": "Flux",
    "logo": "https://api.gnrix.com/images/user-images/47/thumbnails/thumb_1781242915426_164e4a82dc30d89b.png"
  },
  {
    "name": "Fox",
    "logo": "https://api.gnrix.com/images/user-images/48/thumbnails/thumb_1781242896569_f2b0b08a8729a19b.jpg"
  },
  {
    "name": "Fronus",
    "logo": "https://api.gnrix.com/images/user-images/49/thumbnails/thumb_1781242849808_65650c908a6fef5c.png"
  },
  {
    "name": "Fuji",
    "logo": "https://api.gnrix.com/images/user-images/10/thumbnails/thumb_1781249810468_50feb8f79673887f.png"
  },
  {
    "name": "Galaxy Inverter",
    "logo": "https://api.gnrix.com/images/user-images/50/thumbnails/thumb_1781242830613_dd203a41609c5880.png"
  },
  {
    "name": "GAMKO NEW ENERGY",
    "logo": "https://api.gnrix.com/images/user-images/51/thumbnails/thumb_1781242811866_8bf970b5d9462cc0.png"
  },
  {
    "name": "Genix Green",
    "logo": "https://api.gnrix.com/images/user-images/52/thumbnails/thumb_1781242799204_a30b456ba2281330.png"
  },
  {
    "name": "GoodWe",
    "logo": "https://api.gnrix.com/images/user-images/53/thumbnails/thumb_1781242786583_528f8807479304a3.png"
  },
  {
    "name": "Gripsun",
    "logo": "https://api.gnrix.com/images/user-images/54/thumbnails/thumb_1781242773008_27f24dc322d1f6d5.png"
  },
  {
    "name": "Grovolt",
    "logo": "https://api.gnrix.com/images/user-images/3414/thumbnails/thumb_1784056528429_8b0abbbd58c2393e.jpg"
  },
  {
    "name": "Growatt",
    "logo": "https://api.gnrix.com/images/user-images/55/thumbnails/thumb_1781242744002_2eabb7f29adf0a46.png"
  },
  {
    "name": "GSL ENERGY",
    "logo": "https://api.gnrix.com/images/user-images/56/thumbnails/thumb_1781242703573_0b494d1fce10abf0.jpg"
  },
  {
    "name": "Haier Energy",
    "logo": "https://api.gnrix.com/images/user-images/3399/thumbnails/thumb_1783928688713_a6dc23d46d835b79.jpg"
  },
  {
    "name": "Haisic",
    "logo": "https://api.gnrix.com/images/user-images/57/thumbnails/thumb_1781242682777_0828f4e4d46f6dc0.png"
  },
  {
    "name": "Hanersun",
    "logo": "https://api.gnrix.com/images/user-images/7/thumbnails/thumb_1781250481932_8a2170fcde838ca2.png"
  },
  {
    "name": "Harisun Energy",
    "logo": "https://api.gnrix.com/images/user-images/58/thumbnails/thumb_1781242670948_b32f321201ef0a76.png"
  },
  {
    "name": "HiSEL",
    "logo": "https://api.gnrix.com/images/user-images/59/thumbnails/thumb_1781242636610_e367d21285c7dc24.png"
  },
  {
    "name": "HiSun",
    "logo": "https://api.gnrix.com/images/user-images/60/thumbnails/thumb_1781242608120_6ce8b17cc65b0d2a.png"
  },
  {
    "name": "Hithium",
    "logo": "https://api.gnrix.com/images/user-images/3400/thumbnails/thumb_1783929168631_13cbdd3648cb8dd8.png"
  },
  {
    "name": "Hiwatt Solar",
    "logo": "https://api.gnrix.com/images/user-images/61/thumbnails/thumb_1781242596150_7b5c335759ea87c4.png"
  },
  {
    "name": "Hoymiles",
    "logo": "https://api.gnrix.com/images/user-images/2832/thumbnails/thumb_1783502165090_2f3b6305107904a0.png"
  },
  {
    "name": "HUA",
    "logo": "https://api.gnrix.com/images/user-images/8/thumbnails/thumb_1781249860092_db32b9efde9e2df9.jpg"
  },
  {
    "name": "Huasun",
    "logo": "https://api.gnrix.com/images/user-images/62/thumbnails/thumb_1781242582219_194754dac211ea90.png"
  },
  {
    "name": "Huawei",
    "logo": "https://api.gnrix.com/images/user-images/9/thumbnails/thumb_1781249831702_3758be1a02f9b77a.jpg"
  },
  {
    "name": "HWOO",
    "logo": "https://api.gnrix.com/images/user-images/3490/thumbnails/thumb_1785738858672_13f14ac33c1ff504.png"
  },
  {
    "name": "Hypontech",
    "logo": "https://api.gnrix.com/images/user-images/2811/thumbnails/thumb_1783063255641_fe06c9c1d71d68a5.png"
  },
  {
    "name": "Hystorix",
    "logo": "https://api.gnrix.com/images/user-images/2802/thumbnails/thumb_1782292231587_41022b24f1b08a64.jpg"
  },
  {
    "name": "Hyundai",
    "logo": "https://api.gnrix.com/images/user-images/150/thumbnails/thumb_1781172128139_156efe27be0b7574.png"
  },
  {
    "name": "Infinix",
    "logo": "https://api.gnrix.com/images/user-images/2800/thumbnails/thumb_1782291848696_cefd9896df64f09b.png"
  },
  {
    "name": "Invent",
    "logo": "https://api.gnrix.com/images/user-images/3418/thumbnails/thumb_1784092089173_6fa53bcfe57583b7.png"
  },
  {
    "name": "Inverex",
    "logo": "https://api.gnrix.com/images/user-images/63/thumbnails/thumb_1781242474530_69aee5a82758a986.png"
  },
  {
    "name": "INVT",
    "logo": "https://api.gnrix.com/images/user-images/64/thumbnails/thumb_1781242425729_76164364d45e97b7.png"
  },
  {
    "name": "Isola New Energy",
    "logo": "https://api.gnrix.com/images/user-images/149/thumbnails/thumb_1781172212379_c057eb23292999b4.jpg"
  },
  {
    "name": "ITEL",
    "logo": "https://api.gnrix.com/images/user-images/65/thumbnails/thumb_1781242406984_66f978c348615aba.png"
  },
  {
    "name": "JA Solar",
    "logo": "https://api.gnrix.com/images/user-images/66/thumbnails/thumb_1781242389698_2f9933c669ec58d8.png"
  },
  {
    "name": "Jinko",
    "logo": "https://api.gnrix.com/images/user-images/67/thumbnails/thumb_1781242376261_84600bce22b403fd.png"
  },
  {
    "name": "Jolywood",
    "logo": "https://api.gnrix.com/images/user-images/68/thumbnails/thumb_1781242299143_22c499e844f7526f.jpg"
  },
  {
    "name": "JS Solar",
    "logo": ""
  },
  {
    "name": "Juncess",
    "logo": "https://api.gnrix.com/images/user-images/3397/thumbnails/thumb_1783928205544_439d37c77ed5b5d1.jpg"
  },
  {
    "name": "K-Star",
    "logo": "https://api.gnrix.com/images/user-images/71/thumbnails/thumb_1781241356093_214c5442ca1836c1.png"
  },
  {
    "name": "Knox",
    "logo": "https://api.gnrix.com/images/user-images/72/thumbnails/thumb_1781241342599_953161dcdbdd8a3e.jpg"
  },
  {
    "name": "Leapton",
    "logo": "https://api.gnrix.com/images/user-images/73/thumbnails/thumb_1781241329350_7842bfe9b153e09c.jpg"
  },
  {
    "name": "Lecxo",
    "logo": "https://api.gnrix.com/images/user-images/74/thumbnails/thumb_1781241311125_b86ef72ae7623179.png"
  },
  {
    "name": "LEFU Power",
    "logo": "https://api.gnrix.com/images/user-images/75/thumbnails/thumb_1781241293465_8978825142604494.jpg"
  },
  {
    "name": "Lithion",
    "logo": "https://api.gnrix.com/images/user-images/3405/thumbnails/thumb_1783932195282_5ff7167c61a68143.png"
  },
  {
    "name": "Lithium Valley",
    "logo": "https://api.gnrix.com/images/user-images/76/thumbnails/thumb_1781241274828_235ca43e242c1ab4.png"
  },
  {
    "name": "Livoltek",
    "logo": "https://api.gnrix.com/images/user-images/77/thumbnails/thumb_1781241260903_591b212cf4e8c9e3.png"
  },
  {
    "name": "Longi",
    "logo": "https://api.gnrix.com/images/user-images/78/thumbnails/thumb_1781241241342_0b351c3f5c3bd9aa.png"
  },
  {
    "name": "Longlife",
    "logo": "https://api.gnrix.com/images/user-images/79/thumbnails/thumb_1781241228949_bdb97a73f59eeb87.png"
  },
  {
    "name": "Luminey",
    "logo": "https://api.gnrix.com/images/user-images/80/thumbnails/thumb_1781241192209_536f8fb76615256d.jpg"
  },
  {
    "name": "Luxpower",
    "logo": "https://api.gnrix.com/images/user-images/81/thumbnails/thumb_1781241177153_0fe1e7089e3048bf.jpg"
  },
  {
    "name": "LVFU Energy",
    "logo": "https://api.gnrix.com/images/user-images/82/thumbnails/thumb_1781241163318_182229e1eaec5b53.png"
  },
  {
    "name": "LVTOPSUN",
    "logo": "https://api.gnrix.com/images/user-images/83/thumbnails/thumb_1781241145025_46b5c1ee84930b9d.jpg"
  },
  {
    "name": "Maxpower",
    "logo": "https://api.gnrix.com/images/user-images/84/thumbnails/thumb_1781241131009_036d080c12dd05de.png"
  },
  {
    "name": "Mesol",
    "logo": "https://api.gnrix.com/images/user-images/85/thumbnails/thumb_1781241111500_7c4e9979a6861622.jpg"
  },
  {
    "name": "MY SOLAR",
    "logo": "https://api.gnrix.com/images/user-images/86/thumbnails/thumb_1781180953247_65c8d32cf0935b5a.png"
  },
  {
    "name": "NARADA",
    "logo": "https://api.gnrix.com/images/user-images/87/thumbnails/thumb_1781180930666_cc57d14526ef0e91.png"
  },
  {
    "name": "Nexcell",
    "logo": "https://api.gnrix.com/images/user-images/88/thumbnails/thumb_1781180907763_97551ceaedc6edcb.jpg"
  },
  {
    "name": "Nimbess",
    "logo": "https://api.gnrix.com/images/user-images/2812/thumbnails/thumb_1783315598601_a5719838fa8c1522.png"
  },
  {
    "name": "Nippon Energy",
    "logo": "https://api.gnrix.com/images/user-images/89/thumbnails/thumb_1781180827797_b0d614b193e07849.jpg"
  },
  {
    "name": "NRE",
    "logo": "https://api.gnrix.com/images/user-images/91/thumbnails/thumb_1781180738211_b07da862bdf087f7.png"
  },
  {
    "name": "OCEAN SOLAR",
    "logo": "https://api.gnrix.com/images/user-images/69/thumbnails/thumb_1781242283408_039c9c6a77cc5e30.png"
  },
  {
    "name": "Osaka Batteries",
    "logo": "https://api.gnrix.com/images/user-images/3403/thumbnails/thumb_1783929580255_b7298c9a5b919612.png"
  },
  {
    "name": "Osda",
    "logo": "https://api.gnrix.com/images/user-images/92/thumbnails/thumb_1781180533826_27e025054b6e3f4d.png"
  },
  {
    "name": "Phoenix",
    "logo": "https://api.gnrix.com/images/user-images/5/thumbnails/thumb_1781249928470_814f65be17d9df30.jpg"
  },
  {
    "name": "Photon",
    "logo": "https://api.gnrix.com/images/user-images/93/thumbnails/thumb_1781180495387_ba3ba419ddf75b71.png"
  },
  {
    "name": "Poly Crown Solar Tech",
    "logo": "https://api.gnrix.com/images/user-images/94/thumbnails/thumb_1781180454779_38c2e689e077b4b1.png"
  },
  {
    "name": "Polynet",
    "logo": "https://api.gnrix.com/images/user-images/95/thumbnails/thumb_1781180441525_8f466d4f7f577112.jpg"
  },
  {
    "name": "Polyshine Solar",
    "logo": "https://api.gnrix.com/images/user-images/96/thumbnails/thumb_1781177653399_502f01889f7310d4.png"
  },
  {
    "name": "Power Square",
    "logo": "https://api.gnrix.com/images/user-images/97/thumbnails/thumb_1781177636897_5c3f230dda40bc54.jpg"
  },
  {
    "name": "Primax",
    "logo": "https://api.gnrix.com/images/user-images/98/thumbnails/thumb_1781177620398_cffb919b00704a8f.png"
  },
  {
    "name": "Pylontech",
    "logo": "https://api.gnrix.com/images/user-images/99/thumbnails/thumb_1781177601138_6dd5841c4925642f.jpg"
  },
  {
    "name": "Pytes",
    "logo": "https://api.gnrix.com/images/user-images/100/thumbnails/thumb_1781177573562_d2a531513e39e1f6.png"
  },
  {
    "name": "RECOM TECHNOLOGIES",
    "logo": "https://api.gnrix.com/images/user-images/101/thumbnails/thumb_1781177551273_f1ad2bf00d39adc9.png"
  },
  {
    "name": "Risen",
    "logo": "https://api.gnrix.com/images/user-images/102/thumbnails/thumb_1781177528127_d2948a704ada0bf2.jpg"
  },
  {
    "name": "Ritar",
    "logo": "https://api.gnrix.com/images/user-images/103/thumbnails/thumb_1781177483137_c1f21aaac64ee94c.png"
  },
  {
    "name": "Sacred Sun",
    "logo": "https://api.gnrix.com/images/user-images/104/thumbnails/thumb_1781177363620_0dc08c54aa1ef9eb.jpg"
  },
  {
    "name": "SAJ",
    "logo": "https://api.gnrix.com/images/user-images/6/thumbnails/thumb_1783501559791_c140a481a8396df4.png"
  },
  {
    "name": "SAKA Batteries",
    "logo": "https://api.gnrix.com/images/user-images/105/thumbnails/thumb_1781177329168_724bf16c05d6afdc.jpg"
  },
  {
    "name": "Segway Mini Pro Battries",
    "logo": "https://api.gnrix.com/images/user-images/106/thumbnails/thumb_1781177290701_9efefe9764b030c0.png"
  },
  {
    "name": "SES Power",
    "logo": "https://api.gnrix.com/images/user-images/107/thumbnails/thumb_1781177261806_e1e2ba1615ccb52a.png"
  },
  {
    "name": "Shinson",
    "logo": "https://api.gnrix.com/images/user-images/108/thumbnails/thumb_1781177243879_2c8a736ff5ff3671.png"
  },
  {
    "name": "Shoto",
    "logo": "https://api.gnrix.com/images/user-images/109/thumbnails/thumb_1781177131111_5b91f8f946500e2d.png"
  },
  {
    "name": "Sineng",
    "logo": "https://api.gnrix.com/images/user-images/110/thumbnails/thumb_1781176144494_0f873982490f0071.png"
  },
  {
    "name": "SMA",
    "logo": "https://api.gnrix.com/images/user-images/3058/thumbnails/thumb_1783752861773_c787f2124707e5db.png"
  },
  {
    "name": "Sofar",
    "logo": "https://api.gnrix.com/images/user-images/111/thumbnails/thumb_1781176109747_fd0e6418d48d3cfa.png"
  },
  {
    "name": "Solar N Plus",
    "logo": "https://api.gnrix.com/images/user-images/113/thumbnails/thumb_1781175882922_34ad9ad89ccd27e1.jpg"
  },
  {
    "name": "Solarmax",
    "logo": "https://api.gnrix.com/images/user-images/112/thumbnails/thumb_1781176044113_290e79c76418b5c0.jpg"
  },
  {
    "name": "Solax",
    "logo": "https://api.gnrix.com/images/user-images/114/thumbnails/thumb_1781175864269_01388c998d0205c8.jpg"
  },
  {
    "name": "Solectra",
    "logo": "https://api.gnrix.com/images/user-images/3412/thumbnails/thumb_1784048500410_3bb9a56d88bf176d.jpg"
  },
  {
    "name": "Solinteg",
    "logo": "https://api.gnrix.com/images/user-images/115/thumbnails/thumb_1781175844603_a5662cd462e7e1c2.png"
  },
  {
    "name": "Solis",
    "logo": "https://api.gnrix.com/images/user-images/116/thumbnails/thumb_1781175788851_5f4b97398bdb5610.jpg"
  },
  {
    "name": "Solmade",
    "logo": ""
  },
  {
    "name": "Solplanet",
    "logo": "https://api.gnrix.com/images/user-images/118/thumbnails/thumb_1781175151008_c221fd1235a3ee80.png"
  },
  {
    "name": "Soluna",
    "logo": "https://api.gnrix.com/images/user-images/119/thumbnails/thumb_1781175123042_bef380fa4d425bf7.png"
  },
  {
    "name": "Sonnex Energie Gmbh",
    "logo": "https://api.gnrix.com/images/user-images/120/thumbnails/thumb_1781175069510_2dd5fd5eb628e23a.png"
  },
  {
    "name": "Sorotec",
    "logo": "https://api.gnrix.com/images/user-images/2827/thumbnails/thumb_1783500221155_2a009b82f79833a2.jpg"
  },
  {
    "name": "Stabimatic",
    "logo": "https://api.gnrix.com/images/user-images/121/thumbnails/thumb_1781175044332_6f17f1027bdd0095.jpg"
  },
  {
    "name": "Star Charge",
    "logo": "https://api.gnrix.com/images/user-images/3401/thumbnails/thumb_1783929273693_05cf86be7a52ed18.jpg"
  },
  {
    "name": "Sunfost",
    "logo": "https://api.gnrix.com/images/user-images/122/thumbnails/thumb_1781251281312_fa2ad7a084c41a04.jpg"
  },
  {
    "name": "Sungrow",
    "logo": "https://api.gnrix.com/images/user-images/123/thumbnails/thumb_1781174779441_7aa26f329ba44b0a.png"
  },
  {
    "name": "SunPower",
    "logo": "https://api.gnrix.com/images/user-images/124/thumbnails/thumb_1781174754253_adc9cc698473fc9a.jpg"
  },
  {
    "name": "Sunsaviour",
    "logo": "https://api.gnrix.com/images/user-images/125/thumbnails/thumb_1781174634560_2cd44b0427e23a33.png"
  },
  {
    "name": "Sunsynk",
    "logo": "https://api.gnrix.com/images/user-images/126/thumbnails/thumb_1781174581025_e6f19ae7a7b70569.png"
  },
  {
    "name": "Suntech Power",
    "logo": "https://api.gnrix.com/images/user-images/127/thumbnails/thumb_1781174533416_2b2b4760994e97e5.png"
  },
  {
    "name": "Sunwoda",
    "logo": "https://api.gnrix.com/images/user-images/128/thumbnails/thumb_1781174472669_46842b7ca4c25c62.jpg"
  },
  {
    "name": "SunX",
    "logo": "https://api.gnrix.com/images/user-images/129/thumbnails/thumb_1781174430180_bdf5b96cb8b3fd61.png"
  },
  {
    "name": "SuperMax",
    "logo": "https://api.gnrix.com/images/user-images/130/thumbnails/thumb_1781174396374_dc10c390f662796e.png"
  },
  {
    "name": "Talesun Solar",
    "logo": "https://api.gnrix.com/images/user-images/3451/thumbnails/thumb_1784638586397_e1d35211f0c92876.jpg"
  },
  {
    "name": "TBEA",
    "logo": "https://api.gnrix.com/images/user-images/3398/thumbnails/thumb_1783928466600_1ce5a36b87ea1cd6.jpg"
  },
  {
    "name": "TCL",
    "logo": "https://api.gnrix.com/images/user-images/3450/thumbnails/thumb_1784638518456_c1fe6ef23ed0f9c9.png"
  },
  {
    "name": "Techwise Solar",
    "logo": "https://api.gnrix.com/images/user-images/131/thumbnails/thumb_1781173497648_dc8b05feb990aabe.webp"
  },
  {
    "name": "Tesla",
    "logo": "https://api.gnrix.com/images/user-images/2831/thumbnails/thumb_1783501684173_cfeca7c1d7d93782.jpg"
  },
  {
    "name": "Tigfox",
    "logo": "https://api.gnrix.com/images/user-images/132/thumbnails/thumb_1781173388155_9c9deef042c192d8.png"
  },
  {
    "name": "Tongwei",
    "logo": "https://api.gnrix.com/images/user-images/135/thumbnails/thumb_1781173261349_e50cb116d75ab037.png"
  },
  {
    "name": "Topak Power",
    "logo": "https://api.gnrix.com/images/user-images/136/thumbnails/thumb_1781173118003_2d0fff16709ce1bd.jpg"
  },
  {
    "name": "Treet Battery",
    "logo": "https://api.gnrix.com/images/user-images/3404/thumbnails/thumb_1783932121535_a743353977d0820d.png"
  },
  {
    "name": "TRIEX",
    "logo": "https://api.gnrix.com/images/user-images/4/thumbnails/thumb_1781249944565_a62368eecb3a9748.png"
  },
  {
    "name": "Trina",
    "logo": "https://api.gnrix.com/images/user-images/137/thumbnails/thumb_1781172897603_9332d73baa29f0ed.png"
  },
  {
    "name": "Trinex",
    "logo": "https://api.gnrix.com/images/user-images/138/thumbnails/thumb_1781172870311_ba12201cc442e4e8.jpg"
  },
  {
    "name": "Vestwoods",
    "logo": "https://api.gnrix.com/images/user-images/139/thumbnails/thumb_1781172772351_fe7bde7d915eafa2.png"
  },
  {
    "name": "Vision",
    "logo": "https://api.gnrix.com/images/user-images/140/thumbnails/thumb_1781172713429_79ecd1bb20ace7e3.png"
  },
  {
    "name": "Volnex",
    "logo": "https://api.gnrix.com/images/user-images/141/thumbnails/thumb_1781172623300_0675371c1922ddb4.png"
  },
  {
    "name": "Voltrix",
    "logo": "https://api.gnrix.com/images/user-images/142/thumbnails/thumb_1781172594386_56a6d9330ac44f0d.jpg"
  },
  {
    "name": "Voltronic",
    "logo": "https://api.gnrix.com/images/user-images/143/thumbnails/thumb_1781172501101_9403b0f9122c0dfd.png"
  },
  {
    "name": "VSun Solar",
    "logo": "https://api.gnrix.com/images/user-images/144/thumbnails/thumb_1781172472538_f70488f2ed6384e5.jpg"
  },
  {
    "name": "Wattcycle",
    "logo": "https://api.gnrix.com/images/user-images/145/thumbnails/thumb_1781172442957_432d0ae084076a76.png"
  },
  {
    "name": "XS Power",
    "logo": "https://api.gnrix.com/images/user-images/12/thumbnails/thumb_1781249709979_b0cb638e17e56c7f.jpg"
  },
  {
    "name": "Yinergy",
    "logo": "https://api.gnrix.com/images/user-images/3487/thumbnails/thumb_1785738626516_78a072e7a6675ccd.png"
  },
  {
    "name": "Yingli Solar",
    "logo": "https://api.gnrix.com/images/user-images/146/thumbnails/thumb_1781172390626_4a4a693def703bd2.png"
  },
  {
    "name": "YUNQIDA Yunoda",
    "logo": "https://api.gnrix.com/images/user-images/147/thumbnails/thumb_1781176319493_b0720cacfc216d06.jpg"
  },
  {
    "name": "Zetara",
    "logo": "https://api.gnrix.com/images/user-images/2823/thumbnails/thumb_1783333179517_82a3dd6f02484e19.png"
  },
  {
    "name": "ZIEWNIC",
    "logo": "https://api.gnrix.com/images/user-images/148/thumbnails/thumb_1781172267172_056ad0b215bbb63d.webp"
  },
  {
    "name": "Zonergy",
    "logo": "https://api.gnrix.com/images/user-images/3561/thumbnails/thumb_1785942848245_d6ea89c96817e521.png"
  }
];
// trigger reload
