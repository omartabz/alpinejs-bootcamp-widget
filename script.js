// Greet
function greet(neighborsName, language) {
    const greetings = {
        'en': 'Hello',
        'sp': 'Ola',
        'fr': 'Bonjour',
        'ru': 'Pivet',
    };
    return `${greetings[language] || greetings['en']}, ${neighborsName}!`;
}

function showGreeting() {
    const name = document.getElementById('neighborName').value;
    const lang = document.getElementById('language').value;
    document.getElementById('greeting').innerText = greet(name, lang);
}

// Trans
function transportFee(shift){
    const fees= {
        'morning':'R20',
        'afternoon':'R10',
      'night':'Free Transport Baby!',
    };
    document.getElementById('feeDisplay').innerText = 'Transport Fee: ' + fees[shift];
}

// Total Bill Function
function totalPhoneBill(callCount, smsCount) {
    const billamount = (callCount * 2.75) + (smsCount * 0.65);
    return billamount.toFixed(2);
}

function showTotalPhoneBill() {
    const callCount = parseInt(document.getElementById('callCount').value) || 0;
    const smsCount = parseInt(document.getElementById('smsCount').value) || 0;
    const bill = totalPhoneBill(callCount, smsCount);
    document.getElementById('totalBill').innerText = 'Total Phone Bill: R' + bill;
}



//Enough Airtime
function enoughAirtime(pro_use,avai_item) {
    
  const use_items = pro_use.split(',');
  var callCount = 1.88;
  var dataCount = 12;
  var smsCount = 0.75;
  var total = 0;
  
  for(let i = 0; i < use_items.length; i++) {
        const cu_pro_use = use_items[i].trim();
        if(cu_pro_use === 'data') {
            total += dataCount;
        } else if(cu_pro_use === 'call') {
            total += callCount;
        } else if(cu_pro_use === 'sms') {
            total += smsCount;
        }
    }
    
    const rem_airtime = avai_item - total;
    const result = rem_airtime >= 0 ? 'R' + rem_airtime.toFixed(2):'R0.00';
    
    return result;
}

  const calculateAirtime = () => {
    const projectedUsage = document.getElementById("projectedUsage").value;
    const availableAirtime = parseFloat(document.getElementById("availableAirtime").value);
  
    if (!projectedUsage || isNaN(availableAirtime)) {
      alert("Please enter both projected usage and available airtime.");
      return;
    }
  
    const remainingAirtime = enoughAirtime(projectedUsage, availableAirtime);
    document.getElementById("remainingAirtimeDisplay").textContent = remainingAirtime;
  };