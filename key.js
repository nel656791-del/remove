const EXPIRE_TIME = 40 * 1000; 

const VALID_KEYS = [
  "cris1234",
  "cris5678",
  "king-2026"
];

function checkKey(input){
  if(!input) return false;


  if(!VALID_KEYS.includes(input)) return false;

  const now = Date.now();
  const storeKey = "KING_KEY_" + input;
  const savedRaw = localStorage.getItem(storeKey);

  
  if(savedRaw){
    const saved = JSON.parse(savedRaw);

    
    if(now > saved.expires){
      return false;
    }


    return true;
  }

  
  localStorage.setItem(storeKey, JSON.stringify({
    expires: now + EXPIRE_TIME
  }));

  return true;
}
