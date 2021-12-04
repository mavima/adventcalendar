const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


export const doorArray = [
  { id: 1, day: 1, link: "t9xCzOAYRLg", open: false, available: false, isVideo: true, isPicture: false, image: "https://i.pinimg.com/originals/57/da/13/57da13f3eb4c4464693e6bf03df1bf2b.jpg" },
  { id: 2, day: 2, link: "https://mariam.codes/whack-a-mole/whack.html", open: false, available: false, isVideo: false, isPicture: false, image: "https://live.staticflickr.com/1154/5129923065_422f8fd890_b.jpg"  },
  { id: 3, day: 3, link: "https://images-na.ssl-images-amazon.com/images/I/51TsFOg3U9L.jpg",  open: false, available: false, isVideo: false, isPicture: true, image:"https://thumbs.dreamstime.com/b/basic-rgb-153365654.jpg"},

  { id: 4, day:4, link: "r3s3qz1_xWU", open: false, available: false, isVideo: true, isPicture: true, image: "https://i.pinimg.com/236x/f7/5c/72/f75c72a91cae4c338512e4d70b82a889--christmas-ideas-frozen-christmas.jpg" },
  { id: 5, day: 5, link: "https://mariam.codes/whack-a-mole/whack.html", open: false, available: false, isVideo: false, isPicture: false, image: "https://www.christmasgifts.com/clipart/Christmaspresent1.jpg"  },
  { id: 6, day: 6, link: "https://i.pinimg.com/originals/97/f5/a9/97f5a91ad5067c58e5390ebc4c249743.jpg", open: false, available: false, isVideo: false, isPicture: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UBmhbb4U3EQ6163ug_pVUnOne2eYMY06dA&usqp=CAU"  },
  { id: 7, day: 7, link: "", open: false, available: false, isVideo: false, isPicture: false, image: "https://i.fbcd.co/products/original/cute-xmas-single-image-01-2-f65777934095b1fd63d0981cf63b0247f2d3ceef1192eac1d0e798757a8d8644.jpg"  },
  { id: 8, day: 8, link: "", open: false, available: false, isVideo: false, isPicture: false, image: "https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T1459A839PA4459PT28D184502963FS3399/views/1,width=378,height=378,backgroundColor=F2F2F2/joulun-tonttu.jpg"  },
  { id: 9, day: 9, link: "http://photos1.blogger.com/x/blogger/1719/2914/1600/212333/reindeer_revenge.jpg", open: false, available: false, isVideo: false, isPicture: false, image: "http://www.lifesize-models.co.uk/custom/images/products/FUNNY%20XMAS%20REINDEER%20HEAD%20label%202261.jpg"  },
  { id: 10, day: 10, link: "", open: false, available: false, isVideo: false, isPicture: false, image: "https://clipart.world/wp-content/uploads/2020/06/cute-snowman.jpg"  },
  { id: 11, day: 11, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 12, day: 12, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 13, day: 13, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 14, day: 14, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 15, day: 15, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 16, day: 16, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 17, day: 17, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 18, day: 18, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 19, day: 19, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 20, day: 20, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 21, day: 21, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 22, day: 22, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 23, day: 23, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },
  { id: 24, day: 24, link: "", open: false, available: false, isVideo: false, isPicture: false, image: ""  },



]

export const createCalendar = () => shuffle(doorArray);
