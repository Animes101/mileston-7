const getPurches=()=>{

     const getPerchesData=localStorage.getItem('purches');
     if(getPerchesData){
        return JSON.parse(getPerchesData);
     }

     return [];

}

const savePurches=(purchess)=>{
    const stringFild=JSON.stringify(purchess);
    localStorage.setItem('purches',stringFild)

}

const addPurches=(item)=>{

    const purchess=getPurches()
    purchess.push(item)
    savePurches(purchess)
}

export {addPurches}