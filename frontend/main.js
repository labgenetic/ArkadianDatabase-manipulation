const root = document.getElementById("root");

const getData = async () => {
    //here we fetch data from the localhost but we should launch our backend first so our data is available at that port
    const res = await fetch('http://localhost:5600/arkx')
    const data = await res.json()
    
    data.forEach(arkadian => {
        root.innerHTML = `
            ${root.innerHTML}
            <div class="card">
                <p> name : ${arkadian.name}</p>
                <p> age : ${arkadian.age}</p>
                <p>     co : ${arkadian.co}</p>
            </div>`
        console.log(root.innerHTML);
    });
}
getData()