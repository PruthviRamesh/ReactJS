import '../style/categories.css'
const Category = () => {
    let links=[
        {category:"All"},
        {category:"Live"},
        {category:"Music"},
        {category:"Comedy"},
        {category:"Sports"},
        {category:"Gaming"},
        {category:"Vlogs"},
        {category:"Movies"},
        {category:"TV Shows"},
        {category:"Bollywood"},
        {category:"News"},
        {category:"Kids"},
        {category:"Travel"},
        {category:"Shopping"}
    ]
    return ( 
        <div className="categories">
            <div className="categories_links">
                {links.map((i)=>(
                    <a href="">{i.category}</a>
                ))}
            </div>
        </div>
     );
}
 
export default Category;