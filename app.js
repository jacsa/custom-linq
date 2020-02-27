var data = [{
    id: 1,
    name: 'Javier',
    age: 28
},
{
    id: 3,
    name: 'Araceli',
    age: 44
},
{
    id: 2,
    name: 'Roman',
    age: 12
},
{
    id: 5,
    name: 'Arely',
    age: 7
}
];

const setup = () => {
    //const selectExp = s => { return {id: s.id, name: s.name } }
    // const selectedData = data.select(selectExp)
    // console.log(selectedData)
    // const filterExp = f => f.name == "Javier" || f.name == "Araceli"
    // const dataFiltered = data.where(filterExp)
    // console.log(dataFiltered)
    data.add({ id: 4, name: 'Marcela', age: 43 })
    const filterData = data.where( w => w.name.includes('Ar')).select( s => { return { id: s.id, name: s.name}})
    //console.log(data.orderBy( o => o.name))

    console.log(Object.keys(filterData[0]))
    console.log(Object.entries(filterData[0]))
    
    // let entity = data.first(w => w.name == "Marcela")
    // const newList = data.remove(entity)
    // console.log(newList.count())
    // console.log(data.first())
    // console.log(data.last())
    // console.log(data)
    // console.log(data.orderBy(s => s.name))
    // console.log(data.orderByDesc(s => s.name))
}



