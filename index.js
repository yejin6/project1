const principles = [
    {
      summary: "JANNABI", 
      detail:"어느덧 국내 음악계를 대표하는 밴드로 자리 잡은 잔나비, 특유의 서정적이고 레트로한 감성으로 대체 불가능한 매력을 선사합니다."
    },
    {
      summary: "Lee Seung Yoon", 
      detail:"세상과 함께 노래하는 싱어송라이터 이승윤, 다양한 무대에서 자신만의 라이브 퍼포먼스를 선보이며 ‘공연 강자’, ‘페스티벌 강자’로 자리매김하고 있습니다."
    },
    {summary: "THORNAPPLE", detail:"내 낼 수 없는 독특한 감성의 가사와 몽환적인 사운드를 가진 밴드 쏜애플, 대체 불가한 팀 고유의 음악성은 리스너들의 사랑을 꾸준히 받아오고 있습니다."},
    {summary: "Silica gel", detail:"고유의 사이키델리아, 폭발적인 에너지의 라이브 퍼포먼스가 응집하여 현재 가장 새롭고 용감한 사운드를 만드는 밴드 실리카겔."},
    {summary: "Fiji Blue", detail:"피지블루는 아티스트, 작곡가, 그리고 씁쓸하고 달콤한 낙관주의자 트레버 데링의 가명입니다."},
    {summary: "The Millennial Club", detail:"더 밀레니얼 클럽은 미국 출신의 3인조 얼터너티브 팝 밴드로, Andres Owens(기타, 보컬), Jared Oritz(베이스, 키보드), Jake Stevenson(기타, 색소폰)으로 이루어져 있습니다."},
    {summary: "Lacuna", detail:"영화 ‘이터널 선샤인’의 기억을 지워주는 회사 ‘라쿠나’에서 모티브를 얻은 이름답게 여름밤에 꾸는 총천연색의 꿈같이 몽환적이고도 강렬한 밴드 사운드를 표방하는 밴드 라쿠나."},
    {summary: "Band Nah", detail:"세상을 살아가는 모든 청춘에 대한 보편적인 이야기를 노래하는 나상현씨밴드, 밴드 음악을 기반으로 다양한 장르적 방향성을 통해 일상 속 소중한 가치들을 풀어냅니다."},
    {summary: "Public Library   ", detail:"Public Library Commte로 알려진 Conrad Hsiang은 7천만 이상의 글로벌 스트리밍을 기록하며, 인디 팝계에서 이제는 널리 알려진 이름이 되었습니다."},
    {summary: "dosii", detail:"몽환적인 멜로디와 도회적인 감성으로 사랑 받고 있는 dosii, 2019년 동명의 정규앨범 ‘dosii’로 데뷔한 대한민국의 혼성그룹입니다."}
  ]
  
  
  const numberTag = document.querySelector("section.principle h2.number")
  const summaryTag = document.querySelector("section.principle h3.summary")
  const detailTag = document.querySelector("section.principle p")
  
  const productImg = document.querySelector("figure.product-image img")
  const productName = document.querySelector("figure.product-image figcaption")
  
  const leftButton = document.querySelector("img.arrow-left")
  const rightButton = document.querySelector("img.arrow-right")
  
  
  let currentNumber = 1;
  
  leftButton.addEventListener("click", function(){
  
    currentNumber--;
    if(currentNumber < 1){
      currentNumber = 10;
    }
  
    numberTag.innerHTML = currentNumber;
    
    productImg.src = `img/artist${currentNumber}.png`;
  
    summaryTag.innerHTML = principles[currentNumber-1].summary;
    detailTag.innerHTML = principles[currentNumber-1].detail;
    productName.innerHTML = principles[currentNumber-1].name;
  
  })
  
  
  rightButton.addEventListener("click", function(){
    console.log(currentNumber);
  
    currentNumber++;
    if(currentNumber > 10){
      currentNumber = 1;
    }
  
    numberTag.innerHTML = currentNumber;
    // productImg.src = "product"+currentNumber+".jpg";
    productImg.src = `img/artist${currentNumber}.png`;
    
    summaryTag.innerHTML = principles[currentNumber-1].summary;
    detailTag.innerHTML = principles[currentNumber-1].detail;
    productName.innerHTML = principles[currentNumber-1].name;
  })