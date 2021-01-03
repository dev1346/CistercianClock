let num = 1
let output
let outputStr
let l
function setup() {
  createCanvas(windowWidth, windowHeight);
  l=min(windowWidth, windowHeight)/10
}

function draw() {
  background(0, 0, 0);
  if(mouseIsPressed){
    push()
    textSize(32)
    stroke("blue")
    fill("blue")
    text(outputStr,l/2, l/2)
    pop()
  }

  translate(l,l)
  stroke("red")
  strokeWeight(3)

  outputStr=year()+" "+month()+" "+day()+" "+hour()+":"+minute()+":"+second()+"."+floor(millis()%100)
  output = year()*1e12+month()*1e10+day()*1e8+hour()*1e6+minute()*1e4+second()*1e2+floor(millis()%100)
  drawNumber(output,min(windowWidth, windowHeight)/5,l)
}


function drawClockString(x,Len=50){
  let res = x.split(":")
  for(let i=0;i<res.length;++i){
    drawNumberString(res[i],Len)
    if(i<res.length-1){
      translate(Len,0)
      point(0,2*Len/3)
      point(0,Len/3)
      translate(Len,0)
    }
  }
}

function drawNumberString(x,Len=50){
  if(x.length>4){
    drawNumberString(x.substring(0,x.length-4),Len)
    translate(Len,0)
  } 
  drawNumber(int(x.substring(x.length-4)),Len)
}

function drawNumber(x,Len=50){
  if(x>9999){
    drawNumber(floor(x/10000),Len)
    translate(Len,0)
  }
  for(let i=0;i<4;++i){
    drawOneDigit(floor(x/Math.pow(10,i))%10,i,Len)
  }
}

function drawOneDigit(x,pos,Len=50) {
  let step = 5
  let Lx=Len/step
  let Ly=Len/step
  let L0=Len
  switch(pos){
    case 1:
      Lx=-Len/step
      Ly=Len/step
      L0=0
      break;
    case 0:
      Lx=Len/step
      Ly=Len/step
      L0=0
      break;
    case 3:
      Lx=-Len/step
      Ly=-Len/step
      L0=Len
      break;
    case 2:
      Lx=Len/step
      Ly=-Len/step
      L0=Len
      break;
    default:
      break;
  }
  line(0,0,0,Len)
  beginShape(LINES);
  vertex(0,0);vertex(0,Len);
  switch(x){
    case 1:
      vertex(0,L0);vertex(Lx,L0);
      break;
    case 2:
      vertex(0,L0+Ly);vertex(Lx,L0+Ly);
      break;
    case 3:
      vertex(0,L0);vertex(Lx,L0+Ly);
      break;
    case 4:
      vertex(0,L0+Ly);vertex(Lx,L0);
      break;    
    case 5:
      vertex(0,L0);vertex(Lx,L0);
      vertex(0,L0+Ly);vertex(Lx,L0);
      break;
    case 6:
      vertex(Lx,L0);vertex(Lx,L0+Ly);
      break;
    case 7:
      vertex(0,L0);vertex(Lx,L0);
      vertex(Lx,L0);vertex(Lx,L0+Ly);
      break;
    case 8:
      vertex(Lx,L0);vertex(Lx,L0+Ly);
      vertex(0,L0+Ly);vertex(Lx,L0+Ly);
      break;
    case 9:
      vertex(0,L0);vertex(Lx,L0);
      vertex(Lx,L0);vertex(Lx,L0+Ly);
      vertex(0,L0+Ly);vertex(Lx,L0+Ly);
      break;
    default:
      break;    
    }
  endShape()
} 