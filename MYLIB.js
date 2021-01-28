function isTouching(O1,o2 ){
    if(O1.x-o2.x<o2.width/2+O1.width/2 && o2.x-O1.x<O1.width/2+o2.width/2 && O1.y-o2.y<o2.height/2+O1.height/2 && o2.y-O1.y<O1.height/2+o2.height/2){
     return true;
    }
    else{
      return false;
    }
  }