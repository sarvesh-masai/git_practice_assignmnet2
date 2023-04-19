let s = '1221'
    let rs='';
    for(let i=s.length-1;i>=0;i--){
            rs+=s[i]
    }
    if(s != rs){                   //error
        console.log('Yes');
    }else{
        console.log('No');
    }