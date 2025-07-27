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

const removeFormLocalStorage=(name)=>{

    const getPurche=getPurches();
     const dilit= getPurche.filter((item)=> item !== name);

     savePurches(dilit)

}

export {addPurches,getPurches,removeFormLocalStorage}